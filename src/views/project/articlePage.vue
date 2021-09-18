<template>
	<side-by-side-layout>
		<template #left>
			<post-template v-if="projData" :post="projData" />
		</template>
		<template #right>
			<div class="subscribe">
				<h4>Subscribe to our news letter</h4>
				<p>
					Our e-mail updates will keep you informed on our company progress,
					blogs, work and other important content.
				</p>
			</div>
		</template>
	</side-by-side-layout>
</template>

<script>
	import sideBySideLayout from "../../components/sideBySideLayout.vue";
	import postTemplate from "./postTemplate.vue";
	export default {
		name: "articlePage",

		components: {
			sideBySideLayout,
			postTemplate,
		}, //components

		data() {
			const projects = this.$store.state.projects;
			const projData = {};
			return {
				projects,
				projData,
			};
		}, //data

		methods: {
			projectData: function () {
				const postTitle = this.$router.currentRoute.value.params.article;
				this.projects.forEach((element) => {
					element.value.forEach((el) => {
						if (el.title === postTitle && el.blog) {
							// console.log(Object.values(el.blog)[0]);
							this.projData = Object.values(el.blog)[0];
						}
					});
				});
				return null;
			}, //postData
		}, //methods

		beforeMount() {
			this.projectData();
		}, //beforeMount

		mounted() {
			this.emitter.emit("loadingScreen", false);
		},
		unmounted() {
			this.emitter.emit("loadingScreen", true);
		},
	};
</script>


<style lang="less" scoped>
	@import (reference) "../../Less/customMixins.less";
	@import (reference) "../../Less/customVariables.less";
	.subscribe {
		display: flex;
		flex-direction: column;
		gap: @spaceMd;
		border-radius: @borderRadius;
		border: 1px solid @secondaryColor;
		min-width: 320px;
		.boxShadow(@one);
		.backgroundColor();
		& > * {
			padding: 0 @spaceLg;
			&:first-child {
				padding-top: @spaceLg;
			}
			&:last-child {
				padding-bottom: @spaceLg;
			}
		}
		& > h4 {
			margin-top: 0 !important;
			margin-bottom: 0 !important;
		}
	}
</style>