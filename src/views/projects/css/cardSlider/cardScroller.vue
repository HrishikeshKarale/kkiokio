<template>
	<section class="cardScroller">
		<h2>
			<router-link
				:to="{ name: 'work', params: { type: title, } }"
				v-text="title"
			/>
		</h2>
		<template v-if="!vertical">
			<vue-button
				v-show="left"
				id="previous"
				tag="previous"
				category="icon"
				icon="fas
				fa-chevron-left"
				:ctx="handleScrollPrev.bind(this)"
			/>
			<vue-button
				v-show="right"
				id="next"
				tag="next"
				category="icon"
				icon="fas fa-chevron-right"
				:ctx="handleScrollnext.bind(this)"
			/>
		</template>
		<vue-button
			id="viewAll"
			tag="viewAllButton"
			:text="vertical ? 'Minimize' : 'View All'"
			:icon="vertical ? 'fas fa-minus' : 'fas fa-plus'"
			category="text"
			:ctx="() => {vertical = !vertical}"
		/>
		<div :class="vertical ? 'vertical' : 'horizontal'">
			<template v-if="!vertical">
				<vue-button
					v-show="left"
					id="previous"
					tag="previous"
					category="large"
					icon="fas
				fa-chevron-left"
					:ctx="handleScrollPrev.bind(this)"
				/>
			</template>
			<div :ref="tag" :class="['cards', tag]">
				<slot />
			</div>
			<template v-if="!vertical">
				<vue-button
					v-show="right"
					id="next"
					tag="next"
					category="large"
					icon="fas fa-chevron-right"
					:ctx="handleScrollnext.bind(this)"
				/>
			</template>
		</div>
	</section>
</template>
<script>
	import vueButton from "../../../../components/vueButton.vue";
	export default {
		name: "CardScroller",

		components: {
			vueButton,
		},
		props: {
			autoScroll: {
				required: false,
				type: Boolean,
				default: false,
			},
			title: {
				required: false,
				type: String,
				default: null,
			},
			tag: {
				required: true,
				type: String,
				default: () => {
					const name = Math.round(Math.random() * (50 - 2) + 2);
					return name.toString();
				},
			},
			vertical: {
				required: false,
				type: Boolean,
				default: false
			}
		}, //props

		data() {
			const cards = null;
			const timer = null;
			const wait = 8;
			const directionRight = this.booleanTrue;
			const left = 0;
			const right = 0;
			const maxSteps = 0;
			return {
				cards,
				timer,
				wait,
				directionRight,
				left,
				right,
				maxSteps,
			};
		},

		mounted() {
			this.cards = this.$refs[this.tag];
			if (this.autoScroll) {
				this.timer = setInterval(() => {
					if (this.directionRight) {
						if (this.right > 0) {
							this.handleScrollnext();
						} else {
							this.directionRight = false;
						}
					} else {
						if (this.left > 0) {
							this.handleScrollPrev();
						} else {
							this.directionRight = true;
						}
					}
				}, this.wait * 1000);
			}
			this.maxSteps = this.cards.scrollWidth / this.cards.clientWidth;
			this.maxSteps = this.maxSteps <= 1 ? 0 : Math.round(this.maxSteps);
			this.right = 2*this.maxSteps + 1;
		},

		beforeUnmount() {
			clearInterval(this.timer);
		}, //beforeUnmount

		methods: {
			// minimize: function () {
			// 	this.vertical = !this.vertical
			// 		this.$emit('vertical', !this.vertical);
			// }, // minimize

			handleScrollnext: function () {
				const tempCardScroll = this.cards.scrollLeft + (window.outerWidth)/2
				this.cards.scrollLeft = tempCardScroll;
				this.right--;
				this.left++;
			}, //handleScrollnext

			handleScrollPrev: function () {
				const tempCardScroll = this.cards.scrollLeft - (window.outerWidth)/2
				this.cards.scrollLeft = tempCardScroll;
				this.right++;
				this.left--;
			}, //handleScrollPrev
		},
	};
</script>

<style lang="less" scoped>
	@import (reference) "../../../../Less/customMixins.less";
	@import (reference) "../../../../Less/customVariables.less";
	.cardScroller {
		position: relative;
		display: flex;
		flex-direction: column;
		& > h2 {
			display: flex;
			// justify-content: space-between;
		}
		& > #viewAll,
		& > #next,
		& > #previous {
			position: absolute;
			right: 0;
			top: @spaceXl+ @spaceLg;
		}
		& > #next,
		& > #previous {
			top: @spaceXl+ @spaceMd;
		}
		& > #next {
			right: 3 * @spaceXl;
		}
		& > #previous {
			right: 4 * @spaceXl;
		}
		//card background
		& > div {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: center;
			align-items: center;
			height: fit-content;
			border-radius: @borderRadiusLg;
			.responsive(@1600width, 0);
			&.horizontal {
				.boxShadow(@one, @primary);
				.backgroundColor(@primary, 8%, 0, 0, 100%);
				& > .cards {
					padding: @spaceMd @spaceLg;
					overflow-x: hidden;
				}
			}
			&.vertical {
				border-width: 0px;
				.backgroundColor(none);
				& > div {
					border-width: 0px;
					flex-wrap: wrap;
					justify-content: space-evenly;
				}
			}
			& > button {
				position: absolute;
				z-index: @contentZ + 20 !important;
				right: -@spaceXl;
				&#previous {
					right: auto;
					left: -@spaceXl;
				}
			}
			& > .cards {
				display: flex;
				align-items: flex-start;
				justify-content: flex-start;
				gap: @spaceXl;
				z-index: @contentZ+10;
				& > .card {
					display: flex;
					position: relative;
					flex-direction: column;
					flex: 1 0 320px;
					border-radius: @borderRadius;
					z-index: @contentZ + 5;
					padding: @spaceMd @spaceLg;
					min-height: 360px;
					.transition();
					border: 1px solid @accent;
					.boxShadow(none);
					cursor: pointer;
					& > h4,
					& > span {
						position: absolute;
						left: 0;
						top: 0;
						padding: @spaceLg;
						margin: 0;
					}
					& > span {
						left: auto;
						right: 0;
					}
					& > .image {
						display: flex;
						align-self: center;
						height: 240px;
						width: 240px;
						transition: .transition();
						background-color: grey;
					}
					& > .content {
						transition: .transition();
						& > p {
							opacity: 0.6;
							margin-top: @spaceMd;
						}
					}
					&:hover {
						transform: translate(0, -4px);
						.boxShadow(@two, @accent);
						& > .image,
						& > .content {
							transform: translate(0, -16px);
						}
					}
				}
			}
		}
		@media screen {
			@media (max-width: @1600width) {
				.responsive(@1200width, -3);
			}

			@media (max-width: @1200width) {
				.responsive(@768width, 0);
			}

			@media (max-width: @768width) {
				.responsive(@480width, -1);
				& > h2 {
					margin-bottom: @spaceXl + @spaceLg;
				}
				& > #viewAll {
					top: (3 * @spaceXl) + @spaceMd;
				}
				& > #next,
				& > #previous {
					top: 3 * @spaceXl;
				}
				& > #next {
					right: 3 * @spaceXl;
				}
				& > #previous {
					right: 6 * @spaceXl;
				}
			}

			@media (max-width: @480width) {
				.responsive(@320width, 0);
			}

			@media (max-width: @320width) {
				.responsive(@320width, -2);
			}
		}
	}
</style>
