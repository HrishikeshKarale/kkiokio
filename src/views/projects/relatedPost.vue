<template>
	<card-scroller
		class="relatedPost"
		title="Related Posts"
		tag="relatedPost"
		:auto-scroll="!autoScroll"
	>
		<template v-for="projects in projectList">
			<template v-if="projects.type != 'Logo'">
				<showcase
					v-for="project in projects.value"
					v-show="
						tags.length > 0 &&
						tags.some((filter) => !project.tags.includes(filter))
					"
					:key="project.id + ' - ' + projects.type"
					:project="project"
					:component="project.blog != null ? 'articlePage' : project.component"
					:article="project.blog != null ? project.title : ''"
				/>
			</template>
		</template>
	</card-scroller>
</template>

<script>
	import { mapGetters } from "vuex";
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
			//cardScroll
			const autoScroll = this.booleanTrue;
			return {
				//cardScroll
				autoScroll,
			};
		},
		computed: {
			...mapGetters({
				projectList: "contentModule/getProjects",
			}),
		}, //computed
	};
</script>


<style lang="less" scoped>
	@import (reference) "../../Less/customMixins.less";
	@import (reference) "../../Less/customVariables.less";
	.relatedPost {
		display: flex;
		width: 100%;
		.responsive(@1600width, 0);
	}
</style>