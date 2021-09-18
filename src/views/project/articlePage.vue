<template>
	<side-by-side-layout>
		<template #left>
			<post-template v-if="projData" :post="projData" />
		</template>
		<template #right>
			<template v-for="(project, index) in projects" :key="project.type">
				<template v-if="index <= 1">
					<template v-for="pro in project.value" :key="pro.id">
						<span class="fas fa-times" v-text="pro.title" />
					</template>
				</template>
			</template>
		</template>
	</side-by-side-layout>
</template>

<script>
	import sideBySideLayout from "../../components/sideBySideLayout.vue";
	import postTemplate from "./UX/postTemplate.vue";
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

<style>
</style>