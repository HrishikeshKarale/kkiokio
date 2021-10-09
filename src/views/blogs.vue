//https://www.webdesignerdepot.com/2017/09/11-experimental-css-blogs-thatll-blow-your-mind/
<template>
	<article class="blogs">
		<header>
			<h1>My blogs</h1>
		</header>
		<p>
			Here is a list of blogs that I have worked on.
			<br />
			The blogs have vbeen divided into categories to make it easy for browsing.
		</p>
		<vue-filter
			:filters="{ type: ['tags'], options: [uniqueTags] }"
			:selected="{ type: ['tags'], value: [propFilter] }"
			@updateFilter="updateFilter"
		/>
		<template v-for="blogs in projectList" :key="blogs.type">
			<card-scroller
				:id="blogs.type"
				:title="blogs.type"
				:auto-scroll="!autoScroll"
				:tag="blogs.type"
				v-show="
					blogs.value.some((project) => {
						return (
							propFilter.length == 0 ||
							(propFilter.length > 0 &&
								propFilter.some((filter) => project.tags.includes(filter)))
						);
					})
				"
			>
				<showcase
					v-for="project in blogs.value"
					v-show="
						propFilter.length == 0 ||
						(propFilter.length > 0 &&
							propFilter.some((filter) => project.tags.includes(filter)))
					"
					:key="project.id"
					:project="project"
					:component="project.blog != null ? 'articlePage' : project.component"
					:article="project.blog != null ? project.title : ''"
				/>
			</card-scroller>
		</template>
	</article>
</template>

<script>
	//vuex
	import { mapGetters } from "vuex";

	import vueFilter from "@/components/vueFilter.vue";
	import showcase from "@/components/showcase.vue";
	import cardScroller from "./projects/css/cardSlider/cardScroller.vue";
	import { loading } from "@/typeScript/common/loading";
	export default {
		name: "work",
		mixins: [loading],
		components: {
			vueFilter,
			showcase,
			cardScroller,
		},
		data() {
			//vueFilter
			const propFilter = [];
			// const filterList = [];
			//cardScroll
			const autoScroll = this.booleanTrue;
			return {
				propFilter,
				// filterList,
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
				projectList: "contentModule/getblogs",
			}),
		}, //computed
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
	.blogs {
		display: flex;
		flex-direction: column;
		& > section {
			& > h2 {
				width: 100%;
			}
		}
	}
</style>
