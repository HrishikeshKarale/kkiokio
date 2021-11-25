<template>
	<article class="profileOverview">
		<section id="Intro">
			<div class="subSection">
				<span>HELLO THERE</span>
				<h2>My name is</h2>
				<h1>
					<a @click="$router.push({ name: 'about' })">Hrishikesh Karale.</a>
					</h1>
				<h2>I design things.</h2>
				<p>
					I am a
					<mark>Inter-Disciplinary UX Professional</mark>
					based out of Rochester, NY.
				</p>
				<p>
					My expertise ranges from <b>Problem Validation</b>
					<span class="fas fa-arrow-right" /> <b>Research</b>
					<span class="fas fa-arrow-right" /> <b>UI Design</b>
					<span class="fas fa-arrow-right" />
					<b>Front-End Development</b>.
				</p>
			</div>
			<div class="subSection">
				<q>
					A little
					<abbr title="The ability to understand and share the feelings of another.">EMPATHY</abbr>
					 goes a long way
				</q>
			</div>
		</section>
		<section id="Work">
			<h1>WORK</h1>
			<h3>Here are some samples</h3>
			<div>
				<template v-for="projects in getProjects" :key='projects.type'>
					<template v-for="project in projects.value" :key='project.id'>
						<showcase
							v-if="project.portfolio"
							:project="project"
							:type="projects.type"
							:component="
								project.blog != null ? 'articlePage' : project.component
							"
							:article="project.blog != null ? project.title : ''"
						/>
					</template>
				</template>
			</div>
		</section>
		<section id="kindWords">
			<h1>Kind Words</h1>
			<h3>What people think about me</h3>
			<div class="subSection">
				<div
					v-for="words in kindWords"
					:key="words.name"
					class="subSection"
				>
					<q>
						<span class="fas fa-quote-left fa-2x fa-pull-left fa-border" />
						{{ words.comment }}
					</q>
					<h5>{{words.name}}</h5>
				</div>
			</div>
		</section>
	</article>
</template>

<script>
	// @ is an alias to /src
	import { loading } from "@/typeScript/common/loading";
	import { mapGetters } from "vuex";
	import showcase from "@/components/showcase.vue";
	// import slider from "./projects/js/slider.vue";

	export default {
		name: "Home",
		components: {
			showcase,
			// slider,
		},
		mixins: [loading],
		data() {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const profilePic = require("@/../public/img/profilePic.jpg");
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const logo = require("@/assets/logo.svg");
			// reviews
			const kindWords = [
				{
					comment: "As a manager, you hope to hire people who are smarter than you, driven to make a big impact, and who constantly push themselves to grow–and Hrishikesh was certainly that. I learned a lot from him (his knowledge in UX design is unparalleled) and it was a joy working together.",
					name: "Craig Swings"
				},
				{
					comment: "Hrishikesh, exhibits the experience and talent of someone twice his age in years. He is an incredible leader and has a way about him to get the most out of anyone. But most importantly, he's always eager to help others learn, grow and improve.",
					name: "Junaid Shaikh"
				},
				{
					comment: "What I enjoyed most about working with Hrishikesh was his mix of to-the-point creative vision and direction, while providing it in one of the most humble ways I’ve encountered.",
					name: "Justin"
				}
			];
			return {
				profilePic,
				logo,
				kindWords
			};
		},
		computed: {
			...mapGetters({ getProjects: "contentModule/getProjects" }),
		},
	};
</script>

<style lang="less" scoped>
	@import (reference) "./../Less/customMixins.less";
	@import (reference) "./../Less/customVariables.less";

	article.profileOverview {
		& > section {
			position: relative;
			&:not(#Intro) {
				h1 {
					align-self: center;
					position: relative;
					font-weight: 900;
					font-size: 6 * @fontSize;
					filter: opacity(16%);
					.textShadow(@fiveText);
					& + h3 {
						position: absolute;
						align-self: center;
						text-align: center;
						top: 3 * @spaceXl + @spaceMd;
						font-weight: bold;
					}
				}
			}
			&#Intro {
				flex-direction: row;
				justify-content: space-around;
				align-self: center;
				min-height: @body;
				max-width: 960px;
				& > div {
						justify-content: space-around;
						align-self: center;
					& > span {
						margin: 0;
					}
					& > h1,
					& > h2:first-child {
						margin-top: 0;
						margin-bottom: 0;
						&:not(h2) {
							font-weight: bold;
						}
					}
					& > h1 {
						cursor: pointer;
					}
					& > h2 {
						color: @textColor;
					}
					& > p {
						max-width: 640px;
						margin-bottom: @spaceXl;
						& > span {
							padding: 0 @spaceLg;
						}
						& > b {
							color: @secondary;
						}
					}
					//design and develop box
					&:last-child {
						position: relative;
						display: flex;
						width: 240px;
						aspect-ratio: 1;
						border-radius: 24%;
						background-color: transparent;
						margin: 0 !important;
						border: @spaceMd double @accent;
						gap: @spaceXl;
						transform: rotate(-45deg);
						& > q {
							text-align: center;
							quotes: none;
							transform: rotate(45deg);
							& > abbr {
								font-weight: 900;
								color: @secondary;
								letter-spacing: 4px !important;
								border: none;
							}
						}
						&:hover {
							border: @spaceMd double @accent;
							.boxShadow(@base, @primary);
							& > span {
								.textShadow(@threeText);
							}
						}
					}
				}
				// &::before {
				// 	content: '\2193';
				// 	position: absolute;
				// 	bottom: 0;
				// }
				// &::after {
				// 	content: 'Scroll Down';
				// 	position: absolute;
				// 	bottom: @spaceXl;
				// 	font-weight: 700;
				// }
			}
			&#Work {
				& > div {
					display: flex;
					flex-flow: row wrap;
					gap: @spaceXl;
					& > div {
						flex: 0 0 100%;
					}
				}
			}
			&#kindWords {
				& > div {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					gap: @spaceXl;
					// comment sections
					& > div {
						display: flex;
						flex-direction: column;
						// aspect-ratio: 16/10;
						border-radius: @borderRadiusLg;
						// border: 1px dashed @primary;
						height: fit-content;
						.boxShadow(@oneText);
						.backgroundColor(@primary, 4%, @spaceLg, @spaceXl);
						gap: @spaceLg;
						& > q {
							quotes: none;
							min-width: 240px;
							max-width: 640px;
							&> span {
								color: @secondary;
							}
							& + h5 {
								display: flex;
								flex-direction: row-reverse;
								margin-right: @spaceXl;
								gap: @spaceMd;
								&::after {
									content: "-";
								}
							}
						}
					}
				}
			}
		}
		@media screen {
			@media (max-width: @1600width) {
				@media (max-width: @1200width) {
					& > section {
						margin-bottom: @spaceXl;
						&#Intro {
							flex-direction: column-reverse;
						}
						&#projects {
							& > ul {
								flex-direction: column;
								flex: none;
								& > li {
									max-width: 640px;
									min-width: 240px;
								}
							}
						}
					}
					@media (max-width: @768width) {
						& > section {
							&#Intro {
								margin-top: 2*@spaceXl;
								gap: @spaceXl;
							}
						}
						@media (max-width: @480width) {
							& > section {
								&#Intro {
									& > div {
										&:last-child {
											width: 200px;
										}
									}
								}
							}
							@media (max-width: @320width) {
							}
						}
					}
				}
			}
		}
	}
</style>
