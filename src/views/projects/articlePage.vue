<template>
	<side-by-side-layout class="articlePage">
		<template #left>
			<post-template
				v-if="projData"
				:post="projData"
				:tags="projTags"
				:title="projTitle"
			/>
			<feedback-tracker
				:value="feedbackValue"
				@input="(val) => (feedbackValue = val)"
			/>
			<post-nav :next="nextArticle" :previous="previousArticle" />
			<related-post :tags="projTags" />
		</template>
		<template #right>
			<subscribe-box />
			<search-blog />
			<browse-blogs />
		</template>
	</side-by-side-layout>
</template>

<script>
	import postNav from "./postNav.vue";
	import feedbackTracker from "./feedbackTracker.vue";
	import relatedPost from "./relatedPost.vue";
	import browseBlogs from "./browseBlogs.vue";
	import subscribeBox from "./subscribeBox.vue";
	import searchBlog from "./searchBlog.vue";
	import sideBySideLayout from "../../components/sideBySideLayout.vue";
	import postTemplate from "./postTemplate.vue";
	import { loading } from "@/typeScript/common/loading";
	import { mapGetters } from "vuex";

	export default {
		name: "articlePage",

		mixins: [loading],
		components: {
			postNav,
			feedbackTracker,
			sideBySideLayout,
			postTemplate,
			subscribeBox,
			searchBlog,
			browseBlogs,
			relatedPost,
		}, //components

		data() {
			const projData = {};
			const projTags = null;
			const projTitle = null;
			const nextArticle = null;
			const previousArticle = null;
			//feedback
			const feedbackValue = 3;
			return {
				projData,
				projTags,
				projTitle,
				nextArticle,
				previousArticle,
				feedbackValue,
			};
		}, //data

		computed: {
			...mapGetters({
				projects: "contentModule/getProjects",
			}),
		}, //computed

		methods: {
			projectData: function () {
				let articleFound = !this.booleanTrue;
				const postTitle = this.$router.currentRoute.value.params.article;
				for (const project of this.projects) {
					for (const proj of project.value) {
						// console.log(articleFound, " - ", proj.title);
						if (!articleFound && proj.title === postTitle && proj.blog) {
							articleFound = this.booleanTrue;
							this.projData = Object.values(proj.blog)[0];
							this.projTags = proj.tags;
							this.projTitle = proj.title;
						} else {
							if (articleFound) {
								this.nextArticle = proj;
								return null;
							} else {
								this.previousArticle = proj;
							}
						}
					}
				}
				if (!this.nextArticle) {
					this.nextArticle = this.projects[0].value[0];
				}
				if (!this.previousArticle) {
					this.previousArticle = this.projects.at(-1).value.at(-1);
				}
			}, //projectData
		}, //methods

		beforeMount() {
			this.projectData();
		}, //beforeMount
	};
</script>

<style lang="less" scoped>
	@import (reference) "../../Less/customMixins.less";
	@import (reference) "../../Less/customVariables.less";

	.postNav {
		display: flex;
		flex-flow: row nowrap;
		width: 100%;
		border: 1px solid @textColor;
		border-width: 1px 0;
		padding: @spaceXl @spaceSm;
		& > .previous,
		& > .next {
			flex: 1 1 160px;
			&:before {
				content: "Previous Post";
				font-weight: 700;
				font-size: @fontSize;
			}
			& > h3 {
				font-weight: 900;
				color: @accentColor;
				cursor: pointer;
				margin-left: @spaceMd;
				margin-top: @spaceMd !important;
			}
		}
		& > .next {
			&:before {
				content: "Next Post";
			}
		}
	}
</style>