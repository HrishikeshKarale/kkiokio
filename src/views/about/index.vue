<template>
	<article class="about">
		<header>
			<h1>About Me</h1>
		</header>
		<section id="Bio">
			<!-- <h1>Hrishikesh Karale</h1> -->
			<div>
				<div>
				<vue-img :src="profilePic" alt="Hrishikesh Karale profile Picture" />
					<div class="social">
						<a target="_blank" href="https://github.com/HrishikeshKarale">
							<span class="fab fa-github fa-2x" />
							<!-- <b>
            @hrishikeshKarale
          </b> -->
						</a>
						<a target="_blank" href="https://www.npmjs.com/~kkiokio">
							<span class="fab fa-npm fa-2x" />
							<!-- <b>
            @kkiokio
          </b> -->
						</a>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/hrishikesh-karale/"
						>
							<span class="fab fa-linkedin-in fa-2x" />
							<!-- <b>
            @hrishikesh-karale
          </b> -->
						</a>
					</div>
				<a href="../../assets/Hrishikesh Karale-Resume.pdf" download>Resume</a>
				</div>
				<div>
					<h1>Hrishikesh Karale</h1>
					<h3>Product Designer</h3>
					<h5>Sr. UX Designer/Developer</h5>
			<table>
				<tr>
					<td>
						<h5>
							Academic Experience:
							</h5>
					</td>
					<td>
						{{experience.academic}}
					</td>
				</tr>
				<tr>
					<td>
						<h5>
							Professional Experience:
							</h5>
					</td>
					<td>
						{{experience.professional}}
					</td>
				</tr>
			</table>
				</div>
			</div>
			<!-- <p>
				I have {{experience.academic}} years of academic and {{experience.professional}}+ years of experience working on several
				major software projects in the eCommerce and Enterprise domain.
			</p> -->
			<!-- <p>
				I have a <mark>Masters in HCI/Design</mark> and a <mark>Bachelor in Computer Engineering</mark>, this allows me to take development into consideration
				when designing a solution.
			</p> -->
			<p>
				As a UX Professional, I strive to use a constant end-user feedback
				loop to define and redefine my project objectives. The user's needs
				guide the strategic decisions I make during my UX process. This
				non-linear approach is integral to ensuring that my projects decisions
				lead to a massive improvement in the key metrics that are relevant to
				the user experience. In short, I like to think like an engineer in
				addition to being a UX Professional.
			</p>
			<p>
				I’m also a novice visual designer. I’ve designed over 30 working
				prototypes in online-shopping, warehouse-management,
				inventory-management, fulfillment and healthcare using a multitude of
				prototyping tools including products such as <mark>Illustrator</mark>, <mark>Adobe XD</mark>,
				<mark>Sketch</mark> and <mark>Figma</mark>. My prototyping strategy primarily focuses on
				functionality and usability.
			</p>
		</section>
		<section id="Objective">
			<h1>Objective</h1>
			<q>
				<span class="fas fa-quote-left fa-pull-left fa-border" />
				As a designer I believe in <mark>Empathy in Design</mark> and strive towards creating intuitive interfaces that can not only solve problems but also create
				experiences that initiate a sense of delight and wonder for my users.
			</q>
		</section>
		<section id="Process">
			<h1>My Process</h1>
			<h3>How I assure success</h3>
			<p>
				One of the key factors that define a designers work is the process they use to solve a problem.
			</p>
			<p>
				With time, this process evolved from a standard 5 step prcoess of d(define, research, ideate, prototype, Test) to a 8 step process where each step signifies a milestone for the projects.
			</p>
			<div class="process">
				<ol class="steps">
					<li v-for="(step, index) in uxProcess" :key="index">
						<span class="step">
							{{ step.title }}
						</span>
						<h4 class="step-title">
							{{ step.subTitle }}
						</h4>
						<ol>
							<li v-for="skill in step.skills" :key="skill">
								<small v-text="skill" />
							</li>
						</ol>
					</li>
				</ol>
			</div>
		</section>
		<section id="Skillset">
			<h1>Skill Set</h1>
			<h3>Badges on my belt</h3>
			<div>
				<div v-for="skill in skills" :key="skill.type" class="subSection">
					<h4>{{ skill.type }}</h4>
					<div v-for="value in skill.value" :key="value">
						{{ value }}
					</div>
				</div>
			</div>
		</section>
		<section id="LisencesAndCertificates">
			<h1>Licenses &amp; Certificates</h1>
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
			<h1>Honors &amp; Awards</h1>
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
	import vueImg from "@/components/vueImg.vue";
	import { loading } from "@/typeScript/common/loading";
	import { mapGetters } from "vuex";

	export default {
		name: "About",
		mixins: [loading],

		components: {
			vueImg,
		},
		computed: {
			...mapGetters({
				skills: "contentModule/getSkills",
				lisencesAndCertificates: "contentModule/getLisencesAndCertificates",
				honorsAndAwards: "contentModule/getHonorsAndAwards",
				uxProcess: "contentModule/getUxProcess",
			}),
		},

		beforeMount() {
			const start = new Date(2017,9,10).getTime();
			const today = Date.now();
			let diff = (today-start)/1000;
			diff /= (60*60*24);
			this.experience.professional += Math.abs(Math.round(diff/365.25));
		},

		data() {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const profilePic = require("@/../public/img/profilePic.jpg");
			// const resume = require("@/assets/Hrishikesh Karale-Resume.pdf");
			const experience = {
				academic: 2.5,
				professional: 1
			}
			return {
				profilePic,
				experience,
				// resume,
			};
		},
	};
