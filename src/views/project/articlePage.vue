<template>
	<side-by-side-layout>
		<template #left>
			<post-template v-if="projData" :post="projData" />
			<post-nav :next="nextArticle" :previous="previousArticle" />
		</template>
		<template #right>
			<subscribe-box />
		</template>
	</side-by-side-layout>
</template>

<script>
	import postNav from "./postNav.vue";
	import subscribeBox from "./subscribeBox.vue";
	import sideBySideLayout from "../../components/sideBySideLayout.vue";
	import postTemplate from "./postTemplate.vue";
	import { loading } from "@/typeScript/common/loading";
	export default {
		name: "articlePage",

		mixins: [loading],
		components: {
			postNav,
			sideBySideLayout,
			postTemplate,
			subscribeBox,
		}, //components

		data() {
			const projects = this.$store.state.projects;
			const projData = {};
			const nextArticle = null;
			const previousArticle = null;
			return {
				projects,
				projData,
				nextArticle,
				previousArticle,
			};
		}, //data

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

				// this.projects.forEach((element) => {
				// 	let articleFound = !this.booleanTrue;
				// 	element.value.forEach((el) => {
				// 		console.log(articleFound, " - ", el.title);
				// 		if (!articleFound && el.title === postTitle && el.blog) {
				// 			articleFound = this.booleanTrue;
				// 			this.projData = Object.values(el.blog)[0];
				// 		} else {
				// 			if (articleFound) {
				// 				this.nextArticle = el;
				// 				return null;
				// 			} else {
				// 				this.previousArticle = el;
				// 			}
				// 		}
				// 	});
				// });
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