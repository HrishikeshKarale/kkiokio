//https://codepen.io/pietvanzoen/pen/Ccjlt
<template>
	<header ref="vueHeader" class="vueHeader">
		<vue-button
			v-if="toggleNavIcon"
			class="menuTrigger"
			tag="toggleNav"
			category="icon-lg"
			:icon="toggleNavIcon"
			:ctx="toggleNavigation.bind(this)"
		/>
		<nav>
			<ul>
				<li>
					<router-link :to="{ name: 'home' }">
						<vue-img :src="logoLink" alt="Logo" />
						<h3>
							Hrishikesh Karale
							<h5>Kkiokio.com</h5>
						</h3>
					</router-link>
				</li>
				<li
					v-for="(navigation, index) in nav"
					:key="index + '-' + navigation.name"
				>
					<router-link :to="{ name: navigation.component }">
						<span v-if="index > 0" :class="navigation.icon" />
						<template v-else>
							<vue-img :src="logoLink" alt="Kkiokio.com" />
						</template>
						<div>
							<h4>{{ navigation.name }}</h4>
							<span> {{ navigation.tagline }}</span>
						</div>
					</router-link>
				</li>
			</ul>
		</nav>
		<div class="user">
			<span class="fas fa-user" />
			<div class="user">
				<template v-if="signedIn">
					<vue-img :src="user ? user.image : null" alt="Logo" />
					<h5 v-if="user">
						{{ user ? user.name : null }}
					</h5>
					<h5 v-else>Guest</h5>
				</template>
				<div class="g-signin2" data-onsuccess="triggerGoogleLoaded" />
				<vue-button
					v-if="!signedIn"
					tag="loginButton"
					category="text-sm"
					text="LogIn"
					icon="fas fa-sign-in-alt"
					:ctx="login.bind(this)"
				/>
				<vue-button
					v-else
					tag="googleSignOutButton"
					text="logout"
					icon="fas fa-sign-out-alt"
					category="text-sm"
					:ctx="signOut.bind()"
				/>
				<vue-button
					v-if="themeIcon"
					tag="themeToggle"
					category="text-sm"
					text="Theme"
					:icon="themeIcon"
					:ctx="theme.bind(this)"
				/>
			</div>
		</div>
	</header>
</template>

<script>
	import { toggle } from "@/typeScript/toggle";
	import { authentication } from "@/typeScript/authentication";
	import vueButton from "@/components/vueButton";
	import vueImg from "./vueImg.vue";

	export default {
		name: "VueHeader",

		components: {
			vueButton,
			vueImg,
		}, //data

		mixins: [toggle, authentication],

		props: {
			logoLink: {
				required: false,
				type: [String, null],
				default: null,
			},

			nav: {
				required: true,
				type: Object,
				default: null,
			},
		},

		computed: {
			themeIcon: function () {
				return this.activeTheme().icon;
			}, //themeIcon
			toggleNavIcon: function () {
				if (this.isOpen("nav")) {
					return "fas fa-times";
				}
				return "fas fa-bars";
			}, //toggleNavIcon
		}, //props

		mounted() {
			document.addEventListener("click", this.clickHandler, {
				capture: false, // top to bottom bubbling/propogation
				once: false, //should work only once
			});
		},

		methods: {
			clickHandler: function (event) {
				// console.log("modal", !event.target.closest(".vueHeader").length);
				if (!event.target.closest(".vueHeader") && this.isOpen("nav")) {
					this.toggleNavigation();
					// alert("click outside!");
				}
				// event.stopPropogation(); //stop event bubbling
			}, //clickHandler

			login: function () {
				this.$router.push({ name: "login" });
			}, //login

			toggleNavigation: function () {
				this.$refs["vueHeader"].classList.toggle("showNav");
				this.toggle("nav");
			}, //toggleNavigation
		},
	}; //default
</script>

