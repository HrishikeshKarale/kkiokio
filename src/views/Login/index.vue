<template>
	<div class="login">
		<div class="triangleTopLeft" />
		<div class="tempNav">
			<router-link :to="{ name: 'home' }">
				<vue-img :src="logoLink" alt="Logo" />
				<h4>
					Hrishikesh Karale
					<h5>Kkiokio.com</h5>
				</h4>
			</router-link>
			<radio-input
				type="radio"
				:name="dNameRadio"
				:value="dRadioValue"
				:options="dOptions"
				:required="!booleanTrue"
				:disabled="!booleanTrue"
				:autofocus="!booleanTrue"
				:inline="booleanTrue"
				:box="booleanTrue"
				:mask="!booleanTrue"
				@value="(val) => (dRadioValue = val)"
				@alerts="alerts"
			/>
		</div>
		<div class="loginForm">
			<dice-load />
			<h1>{{ dRadioValue }}</h1>
			<div>
				<vue-form
					v-if="dRadioValue == dOptions[0]"
					:dctx="handleLogin.bind(this)"
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
						input-icon="fas fa-at"
						@alerts="alerts"
						@value="(val) => (emailID = val)"
					/>
					<password-input
						:value="password"
						label="Password"
						name="usernameTextField"
						placeholder="*************"
						:required="booleanTrue"
						input-icon="far fa-user"
						:autocomplete="booleanTrue"
						@alerts="alerts"
						@value="(val) => (password = val)"
					/>
				</vue-form>
				<vue-form
					v-else
					:dctx="handleSignUp.bind(this)"
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
						input-icon="far fa-user"
						@alerts="alerts"
						@value="(val) => (signupName = val)"
					/>
					<email-input
						:value="signupEmail"
						label="Email ID"
						name="emailTextField"
						placeholder="JohnDoe@email.com"
						:required="booleanTrue"
						input-icon="fas fa-at"
						@alerts="alerts"
						@value="(val) => (signupEmail = val)"
					/>
					<text-input
						:value="signupUsername"
						label="Username"
						name="usernameTextField"
						placeholder="John Doe"
						:required="booleanTrue"
						input-icon="far fa-user"
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
						input-icon="far fa-user"
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
						:disabled="!dBooleanTrue"
						:autofocus="!dBooleanTrue"
						:ctx="signOut.bind()"
					/>
					<div v-else class="g-signin2" data-onsuccess="triggerGoogleLoaded" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import vueImg from "@/components/vueImg.vue";
	import textInput from "@/components/textInput.vue";
	import emailInput from "@/components/emailInput.vue";
	import passwordInput from "@/components/passwordInput.vue";
	import vueForm from "@/components/vueForm";
	import radioInput from "@/components/radioInput.vue";
	import vueButton from "@/components/vueButton";
	import { authentication } from "@/typeScript/authentication";

	export default {
		name: "Login",

		components: {
			vueImg,
			textInput,
			emailInput,
			passwordInput,
			vueForm,
			vueButton,
			radioInput,
		}, //components

		mixins: [authentication],

		data() {
			// eslint-disable-next-line @typescript-eslint/no-var-requires
			const logoLink = require("@/assets/logo.svg");
			const booleanTrue = true;
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
			const dBooleanTrue = true;
			const isAdmin = 0;
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
				logoLink,
				booleanTrue,
				signupUsername,
				signupName,
				signupEmail,
				signupPassword,
				passwordConfirmation,
				password,
				dBooleanTrue,
				isAdmin,
			};
		}, //data

		watch: {
			signedIn: function (newValue, oldValue) {
				if (newValue != oldValue) {
					const route = this.$router.currentRoute.value.query.nextUrl;
					if (route) {
						this.$router.push({
							name: this.$router.currentRoute.value.query.nextUrl,
						});
					} else {
						this.$router.push({
							name: "home",
						});
					}
				}
			},
		}, //watch

		methods: {
			handleLogin(e) {
				e.preventDefault();
				if (this.password.length > 0) {
					this.axios
						.post("http://localhost:8001/login", {
							email: this.emailID,
							password: this.password,
						})
						.then((response) => {
							// const isAdmin = response.data.user.isAdmin;
							localStorage.setItem("user", JSON.stringify(response.data.user));
							localStorage.setItem("jwt", response.data.token);
						})
						.catch((error) => {
							console.error(error.response);
						});
				}
			}, //handleLogin

			handleSignUp(e) {
				e.preventDefault();
				let url = "http://localhost:8001/register";
				if (this.isAdmin == 1) {
					url = "http://localhost:8001/register-admin";
				}
				//POST request
				this.axios
					.post(url, {
						name: this.signupName,
						email: this.signupEmail,
						username: this.signupUsername,
						password: this.signupPassword,
						isAdmin: this.isAdmin,
					})
					.then((response) => {
						localStorage.setItem("user", JSON.stringify(response.data.user));
						localStorage.setItem("jwt", response.data.token);

						this.sqliteUser = response.data.user;
						this.sqliteToken = response.data.token;
					})
					.catch((error) => {
						this.signupName = "";
						this.signupEmail = "";
						this.signupUsername = "";
						this.signupPassword = "";
						this.isAdmin = "";
						console.error(error);
					});
			}, //handleSignUp

			alert: function (type, message) {
				if (type == "warning") {
					this.dWarning = message;
				} else if (type == "error") {
					this.dDanger = message;
				} else {
					alert("error in input alert module");
				}
			}, //alerts
		}, //methods
	};
