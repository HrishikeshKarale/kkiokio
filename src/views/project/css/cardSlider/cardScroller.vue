<template>
	<div class="cardScroller">
		<h2>
			<vue-button
				id="viewAll"
				tag="viewAllButton"
				:text="vertical ? 'Minimize' : 'View All'"
				:icon="vertical ? 'fas fa-minus' : 'fas fa-plus'"
				category="text"
				:ctx="
					() => {
						vertical = !vertical;
					}
				"
			/>
			{{ title }}
		</h2>
		<div :class="vertical ? 'vertical' : 'horizontal'">
			<vue-button
				v-show="!vertical"
				id="previous"
				tag="Previous"
				category="large"
				icon="fas fa-chevron-left"
				:ctx="handleScrollPrev.bind(this)"
			/>
			<div ref="cards" :class="['cards', tag]">
				<slot />
			</div>
			<vue-button
				v-show="!vertical"
				id="next"
				tag="Next"
				category="large"
				icon="fas fa-chevron-right"
				:ctx="handleScrollNext.bind(this)"
			/>
		</div>
	</div>
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
				type: [String, null],
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
		}, //props

		data() {
			const cards = null;
			const timer = null;
			const wait = 2;
			const booleanTrue = true;
			const directionRight = booleanTrue;
			const vertical = !booleanTrue;
			return {
				cards,
				timer,
				wait,
				directionRight,
				vertical,
			};
		},

		mounted() {
			this.cards = document.getElementsByClassName(this.tag)[0];
			// if (this.autoScroll) {
			// 	this.timer = setInterval(() => {
			// 		// console.log(this.directionRight ? "right" : "left", this.leftScroll());
			// 		if (this.directionRight) {
			// 			if (this.leftScroll()) {
			// 				this.handleScrollNext();
			// 			} else {
			// 				this.directionRight = false;
			// 			}
			// 		} else {
			// 			console.log(
			// 				this.directionRight ? "right" : "left",
			// 				this.rightScroll()
			// 			);
			// 			if (this.rightScroll()) {
			// 				this.handleScrollPrev();
			// 			} else {
			// 				this.directionRight = true;
			// 			}
			// 		}
			// 	}, this.wait * 1000);
			// }
		},

		beforeUnmount() {
			clearInterval(this.timer);
		}, //beforeUnmount

		methods: {
			rightScroll: function () {
				return this.cards.scrollLeft < window.innerWidth;
			}, //rightScroll

			leftScroll: function () {
				return this.cards.scrollLeft <= 0;
			}, //leftScroll

			handleScrollNext: function () {
				this.cards.scrollLeft = this.cards.scrollLeft += window.outerWidth;
			}, //handleScrollNext

			handleScrollPrev: function () {
				this.cards.scrollLeft = this.cards.scrollLeft -= window.outerWidth;
			}, //handleScrollPrev
		},
	};
</script>
<style lang="less" scoped>
	@import (reference) "../../../../Less/customMixins.less";
	@import (reference) "../../../../Less/customVariables.less";
	.cardScroller {
		display: flex;
		flex-direction: column;
		& > h2 {
			display: flex;
			flex-direction: row-reverse;
			justify-content: space-between;
			& > button {
				align-self: flex-end;
			}
		}
		& > div {
			display: flex;
			flex-direction: row;
			flex-wrap: nowrap;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: fit-content;
			overflow-x: hidden;
			overflow-y: show;
			padding: @spaceLg;
			border-radius: @borderRadiusLg;
			position: relative;
			.backgroundColor();
			&.vertical {
				border-width: 0px;
				& > div {
					border-width: 0px;
					flex-wrap: wrap;
					& > .cards {
						background-color: red;
					}
				}
			}
			& > button {
				position: absolute;
				z-index: @contentZ + 20 !important;
				right: @spaceLg;
				&#previous {
					right: auto;
					left: @spaceLg;
				}
				&#viewAll {
					top: -@spaceXl;
				}
			}
			& > .cards {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				scroll-behavior: smooth;
				overflow: auto;
				gap: @spaceXl;
				width: 100%;
				z-index: @contentZ+10;
				&::-webkit-scrollbar {
					height: 0px;
				}
				&::after {
					content: "";
					display: block;
					min-width: 20px;
					height: 100px;
					position: relative;
				}
				& > .card {
					display: flex;
					position: relative;
					flex-direction: column;
					flex: 0 0 320px;
					border-radius: @borderRadius;
					z-index: @contentZ + 5;
					padding: @spaceMd @spaceLg;
					min-height: 360px;
					transition: @transition;
					border: 1px solid @accentColor;
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
						transition: @transition;
						background-color: grey;
					}
					& > .content {
						transition: @transition;
						& > p {
							opacity: 0.6;
							margin-top: @spaceMd;
						}
					}
					&:hover {
						transform: translate(0, -4px);
						.boxShadow(@two, @accentColor);
						& > .image,
						& > .content {
							transform: translate(0, -16px);
						}
					}
				}
			}
		}
	}
</style>
