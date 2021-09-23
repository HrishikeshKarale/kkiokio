<template>
	<div class="browseBlogs">
		<h4>Browse by tags</h4>
		<ul>
			<template v-for="entry in Object.entries(category)" :key="entry[0]">
				<li @click="show = entry[0]" :class="{ open: show === entry[0] }">
					<b v-text="entry[0]" />
					<ul>
						<li v-for="tag in entry[1]" :key="entry[0] + ' - ' + tag">
							<router-link
								:to="{
									name: tag.blog != null ? 'articlePage' : tag.component,
									params: { article: tag.blog != null ? tag.title : '' },
								}"
							>
								{{ tag.title }}
							</router-link>
						</li>
					</ul>
				</li>
			</template>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "browseBlogs",
		data() {
			const projects = this.$store.state.projects;
			const category = {};
			const show = "";
			return {
				projects,
				category,
				show,
			};
		},
		created() {
			this.projects.forEach((project) => {
				project.value.forEach((pro) => {
					pro.tags.forEach((tag) => {
						if (this.category[tag] != null) {
							this.category[tag].push(pro);
						} else {
							this.category[tag] = [pro];
						}
					});
				});
			});
		}, //created
		unmounted() {
			this.show = "";
		},
	};
</script>


<style lang="less" scoped>
	@import (reference) "../../Less/customMixins.less";
	@import (reference) "../../Less/customVariables.less";
	.browseBlogs {
		display: flex;
		flex-direction: column;
		gap: @spaceMd;
		max-width: 320px;
		min-width: 240px;
		height: fit-content;
		& > h4 {
			margin-bottom: 0 !important;
			font-weight: bold;
		}
		& > ul {
			gap: @spaceLg;
			& > li {
				& > b {
					display: flex;
					flex-flow: row nowrap;
					justify-content: flex-start;
					&::before {
						display: flex-inline;
						content: "\00BB";
						margin-right: @spaceMd;
						color: @accentColor;
					}
				}
				& > ul {
					display: none;
					flex-direction: column;
					margin-left: @spaceLg !important;
				}
				&.open {
					& > b {
						&::before {
							transform: rotate(90deg);
						}
					}
					& > ul {
						display: flex;
					}
				}
			}
		}
		@media screen {
			@media (max-width: @1200width) {
				& > h4 {
					align-self: center;
					margin-bottom: @spaceMd !important;
				}
				& > ul {
					flex-flow: row wrap;
					& > li {
						flex: 1 0 240px;
						border-radius: @borderRadius;
						& > b {
							padding: @spaceLg @spaceLg;
							background-color: @accentColor;
							&::before {
								color: @backgroundColor;
								margin-right: @spaceLg;
							}
						}
						&.open {
							.backgroundColor(@primaryColor, 16%);
						}
					}
				}
				max-width: @768width;
				min-width: 240px;
			}
			@media (max-width: @768width) {
				align-self: center;
				max-width: @480width;
				min-width: 240px;
			}
		}
	}
</style>