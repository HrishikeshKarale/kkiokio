// https://usabilitygeek.com/ux-case-study-google-maps-vs-waze-mobile-apps/
<template>
	<article :id="Object.entries(post)[0][1]" class="postTemplate">
		<template v-for="(entry, index) in Object.entries(post)">
			<header v-if="entry[0] === 'header'" :key="entry">
				<h1 v-text="entry[1]" />
				<ul v-if="tags">
					<li class="tag" v-for="tag in tags" :key="tag" v-text="tag" />
				</ul>
			</header>
			<post-details
				v-else-if="type.includes(entry[0])"
				:entry="entry"
				:key="index"
			/>
			<template v-for="ent in entry[1]" v-else-if="entry[0] === 'content'">
				<template v-for="e in Object.entries(ent)">
					<post-details
						v-if="type.includes(e[0])"
						:entry="e"
						:key="e + '-' + ent + '-' + entry[0]"
					/>
				</template>
			</template>
			<!-- section -->
			<template v-else-if="entry[0] === 'section'">
				<section
					v-for="ent in entry[1]"
					:id="Object.entries(ent)[0][1]"
					:key="ent + '-' + entry[0]"
				>
					<template v-for="e in Object.entries(ent)">
						<h3
							v-if="e[0] === 'header'"
							v-text="e[1]"
							:key="e + '-' + ent[0]"
						/>
						<template v-for="e1 in e[1]" v-else-if="e[0] === 'content'">
							<template v-for="e2 in Object.entries(e1)">
								<post-details
									v-if="type.includes(e2[0])"
									:entry="e2"
									:key="e2 + '-' + e1[0] + '-' + e[0]"
								/>
								<!-- subSection -->
								<template v-else-if="e2[0] === 'subSection'">
									<div
										class="subSection"
										v-for="e3 in e2[1]"
										:key="e3 + '-' + e2[0]"
									>
										<template v-for="e4 in Object.entries(e3)">
											<h4
												v-if="e4[0] === 'header'"
												v-text="e4[1]"
												:key="e4 + '-' + e3[0]"
											/>
											<template
												v-else-if="e4[0] === 'content'"
												v-for="e5 in e4[1]"
											>
												<template v-for="e6 in Object.entries(e5)">
													<post-details
														:key="e6 + '-' + e5[0] + '-' + e4[0]"
														v-if="type.includes(e6[0])"
														:entry="e6"
													/>
												</template>
											</template>
											<!-- subSubSection -->
											<template v-else-if="e4[0] === 'subSection'">
												<div
													class="subSection"
													v-for="e5 in e4[1]"
													:key="e5 + '-' + e4[0]"
												>
													<template v-for="e5 in Object.entries(e4)">
														<h5
															v-if="e5[0] === 'header'"
															v-text="e5[1]"
															:key="e5 + '-' + e4[0]"
														/>
														<template
															v-else-if="e5[0] === 'content'"
															v-for="e6 in e5[1]"
														>
															<template v-for="e7 in Object.entries(e6)">
																<post-details
																	:key="e7 + '-' + e6[0] + '-' + e5[0]"
																	v-if="type.includes(e7[0])"
																	:entry="e7"
																/>
															</template>
														</template>
													</template>
												</div>
											</template>
										</template>
									</div>
								</template>
							</template>
						</template>
					</template>
				</section>
			</template>
		</template>
	</article>
</template>

<script>
	import PostDetails from "./postDetails.vue";
	import { loading } from "@/typeScript/common/loading";

	export default {
		name: "PostTemplate",
		mixins: [loading],

		components: {
			PostDetails,
		}, //components

		data() {
			const type = ["text", "altText", "img"];
			return {
				type,
			};
		}, //data

		props: {
			title: {
				required: false,
				type: [String, null],
				default: "Article",
			},
			post: {
				required: true,
				type: Object,
			}, //props
			tags: {
				required: false,
				type: [Array, null],
				default: null,
			},
		},
	};
</script>

<style lang="less" scoped>
	@import (reference) "../../Less/customMixins.less";
	@import (reference) "../../Less/customVariables.less";

	article {
		& > header {
			& > h1 {
				margin-bottom: @spaceMd !important;
			}
			& > ul {
				display: flex;
				flex-flow: row wrap;
				gap: @spaceLg;
				margin-bottom: @spaceXl !important;
			}
		}
	}
</style>
