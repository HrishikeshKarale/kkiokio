<template>
	<div class="scrollIndicator">
		<div ref="scrollBody" class="body">
			<slot />
		</div>
		<div v-if="tagOffset.length > 1" class="nav">
			<a
				v-for="indicator in tagOffset"
				:key="indicator.id"
				:href="'#' + indicator.id"
				:class="{ active: indicator.selected }"
			>
				<span :class="[indicator.selected ? 'fas' : 'far', 'fa-circle']" />
				<span v-text="indicator.id" />
			</a>
		</div>
	</div>
</template>

<script lang="ts">
	// vue
	import { defineComponent, ref, reactive, onMounted } from "vue";
	// ts
	import debounce from "@/typeScript/debouncets";
	import repeatFunctionCall from "@/typeScript/utility/repeatFunctionCall";

	export default defineComponent({
		name: "ScrollIndicator",
		setup() {
			// used to calculate the height of header/navigation
			const headerOffset = ref<HTMLElement | null>(null);
			// saves the sectrion tags used to generate Sub Content navigation links.
			const tag = ref<HTMLInputElement[]>([]);
			// stores the tag (section) ad well as the top and bottom pixel
			// location of the tag as well as if its selected or not.
			let tagOffset: {
				top: number;
				bottom: number;
				id: string | null;
				selected: boolean;
			}[] = reactive([]);
			// stores height opf the current browser window
			const windowHeight = ref(0);
			// stores pixel value above which we select a tag.
			const windowBuffer = ref(0);
			// ratio used to calculate window buffer
			const BUFFERRATIO = 0.24;
			const WAIT = 2;

			// mixins
			const { debounceFunc } = debounce();

			// eslint-disable-next-line
			const scrollNav = function(highlight) {
				const breadcrumElement = document.getElementsByClassName("breadcrums")[0];
				const headerElement = document.getElementsByTagName("header")[0];
				const projectNavElement = document.getElementsByClassName(
					"projectNav"
				)[0] as HTMLElement;
				const filterElement = document.getElementsByClassName(
					"vueFilter"
				)[0] as HTMLElement;
				//  console.log(projectNavElement);
				let projectNavOffset = 0;
				if (projectNavElement) {
					projectNavOffset = projectNavElement.offsetTop;
				}
				let filterOffset = 0;
				if (filterElement) {
					filterOffset = filterElement.offsetTop;
				}
				if (highlight > 0) {
					// breadcrum
					if (breadcrumElement) {
						headerElement.classList.add("mini");
						breadcrumElement.classList.add("scroll");
					}
					// projectNav
					if (
						projectNavElement &&
						projectNavOffset &&
						highlight > projectNavOffset
					) {
						projectNavElement.classList.add("scroll");
					}
					// filter
					if (filterElement && filterOffset && highlight > filterOffset) {
						filterElement.classList.add("scroll");
					}
				} else {
					// breadcrum
					if (breadcrumElement) {
						breadcrumElement.classList.remove("scroll");
						headerElement.classList.remove("mini");
					}
					// projectNav
					if (
						projectNavElement &&
						projectNavOffset &&
						highlight <= projectNavOffset
					) {
						projectNavElement.classList.remove("scroll");
					}
					// filter
					if (filterElement && filterOffset && highlight < filterOffset) {
						filterElement.classList.remove("scroll");
					}
				}
			}; // scrollNav

			// eslint-disable-next-line
			const checkScroll = function() {
				const highlight = Math.round(headerOffset.value!.scrollTop);
				scrollNav(highlight);
				for (let i = 0; i < tag.value!.length; i += 1) {
					const tempTagOffset = tagOffset[i];

					// activate tags depending on the window scroll location
					// and tag top/bottom pixel location within the page.
					if (
						highlight + windowBuffer.value > tempTagOffset.top &&
						highlight < tempTagOffset.bottom
					) {
						tempTagOffset.selected = true;
						if (i > 0) {
							tagOffset[i - 1].selected = false;
						}
					} else if (
						i === tag.value.length &&
						windowHeight.value + highlight >=
							tagOffset[tagOffset.length - 1].bottom + 32
					) {
						// keep last tag selected when scroll exceeds bottom pixel location
						tempTagOffset.selected = true;
						if (i > 1) {
							console.log(tag.value[i - 1]);
							tagOffset[i - 1].selected = false;
						}
					} else {
						tempTagOffset.selected = false;
					}
				}
			}; // checkScroll

			// eslint-disable-next-line
			const initialize = function() {
				[headerOffset.value] = document.getElementsByClassName(
					"enterpriseBody"
				) as any;
				const [offsetHeader] = Array.from(
					document.getElementsByClassName("vueHeader")
				) as any;
				tag.value = Array.from(document.getElementsByTagName("section")).filter(
					element => element.id !== ""
				) as any;
				// eslint-disable-next-line
				const tempHeaderOffset = offsetHeader ? offsetHeader.offsetHeight : 0;
				tagOffset = tag.value.map(section => ({
					top: section.offsetTop - tempHeaderOffset,
					bottom: section.offsetTop + section.offsetHeight - tempHeaderOffset,
					id: section.getAttribute("id"),
					selected: false
				}));
				if (tag.value.length > 1) {
					console.log(headerOffset.value);
					headerOffset.value!.addEventListener(
						"scroll",
						debounceFunc(checkScroll),
						{
							capture: false, //  top to bottom bubbling/propogation
							once: false // should work only once
						}
					);
					windowHeight.value = headerOffset.value!.offsetHeight;
					windowBuffer.value = windowHeight.value * BUFFERRATIO;
					headerOffset.value!.scrollTop = 0;
					checkScroll();
				}
			}; // initialize

			// repeatFunctionCall(initialize, WAIT);
			onMounted(() => {
				setTimeout(initialize, WAIT * 1000);
			});

			return {
				tagOffset
			};
		}
	});
