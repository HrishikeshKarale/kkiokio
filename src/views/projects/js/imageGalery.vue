<template>
	<div class="imageGalery">
		<div
			v-for="gal in gallery"
			:key="gal.color"
			:class="['panel', gal.color, gal.isActive ? 'active' : null]"
			@click="gal.isActive = !gal.isActive"
		>
			<template v-for="k in Object.keys(gal)">
				<div v-if="gal[k]" :key="k + '-' + gal.color">
					{{ gal[k] }}
				</div>
			</template>
		</div>
	</div>
</template>
<script>
	import { nameConvention } from "@/typeScript/nameConvention";
	import { loading } from "@/typeScript/common/loading";
	export default {
		name: "ImageGalery",

		mixins: [nameConvention, loading],
		data() {
			const gallery = [
				{
					txt1: "hey",
					txt2: "let's",
					txt3: "Dance",
					color: "red",
					isActive: false,
				},
				{
					txt1: "give",
					txt2: "take",
					txt3: "recieve",
					color: "green",
					isActive: false,
				},
				{
					txt1: "experience",
					txt2: "it",
					txt3: "today",
					color: "blue",
					isActive: false,
				},
				{
					txt1: "give",
					txt2: "all",
					txt3: "you can",
					color: "yellow",
					isActive: false,
				},
				{
					txt1: "life",
					txt2: "in",
					txt3: "Motion",
					color: "purple",
					isActive: false,
				},
			];
			return {
				gallery,
			};
		},
	};
</script>
<style lang="less" scoped>
	@import (reference) "./../../../Less/customMixins.less";
	@import (reference) "./../../../Less/customVariables.less";
	@size: 320px;
	.imageGalery {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		& > .panel {
			height: 64vh;
			display: flex;
			flex-direction: column;
			cursor: pointer;
			animation: 2s all cubic-bezier(0.075, 0.82, 0.165, 1);
			flex: 1;
			& > div {
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-self: center;
				color: black;
				font-weight: bold;
				&:nth-child(1) {
					transform: translateY(-100vh);
				}
				&:nth-child(3) {
					transform: translateY(-100vh);
				}
				&:last-child {
					display: none;
				}
			}
			&.red {
				background-color: red;
			}
			&.green {
				background-color: green;
			}
			&.yellow {
				background-color: yellow;
			}
			&.blue {
				background-color: blue;
			}
			&.purple {
				background-color: purple;
			}
			&.active {
				flex: 5;
				& > div {
					&:nth-child(3) {
						transform: translateY(0);
					}
					&:nth-child(1) {
						transform: translateY(0);
					}
					// &:last-child {
					//   display: none;
					// }
				}
			}
		}
	}
</style>
