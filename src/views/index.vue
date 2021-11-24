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
					<mark>Inter-Disciplinary UX Designer</mark>
					based out of Rochester, NY.
				</p>
				<p>
					My expertise ranges from Problem Validation
					<span class="fas fa-arrow-right" /> Research
					<span class="fas fa-arrow-right" /> UX/UI Design
					<span class="fas fa-arrow-right" />
					Front-End Development.
				</p>
				<!-- <vue-button
					tag="loginButton"
					category="border-lg"
					text="About me"
					icon="fas fa-user"
					:ctx="
						() => {
							$router.push({ name: 'about' });
						}
					"
				/> -->
			</div>
			<div class="subSection" @click="$router.push({ name: 'work' })">
				<!-- <span>Designer</span>
				<span>&amp;</span>
				<span>Developer</span> -->
			</div>
		</section>
		<section id="Work">
			<h1>WORK</h1>
			<h3>Here are some samples of my work</h3>
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
				<div>
					<q>
						As a manager, you hope to hire people who are smarter than you,
						driven to make a big impact, and who constantly push themselves to
						grow–and Hrishikesh was certainly that. I learned a lot from him
						(his knowledge in UX design is unparalleled) and it was a joy
						working together.
					</q>
					<h5>Craig Swings</h5>
				</div>
				<div class="subSection">
					<q>
						Hrishikesh, exhibits the experience and talent of someone twice his
						age in years. He is an incredible leader and has a way about him to
						get the most out of anyone. But most importantly, he's always eager
						to help others learn, grow and improve.
					</q>
					<h5>Junaid Shaikh</h5>
				</div>
				<div>
					<q>
						What I enjoyed most about working with Hrishikesh was his mix of
						to-the-point creative vision and direction, while providing it in
						one of the most humble ways I’ve encountered.
					</q>
					<h5>Justin</h5>
				</div>
			</div>
		</section>
	</article>
</template>

<script>
	// @ is an alias to /src
	// import vueButton from "@/components/vueButton.vue";
	import { loading } from "@/typeScript/common/loading";
	import { mapGetters } from "vuex";
	import showcase from "@/components/showcase.vue";
	// import slider from "./projects/js/slider.vue";

	export default {
		name: "Home",
		components: {
			// vueButton,
			showcase,
			// slider,
		},
		mixins: [loading],
		data() {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const profilePic = require("@/../public/img/profilePic.jpg");
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const logo = require("@/assets/logo.svg");
			return {
				profilePic,
				logo,
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
				// .backgroundColor(@primary, 100vw, 32%);
				flex-direction: row;
				justify-content: space-evenly;
				align-self: center;
				min-height: @body;
				//
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
					}
					& > button {
						align-self: flex-end;
					}
					//design and develop box
					&:last-child {
						position: relative;
						width: 240px;
						aspect-ratio: 1;
						border-radius: 24%;
						cursor: pointer;
						background-color: transparent;
						border: @spaceMd double @accent;
						gap: @spaceXl;
						transform: rotate(-45deg);
						&::before {
							content: '';
							position: absolute;
							top: @spaceLg + @spaceSm;
							left: @spaceLg + @spaceSm;
							width: 80%;
							aspect-ratio: 1/1;
							background-image: url(../assets/logo.svg);
							background-repeat: no-repeat;
							background-position: center;
							transform: rotate(45deg);
						}
						&:hover {
							border: @spaceMd double @accent;
							.boxShadow(@base, @primary);
							& > span {
								.textShadow(@threeText);
							}
						}
						& > span {
							transform: rotate(45deg);
							font-size: 64px;
							align-self: center;
							font-weight: bold;
							.textShadow(@threeText);
							&:last-child {
								margin-right: 0 !important;
							}
						}
					}
				}
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
					& > div {
						display: flex;
						flex-direction: column;
						flex: 0 1 480px;
						border-radius: @borderRadiusLg;
						border: 1px dashed @primary;
						height: fit-content;
						.boxShadow(@base, @primary);
						.backgroundColor(@primary, 4%, @spaceLg, @spaceXl);
						gap: @spaceLg;
						& > q {
							// margin: @spaceXl;
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
						&#intro {
							flex-direction: column-reverse;
							& > div {
								&:last-child {
									margin: 2 * @spaceXl 0;
									width: 240px;
									aspect-ratio: 1;
									align-self: center;
									& > span {
										font-size: 2 * @fontSize;
									}
								}
							}
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
				}
				@media (max-width: @768width) {
				}
				@media (max-width: @480width) {
				}
				@media (max-width: @320width) {
				}
			}
		}
	}
</style>
