<template>
	<div class="emailInput" :class="{ inline: inline }">
		<label v-if="label" :class="{ maskField: mask }">
			{{ label }}
			<abbr v-if="isRequired" title="Required Field">*</abbr>
			<span v-else> - Optional field<abbr>*</abbr></span>
		</label>
		<div
			:class="{
				warningContainer: dWarning,
				errorContainer: dDanger,
				iconPadding: icon,
				maskField: mask,
			}"
		>
			<span v-if="icon" :class="icon" />
			<input
				v-if="!mask"
				v-model="dEmailValue"
				type="email"
				:name="name"
				:placeholder="placeholder"
				:maxlength="maxlength"
				:pattern="pattern"
				:multiple="multiple"
				:autofocus="autofocus"
				:disabled="isDisabled"
				:readonly="isReadOnly"
				:required="isRequired"
				@input="validate"
			/>
			<!-- [A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$ -->
			<div v-if="dEmailValue" class="conditions">
				<div>
					<span
						:class="
							dEmailValue.match(/^[A-Za-z0-9._%+-]/g)
								? 'fas fa-check'
								: 'fas fa-times'
						"
					/>
					Has account name consisting of alphabets and/or numbers and/or special
					characters(%.-+_).
				</div>
				<div>
					<span
						:class="
							dEmailValue.match(/(?=@[A-Za-z0-9.-])/g)
								? 'fas fa-check'
								: 'fas fa-times'
						"
					/>
					Has a domain name consisting of alphabets, numbersm . and -. Ex:
					@google, @yahoo, @facebook etc.
				</div>
				<div>
					<span
						:class="
							dEmailValue.match(/(?=.[A-Za-z]{2,3}$)/)
								? 'fas fa-check'
								: 'fas fa-times'
						"
					/>
					Ends with a 2-3 character To plevel domain (TLD). Ex: .net, .com,
					.edu, .co etc...
				</div>
			</div>
		</div>
		<input-response
			:warning="dWarning"
			:error="dDanger"
			:char-limit-reached="
				dEmailValue ? maxlength - dEmailValue.length < 0 : false
			"
			:maxlength="maxlength"
		/>
	</div>
</template>

<script>
	import inputResponse from "@/components/alert/inputResponse.vue";
	import { validator } from "@/typeScript/validator";

	export default {
		name: "EmailInput", //props

		components: {
			inputResponse,
		}, //data

		mixins: [validator], //mixins

		props: {
			//sets heading/Label for the input field
			label: {
				required: false,
				type: [String, null],
				default: null,
			},

			//sets name attribute for the input field (required field in case of forms)
			name: {
				required: false,
				type: [String, null],
				default: "emailInput",
			},

			//users can pass preset values for the input field
			value: {
				required: false,
				type: [String, null],
				default: null,
			},

			//sets the format/pattern for acceptable values for the input field
			//[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$
			///^[^\s@]+@[^\s@]+\.[^\s@]+$/
			pattern: {
				required: false,
				type: [RegExp, String, null],
				default: new RegExp("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$"),
			},

			//sets the placeholder attribute for the input field
			placeholder: {
				required: false,
				type: [String, null],
				default: "abc@yahoo.com",
			},

			//sets the maxlength attribute for the input field
			maxlength: {
				required: false,
				type: [Number, null],
				default: 50,
			},

			//sets the multiple attribute for the input field
			multiple: {
				required: false,
				type: [Boolean, null],
				default: false,
			},

			//sets the manual alerts
			alertMessage: {
				required: false,
				type: [Object, null],
				default: null,
			},

			//sets the required attribute for the input field
			isRequired: {
				required: false,
				type: [Boolean, null],
				default: false,
			},

			//sets the disabled attribute for the input field
			isDisabled: {
				required: false,
				type: [Boolean, null],
				default: false,
			},

			//sets the autofocus attribute for the input field
			autofocus: {
				required: false,
				type: [Boolean, null],
				default: false,
			},

			//sets the autocomplete attribute for the input field
			isAutocomplete: {
				required: false,
				type: [Boolean, null],
				default: true,
			},

			//sets the readonly attribute for the input field
			isReadOnly: {
				required: false,
				type: [Boolean, null],
				default: false,
			},

			//checks if label options should appear on the same line or not
			inline: {
				required: false,
				type: [Boolean, null],
				default: false,
			},

			//reserves space and created a mask if set to true
			mask: {
				required: false,
				type: [Boolean, null],
				default: false,
			},

			//if a valid fontawesome icon class string is passed, it displays it in the input field
			//a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
			icon: {
				required: false,
				type: [String, null],
				default: "fas fa-at",
			},
		}, //beforeMount

		emits: ["alerts"],

		data() {
			return {
				//stores errors thrown by the input fields
				dDanger: null,

				//stores errors thrown by the input fields
				dWarning: null,

				//stores textbox values
				dEmailValue: null,
			}; //return
		}, //components

		watch: {
			//send warning messages back to parent component
			dWarning: function (newValue) {
				this.$emit("alerts", "warning", newValue);
			},

			//send error messages back to parent component
			dDanger: function (newValue) {
				this.$emit("alerts", "error", newValue);
			},
		}, //methods

		created() {
			//store values passed as props into dEmailValue for future manipulation
			if (this.value) {
				this.dEmailValue = this.value;
			}
		}, //created

		beforeMount() {
			const alertMessage = this.alertMessage;

			if (this.value) {
				this.validate();
			}

			if (alertMessage) {
				if (alertMessage["error"]) {
					this.dDanger = alertMessage["error"];
				} else if (alertMessage["warning"]) {
					this.dWarning = alertMessage["warning"];
				} else if (alertMessage["success"]) {
					this.dSuccess = alertMessage["success"];
				} else if (alertMessage["info"]) {
					this.dInfo = alertMessage["info"];
				}
			}
		}, //computed

		methods: {
			//validate the textbox input and set alert messages if required.
			//it also emits/send the current textbox value to  parent component as v-model attribute value
			validate: function () {
				const object = {
					value: this.dEmailValue,
					maxlength: this.maxLength,
					minlength: this.minLength,
					pattern: this.pattern,
				};
				const response = this.validator(object);
				this.dDanger = response.error;
				this.dWarning = response.warning;
			}, //validate
		}, //watch
	}; //default
</script>

<style lang="less" scoped>
	@import (reference) "../Less/customMixins.less";

	.emailInput {
		min-width: 160px;

		.inputcss();
	}
</style>