</script>

<style lang="less" scoped>
	@import (reference) "../../Less/customMixins.less";
	@import (reference) "../../Less/customVariables.less";

	.scrollIndicator {
		& > div {
			display: flex;
			flex-direction: column;
			align-self: center;
			height: fit-content;

			&.nav {
				position: absolute;
				top: calc(50% + (@header / 2));
				right: @spaceLg;
				height: fit-content;
				background-color: @cardBackground;
				border-radius: @spaceXl;
				padding: @spaceXs;
				transform: translateY(-50%);
				z-index: @contentZ+20;
				.boxShadow(@baseText);
				& > a {
					display: flex;
					flex-direction: row-reverse;
					align-items: center;
					text-decoration: none;
					padding: @spaceMd;
					margin: @spaceSm 0;
					height: @spaceXl;
					gap: @spaceLg;
					z-index: @headerZ+10;
					& > span {
						&:last-child {
							display: none;
						}
					}
					&:hover,
					&.active {
						border-radius: @borderRadius;
						// active block text;
						& > span:last-child {
							display: block;
							position: absolute;
							top: -@spaceXl - @spaceLg;
							right: 0;
							color: @accentColor;
							padding: 0 @spaceMd;
							background-color: @cardBackground;
							border-radius: @borderRadius;
							.boxShadow(@base);
							width: max-content;
						}
					}
					&:hover {
						border: none;
						& > span:last-child {
							top: auto;
							right: @spaceXl + @spaceLg;
						}
					}
				}
				&::before {
					content: "";
				}
			}

			&.body {
				display: flex;
				align-self: center;
				.responsive(@1600width, 6);
			}
		}
		@media screen {
			@media (max-width: @1600width) {
			}

			@media (max-width: @1200width) {
			}

			@media (max-width: @768width) {
			}

			@media (max-width: @480width) {
			}

			@media (max-width: @320width) {
			}
		}
	}
</style>
