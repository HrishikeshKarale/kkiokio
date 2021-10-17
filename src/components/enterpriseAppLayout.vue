<template>
	<div class="enterpriseAppLayout">
		<template v-if="$slots['header']">
			<slot name="header" />
		</template>
		<div class="body">
			<vue-modal
				tag="loadingScreen"
				:display="display"
				@display="
					(val) => {
						display = val;
					}
				"
			/>
			<vue-modal
				tag="loginScreen"
				:title="dRadioValue"
				:display="loginDisplay"
				@display="
					(val) => {
						loginDisplay = val;
					}
				"
			>
				<radio-input
					type="radio"
					:name="dNameRadio"
					:value="dRadioValue"
					:options="dOptions"
					:required="!booleanTrue"
					:isDisabled="!booleanTrue"
					:autofocus="!booleanTrue"
					:inline="booleanTrue"
					:box="booleanTrue"
					:mask="!booleanTrue"
					@value="(val) => (dRadioValue = val)"
					@alerts="alerts"
				/>
				<div class="loginForm">
					<vue-form
						v-if="dRadioValue == dOptions[0]"
						:ctx="handleLogin.bind(this)"
						form="loginForm"
						:alert="{ error: dDanger, warning: dWarning }"
						:validate="!booleanTrue"
						:autocomplete="booleanTrue"
						@alerts="alerts"
					>
						<email-input
							:value="emailID"
							label="Email ID"
							name="emailTextField"
							placeholder="JohnDoe@abc.com"
							:required="booleanTrue"
							icon="fas fa-at"
							@alerts="alerts"
							@value="(val) => (emailID = val)"
						/>
						<password-input
							:value="password"
							label="Password"
							name="usernameTextField"
							placeholder="*************"
							:required="booleanTrue"
							icon="far fa-user"
							:autocomplete="booleanTrue"
							@alerts="alerts"
							@value="(val) => (password = val)"
						/>
					</vue-form>
					<vue-form
						v-else
						:ctx="handleSignUp.bind(this)"
						form="SignUpForm"
						:alert="{ error: dDanger, warning: dWarning }"
						:validate="!booleanTrue"
						:autocomplete="booleanTrue"
						@alerts="alerts"
					>
						<text-input
							:value="signupName"
							label="Name"
							name="nameTextField"
							placeholder="John Doe"
							:required="booleanTrue"
							icon="far fa-user"
							@alerts="alerts"
							@value="(val) => (signupName = val)"
						/>
						<email-input
							:value="signupEmail"
							label="Email ID"
							name="emailTextField"
							placeholder="JohnDoe@email.com"
							:required="booleanTrue"
							icon="fas fa-at"
							@alerts="alerts"
							@value="(val) => (signupEmail = val)"
						/>
						<text-input
							:value="signupUsername"
							label="Username"
							name="usernameTextField"
							placeholder="John Doe"
							:required="booleanTrue"
							icon="far fa-user"
							@alerts="alerts"
							@value="(val) => (signupUsername = val)"
						/>
						<password-input
							:value="signupPassword"
							label="Password"
							name="paswordTextField"
							placeholder="*************"
							:required="booleanTrue"
							:match="booleanTrue"
							icon="far fa-user"
							:autocomplete="booleanTrue"
							@alerts="alerts"
							@value="(val) => (signupPassword = val)"
						/>
					</vue-form>
					<div>
						<vue-button
							v-if="signedIn"
							tag="signOutButton"
							text="Sign out"
							icon="fas fa-sign-out-alt"
							category="standard"
							:isDisabled="!booleanTrue"
							:autofocus="!booleanTrue"
							:ctx="signOut.bind()"
						/>
						<div
							v-else
							class="g-signin2"
							data-onsuccess="triggerGoogleLoaded"
						/>
					</div>
				</div>
			</vue-modal>
			<div class="alertContainer">
				<vue-alert
					v-for="(alt, index) in alert"
					:key="index"
					:code="alt.code"
					:type="alt.type"
					:message="alt.message"
					:description="alt.description"
					:dismissible="alt.dismissable"
					:timeout="alt.timeout"
				/>
			</div>
			<template v-if="$slots['menu']">
				<slot name="menu" />
			</template>
			<transition
				:name="transitionName"
				:mode="transitionMode"
				:enter-active-class="transitionEnterActiveClass"
				@beforeLeave="beforeLeave"
				@enter="enter"
				@afterEnter="afterEnter"
			>
				<main :key="$route.path" class="content">
					<breadcrums />
					<countdown-timer
						class="countdownTimer"
						start-time="January 24, 2021 23:59:99"
						end-time="Aug 16, 2021 00:00:01"
						trans='{
              "day":"Day",
              "hours":"Hours",
              "minutes":"Minuts",
              "seconds":"Seconds",
              "expired":"Please contact the administrator (hrishirich619@gmail.com).",
              "running":"Please report any bugs to site administrator at hrishirich619@gmail.com",
              "upcoming":"Till start of event.",
              "status": {
                "expired":"We apologise fior the delay, Please come back tomorrow.",
                "running":"Site is currently being updated.",
                "upcoming":"Future"
              }
            }'
					/>
					<scroll-indicator>
						<!-- <keep-alive max="5">
							<router-view :key="$route.fullPath" />
						</keep-alive> -->
						<router-view v-slot="{ Component }">
							<keep-alive max="5">
								<component :is="Component" />
							</keep-alive>
						</router-view>
					</scroll-indicator>
					<template v-if="$slots['moto']">
						<slot name="moto" />
					</template>
				</main>
			</transition>
			<template v-if="$slots['footer']">
				<slot name="footer" />
			</template>
		</div>
	</div>
