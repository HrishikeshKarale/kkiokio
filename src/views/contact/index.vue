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
				tag="contactForm"
				:alertID="{ parent: 'contactForm', child: null }"
				:alertMessage="
					alertObject
						.filter(
							alert =>
								(alert.src.parent === 'contactForm') &
								(alert.src.child === null)
						)
						.pop()
				"
				:validate="!booleanTrue"
				:isAutocomplete="booleanTrue"
			>
				<text-input
					v-model="sender"
					label="Name"
					tag="senderName"
					placeholder="John Doe"
					:isRequired="booleanTrue"
					:alertID="{ parent: 'contactForm', child: 'senderName' }"
					:alertMessage="
						alertObject
							.filter(
								alert =>
									(alert.src.parent === 'contactForm') &
									(alert.src.child === 'senderName')
							)
							.pop()
					"
					@value="val => (sender = val)"
					@notify="alert"
				/>
				<email-input
					v-model="email"
					label="Email"
					tag="senderEmail"
					placeholder="JDoe@email.com"
					icon="far fa-envelope"
					:isRequired="booleanTrue"
					:alertID="{ parent: 'contactForm', child: 'senderEmail' }"
					:alertMessage="
						alertObject
							.filter(
								alert =>
									(alert.src.parent === 'contactForm') &
									(alert.src.child === 'senderEmail')
							)
							.pop()
					"
					@value="val => (email = val)"
					@notify="alert"
				/>
				<phone-input
					v-model="phone"
					label="Phone number"
					tag="senderPhone"
					placeholder="(555) 555-5555"
					:alertID="{ parent: 'contactForm', child: 'senderPhone' }"
					:alertMessage="
						alertObject
							.filter(
								alert =>
									(alert.src.parent === 'contactForm') &
									(alert.src.child === 'senderPhone')
							)
							.pop()
					"
					@value="val => (phone = val)"
					@notify="alert"
				/>
				<checkbox-input
					v-if="phone"
					type="radio"
					label="Preffered means of communication?"
					tag="modeOfCommunication"
					:value="preffered"
					:options="options"
					:box="booleanTrue"
					:isRequired="booleanTrue"
					@value="val => (preffered = val)"
				/>
				<vue-textarea
					v-model="comment"
					label="message"
					tag="senderMessage"
					placeholder="message"
					:isRequired="booleanTrue"
					:alertID="{ parent: 'contactForm', child: 'senderMessage' }"
					:alertMessage="
						alertObject
							.filter(
								alert =>
									(alert.src.parent === 'contactForm') &
									(alert.src.child === 'senderMessage')
							)
							.pop()
					"
					@value="val => (comment = val)"
					@notify="alert"
				/>
			</vue-form>
		</section>
	</article>
</template>

<script lang="ts">
	// vue
	import { defineComponent, ref, inject } from "vue";

	// compnents
	import textInput from "@/components/textInput.vue";
	import emailInput from "@/components/emailInput.vue";
	import phoneInput from "@/components/phoneInput.vue";
	import vueTextarea from "@/components/vueTextarea.vue";
	import checkboxInput from "@/components/checkboxInput.vue";
	import vueForm from "@/components/vueForm.vue";
	import vueClipboard from "@/components/vueClipboard.vue";
	// mixins
	import loading from "@/typeScript/common/screenLoading";
	import notify from "@/typeScript/common/notify";

	export default defineComponent({
		name: "Contact",

		components: {
			vueForm,
			textInput,
			emailInput,
			phoneInput,
			checkboxInput,
			vueTextarea,
			vueClipboard
		},
		setup() {
			const sender = ref("");
			const email = ref("");
			const phone = ref("");
			const comment = ref("");
			const options = ["phone", "email"];
			const preffered = ref(options[1]);
			const CONFIG = {
				"Content-Type": "text/plain",
				"Access-Control-Allow-Origin": "*"
			};
			// global property
			const EMITTER: any = inject("$emitter");
			const AXIOS: any = inject("$axios");

			// mixins
			loading();
			const { alert, alertObject } = notify();

			const sendMail = function() {
				console.log("sendMail");
				AXIOS.post(
					"http://localhost:5001/portfolio-website-689b4/us-central1/router/api/notification/email",
					{
						to: "hrishirich619@gmail.com",
						name: sender.value,
						subject: "Kkiokio.com Contact Form",
						cc: email.value,
						phoneNumber: phone.value,
						preffered: preffered.value,
						content: comment.value
					}
					// CONFIG
				)
					.then(response => {
						console.log("sendMail successful");
						EMITTER.emit("alert", {
							type: "success",
							message: "Email sent to Kkiokio(Hrishikesh Karale)",
							description:
								"Please wait wait for a couple of days and Kkiokio will get back to you using your prefered method of communication.",
							dismissable: true,
							timeout: 8
						});
					})
					.catch(error => {
						console.error("sendMail FAILED", error);
						EMITTER.emit("alert", {
							type: "warning",
							message: "Error sending email.",
							description: error.response,
							dismissable: true,
							code: "101.1",
							timeout: 8
						});
					});
			}; //sendMAil

			return {
				sender,
				email,
				phone,
				comment,
				options,
				preffered,
				alert,
				alertObject,
				sendMail
			};
		}
	});
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
