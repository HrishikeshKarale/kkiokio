<template>
	<div class="infiniteScroll">
		<ol :class="['scroll', reverse ? 'reverse' : null]">
			<li
				v-for="(l, index) in [
					...list,
					...list,
					...list,
					...list,
					...list,
					...list,
					...list,
					...list,
					...list,
					...list,
					...list,
					...list,
				]"
				:key="index"
				v-text="l"
			/>
		</ol>
	</div>
</template>
<script>
	export default {
		name: "InfiniteScroll",
		props: {
			list: {
				required: true,
				type: Array,
			},
			reverse: {
				required: false,
				type: [Boolean, null],
				default: false,
			},
		}, //props
	};
</script>
<style lang="less" scoped>
	@import (reference) "./../../../Less/customMixins.less";
	@import (reference) "./../../../Less/customVariables.less";

	@speed: 40s;

	.infiniteScroll {
		display: flex;
		position: relative;
		overflow: hidden;
		height: 100%;
		width: 100%;
		& > .scroll {
			display: flex;
			position: absolute;
			animation: slideshow-right @speed linear infinite;
			&.reverse {
				animation-name: slideshow-left;
			}
			& > div {
				display: flex;
				align-self: center;
				padding: 0 @spaceXl;
				width: max-content;
				height: max-content;
				& > span {
					align-self: center;
				}
			}
		}
		@keyframes slideshow-right {
			0% {
				right: 0;
			}
			100% {
				right: -200%;
			}
		}
		@keyframes slideshow-left {
			0% {
				left: 0;
			}
			100% {
				left: -200%;
			}
		}
	}
</style>
