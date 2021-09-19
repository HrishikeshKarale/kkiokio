<template>
	<card-scroller
		class="relatedPost"
		title="Related Posts"
		:auto-scroll="!booleanTrue"
	>
		<template v-for="projects in projectList" :key="projects.type">
			<showcase
				v-for="project in projects.value"
				v-show="
					tags.length == 0 ||
					(tags.length > 0 &&
						tags.some((filter) => project.tags.includes(filter)))
				"
				:key="project.id"
				:project="project"
				:component="project.blog != null ? 'articlePage' : project.component"
				:article="project.blog != null ? project.title : ''"
			/>
		</template>
	</card-scroller>
</template>

<script>
	import cardScrollerVue from "./css/cardSlider/cardScroller.vue";
	import cardScroller from "./css/cardSlider/cardScroller.vue";
	import showcase from "../../components/showcase.vue";
	export default {
		name: "relatedPost",
		props: {
			tags: {
				required: true,
				type: Array,
			},
		}, //props
		components: {
			cardScroller,
			showcase,
		}, //components
		data() {
			const projectList = this.$store.state.projects;
			return {
				projectList,
			};
		},
	};
</script>


<style lang="less" scoped>
	@import (reference) "../../Less/customMixins.less";
	@import (reference) "../../Less/customVariables.less";
	.relatedPost {
		display: flex;
	}
</style>