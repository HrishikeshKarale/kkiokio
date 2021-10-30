<template>
	<article class="profileOverview">
		<!-- <section>
			<slider />
		</section> -->
		<section id="intro">
			<div class="subSection">
				<span>HELLO THERE</span>
				<h2>My name is</h2>
				<h1 @click="$router.push({ name: 'about' })">Hrishikesh Karale.</h1>
				<h2>I design Things.</h2>
				<p>
					I am a
					<mark>Inter-Disciplinary UX Designer</mark>
					based out of Rochester, NY.
				</p>
				<p>
					My Expertise ranges from Problem Validation
					<span class="fas fa-arrow-right" /> Research
					<span class="fas fa-arrow-right" /> UX/UI Design
					<span class="fas fa-arrow-right" />
					Front-End Development.
				</p>
				<p>
					As a UX Professional, I am passionate about
					<mark>Empathy in design</mark>. I believe in setting ego aside and
					creating an experience that caters to my user needs. My ability to
					organised workflows, understand visual design language and solve
					problems shows in my work.
				</p>
				<vue-button
					tag="loginButton"
					category="border-sm"
					text="About me"
					icon="fas fa-sign-in-alt"
					:ctx="
						() => {
							$router.push({ name: 'about' });
						}
					"
				/>
			</div>
			<div class="subSection" @click="$router.push({ name: 'work' })">
				<span>Designer</span>
				<span>&amp;</span>
				<span>Developer</span>
			</div>
		</section>
		<section id="projects">
			<h1>WORK</h1>
			<h3>What I've been up to</h3>
			<p>
				Globally adopted software, high converting websites, emerging
				technology and beyond.
			</p>
			<!-- <q>
				A good User Interface is important because it can turn potential
				visitors to buyers as it facilitates interactions between the user and
				your website or web application----f5-studio.com
			</q> -->
			<p>
				This is a detailed chronicle of the stories, processes and results
				behind the projects that I've led and contributed to.
			</p>
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
	import vueButton from "@/components/vueButton.vue";
	import { loading } from "@/typeScript/common/loading";
	import { mapGetters } from "vuex";
	import showcase from "@/components/showcase.vue";
	// import slider from "./projects/js/slider.vue";

	export default {
		name: "Home",
		components: {
			vueButton,
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
			&:not(#intro) {
				h1 {
					align-self: center;
					font-weight: 900;
					filter: opacity(16%);
					font-size: 4 * @fontSize;
					& + h3 {
						position: absolute;
						align-self: center;
						top: 2 * @spaceXl;
					}
				}
			}
			&#intro {
				// .backgroundColor(@primaryColor, 100vw, 32%);
				flex-direction: row;
				justify-content: space-evenly;
				align-self: center;
				min-height: @body;
				//
				& > div {
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
						margin-left: 0;
						border: @borderRadius dashed @accentColor;
						height: 240px;
						width: 240px;
						border-radius: 25%;
						cursor: pointer;
						justify-content: space-around;
						align-self: center;

						& > span {
							font-size: 64px;
							align-self: center;
							font-weight: bold;
							transform: rotate(-45deg);
							margin-right: 4*@spaceXl;
							&:last-child {
								margin-right: 0;
								margin-left: 3*@spaceXl;
							}
							&:nth-child(2) {
								transform: rotate(0deg);
								margin: 0;
							}
						}
					}
				}
			}
			&#projects {
				& > div {
					display: flex;
					flex-flow: row wrap;
					gap: @spaceXl;
					& > div {
						flex: 1 0 240px;

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
						border: 1px dashed @primaryColor;
						height: fit-content;
						.backgroundColor(@primaryColor, 4%, @spaceLg, @spaceXl);
						// .backgroundColor();
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
									height: 240px;
									width: 240px;
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

		@keyframes rotate {
			100% {
				transform: rotate(1turn);
			}
		}
	}
</style>
