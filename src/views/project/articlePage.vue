<template>
	<side-by-side-layout>
		<template #left> <post-template :post="post" /> </template>
		<template #right> sidebar </template>
	</side-by-side-layout>
</template>

<script>
	import sideBySideLayout from "../../components/sideBySideLayout.vue";
	export default {
		name: "articlePage",

		components: {
			sideBySideLayout,
		}, //components

		props: {
			post: {
				required: false,
				type: Object,
			},
		}, //props
		mounted() {
			this.emitter.emit("loadingScreen", false);
		},
		unmounted() {
			this.emitter.emit("loadingScreen", true);
		},
	};
</script>

<style>
</style>