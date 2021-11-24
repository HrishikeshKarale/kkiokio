<template>
	<article class="contact">
		<header>
			<h1>Contact Me</h1>
		</header>
		<p>
			Hello, My name is Hrishikesh Karale and I live in Upstate New York.
		</p>
		<p>
			Feel free to use the contact form below and reach out to me for any
			questions yo might have.
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
					<vue-clipboard
						id="phoneNumber"
						copy="5855207382"
						category="icon"
					/>
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
				<h3>Postal Address
					<vue-clipboard
						id="address"
						copy='44 Crittenden Way,
Apartment 2,
Rochester, NY 14623.'
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

	export default {
		name: "Contact",
		mixins: [loading],
		components: {
			textInput,
			emailInput,
			phoneInput,
			vueTextarea,
			vueClipboard,
		},
	};
</script>

<style lang="less" scoped>
	@import (reference) "./../../Less/customMixins.less";
	@import (reference) "./../../Less/customVariables.less";

	.contact {

		& > section {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: @spaceXl;
			margin: 0;
			margin-top: 2*@spaceXl;
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
