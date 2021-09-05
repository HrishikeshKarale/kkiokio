<template>
	<div class="scrollIndicator">
		<div class="scrolContent">
			<slot />
		</div>
		<div v-if="tagOffset.length > 1" class="scrollIndex">
			<div ref="scrollLength" class="scrollLength" />
			<a
				v-for="indicator in tagOffset"
				:key="indicator.id"
				:href="'#' + indicator.id"
				:class="{ active: indicator.selected }"
			>
				<span :class="[indicator.selected ? 'fas' : 'far', 'fa-circle']" />
				<span>{{ indicator.id }}</span>
			</a>
		</div>
	</div>
</template>
<script>
	import { debounce } from "@/typeScript/debounce";

	export default {
		name: "ScrollIndicator",
		mixins: [debounce],
		data() {
			//used to calculate the height of header/navigation
			const headerOffset = null;
			//saves the sectrion tags used to generate Sub Content navigation links.
			const tag = [];
			//stores the tag (section) ad well as the top and bottom pixel location of the tag as well as if its selected or not.
			const tagOffset = [];
			//stores height opf the current browser window
			const windowHeight = null;
			//stores pixel value above which we select a tag.
			const windowBuffer = null;
			//ratio used to calculate window buffer
			const bufferRatio = 0.24;
			const prevScrollValue = 0;
			const wait = 2;
			const articleTag = null;
			return {
				headerOffset,
				tag,
				tagOffset,
				windowHeight,
				windowBuffer,
				bufferRatio,
				prevScrollValue,
				wait,
				articleTag,
			};
		},
		mounted() {
			setTimeout(() => {
				this.articleTag = document.getElementsByTagName("article")[0];
				// this.goBack();
				this.initialize();
				this.checkScroll();
				this.headerOffset.scrollTop = 0;
			}, this.wait * 1000);
		},
		methods: {
			scrollableHeader: function (highlight) {
				if (this.prevScrollValue > highlight) {
					document.getElementsByTagName("header")[0].classList.remove("mini");
				} else {
					if (
						!document
							.getElementsByTagName("header")[0]
							.classList.contains("showNav")
					) {
						document.getElementsByTagName("header")[0].classList.add("mini");
					}
				}
				if (highlight > 0) {
					if (document.getElementsByClassName("breadcrums")[0]) {
						document
							.getElementsByClassName("breadcrums")[0]
							.classList.add("scroll");
					}
				} else {
					if (document.getElementsByClassName("breadcrums")[0]) {
						document
							.getElementsByClassName("breadcrums")[0]
							.classList.remove("scroll");
					}
				}
			}, //scrollableHeader

			scrollPath: function (highlight) {
				const length = 100 / this.tagOffset.length;
				let scrollLength = 0;
				if (0 < highlight) {
					this.tagOffset.forEach((element, index) => {
						if (element.selected) {
							scrollLength = Math.round(index * length);
						}
					});
					// console.log(scrollLength);
					// this.$refs["scrollLength"].style.height = scrollLength + "%";
					const scrollBar = this.$refs["scrollLength"];
					if (scrollBar) {
						scrollBar.style.minHeight = scrollLength + "%";
						// scrollBar.style.setProperty(
						// 	"min-height",
						// 	"calc(" + scrollLength + " - 2@spaceXl)"
						// );
					}
				}
			}, //scrollPath

			goBack: function () {
				if (this.articleTag) {
					const header = this.articleTag.getElementsByTagName("header");
					const backButton = document.createElement("span");
					backButton.className += "fas fa-long-arrow-alt-left fa-2x";
					const backText = document.createElement("span");
					const linkText = document.createTextNode("Go Back");
					backText.appendChild(linkText);
					backButton.appendChild(backText);
					// backButton.classlist.add("fas fa-circle");
					// backButton.onclick = this.$router.back();
					// backButton.href = "http://example.com";
					// console.log(this.$router);
					header.appendChild(backButton);
					// console.log(header);
				}
			}, //goBack

			checkScroll: function () {
				const highlight = Math.round(this.headerOffset.scrollTop);
				this.scrollableHeader(highlight);
				this.scrollPath(highlight);
				for (let i = 0; i < this.tag.length; i++) {
					const tagOffset = this.tagOffset[i];

					//activate tags depending on the window scroll location and tag top/bottom pixel location within the page.
					if (
						highlight + this.windowBuffer > tagOffset.top &&
						highlight < tagOffset.bottom
					) {
						tagOffset.selected = true;
						if (i > 0) {
							this.tag[i - 1].selected = false;
						}
					} else {
						//keep last tag selected when scroll exceeds bottom pixel location
						if (
							i == this.tag.length &&
							this.windowHeight + highlight >=
								this.tagOffset[this.tagOffset.length - 1].bottom + 32
						) {
							tagOffset.selected = true;
							if (i > 1) {
								this.tag[i - 1].selected = false;
							}
						} else {
							tagOffset.selected = false;
						}
					}
				}
				this.prevScrollValue = highlight;
			}, //checkScroll

			initialize: function () {
				this.headerOffset = document.getElementsByClassName("body")[0];
				const offsetHeader = Array.from(
					document.getElementsByClassName("vueHeader")
				)[0];
				this.tag = Array.from(document.getElementsByTagName("section"));
				this.tag = this.tag.filter((tag) => tag.id != "");
				const headerOffset = offsetHeader ? offsetHeader.offsetHeight : 0;
				this.tagOffset = this.tag.map((section) => {
					return {
						top: section.offsetTop - headerOffset,
						bottom: section.offsetTop + section.offsetHeight - headerOffset,
						id: section.getAttribute("id"),
						selected: false,
					};
				});
				if (this.tag.length > 1) {
					this.headerOffset.addEventListener(
						"scroll",
						this.debounce(this.checkScroll),
						{
							capture: false, // top to bottom bubbling/propogation
							once: false, //should work only once
						}
					);
					this.windowHeight = this.headerOffset.offsetHeight;
					this.windowBuffer = this.windowHeight * this.bufferRatio;
					this.checkScroll();
				}
			},
		},
	};
