<template>
	<enterprise-app-layout>
		<template #header>
			<vue-header :logo-link="logoLink" :nav="navigation" />
		</template>
		<template #moto>
			<aside class="moto">
				<vue-img :src="logoLink" alt="Moto" />
				<q>
					A little
					<abbr
						title="The action of understanding, being aware of, being sensitive to, and vicariously experiencing the feelings, thoughts, and experience of another of either the past or present without having the feelings, thoughts, and experience fully communicated in an objectively explicit manner"
					>
						Empathy
					</abbr>
					goes a long way
				</q>
			</aside>
		</template>
		<template #footer>
			<vue-footer :logo-link="logoLink" :nav="navigation" />
		</template>
	</enterprise-app-layout>
</template>

<script>
	// @ is an alias to /src
	import vueHeader from "@/components/vueHeader";
	import enterpriseAppLayout from "@/components/enterpriseAppLayout";
	import vueImg from "@/components/vueImg";
	import vueFooter from "@/components/vueFooter.vue";

	export default {
		name: "App",

		components: {
			vueHeader,
			vueImg,
			vueFooter,
			enterpriseAppLayout,
		},

		data() {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const logoLink = require("@/assets/logo.svg");
			const navigation = this.$store.state.nav;
			return {
				navigation,
				logoLink,
			};
		},
	};
</script>

<style lang="less" scoped>
	@import (reference) "./Less/customVariables.less";

	.moto {
		display: flex;
		flex-direction: column;
		display: none;
		position: absolute;
		bottom: 0;
		right: 0;
		padding: @spaceMd @spaceLg 0;
		height: fit-content;
		z-index: @modalZ;
		width: fit-content;
		& > .vueImg {
			width: 64px;
			margin-bottom: @spaceLg;
		}

		& > q {
			font-size: @fontSizeSm;
			font-weight: bold;
			background-color: @backgroundColor;
			border-radius: @borderRadiusLg 0 0 0;
			padding: 0 @spaceLg;

			& > abbr {
				color: @accentColor;
				text-decoration: none;
			}
		}
	}
</style>
