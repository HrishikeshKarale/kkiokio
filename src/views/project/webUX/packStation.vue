<template>
	<div class="packStation">
		<p>Sample Screens for a Pack Station Kiosk.</p>
		<p>
			Tha pack station is web app that can be used by users to pack and ship
			fulfillment orders in a warehouse. This projects is a successful
			implementation of a grid which follows the Golden Ratio.
		</p>
		<div>
			<template v-for="l in screens" :key="l.id">
				<vue-img :src="l.link" :alt="l.id + ' - ' + l.link" />
			</template>
		</div>
	</div>
</template>
<script>
	import vueImg from "@/components/vueImg.vue";
	export default {
		name: "PackStation",
		components: {
			vueImg,
		},
		data() {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const screens = [
				{
					id: 32,
					link: require("@/assets/packstation/loginPage Packaging.jpg"),
				},
				{
					id: 34,
					link: require("@/assets/packstation/1.svg"),
				},
				{
					id: 35,
					link: require("@/assets/packstation/2.svg"),
				},
				{
					id: 36,
					link: require("@/assets/packstation/3.svg"),
				},
				{
					id: 37,
					link: require("@/assets/packstation/4.svg"),
				},
				{
					id: 1,
					link: require("@/assets/packstation/5.svg"),
				},
				{
					id: 2,
					link: require("@/assets/packstation/6.svg"),
				},
				{
					id: 3,
					link: require("@/assets/packstation/7.svg"),
				},
				{
					id: 4,
					link: require("@/assets/packstation/8.svg"),
				},
				{
					id: 5,
					link: require("@/assets/packstation/9.svg"),
				},
			];
			return {
				screens,
			};
		},
	};
</script>
<style lang="less" scoped>
	@import (reference) "./../../../Less/customMixins.less";
	@import (reference) "./../../../Less/customVariables.less";
	.packStation {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		& > div {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			&:last-child {
				.vueImg {
					margin: @spaceMd @spaceLg;
					border-radius: @borderRadius;
					.boxShadow(@one);
					max-height: 16vw;
					min-height: 480px;
				}
			}
		}
	}
</style>
