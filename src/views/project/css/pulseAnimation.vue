<template>
	<div class="pulseAnimation">
		pulseAnimation
		<div class="pulse" />
		<spinner />
		<line-load />
		<circle-load />
		<dice-load />
	</div>
</template>
<script>
	import spinner from "./spinner.vue";
	import diceLoad from "./diceLoad.vue";
	import lineLoad from "./lineLoad.vue";
	import circleLoad from "./circleLoad.vue";
	export default {
		name: "PulseAnimation",
		components: {
			spinner,
			diceLoad,
			lineLoad,
			circleLoad,
		}, //components
	};
</script>
<style lang="less" scoped>
	@import (reference) "./../../../Less/customMixins.less";
	@import (reference) "./../../../Less/customVariables.less";
	.pulseAnimation {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: space-around;
		& > div {
			&.pulse {
				border-radius: 50%;
				width: @fontSize;
				height: @fontSize;
				background: @accentColor;
				&::after {
					content: "";
					position: absolute;
					width: @fontSize;
					height: @fontSize;
					z-index: @bodyZ + 5;
					border-radius: 50%;
					background: @accentColor;
					animation: pulse 1s ease infinite;
				}
			}
			&.skills {
				display: flex;
				flex-direction: column;
				height: 40px;
			}
		}
		@keyframes pulse {
			from {
				transform: scale(1);
				opacity: 1;
			}
			to {
				transform: scale(2);
				opacity: 0;
			}
		}
	}
</style>
