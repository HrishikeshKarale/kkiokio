<template>
	<post-template />
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
			<ul>
				<template v-for="s in skills" :key="s.type">
					<li v-for="value in s.value" :key="value">
						{{ value }}
					</li>
				</template>
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
				<div>
					{{ mapPost }}
				</div>
			</div>
		</section>
	</article>
</template>

<script>
	// @ is an alias to /src
	import vueButton from "@/components/vueButton.vue";
	import postTemplate from "@/views/project/UX/postTemplate.vue";

	export default {
		name: "Home",
		components: {
			vueButton,
			postTemplate,
		},
		data() {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const profilePic = require("@/../public/img/profilePic.jpg");
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const logo = require("@/assets/logo.svg");
			const projectSkills = {};
			const skills = this.$store.state.skills;
			const projects = this.$store.state.projects;
			const mapPost = {
				header: "Google Maps vs Waze Case Study",
				img: {
					src: require("@/assets/UX/maps/headerImage.jpg"),
					alt: null,
					caption: null,
				},
				content: [
					{
						text: "Today, we are back in business with another app showdown! To give a recap for those of you that are new here: in this UX case study series, we put two similar apps head-to-head and see which boasts the better UX.",
					},
					{
						text: "The last matchup we looked at Shopify and Apple Music, with Shopify taking the gold when it comes to the user’s experience. In this Olympic style face-off, I am going to be looking at two of the most popular navigation apps: Google Maps and Waze.",
					},
					{
						text: "Personally, I am rather excited for this matchup, as I am the ideal candidate. I continuously use navigation while I drive and just so happen to be terrible with directions.",
					},
					{
						text: "So throughout this matchup, I am also going to be turning introspectively, asking myself, “which of these apps do I believe can get me to a destination without getting lost?”",
					},
					{
						text: "I am going to analyse the UX of these navigation apps and determine, for my bad navigators everywhere, which is worth their time.",
					},
					{
						text: "Let us buckle up and get ready to go full throttle into the UX of these navigation apps.",
					},
				],
				section: [
					{
						header: "Home Screen",
						content: [
							{
								text: "The first thing that a user sees when they launch each of the apps after a brief onboarding process is their multidimensional map screens.",
							},
							{
								text: "The UI is simple and functional for each. As a user arrives in each of the home screens, they have a clear idea of the locality of themselves, in contrast to their surroundings. Each app was extremely responsive: a user could pinch and swipe the screen to take a bird’s eye view of the map.",
							},
							{
								img: {
									src: require("@/assets/UX/maps/home.jpg"),
									alt: null,
									caption: null,
								},
							},
							{
								text: "As we place Waze’s home screen next to Google Maps’ screen, we immediately begin to see stark contrasts in their design choices. Waze has a much more crowded interface, while Google Maps has a cleaner one. Waze’s is more playful; Google’s a bit more utilitarian.",
							},
							{
								text: "However, Waze’s design makes it easier for their user to customise their navigation experience and offers more functionality. Although a messier design, their popups on the map alert their driver of traffic, construction, restaurants in their area, photo enforced traffic lights, police officers, and other Wazers.",
							},
							{
								text: "With a cleaner interface, Google Maps sacrifices their experience feature list, to a degree. They do not provide their users with as many options to get an idea of their surroundings while they are driving.",
							},
							{
								text: "As we look at the UX of these two apps, Waze outshines Google Maps in the way that they give their users an updated and in-depth way to grasp what is in their vicinity. In this battle of the home screens, Waze takes the cake.",
							},
							{
								bold: "Winner: Waze",
							},
						],
					},
					{
						header: "Search Options",
						content: [
							{
								text: "One of the other most essential elements in a navigation app is the ability for the user to search for and enter their destination. Moreover, both navigation apps similarly present this search option.",
							},
							{
								text: "At the top each screen, each app has their search bar. So the function of this feature could be understood by any user, with any range of experience. Waze asks “Where to?” while Google Maps tells users to “Search here.”",
							},
							{
								img: {
									src: require("@/assets/UX/maps/search.jpg"),
									alt: null,
									caption: null,
								},
							},
							{
								text: "However, each app varies with the level of modification that they are able to provide their user. Waze gives their user popular search modifications through their use of graphics: their fork image stands for food, the gas can for gas stations … you get the idea.",
							},
							{
								text: "Google Maps, on the other hand, presents their suggestions with flashy and eye-catching graphics, to show their users what is in the area. They even include a ranking list of what ‘foodies’ like in the area.",
							},
							{
								text: "With a sleek and captivating design choice, I have to give Google Maps the win in this category. Google Maps streamlines the search process for their users and makes these options pop with the UI that they were paired with.",
							},
							{
								bold: "Winner: Google Maps",
							},
						],
					},
					{
						header: "Navigation Itself",
						content: [
							{
								text: "For bad navigators everywhere, the moment you have been waiting for: which app offers the better navigating experience.",
							},
							{
								text: "For this UX showdown, I chose to go to my local Starbucks and requested that each app take me there.",
							},
							{
								text: "Lining up these interfaces next to one another, they are almost opposite in their design. Waze’s popup is chock-full of buttons and navigation options, with their ETA being the most significant number in the screen; whereas, Google Maps has the directions to the location neatly stacked down the screen.",
							},
							{
								text: "Google Maps is going with the ‘less is more’ approach. However, Waze is using all of their screen space for customisations that a driver could use to modify their experience better.",
							},
							{
								img: {
									src: require("@/assets/UX/maps/nav.jpg"),
									alt: null,
									caption: null,
								},
							},
							{
								text: "Moreover, if we look at which of these options would give the user the most information to enhance their driving experience, Waze would win hands-down. With their app, a user can get different route options, a way to stop, a way to send their ETA, and can easily see their arrival time/the distance.",
							},
							{
								text: "When it comes to bad navigators far and wide, I speak for them when I say: Waze wins this navigation challenge.",
							},
							{
								bold: "Winner: Waze",
							},
						],
					},
					{
						header: "Looking At The Scoreboard",
						content: [
							{
								text: "Although it may surprise most (because of its App Store ranking), I have to deem Waze as the winner of this challenge. While both apps provide a navigating experience on an easy to understand interface, Waze provided more customisation options for their user’s routes.",
							},
							{
								text: "While Google Maps takes the cake in its UI, Waze beats out this navigating giant in the experience they provide their user.",
							},
						],
					},
				],
			};
			return {
				skills,
				profilePic,
				logo,
				projects,
				projectSkills,
				mapPost,
			};
		},
		unmounted() {
			this.emitter.emit("loadingScreen", true);
		},
		mounted() {
			this.emitter.emit("loadingScreen", false);
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
						flex: 2 1 480px;
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
					flex-direction: row;
					flex-wrap: wrap;
					gap: @spaceLg;
					// justify-content: space-between;
					& > li {
						font-size: @fontSizeSm;
						border-radius: @borderRadiusLg;
						padding: 0 @spaceMd !important;
						background-color: @secondaryColor;
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
			}
		}

		@media screen {
			@media (max-width: @maxWidth) {
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