</template>

<script>
	//store
	import { mapGetters } from "vuex";

	import scrollIndicator from "@/views/projects/js/scrollIndicator/scrollIndicator";
	import CountdownTimer from "@/components/countdownTimer.vue";
	import vueAlert from "@/components/alert/vueAlert.vue";
	import breadcrums from "@/components/breadcrums";
	import vueModal from "@/components//vueModal.vue";
	import vueImg from "@/components/vueImg.vue";
	import textInput from "@/components/textInput.vue";
	import emailInput from "@/components/emailInput.vue";
	import passwordInput from "@/components/passwordInput.vue";
	import vueForm from "@/components/vueForm";
	import radioInput from "@/components/radioInput.vue";
	import vueButton from "@/components/vueButton";
	import { authentication } from "@/typeScript/authentication";
	import { cookie } from "@/typeScript/cookie";
	import { toggle } from "@/typeScript/toggle";

	export default {
		name: "EnterpriseAppLayout",
		components: {
			CountdownTimer,
			scrollIndicator,
			breadcrums,
			vueModal,
			vueAlert,
			vueImg,
			textInput,
			emailInput,
			passwordInput,
			vueForm,
			vueButton,
			radioInput,
		},

		mixins: [authentication, cookie, toggle],

		computed: {
			// ...mapGetters(["logdedIn"]),
		}, //computed
		data() {
			const DEFAULT_TRANSITION = "fade";
			const DEFAULT_TRANSITION_MODE = "out-in";
			const transitionEnterActiveClass = "";
			const display = this.booleanTrue;
			//alerts
			const alert = [
				{
					type: "info",
					message: "Welcome to my portfolio site.",
					description:
						"If you are looking for my projects please visit the 'work' section of the website.",
					dismissable: this.booleanTrue,
					code: "619",
					timeout: 8,
				},
			];
			//signUp
			const signupName = null;
			const signupEmail = null;
			const signupPassword = null;
			const signupUsername = null;
			const passwordConfirmation = null;
			//signIn
			const password = null;
			const emailID = null;
			const dWarning = null;
			const dDanger = null;
			const dName = "loginToggle";
			const dLabelChecked = "SignIn";
			const dLabelUnchecked = "SignUp";
			const dToggle = dLabelChecked;
			const dNameRadio = "loginOrSignUp";
			const dOptions = [dLabelChecked, dLabelUnchecked];
			const dRadioValue = dOptions[0];
			const isAdmin = 0;
			//display modal
			const loginDisplay = !this.booleanTrue;
			//cors header
			const config = {
				"Content-Type": "text/plain",
				"Access-Control-Allow-Origin": "*",
			};
			return {
				dNameRadio,
				dRadioValue,
				dOptions,
				dName,
				emailID,
				dToggle,
				dLabelChecked,
				dLabelUnchecked,
				dWarning,
				dDanger,
				signupUsername,
				signupName,
				signupEmail,
				signupPassword,
				passwordConfirmation,
				password,
				isAdmin,
				transitionName: DEFAULT_TRANSITION,
				transitionMode: DEFAULT_TRANSITION_MODE,
				transitionEnterActiveClass,
				display,
				alert,
				loginDisplay,
				config,
			};
		}, //mixins

		beforeMount() {
			this.$router.beforeEach((to, from, next) => {
				let transitionName =
					to.meta.transitionName ||
					from.meta.transitionName ||
					this.transitionName;
				if (transitionName === "slide") {
					const toDepth = to.path.split("/").length;
					const fromDepth = from.path.split("/").length;
					transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
				}
				// this.transitionMode = DEFAULT_TRANSITION_MODE;
				this.transitionEnterActiveClass = `${transitionName}-enter-active`;

				if (to.meta.transitionName === "zoom") {
					this.transitionMode = "in-out";
					this.transitionEnterActiveClass = "zoom-enter-active";
					// Disable scrolling in the background.
					document.body.style.overflow = "hidden";
				}

				if (from.meta.transitionName === "zoom") {
					this.transitionMode = null;
					this.transitionEnterActiveClass = null;
					// Enable scrolling again.
					document.body.style.overflow = null;
				}

				this.transitionName = transitionName;

				//check if matched route requires authentication
				if (to.matched.some((record) => record.meta.requiresAuth)) {
					//if matched route requires authentication then check for absence of token
					if (localStorage.getItem("jwt") == null && !this.checkCookie("token")) {
						//when no token is found redirect to login page and set redirec
						next({
							name: "login",
							query: { nextUrl: to.name },
						});
					}
					//if matched route requires authentication and has token
					else {
						let user = "{}";
						if (localStorage.getItem("user")) {
							user = localStorage.getItem("user");
						} else if (this.checkCookie("user")) {
							//console.log(this.getCookie('user'));
							user = this.getCookie("user");
						}
						// const user = JSON.parse(localStorage.getItem('user') || JSON.parse(this.getCookie('user')) ||{});
						//when token is present check if user is an Admin
						if (to.matched.some((record) => record.meta.isAdmin)) {
							//If user is an admin, proceed
							if (user.isAdmin == 1) {
								next();
							}
							//if user is not admin then redirect to  about page
							else {
								next({ path: "home" });
							}
						} else {
							next();
						}
					}
				}
				//authentication was not required.
				//check if guest access is required to matched route
				else if (to.matched.some((record) => record.meta.guest)) {
					if (localStorage.getItem("jwt") == null) {
						next();
					} else {
						next({ name: "about" });
					}
				} else {
					next();
				}
			});
		}, //beforeMount

		mounted() {
			this.emitter.on("loadingScreen", (loading) => {
				this.display = loading;
			});
			this.emitter.on("loginScreen", (display) => {
				this.loginDisplay = display;
			});
			this.emitter.on("alert", (payload) => {
				this.alert.push({
					type: payload.type,
					message: payload.message,
					description: payload.description,
					dismissable: payload.dismissable,
					code: payload.code,
					timeout: payload.timeout,
				});
			});
		}, //mounted

		methods: {
			handleLogin(e) {
				e.preventDefault();
				if (this.password.length > 0) {
					this.axios
						.post(
							"http://localhost:5001/portfolio-website-689b4/us-central1/router/api/authentication/login",
							{
								email: this.emailID,
								password: this.password,
							},
							this.config
						)
						.then((response) => {
							if (response.data.auth) {
								localStorage.setItem("user", JSON.stringify(response.data.user));
								localStorage.setItem("jwt", response.data.token);
							}
						})
						.catch((error) => {
							this.emitter.emit("alert", {
								type: "warning",
								message: "Error setting up cookies/localStorage",
								description: error.response,
								dismissable: this.booleanTrue,
								code: "101.1",
								timeout: 8,
							});
							// console.error(error.response);
						});
				} else {
					this.emitter.emit("alert", {
						type: "danger",
						message: "No Password detected",
						description: "Please enter a password",
						dismissable: this.booleanTrue,
						code: "101",
						timeout: 4,
					});
				}
			}, //handleLogin

			handleSignUp(e) {
				e.preventDefault();
				const url =
					"http://localhost:5001/portfolio-website-689b4/us-central1/router/api/authentication/register/" +
					this.isAdmin;
				//POST request
				this.axios
					.post(
						url,
						{
							name: this.signupName,
							email: this.signupEmail,
							username: this.signupUsername,
							password: this.signupPassword,
							isAdmin: this.isAdmin,
						},
						this.config
					)
					.then((response) => {
						localStorage.setItem("user", JSON.stringify(response.data.user));
						localStorage.setItem("jwt", response.data.token);
					})
					.catch((error) => {
						this.emitter.emit("alert", {
							type: "danger",
							message: "SignUp Request Failed",
							description: "Please try again.",
							dismissable: this.booleanTrue,
							code: "101",
							timeout: 4,
						});
					});
			}, //handleSignUp

			alerts: function (type, message) {
				if (type == "warning") {
					this.dWarning = message;
				} else if (type == "error") {
					this.dDanger = message;
				} else {
					alert("error in input alert module");
				}
			}, //alerts

			loadScreen: function (loading) {
				this.display = false;
			}, //loadScreen

			beforeLeave(element) {
				this.prevHeight = getComputedStyle(element).height;
			}, //beforeLeave
			enter(element) {
				const { height } = getComputedStyle(element);

				element.style.height = this.prevHeight;

				setTimeout(() => {
					element.style.height = height;
				});
			}, //enter
			afterEnter(element) {
				element.style.height = "auto";
			}, //afterEnter
		},
	};
