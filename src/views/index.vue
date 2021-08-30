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
					<mark>multi-disciplined UX Designer</mark>
					based out of Rochester, NY.
				</p>
				<p>
					My Expertise ranges from Problem Validation -> Research -> Design ->
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
				<span>&</span>
				<span>Developer</span>
			</div>
		</section>
		<section id="projects">
			<h1>WORK</h1>
			<h3>What I've been up to</h3>
			<p>
				Globally adopted software, high converting websites, emerging technology
				and beyond. This is a detailed chronicle of the stories, processes and
				results behind the projects that I've led and contributed to.
			</p>
			<q>
				Jack of all trades is a master of none but is still always better than a
				master of one.
			</q>
			<div>
				<template v-for="(project, index) in projects" :key="index">
					<div v-if="index < 2">
						<router-link :to="{ name: 'project', hash: `#${project.type}` }">
							<h3>
								{{ project.type }}
							</h3>
						</router-link>
						<ul>
							<li
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
					</div>
				</template>
			</div>
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
		<section id="LisencesAndCertificates">
			<h1>Licenses & Certificates</h1>
			<h3>What adds to my qualification</h3>
			<div>
				<div v-for="cert in lisencesAndCertificates" :key="cert.id">
					<div>
						<vue-img :src="cert.link" :alt="cert.id + ' - ' + cert.link" />
						<div>
							<h5>
								{{ cert.title }}
								<small>
									{{ cert.issuer }}
								</small>
							</h5>
						</div>
					</div>
					<div>
						<p>
							<b> Issued </b>
							{{ cert.issued }}
						</p>
						<p>
							<b>
								{{ cert.expiry ? cert.expiry : "NO Expiry Date" }}
							</b>
						</p>
						<p>
							<b> Credential ID </b>
							{{ cert.credential }}
						</p>
					</div>
				</div>
			</div>
		</section>
		<section id="honorsAndAwards">
			<h1>Honors & Awards</h1>
			<h3>What proves my quality of work</h3>
			<div>
				<div v-for="award in honorsAndAwards" :key="award.id">
					<div>
						<!-- <vue-img :src="award.link" :alt="award.id + ' - ' + award.link" /> -->
						<div>
							<h5>
								{{ award.title }}
								<small>
									{{ award.issuer }}
								</small>
							</h5>
						</div>
					</div>
					<div>
						<p>
							<b> Issued </b>
							{{ award.issued }}
						</p>
					</div>
				</div>
			</div>
		</section>
	</article>
</template>

<script>
	// @ is an alias to /src
	import vueButton from "@/components/vueButton.vue";
	// import infiniteScroll from "@/views/project/css/infiniteScroll.vue";
	// import { skills } from "@/store/skills";
	import { projects } from "@/store/projects";
	import { lisencesAndCertificates } from "@/store/lisencesAndCertificates";
	import { honorsAndAwards } from "@/store/honorsAndAwards";
	import VueImg from "@/components/vueImg.vue";

	export default {
		name: "Home",
		components: {
			// infiniteScroll,
			vueButton,
			VueImg,
		},
		data() {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const profilePic = require("@/../public/img/profilePic.jpg");
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const logo = require("@/assets/logo.svg");
			// const skillSet = skills;
			const projectSkills = {};
			return {
				// skillSet,
				profilePic,
				logo,
				projects,
				lisencesAndCertificates,
				honorsAndAwards,
				projectSkills,
			};
		},
		mounted() {
			this.projects.forEach((project) => {
				let uniqueArray = [];
				project.value.forEach((val) => {
					uniqueArray = [...val.tags, ...uniqueArray];
				});
				this.projectSkills[project.type] = uniqueArray.filter(
					(v, i, a) => a.indexOf(v) === i
				);
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
			flex-direction: row;
			flex-wrap: wrap;
			width: 100%;
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
				flex-direction: column;
				& > div {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					// justify-content: space-between;
					gap: @spaceXl;
					& > div {
						display: flex;
						flex-direction: column;
						flex: 2 1 480px;
						border-radius: @borderRadiusLg;
						border: 1px dashed @primaryColor;
						height: fit-content;
						padding: @spaceXl;
						& > h5 {
							text-align: right;
							&::before {
								content: "-";
								margin-right: @spaceMd;
							}
						}
					}
				}
			}
			&#projects {
				flex-direction: column;
				// justify-content: space-around;
				& > div {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					gap: @spaceXl;

					//project cards
					& > div {
						display: flex;
						flex-direction: column;
						padding: @spaceMd @spaceLg;
						border-radius: @borderRadiusLg;
						border: 1px dashed @primaryColor;
						height: fit-content;
						flex: 1 0 320px;
						& > a {
							& > h3 {
								cursor: pointer;
								margin-top: 0;
							}
						}
						& > ul {
							display: flex;
							flex-direction: row;
							flex-wrap: wrap;
							// justify-content: space-between;
							& > li {
								font-size: @fontSizeSm;
								border-radius: @borderRadiusLg;
								padding: 0 @spaceMd !important;
								background-color: @secondaryColor;
								margin: @spaceSm !important;
								cursor: pointer;
								//tag icon
								& > span.fas {
									color: @backgroundColor;
									margin-right: @spaceMd;
									transform: scale(0.8);
								}
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
						&:hover {
							.boxShadow(@three, @accentColor);
							border-color: transparent;
							& > a > h3 {
								color: @accentColor;
							}
						}
					}
				}
			}
			&#LisencesAndCertificates,
			&#honorsAndAwards {
				flex-direction: column;
				& > div {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					gap: @spaceXl;
					& > div {
						display: flex;
						flex-direction: column;
						flex-wrap: wrap;
						flex: 0 0 240px;
						gap: @spaceMd;
						padding: @spaceMd;
						border-radius: @borderRadius;
						border: 1px dashed @secondaryColor;
						height: fit-content;
						& > div {
							display: flex;
							flex-direction: row;
							flex-wrap: nowrap;
							gap: @spaceMd;
							&:last-child {
								flex-direction: column;
								gap: 0;
							}
							& > img {
								// display: flex;
								// align-self: center;
								height: 80px;
								width: 80px;
								.boxShadow(none);
							}
							& > div > h5,
							& > p {
								margin-top: 0;
								margin-bottom: 0 !important;
							}
							& > div > h5 > small {
								display: flex;
								flex-direction: row-reverse;
								font-weight: bold;
								font-size: @fontSizeSm;
							}
							& > p {
								font-size: @fontSizeSm;
								line-height: 24px !important;
							}
						}
					}
				}
			}
		}

		@media screen {
			@media (max-width: @maxWidth) {
				flex-direction: column;
				& > section {
					flex-direction: column-reverse;
					margin-bottom: @spaceXl;
					&#intro {
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
