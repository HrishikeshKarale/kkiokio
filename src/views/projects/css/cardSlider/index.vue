<template>
	<div class="cardSlider">
		Here is a card Scroller built using HTML/CSS/JS/
		<card-scroller class="horizontal-scroller" :auto-scroll="!autoScroll">
			<div v-for="index in 50" :key="index" class="card">
				<h4>4.6</h4>
				<span class="fa fa-heart" />
				<div class="image" />
				<div class="content">
					<h3>Clasy Royale</h3>
					<p>{{ index }} - text</p>
				</div>
			</div>
		</card-scroller>
	</div>
</template>
<script>
	import cardScroller from "./cardScroller.vue";
	export default {
		name: "CardSlider",
		data() {
			//cardScroll
			const autoScroll = this.booleanTrue;
			return {
				autoScroll,
			};
		}, //data

		components: {
			cardScroller,
		},
	};
</script>
<style lang="less" scoped>
	@import (reference) "../../../../Less/customMixins.less";
	@import (reference) "../../../../Less/customVariables.less";
	.cardSlider {
		display: flex;
		flex-direction: column;
		width: 100%;
		& > .horizontal-scroller {
			height: fit-content;
		}
		.card {
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
			transition: .transition();
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
				z-index: @contentZ + 25;
				transition: .transition();
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
				transform: scale(0.9);
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
				.boxShadow(@two, @accentColor);
				& > h4,
				& > span,
				& > .content {
					transform: translate(0, -8px);
				}
				& > .image {
					border-radius: @borderRadius;
					transform: translate(0, -16px);
					transform: scale(1);
				}
			}
		}
	}
</style>
