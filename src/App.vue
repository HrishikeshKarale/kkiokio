<template>
	<enterprise-app-layout>
		<template #header>
			<vue-header :logo-link="logoLink" :nav="navigation" />
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
	import { mapGetters } from "vuex";

	export default {
		name: "App",

		components: {
			vueHeader,
			vueImg,
			vueFooter,
			enterpriseAppLayout
		},

		data() {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const logoLink = require("@/assets/logo.svg");
			return {
				logoLink
			};
		},
		created() {
			this.$store.dispatch("contentModule/processPorjects", null, { root: true });
		}, //created

		computed: {
			...mapGetters({
				navigation: "contentModule/getNavigation"
			})
		}
	};
</script>

<style lang="less" scoped>
	@import (reference) "./Less/customVariables.less";
</style>