//
<style lang="less" scoped>
	@import (reference) "./../Less/customVariables.less";
	@import (reference) "./../Less/customMixins.less";

	@lowOpacity: 0.64;
	@midOpacity: 0.84;

	@text: @accentColor;

	//nav sub text
	.navSubText() {
		color: @offWhite;
		opacity: @lowOpacity;
	}

	header {
		line-height: 1;
		z-index: @headerZ+10;
		&.vueHeader {
			display: flex;
			align-items: center;
			justify-content: space-around;
			padding: @spaceMd @spaceXl;
			background-color: @navBackground;
			max-width: 100vw;
			height: @header;
			&.mini {
				.boxShadow(@one, @navBackground);
				height: 64px;
				& > nav > ul > li > a {
					& > div {
						& > h4 {
							letter-spacing: 2px !important;
						}
						& > span {
							height: 0;
							opacity: 0;
							visibility: hidden;
						}
					}
					&.router-link-active {
						// & > span {
						// 	color: @primaryColor;
						// }
						&::before {
							transform: scale(1.2);
							bottom: 0;
							height: 4px;
						}
					}
				}
			}
			// .boxShadow(@one);
			& > .menuTrigger {
				display: none;
				margin-left: auto;
			}
			& > nav {
				& > ul {
					display: flex;
					flex-direction: row;
					gap: @spaceLg;

					& > li {
						display: flex;
						justify-content: space-evenly;
						align-items: flex-start;
						flex: 1 0 160px;
						//hide website name and logo
						&:first-child {
							display: none;
							& > a {
								& > .vueImg {
									height: 64px;
									& + h3 {
										display: flex;
										flex-direction: column;
										& > h5 {
											align-self: flex-end;
											color: @white;
										}
									}
								}
							}
						}
						& > a {
							display: flex;
							gap: @spaceLg;
							color: @navText;
							position: relative;
							display: flex;
							flex-direction: row;
							flex-wrap: nowrap;
							align-items: center;

							& > span {
								font-size: @fontSizeSm * 2;
								// margin: auto;
								.navSubText();
							}
							& > .vueImg {
								height: 48px;
							}
							& > div {
								display: flex;
								flex-direction: column;
								// margin-left: @spaceLg;
								//nav Text
								& > h4 {
									color: @offWhite;
									//nav subText
									& + span {
										font-size: 12px;
										.navSubText();
									}
								}
							}

							//styling selected link
							&.router-link-active {
								color: @text;
								&::before {
									transform: scale(0.8);
								}
								&.router-link-exact-active {
									color: @text;
								}

								& > span {
									opacity: 1;
									transform: scale(1.2);
									// color: @secondaryColor;
								}
								& > div {
									& > h4 {
										color: @text;
										& + span {
											color: @white;
											opacity: 1;
										}
									}
								}
							}

							//bottom line for nav
							&::before {
								content: "";
								position: absolute;
								width: 100%;
								background-color: @text;
								bottom: -8px;
								height: 2px;
								transform: scale(0);
								transition: @transition;
							}
							//hover effect for li
							&:hover {
								color: @primaryColor;
								&::before {
									transform: scale(1.2);
								}
								& > span {
									transform: scale(1.2);
									color: @navText;
									opacity: 1;
								}
								& > div {
									& > h4 {
										color: @text;
										& + span {
											color: @offWhite;
											opacity: 1;
										}
									}
								}
							}
						}
					}
				}
				//user account
				& + div.user {
					display: flex;
					margin-left: auto;
					position: relative;
					& > span {
						color: @text;
						padding: @spaceMd;
						border: 1px solid @text;
						border-radius: 50%;
						cursor: pointer;
						& + .user {
							display: none;
							position: absolute;
							border: 1px solid @text;
							& > .vueImg {
								width: 80px;
							}
							& > .g-signin2 {
								display: none;
							}
						}
					}
					&:hover {
						& > span {
							border-radius: 50% 50% 0 50%;
							background-color: @text;
							color: @navBackground;
							.boxShadow(@one, @shadowColor, 1001);
							& + .user {
								display: flex;
								flex-direction: column;
								background-color: @backgroundColor;
								top: 100%;
								right: 0;
								height: fit-content;
								width: fit-content;
								border-radius: @borderRadius;
								padding: @spaceLg @spaceXl;
								.boxShadow(@one, @shadowColor, 1001);
							}
						}
					}
				}
			}
			@media screen {
				@media (max-width: @maxWidth) {
					flex-direction: column;
					flex-wrap: nowrap;
					padding: @spaceMd @spaceLg;
					border-bottom-right-radius: @borderRadiusLg;
					height: auto;
					width: fit-content;
					position: fixed;
					left: 0;
					top: 0;
					.scroll(100vh);
					& > .menuTrigger {
						display: flex;
						align-self: flex-end;
					}
					//hides navigation when toggled
					& > nav {
						display: none;
						//user
						& + .user {
							position: fixed !important;
							right: 32px;
							top: 32px;
						}
					}
					//displays navigation
					&.showNav {
						height: 100vh;
						outline: 9999px solid rgba(0, 0, 0, 0.5);
						border-bottom-right-radius: 0;
						& > nav {
							display: flex;
							flex-direction: column;
							height: 100%;
							& > ul {
								flex-direction: column;
								justify-content: space-between;
								align-items: flex-start;
								& > li {
									flex: 1 0 64px !important;
									// margin-top: @spaceLg;
									& > a {
										& > .vueImg {
											height: @spaceXl;
										}
									}
									&:first-child {
										display: flex;
										& > a {
											flex-direction: column;
											& > .vueImg {
												height: 96px;
											}
											&::before {
												display: none;
											}
										}
									}
								}
							}
							//user
							& + .user {
								display: flex;
								flex-direction: column;
								justify-content: space-between;

								& > button {
									margin-bottom: @spaceLg;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
