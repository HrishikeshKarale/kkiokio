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
							Kkiokio
							<h5>Hrishikesh Karale</h5>
						</h3>
					</router-link>
				</li>
				<li
					v-for="(navigation, index) in nav"
					:key="index + '-' + navigation.name"
				>
					<router-link :to="{ name: navigation.component }">
						<span :class="navigation.icon"></span>
						<!-- <div> -->
							<h4 v-text="navigation.name" />
							<!-- <span v-text="navigation.tagline" /> -->
						<!-- </div> -->
					</router-link>
				</li>
			</ul>
		</nav>
		<!-- <div class="user"> -->
			<!-- <span class="fas fa-user" />
			<div class="account">
				<template v-if="signedIn">
					<vue-img :src="user ? user.image : null" alt="Logo" />
					<h5 v-if="user" v-text="user ? user.name : 'guest'" />
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
				/> -->
				<vue-button
					v-if="themeIcon"
					tag="themeToggle"
					category="icon"
					text="Theme"
					:icon="themeIcon"
					:ctx="theme.bind(this)"
				/>
			<!-- </div>
		</div> -->
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
				type: String,
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
				this.emitter.emit("loginScreen", true);
			}, //login

			toggleNavigation: function () {
				this.$refs["vueHeader"].classList.toggle("showNav");
				if (this.$refs["vueHeader"].classList.contains("showNav")) {
					this.$refs["vueHeader"].classList.remove("mini");
				}
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

	@text: @primary;

	//nav sub text
	.navSubText() {
		color: @navText;
		opacity: @lowOpacity;
	}

	header {
		line-height: 1;
		z-index: @headerZ+10;
		width: 100vw;
		.boxShadow(@base, @navBackground, @headerZ);
		&.vueHeader {
			height: @header;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: @spaceLg @spaceXl;
			background-color: @navBackground;
			& > .menuTrigger {
				display: none;
			}
			& > nav {
				& > ul {
					display: flex;
					flex-direction: row;
					gap: @spaceLg;

					& > li {
						display: flex;
						align-self: flex-end;

						&:not(:first-child) {
							flex: 1 0 160px;
							& > a {
								padding: @spaceMd @spaceLg;
								border-radius: @borderRadius;
							gap: @spaceLg;
								// border: 4px solid transparent;

								&::after {
									content: "";
									position: absolute;
									bottom: -@spaceMd;
									left: -@spaceMd;
									width: 100%;
									border-radius: 8px;
									border: @spaceSm solid transparent;
								}

								&.router-link-exact-active {
								//styling selected link
								&.router-link-active {
									&::after {
										border-color: @accent;
									}
										& > span {
											color: @text;
											opacity: 1;
											transform: scale(1.4);
										}
											& > h4 {
												color: @text;
												font-weight: bold;
												letter-spacing: 2px !important;
											}
									}
								}
							}
						}

						& > a {
							display: flex;
							position: relative;
							flex-direction: row;
							align-items: center;
							color: @navText;
							width: 100%;

							//nav icon
							& > span {
								font-size: @fontSize;
								width: max-content;
								.navSubText();
								align-self: flex-start;
							}
							// & > div {
							// 	display: flex;
							// 	flex-direction: column;
							// 	width: 100%;
							// 	gap: @spaceMd;

								//nav Text
								& > h4 {
									// color: @offWhite;
									margin: 0 !important;
											color: @navText;
									//nav subText
									& + span {
										visibility: hidden;
										height: 0;
										font-size: 12px;
										.navSubText();
									}
								}
							// }
						}

						//website name and logo
						&:first-child {
							margin-right: 3*@spaceXl !important;
							& > a {
								& > .vueImg {
									height: 64px;
									min-width: 64px;
									width: fit-content;
									& + h3 {
										display: flex;
										flex-direction: column;
										width: max-content;
										align-self: center;
										margin: 0 !important;
										font-weight: 900;
										letter-spacing: 2px !important;
										// color: @secondary;
										& > h5 {
											visibility: visible;
											color: @navText;
											margin-top: @spaceSm !important;
											margin-bottom: 0 !important;
										}
									}
								}
							}
						}
						&:hover {
							& > a {
								& > span {
									transform: scale(1.2);
									color: @navText;
									opacity: 1;
								}
								& > div {
									& > h4 {
										color: @primary;
										& + span {
											visibility: visible;
											height: auto;
											// color: @offWhite;
											opacity: 1;
										}
									}
								}
							}
						}
					}
				}
				//user account
				// & + .user {
				// 	display: flex;
				// 	position: relative;
				// 	& > span {
				// 		color: @accent;
				// 		padding: @spaceMd;
				// 		border: 1px solid @accent;
				// 		border-radius: 50%;
				// 		cursor: pointer;
				// 		& + .account {
				// 			display: none;
				// 			position: absolute;
				// 			border: 1px solid @accent;
				// 			& > .vueImg {
				// 				width: 80px;
				// 			}
				// 			& > .g-signin2 {
				// 				display: none;
				// 			}
				// 		}
				// 	}
				// 	&:hover {
				// 		& > span {
				// 			border-radius: 50% 50% 0 50%;
				// 			background-color: @accent;
				// 			color: @backgroundColor;
				// 			.boxShadow(@one, @secondary, @modalZ + 20);
				// 			& + .account {
				// 				display: flex;
				// 				flex-direction: column;
				// 				background-color: @backgroundColor;
				// 				top: 100%;
				// 				right: 0;
				// 				height: fit-content;
				// 				width: fit-content;
				// 				border-radius: @borderRadius;
				// 				padding: @spaceLg @spaceXl;
				// 				.boxShadow(@one, @secondary, @modalZ + 20);
				// 			}
				// 		}
				// 	}
				// }
			}
			&.mini {
				.boxShadow(@base, @primary, @headerZ);
				height: 80px;
				& > nav {
					& > ul > li {
						//logo
						&:first-child {
							& > a {
								& > .vueImg {
									height: 48px;
								}
								& > h3 {
									width: max-content;
									text-align: center;
									margin: 0 !important;
									& > h5 {
										visibility: hidden;
										height: 0;
										margin: 0px !important;
									}
								}
							}
						}
						&:not(:first-child) > a {
							& > div {
								& > h4 {
									letter-spacing: 2px !important;
									margin: 0 !important;
									& + span {
										visibility: hidden;
										height: 0;
									}
								}
							}
							&.router-link-active {
								& > span {
									color: @primary;
								}
								& > div {
									& > h4 {
										align-self: center;
									}
								}
							}
						}
					}
				}
			}
			@media screen {
				@media (max-width: @1600width) {
				}
				@media (max-width: @1200width) {
					flex-direction: column;
					flex-wrap: nowrap;
					padding: @spaceMd @spaceLg;
					border-bottom-right-radius: @borderRadiusLg;
					height: fit-content;
					width: fit-content;
					position: fixed;
					outline: 0 solid rgba(0, 0, 0, 0.08);
					background-color: @offBlack;
					left: 0;
					top: 0;
					&.mini {
						height: 64px;
					}
					.scroll();
					& > .menuTrigger {
						display: flex;
						align-self: flex-end;
					}
					//hides navigation when toggled
					& > nav {
						display: none;
						// user
						& + button {
							position: fixed !important;
							right: @spaceXl + @spaceMd;
							top: @spaceLg;
						}
					}
					//displays navigation
					&.showNav {
						height: 100vh;
						width: max-content;
						outline: 9999px solid rgba(0, 0, 0, 0.64);
						border-bottom-right-radius: 0;
						padding: 0 @spaceXl;
						& > nav {
							display: flex;
							flex-direction: column;
							height: 100%;
							& > ul {
								flex-direction: column;
								justify-content: flex-start;
								& > li {
									flex: 1 0 auto;
									align-self: flex-start;
									&:not(first-child) > a {
										gap: @spaceXl;
										& > span,
										& > h4 {
											color: @backgroundColor;
										}
										&.router-link-exact-active {
											//styling selected link
											&.router-link-active {
												&::after {
													border-width: 2px;
													left: 0;
												}
											}
										}
									}
									//logo
									&:first-child {
										display: flex;
										align-self: center;
										margin-right: 0 !important;
										margin-bottom: @spaceXl !important;
										& > a {
											flex-direction: column;
											gap: @spaceXl;
											& > .vueImg {
												height: 96px;
												width: 96px;
												align-self: center;
											}
										}
									}
								}
							}
							//user
							// & + .account {
							// 	display: flex;
							// 	flex-direction: column;
							// 	justify-content: space-between;

							// 	& > button {
							// 		margin-bottom: @spaceLg;
							// 	}
							// }
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
	}
</style>
