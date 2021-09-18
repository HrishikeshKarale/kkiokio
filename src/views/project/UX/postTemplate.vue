// https://usabilitygeek.com/ux-case-study-google-maps-vs-waze-mobile-apps/
<template>
	<!-- {{ article }} -->
	<article>
		<template v-for="entry in Object.entries(post)" :key="entry">
			<header v-if="entry[0] === 'header'">
				<h1 v-text="entry[1]" />
			</header>
			<post-details v-else-if="type.includes(entry[0])" :entry="entry" />
			<template
				v-for="ent in entry[1]"
				v-else-if="entry[0] === 'content'"
				:key="ent + '-' + entry[0]"
			>
				<template v-for="e in Object.entries(ent)" :key="e">
					<post-details v-if="type.includes(e[0])" :entry="e" />
				</template>
			</template>
			<!-- section -->
			<template v-else-if="entry[0] === 'section'">
				<section
					v-for="ent in entry[1]"
					id="section"
					:key="ent + '-' + entry[0]"
				>
					<template v-for="e in Object.entries(ent)" :key="e + '-' + ent[0]">
						<h3 v-if="e[0] === 'header'" v-text="e[1]" />
						<template
							v-for="e1 in e[1]"
							v-else-if="e[0] === 'content'"
							:key="e1 + '-' + e[0]"
						>
							<template
								v-for="e2 in Object.entries(e1)"
								:key="e2 + '-' + e1[0]"
							>
								<post-details v-if="type.includes(e2[0])" :entry="e2" />
								<!-- subSection -->
								<template v-else-if="e2[0] === 'subSection'">
									<div
										class="subSection"
										v-for="e3 in e2[1]"
										:key="e3 + '-' + e2[0]"
									>
										<template
											v-for="e4 in Object.entries(e3)"
											:key="e4 + '-' + e3[0]"
										>
											<h4 v-if="e4[0] === 'header'" v-text="e4[1]" />
											<template
												v-else-if="e4[0] === 'content'"
												v-for="e5 in e4[1]"
												:key="e5 + '-' + e4[0]"
											>
												<template
													v-for="e6 in Object.entries(e5)"
													:key="e6 + '-' + e5[0]"
												>
													<post-details
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
													<template
														v-for="e5 in Object.entries(e4)"
														:key="e5 + '-' + e4[0]"
													>
														<h5 v-if="e5[0] === 'header'" v-text="e5[1]" />
														<template
															v-else-if="e5[0] === 'content'"
															v-for="e6 in e5[1]"
															:key="e6 + '-' + e5[0]"
														>
															<template
																v-for="e7 in Object.entries(e6)"
																:key="e7 + '-' + e6[0]"
															>
																<post-details
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

	export default {
		name: "PostTemplate",

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
			post: {
				required: false,
				type: Object,
			}, //props

			mounted() {
				this.emitter.emit("loadingScreen", false);
			},

			unmounted() {
				this.emitter.emit("loadingScreen", true);
			},
		},
	};
</script>
