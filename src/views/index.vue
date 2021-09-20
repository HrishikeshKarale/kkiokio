<template>
	<article class="profileOverview">
		<section id="intro">
			<div>
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
			<div @click="$router.push({ name: 'project' })">
				<span>Designer</span>
				<span>&amp;</span>
				<span>Developer</span>
			</div>
		</section>
		<section id="projects">
			<h1>WORK</h1>
			<h3>What I've been up to</h3>
			<q
				>Globally adopted software, high converting websites, emerging
				technology and beyond.
			</q>
			<p>
				This is a detailed chronicle of the stories, processes and results
				behind the projects that I've led and contributed to.
			</p>
			<ul v-for="(project, index) in projectList" :key="index">
				<li>
					<router-link :to="{ name: 'project', hash: `#${project.type}` }">
						<h3>
							{{ project.type }}
						</h3>
					</router-link>
					<ul>
						<li
							class="tag"
							v-for="skill in projectSkills[project.type]"
							:key="skill"
							@click="
								$router.push({ name: 'project', query: { filter: skill } })
							"
						>
							<span class="fas fa-tag" />
							<b v-text="skill" />
						</li>
					</ul>
				</li>
			</ul>
		</section>
		<section id="kindWords">
			<h1>Kind Words</h1>
			<h3>What people think about me</h3>
			<div>
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
				<div>
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

	export default {
		name: "Home",
		components: {
			vueButton,
		},
		mixins: [loading],
		data() {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const profilePic = require("@/../public/img/profilePic.jpg");
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const logo = require("@/assets/logo.svg");
			const projectSkills = {};
			const projectList = this.$store.state.projects;
			return {
				profilePic,
				logo,
				projectList,
				projectSkills,
			};
		},
		created() {
			this.projectList.forEach((project) => {
				let uniqueArray = [];
				if (project.type != "Logo") {
					project.value.forEach((val) => {
						uniqueArray = [...val.tags, ...uniqueArray];
					});
					this.projectSkills[project.type] = uniqueArray.filter(
						(v, i, a) => a.indexOf(v) === i
					);
				}
			});
		},
	};
</script>

<style lang="less" scoped>
	@import (reference) "./../Less/customMixins.less";
	@import (reference) "./../Less/customVariables.less";

	.profileOverview {
		position: relative;
		& > section {
			flex-direction: column;
			flex-wrap: wrap;
			width: 100%;
			min-height: @body;
			& > h1 {
				text-align: center;
				font-size: 92px;
				font-weight: 900;
				margin: 0;
				transform: translate(0, 64px);
				filter: opacity(32%);
			}
			& > h3 {
				text-align: center;
				color: @accentColor;
				z-index: @contentZ + 10;
				font-weight: 700;
				margin-bottom: 80px;
				& + p {
					align-self: center;
					max-width: 640px;
					text-align: center;
				}
			}
			&#intro {
				flex-direction: row;
				justify-content: space-evenly;
				& > div {
					display: flex;
					flex-direction: column;
					height: fit-content;

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
						height: 320px;
						width: 320px;
						border-radius: 25%;
						cursor: pointer;
						justify-content: space-evenly;
						align-self: center;
						& > span {
							font-size: 64px;
							align-self: center;
							font-weight: bold;
							transform: rotate(-45deg);
							&:nth-child(2) {
								transform: rotate(0deg);
								margin: 32px 0;
							}
						}
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
						padding: @spaceXl;
						& > q {
							& + h5 {
								text-align: right;
								&::before {
									content: "-";
									margin-right: @spaceMd;
								}
							}
						}
					}
				}
			}
			&#projects {
				& > q {
					text-align: center;
				}
				& > ul {
					display: flex;
					flex-direction: column;
					flex-wrap: wrap;
					gap: @spaceLg;
					// justify-content: space-between;
					& > li {
						& > ul {
							display: flex;
							flex-flow: row wrap;
							gap: @spaceMd;
							& > li {
								&:hover {
									background-color: @accentColor;
									.boxShadow(@four, @accentColor);
									& > span {
										transform: scale(1);
									}
									& > b {
										color: @backgroundColor;
									}
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
					@media (max-width: @768width) {
						@media (max-width: @480width) {
							@media (max-width: @320width) {
							}
						}
					}
				}
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
				}
			}
		}
	}
</style>
