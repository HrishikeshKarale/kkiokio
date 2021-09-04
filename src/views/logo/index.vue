<template>
	<div class="logo">
		<p>
			A collection of Logo's and other illustration projects.
			<br />
			As a not so creative individual, this is an attept to explore Adobe
			Illustrator and try my hand it.
			<br />
			Thee are either reproductions, modifications own own ideas and projects
			that I came up with.
		</p>
		<main>
			<template v-for="logo in logos" :key="logo.id">
				<vue-img :src="logo.link" :alt="logo.id + ' - ' + logo.link" />
			</template>
		</main>
	</div>
</template>
<script>
	import vueImg from "@/components/vueImg.vue";
	import { logoList } from "@/store/logoList";
	export default {
		name: "Logo",
		components: {
			vueImg,
		},
		data() {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const logos = logoList;
			return {
				logos,
			};
		},
	};
</script>
<style lang="less" scoped>
	@import (reference) "./../../Less/customMixins.less";
	@import (reference) "./../../Less/customVariables.less";
	.logo {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		& > main {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			&:last-child {
				.vueImg {
					margin: @spaceMd @spaceLg;
					padding: @spaceMd;
					max-width: 16vw;
					min-width: 320px;
					height: auto;
					border-radius: @borderRadiusLg;
					border: 1px dashed @accentColor;
				}
			}
		}
	}
</style>
