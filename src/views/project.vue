//https://www.webdesignerdepot.com/2017/09/11-experimental-css-projects-thatll-blow-your-mind/
<template>
	<article class="work">
		<header>
			<h1>My Projects</h1>
		</header>
		<p>
			Here is a list of projects that I have worked on.
			<br />
			The projects have vbeen divided into categories to make it easy for
			browsing.
		</p>
		<nav class='projectNav' v-show="$route.params.type">
			<ol>
				<template v-for="projects in projectList" :key="projects.type">
					<li>
						<router-link
							:to="{ name: 'work', params: { type: projects.type } }"
							v-text="projects.type"
						/>
					</li>
				</template>
			</ol>
		</nav>
		<vue-filter
			title="Filter Projects"
			:filters="filterList"
			:selected="propFilter"
			@updateFilters="(val) => (propFilter = val)"
		/>
		<!-- display redult of the query/prop -->
		<template v-for="projects in projectList" :key="projects.type">
			<template
				v-if="
				$route.params.type? $route.params.type === projects.type : Object.keys(propFilter).length == 0 || isPresent(projects.value,'tag')
				"
			>
				<card-scroller
					:id="projects.type"
					:title="projects.type"
					:auto-scroll="!autoScroll"
					:tag="projects.type"
					:vertical="$route.params.type? true: false"
				>
					<showcase
						v-for="project in projects.value"
						v-show="
							Object.keys(propFilter).length == 0 || (Object.keys(propFilter).length > 0 && filterCards(project,'tag'))
						"
						:key="project.id"
						:project="project"
						:type="projects.type"
						:component="
							project.blog != null ? 'articlePage' : project.component
						"
						:article="project.blog != null ? project.title : ''"
					/>
				</card-scroller>
			</template>
		</template>
	</article>
</template>

<script>
	//vuex
	import { mapGetters } from "vuex";

	import vueFilter from "@/components/vueFilter.vue";
	import showcase from "@/components/showcase.vue";
	import cardScroller from "@/views/projects/css/cardSlider/cardScroller.vue";
	import { loading } from "@/typeScript/common/loading";
	export default {
		name: "work",
		mixins: [loading],
		components: {
			vueFilter,
			showcase,
			cardScroller,
		},
		methods: {
			isPresent: function (projects, category) {
				if(Object.keys(this.propFilter).length > 0) {
					const categoryIndex = this.propFilter.type.indexOf(category);
					if (categoryIndex !== -1) {
						return projects.some((project) => {
							return project.tags.some((filter) => this.propFilter.value[categoryIndex].includes(filter));
						});
					}
				}
			}, //isPresent

			filterCards: function (project, category) {
				if(Object.keys(this.propFilter).length > 0) {
					const categoryIndex = this.propFilter.type.indexOf(category);
					if (categoryIndex !== -1) {
							return project.tags.some((filter) => this.propFilter.value[categoryIndex].includes(filter));
					}
				}
			}, //isPresent
		}, //methods
		data() {
			//vueFilter
			const propFilter = {};
			const filterList = {
				type: ["category", "tag"],
				options: [
					this.$store.getters["contentModule/categoryList"],
					this.$store.getters["contentModule/uniqueTagList"],
				],
			};
			//cardScroll
			const autoScroll = this.booleanTrue;
			return {
				propFilter,
				filterList,
				autoScroll,
			};
		},
		created() {
			const tempPropFilter = this.$route.query.filter;
			if (tempPropFilter) {
				this.propFilter = [this.$route.query.filter];
			}
		},
		computed: {
			...mapGetters({
				uniqueTags: "contentModule/uniqueTagList",
				categoryList: "contentModule/categoryList",
				projectList: "contentModule/getProjects",
			}),
		}, //computed
	};
</script>

<style lang="less" scoped>
	@import (reference) "./../Less/customMixins.less";
	@import (reference) "./../Less/customVariables.less";

	.work {
		& > nav.projectNav {
			display: flex;
		&.scroll {
			flex-direction: row-reverse;
		position: sticky;
		top: 0;
		left: 0;
			z-index: @headerZ;
			& > ol {
				gap: @spaceSm;
				& > li {
					font-size: @fontSizeSm;
					& > a {
						padding: @spaceXs @spaceMd;
					}
				}
			}
		}
			& > ol {
				flex-flow: row nowrap;
				gap: @spaceXl;
				& > li {
					& > a {
						padding: @spaceMd @spaceLg;
						border-radius: @borderRadius;
						&.router-link-active {
							background-color: @primaryColor;
							color: @backgroundColor;
						}
					}
				}
			}
		}
		& > .vueFilter {
			align-self: flex-end;
			& > div {
				border-radius: 50%;
			}
		}
	}
</style>
