<template>
	<side-by-side-layout class="articlePage">
		<template #left>
			<article-page />
		</template>
		<template #right>
			<subscribe-box />
			<search-blog />
			<browse-blogs />
		</template>
	</side-by-side-layout>
</template>

<script>
	import browseBlogs from "./browseBlogs.vue";
	import subscribeBox from "./subscribeBox.vue";
	import searchBlog from "./searchBlog.vue";
	import sideBySideLayout from "../../components/sideBySideLayout.vue";
	import { loading } from "@/typeScript/common/loading";
	import { mapGetters } from "vuex";
	import ArticlePage from './articlePage.vue';

	export default {
		name: "articlePage",

		mixins: [loading],
		components: {
			sideBySideLayout,
			subscribeBox,
			searchBlog,
			browseBlogs,
			ArticlePage,
		}, //components
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