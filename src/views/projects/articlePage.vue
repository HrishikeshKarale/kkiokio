<template>
	<post-template
		v-if="selectedArticle.article"
		:post="selectedArticle.article"
		:tags="selectedArticle.tags"
		:title="selectedArticle.title"
	/>
	<feedback-tracker
		:value="feedbackValue"
		@input="(val) => feedbackValue = val"
	/>
	<post-nav :next="nextArticle" :previous="previousArticle" />
	<related-post :tags="selectedArticle.tags" />
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
			//feedback
			const feedbackValue = 3;
			return {
				feedbackValue,
			};
		}, //data

		computed: {
			...mapGetters({
				selectedArticle: "contentModule/getSelectedProject",
				nextArticle: "contentModule/getNextArticle",
				previousArticle: "contentModule/getPreviousArticle",
			}),
		}, //computed

		created() {
			this.$store.dispatch("contentModule/projectData", this.$router.currentRoute.value.params.article, { root: true });
		}, //created
	};
</script>

<style lang="less" scoped>
	@import (reference) "../../Less/customMixins.less";
	@import (reference) "../../Less/customVariables.less";
</style>