</script>

<style lang="less" scoped>
	@import (reference) "./../../Less/customMixins.less";
	@import (reference) "./../../Less/customVariables.less";

	@wizard-step-width-height: 120px;
	@wizard-step-font-size: @fontSize;

	.about {
		& > section {
			min-height: 640px;
				position: relative;
				&:not(#Bio) > h1 {
					align-self: center;
					font-weight: 900;
					filter: opacity(16%);
					font-size: 4 * @fontSize;
					.textShadow(@threeText, @black);
					& + h3 {
						position: absolute;
						align-self: center;
						text-align: center;
						top: 2 * @spaceXl;
						font-weight: bold;
					}
				}
			&#LisencesAndCertificates,
			&#honorsAndAwards {
				& > div {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					gap: 2 * @spaceLg;
					justify-content: space-evenly;
					& > div {
						display: flex;
						flex-direction: column;
						flex-wrap: wrap;
						flex: 0 0 40%;
						gap: @spaceMd;
						padding: @spaceMd;
						border-radius: @borderRadius;
						background-color: @cardBackground;
						.boxShadow(@one);
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
							& > .vueImg {
								// display: flex;
								// align-self: center;
								height: 80px;
								width: 80px;
								.boxShadow(none);
								& + div {
									display: flex;
									flex-flow: column nowrap;
									align-items: space-between;
									width: 100%;
									height: 100%;
									justify-content: space-between;
									& > h5 {
										margin-top: 0;
										margin-bottom: 0 !important;
										& > small {
											display: flex;
											flex-direction: row-reverse;
											font-weight: bold;
											font-size: @fontSizeSm;
										}
									}
								}
							}
							& > p {
								margin-top: 0;
								margin-bottom: 0 !important;
								font-size: @fontSizeSm;
								line-height: 24px !important;
							}
						}
					}
				}
			}
			&#Objective {
				& > q {
					quotes: none;
					font-size: 2*@fontSize;
					line-height: 4*@fontSize !important;
					text-align: justify;
				}
			}
			&#Process {
				flex-direction: column;
				text-align: left;

				& > .process {
					margin-top: @spaceLg;

					& > ol.steps {
						display: flex;
						flex-direction: row;
						justify-content: space-evenly;
						flex-wrap: wrap;
						margin: 0 auto;

						& > li {
							display: flex;
							flex-direction: column;
							background-color: @backgroundColor;
							flex: 0 0 320px;
							border-radius: @borderRadiusLg;
							padding: @spaceLg;
							margin: @spaceMd;
							border-radius: @borderRadiusLg;
						background-color: @cardBackground;
						.boxShadow(@one);

							& > .step {
								border-radius: 50%;
								border: 2px solid @accent;
								color: @white;
								font-size: @fontSize;
								font-weight: bold;
								line-height: @wizard-step-width-height;
								position: relative;
								min-width: @wizard-step-width-height;
								text-align: center;
								margin: 0 auto;
								background-color: @accent;

								& + .step-title {
									text-align: left;

									& + ol {
										list-style: none;
										padding: 0;
										& > li {
											font-weight: bold;
										}
									}
								}
							}
						}
					}
				}
			}
			&#Skillset {
				display: flex;
				flex-direction: column;
				& > div {
					display: flex;
					flex-flow: row wrap;
					justify-content: space-evenly;
					& > .subSection {
						flex-direction: column;
						justify-content: space-evenly;
						flex: 0 0 320px;
						margin: 0 @spaceLg;
						padding: @spaceMd @spaceXl;
						border-radius: @borderRadius;
						background-color: @cardBackground;
						.boxShadow(@one);
					}
				}
			}
			&#Bio {
				flex-direction: column;
				flex-wrap: wrap;
				align-content: center;
				gap: @spaceXl;
				& > p {
					max-width: 960px;
				}
				& > div {
					max-width: 960px;
					gap: @spaceXl;
					//image and introductory text
					&:first-child {
						display: flex;
						flex-direction: row;
						justify-content: center;

						& > div {
							display: flex;
							flex-direction: column;
							flex-wrap: nowrap;
							justify-content: center;
							& > h1,
							& > h3,
							& > h5,
							& > a {
								margin-top: 0;
								font-weight: bold;
								text-align: right;
							}
							& > h1 {
								.textShadow(@oneText, @primary);
							}
							// profile Image
							&:first-child {
								& > .social {
									display: flex;
									align-self: center;
									gap: @spaceXl;
									margin-top: -@spaceLg;
								}
								// profile image
								& > .vueImg {
									height: 320px;
									width: 320px;
									clip-path: circle(120px at center);
								}
								// resume download
								& > a {
									width: fit-content;
									align-self: center;
								}
							}
							& > table {
								align-self: flex-end;
								display: table;
								width: 320px;
								margin: 0;
								& > tr {
									& > td {
										& > h5 {
											margin-bottom: 0 !important;
										}
										&:last-child {
											text-align: right;;
										}
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
			}
		}
	}
</style>
