<template>
	<div class="cardScroller">
		<vue-button
			v-show="rightScroll"
			id="previous"
			tag="Previous"
			category="large"
			icon="fas fa-chevron-left"
			:ctx="handleScrollPrev.bind(this)"
		/>
		<div ref="cards" class="cards">
			<slot />
		</div>
		<vue-button
			v-show="leftScroll"
			id="next"
			tag="Next"
			category="large"
			icon="fas fa-chevron-right"
			:ctx="handleScrollNext.bind(this)"
		/>
	</div>
</template>
<script>
	import vueButton from "../../../../components/vueButton.vue";
	export default {
		name: "CardScroller",

		components: {
			vueButton,
		},

		data() {
			const cards = this.$refs.cards;
			return {
				cards,
			};
		},

		mounted() {
			this.cards = document.querySelector(".cards");
		},

		methods: {
			leftScroll: function () {
				return this.cards.scrollLeft < window.innerWidth;
			}, //leftScroll

			rightScroll: function () {
				return this.cards.scrollLeft <= 0;
			}, //rightScroll

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
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: fit-content;
		overflow: hidden;
		padding: @spaceMd;
		background-color: @textColor;

		& > button {
			position: absolute;
			z-index: @contentZ + 25 !important;
			right: 0;
			height: 80px;
			border-radius: 50% 0 0 50%;
			&#previous {
				border-radius: 0 50% 50% 0;
				right: auto;
				left: 0;
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
			scroll-behavior: smooth;
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
				min-width: 240px;
				max-width: 360px;
				border-radius: @borderRadius;
				z-index: @contentZ + 5;
				margin: @spaceMd @spaceLg;
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
</style>
