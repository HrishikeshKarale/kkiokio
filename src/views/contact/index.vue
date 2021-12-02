<template>
	<article class="contact">
		<header>
			<h1>Contact Me</h1>
		</header>
		<!-- <p>
			Hello, My name is Hrishikesh Karale and I live in Upstate New York.
		</p> -->
		<p>
			Feel free to reach out to me for any questions you might have.
			<!-- <br />
			If you sign in, You can also write to me the old fashion way. -->
		</p>
		<section id="Info">
			<div class="email">
				<h3>
					Email
					<vue-clipboard
						id="emailId"
						copy="hrishikesh.karale@gmail.com"
						category="icon"
					/>
				</h3>
				<h5>
					<address>
						<a href="mailto:hrishikesh.karale@gmail.com">
							hrishikesh.karale@gmail.com
						</a>
					</address>
				</h5>
				<small>
					* Feel free to send me an email any time of the day and I should be
					able to respond in a reasonable amount of time.
				</small>
			</div>
			<div class="phone">
				<h3>
					Phone Number
					<vue-clipboard id="phoneNumber" copy="5855207382" category="icon" />
				</h3>
				<h5>
					<address>
						<a href="tel:585-520-7382"> (585) 520-7382 </a>
					</address>
				</h5>
				<p>Hours: 8am - 4pm (EST), everyday.</p>
				<small>
					* Text messages prefered.
					<br />
					* First time caller(s) are screened using virtual assistan to weed out
					spam calls
				</small>
			</div>
			<div class="address">
				<h3>
					Postal Address
					<vue-clipboard
						id="address"
						copy="44 Crittenden Way,
Apartment 2,
Rochester, NY 14623."
						category="icon"
					/>
				</h3>
				<address>
					44 Crittenden Way,
					<br />
					Apartment 2,
					<br />
					Rochester, NY 14623.
				</address>
			</div>
		</section>
		<section id="Form">
			<h3>Contact Form</h3>
			<p>Or you can also leave me a message here.</p>
			<vue-form
				:ctx="sendMail.bind(this)"
				d-form="contactForm"
				:alert="{ error: dDanger, warning: dWarning }"
				:validate="!booleanTrue"
				:isAutocomplete="booleanTrue"
			>
				<text-input
					v-model="name"
					label="Name"
					name="nameTextField"
					placeholder="John Doe"
					:isRequired="booleanTrue"
					@alerts="alerts"
				/>
				<email-input
					v-model="email"
					label="Email"
					name="emailField"
					placeholder="JDoe@email.com"
					icon="far fa-envelope"
					:isRequired="booleanTrue"
					@alerts="alerts"
				/>
				<phone-input
					v-model="phone"
					label="Phone number"
					name="phoneInputField"
					placeholder="555 555 5555"
					@alerts="alerts"
				/>
				<vue-textarea
					v-model="comment"
					label="message"
					name="messageTextareaField"
					placeholder="message"
					:isRequired="booleanTrue"
					@alerts="alerts"
				/>
			</vue-form>
		</section>
	</article>
</template>

<script>
	import textInput from "@/components/textInput.vue";
	import emailInput from "@/components/emailInput.vue";
	import phoneInput from "@/components/phoneInput.vue";
	import vueTextarea from "@/components/vueTextarea.vue";
	import vueForm from "@/components/vueForm";
	import vueClipboard from "@/components/vueClipboard.vue";
	import { loading } from "@/typeScript/common/loading";
	import { alerts } from "@/typeScript/common/alerts";

	export default {
		name: "Contact",
		mixins: [loading, alerts],
		components: {
			vueForm,
			textInput,
			emailInput,
			phoneInput,
			vueTextarea,
			vueClipboard
		},

		methods: {
			sendMail: function() {
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
			} //sendMAil
		} //methods
	};
</script>

<style lang="less" scoped>
	@import (reference) "./../../Less/customMixins.less";
	@import (reference) "./../../Less/customVariables.less";

	.contact {
		& > section {
			gap: @spaceXl;
			& > div {
				flex: 1 0 240px;
				.boxShadow(@twoText);
				border-radius: @borderRadiusLg;
				padding: @spaceMd @spaceLg;
				height: fit-content;
				margin: 0;
				background-color: @cardBackground;
				&:hover {
					.boxShadow(@base);
				}
				& > h3 {
					display: flex;
					flex-wrap: nowrap;
					flex-direction: row;
					justify-content: space-between;
					margin-top: 0;
					align-items: center;
				}
				& > h5 {
					& > address {
						margin-bottom: 0;
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
				& > .details {
					flex-direction: row;
					flex-wrap: wrap;
					width: fit-content;
					& > div {
						& > form {
							margin: @spaceXl;
						}
					}
				}
			}
		}
	}
</style>
