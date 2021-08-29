// not being used rite now
<template>
	<div class="projectList">
		<article>
			<section
				v-for="projects in projectsDescription"
				:id="projects.type"
				:key="projects.type"
			>
				<h2>{{ projects.type }}</h2>
				<div>
					<template v-for="project in projects.value" :key="project.id">
						<showcase :project="project" :component="project.component" />
					</template>
				</div>
			</section>
		</article>
	</div>
</template>

<script>
	import showcase from "@/components/showcase.vue";
	import { projects } from "@/store/projects";

	export default {
		name: "ProjectList",
		components: {
			showcase,
		},
		data() {
			const projectsDescription = projects;
			return {
				projectsDescription,
			};
		},
	};
</script>
<style lang="less" scoped>
	.projectList {
		display: flex;
		flex-direction: column;
	}
</style>