</script>
<style lang="less" scoped>
	@import (reference) "../../../../Less/customMixins.less";
	@import (reference) "../../../../Less/customVariables.less";

	.scrollIndicator {
		& > div {
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;

			&.scrollIndex {
				position: absolute;
				height: fit-content;
				top: @header + @spaceLg;
				right: @spaceLg*2;
				z-index: @headerZ;
				&::before {
					content: "Page Content";
					color: @primaryColor;
					font-size: @fontSize;
					margin-right: @spaceXl;
					text-align: right;
					font-weight: bold;
				}
				&::after,
				& > .scrollLength {
					position: absolute;
					bottom: @spaceLg;
					right: @spaceMd+ @spaceSm+ @spaceXs;
					content: "";
					min-height: calc(100% - (2 * @spaceXl));
					width: @spaceMd;
					background-color: @primaryColor;
					filter: opacity(32%);
				}
				& > a {
					display: flex;
					flex-direction: row-reverse;
					align-items: center;
					text-decoration: none;
					padding: @spaceMd;
					margin: @spaceSm 0;
					height: @spaceXl;
					background-color: transparent;
					width: auto;
					gap: @spaceLg;
					z-index: @headerZ+10;
					&:hover,
					&.active {
						border-radius: @borderRadius;
						color: @white;
						//active block text;
						& > span:last-child {
							display: block;
							color: @textColor;
							font-weight: bold;
							opacity: 1;
						}
					}
					& > span {
						.textShadow(@base);
						background-color: @backgroundColor;
						&:last-child {
							// display: none;
							font-size: @fontSizeSm;
							color: @textColor;
							opacity: 0.3;
						}
					}
				}
			}

			&.scrolContent {
				display: flex;
				align-self: center;
				max-width: @maxWidth;
			}
		}
		@media screen {
			@media (max-width: @maxWidth) {
				& > div {
					&.scrollIndex {
						background-color: @accentColor;
						border-radius: @spaceXl;
						padding: @spaceXs;
						top: 50%;
						transform: translateY(-50%);
						right: @spaceLg;
						&::after,
						& > .scrollLength {
							display: none;
						}
						& > a {
							width: fit-content;
							&:hover,
							&.active {
								background-color: none;
								& > span:last-child {
									position: absolute;
									width: max-content;
									text-align: center;
									color: @accentColor;
									padding: 0 @spaceMd;
									top: -40px;
									border: 1px dashed @primaryColor;
									border-radius: @borderRadius;
									font-weight: bold;
									&::before {
										content: "";
										position: absolute;
										left: 0;
										top: 0;
										height: 100%;
										width: 100%;
										background-color: @primaryColor;
										filter: opacity(8%);
									}
								}
							}
							& > span {
								color: @backgroundColor;
								background-color: transparent;
								&:last-child {
									background-color: @backgroundColor;
									width: 100%;
									border-radius: @borderRadius;
									.textShadow(none);
									display: none;
								}
							}
						}
						&::before {
							content: "";
						}
					}
				}
			}
		}
	}
</style>