</script>

<style lang="less" scoped>
	@import (reference) "./../../Less/customMixins.less";
	@import (reference) "./../../Less/customVariables.less";

	@wizard-step-width-height: 120px;
	@wizard-step-font-size: @fontSize;

	.login {
		display: flex;
		flex-direction: column;
		background-color: @backgroundColor;
		position: fixed;
		top: 0;
		left: 0;
		z-index: @modalZ + 10;
		&::before {
			content: "";
			position: fixed;
			width: 100vw;
			height: 100vh;
			background-image: url(../../assets/logo.svg);
			background-repeat: initial;
			background-size: @spaceXl @spaceLg;
			filter: opacity(16%);
			opacity: 0.48;
		}
		& > div {
			&.tempNav {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: @spaceXl 2 * @spaceXl;
				align-content: center;
				position: absolute;
				top: 0;
				width: 100vw;
				& > a {
					display: flex;
					flex-direction: column;
					& > .vueImg {
						height: 80px;
					}
					& > h4 {
						display: flex;
						flex-direction: column;
						font-weight: bold;
						& > h5 {
							align-self: flex-end;
							font-weight: bold;
							color: @textColor;
						}
					}
				}
				& > .radioInput {
					align-self: center;
				}
			}
			&.triangleTopLeft {
				border-top: 100vh solid black;
				border-right: 0 solid transparent;
				border-left: 100vw solid transparent;
				height: 100vh;
				width: 100vw;
			}
			&.loginForm {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-content: center;
				position: absolute;
				bottom: 50%;
				right: 50%;
				transform: translate(50%, 50%);
				& > h1 {
					margin: @spaceLg auto;
					& + div {
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-content: center;
						flex-wrap: wrap;
						padding: @spaceMd @spaceLg;
						background-color: @backgroundColor;
						border: 1px solid @accentColor;
						border-radius: @borderRadius;
						.boxShadow(@one, @accentColor);
						transition: @transition;
						& > form {
							width: 320px;
							padding: @spaceMd @spaceLg;
						}
						& > div {
							border-left: 1px solid @accentColor;
							align-self: center;
							padding: @spaceMd @spaceLg;
						}
					}
				}
			}
		}

		@media screen {
			@media (max-width: @maxWidth) {
			}
		}
	}
</style>