</script>

<style lang="less" scoped>
	@import (reference) "./../Less/customMixins.less";
	@import (reference) "./../Less/customVariables.less";

	.enterpriseAppLayout {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100%;
		.backgroundColor(@primaryColor, 16%);
		position: static;
		& > div {
			display: flex;
			height: 100%;
			&.body {
				display: flex;
				flex-direction: column;
				.scroll();
				overflow-y: overlay;
				& > .alertContainer {
					display: flex;
					flex-flow: column nowrap;
					position: absolute;
					top: @spaceXl;
					right: @spaceXl;
					gap: @spaceLg;
				}

				//scroll content
				& > main {
					display: flex;
					flex-direction: column;
					&.content {
						color: @textColor;
						.responsive(@1600width, 4);
						padding: 0 @spaceXl 6 * @spaceXl @spaceXl;
						align-self: center !important;
						z-index: @contentZ;
						.boxShadow(@one, @secondaryColor,@contentZ);
						background-color: @backgroundColor !important;
						//countdown timer
						& > .countdownTimer {
							flex-direction: row;
							background-color: @dangerBorder;
							padding: @spaceMd @spaceLg;
							border-radius: @borderRadiusLg;
							height: fit-content;
							min-width: fit-content;
						}
					}
				}
			}
		}
		@media screen {
			@media (max-width: @1600width) {
				& > div {
					&.body {
						& > main {
							&.content {
								.responsive(@1200width, 0);
							}
						}
					}
				}
			}
			@media (max-width: @1200width) {
				& > div {
					&.body {
						& > main {
							&.content {
								.responsive(@768width, 6);
							}
						}
					}
				}
			}
			@media (max-width: @768width) {
				& > div {
					&.body {
						& > main {
							&.content {
								.responsive(@480width, 2);
							}
						}
					}
				}
			}
			@media (max-width: @480width) {
				& > div {
					&.body {
						& > main {
							&.content {
								.responsive(@320width, 2);
							}
						}
					}
				}
			}
			@media (max-width: @320width) {
				& > div {
					&.body {
						& > main {
							&.content {
								.responsive(@320width, -2);
							}
						}
					}
				}
			}
		}
	}

	//zoom transition
	.zoom-enter-active,
	.zoom-leave-active {
		animation-duration: @transitionDuration;
		animation-fill-mode: both;
		animation-name: zoom;
	}

	.zoom-leave-active {
		animation-direction: reverse;
	}

	@keyframes zoom {
		from {
			opacity: 0;
			transform: scale3d(0.5, 0.5, 0.5);
		}

		100% {
			opacity: 1;
		}
	}

	//fade transition
	.fade-enter-active,
	.fade-leave-active {
		transition-duration: @transitionDuration;
		transition-property: opacity;
		transition-timing-function: @transitionTimingFunction;
	}

	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}

	//slide transition
	.slide-left-enter-active,
	.slide-left-leave-active,
	.slide-right-enter-active,
	.slide-right-leave-active {
		transition-duration: @transitionDuration;
		transition-property: height, opacity, transform;
		transition-timing-function: @transitionTimingFunction;
		overflow: hidden;
	}

	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		transform: translate(96px, 0);
	}

	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		transform: translate(-96px, 0);
	}
</style>
