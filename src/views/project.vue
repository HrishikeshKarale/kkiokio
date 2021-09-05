//https://www.webdesignerdepot.com/2017/09/11-experimental-css-projects-thatll-blow-your-mind/
<template>
	<article class="projects">
		<header>
			<h1>My Projects</h1>
		</header>
		<p>
			Here is a list of projects that I have worked on.
			<br />
			The projects have vbeen divided into categories to make it easy for
			browsing.
		</p>
		<vue-filter
			:filters="{ type: ['tags'], options: [filterList] }"
			:selected="{ type: ['tags'], value: [propFilter] }"
			@updateFilter="updateFilter"
		/>
		<section
			v-for="projects in projectsDescription"
			:id="projects.type"
			:key="projects.type"
		>
			<h2>
				{{ projects.type }}
				<!-- <vue-button
          tag="loginButton"
          category="border-sm"
          text="About me"
          icon="fas fa-sign-in-alt"
          :ctx="toggleview()"
        /> -->
			</h2>
			<card-scroller
				:title="projects.type"
				:autoScroll="!booleanTrue"
				:vertical="!vertical"
				@toggleVertical="(val) => (vertical = !val)"
			>
				<showcase
					v-for="project in projects.value"
					v-show="
						propFilter.length == 0 ||
						(propFilter.length > 0 &&
							propFilter.some((filter) => project.tags.includes(filter)))
					"
					:key="project.id"
					class="project"
					:project="project"
					:component="project.component"
				/>
			</card-scroller>
		</section>
	</article>
</template>

<script>
	import vueFilter from "@/components/vueFilter.vue";
	import showcase from "@/components/showcase.vue";
	import { projects } from "@/store/projects";
	import cardScroller from "./project/css/cardSlider/cardScroller.vue";
	export default {
		name: "Projects",
		components: {
			vueFilter,
			showcase,
			cardScroller,
		},
		data() {
			const projectsDescription = projects;
			const propFilter = [];
			const filterList = [];
			const booleanTrue = true;
			const vertical = booleanTrue;
			return {
				projectsDescription,
				propFilter,
				filterList,
				booleanTrue,
				vertical,
			};
		},
		created() {
			const tempPropFilter = this.$route.query.filter;
			if (tempPropFilter) {
				this.propFilter = [this.$route.query.filter];
			}
			this.projectsDescription.forEach((project) => {
				project.value.forEach((val) => {
					this.filterList = [...val.tags, ...this.filterList];
				});
			});
		},
		methods: {
			//needs work
			updateFilter: function (filter) {
				//type does not exists
				if (this.propFilter.length == 0) {
					this.propFilter.push(filter.value);
				} else {
					//type alerady exists
					const index = this.propFilter.indexOf(filter.value);
					//filter does not exists
					// console.log(index, this.propFilter, filter);
					if (index == -1) {
						this.propFilter = [...this.propFilter, filter.value];
						// console.log(this.propFilter, filter);
					} else {
						this.propFilter.splice(index, 1);
					}
				}
			}, //updateFilter
		},
	};
</script>

<style lang="less" scoped>
	@import (reference) "./../Less/customMixins.less";
	@import (reference) "./../Less/customVariables.less";
	.projects {
		display: flex;
		flex-direction: column;
		& > section {
			& > h2 {
				width: 100%;
			}
			& > .cardScroller {
				.project {
					display: flex;
					align-self: flex-start;
					flex: 1 0 320px;
				}
			}
		}
	}
</style>
