//http://jsfiddle.net/8tka5h09/
<template>
	<div class="phoneInput" :class="{ inline: inline }">
		<label v-if="label" :class="{ maskField: mask }">
			{{ label }}
			<abbr v-if="isRequired" title="Required Field">*</abbr>
			<span v-else> - Optional field<abbr>*</abbr></span>
		</label>
		<div
			:class="{
				warningContainer: alertMessage ? alertMessage.warning : false,
				errorContainer: alertMessage ? alertMessage.error : false,
				iconPadding: icon,
				maskField: mask
			}"
		>
			<span v-if="icon" :class="icon" />
			<input
				v-if="!mask"
				v-model="dValue"
				type="text"
				:name="tag"
				:placeholder="placeholder"
				:maxlength="maxlength"
				:minlength="minlength"
				:pattern="pattern"
				:autofocus="autofocus"
				:disabled="isDisabled"
				:readonly="isReadOnly"
				:required="isRequired"
				@input="phoneMask(mphone(dValue))"
				@blur="validate"
			/>
		</div>
		<input-response
			:warning="alertMessage ? alertMessage.warning : ''"
			:error="alertMessage ? alertMessage.error : ''"
			:info="
				alertMessage
					? alertMessage.info
					: dValue
					? maxlength - dValue.length < 0
					: ''
			"
			:success="alertMessage ? alertMessage.success : ''"
		/>
	</div>
</template>

<script lang="ts">
	// vue
	import { defineComponent, ref, toRefs } from "vue";
	// components
	import inputResponse from "@/components/alert/inputResponse.vue";
	// ts
	import validator from "@/typeScript/utilities/validator";
	// type definition
	import SourceType from "@/typeScript/definition/notify/SourceType";

	export default defineComponent({
		name: "PhoneInput",

		components: {
			inputResponse
		}, //data

		props: {
			//sets heading/Label for the input field
			label: {
				required: false,
				type: String,
				default: null
			},

			//sets name attribute for the input field (required field in case of forms)
			tag: {
				required: false,
				type: String,
				default: "phoneInput"
			},

			//users can pass preset values for the input field
			value: {
				required: false,
				type: String,
				default: null
			},

			//sets the format/pattern for acceptable values for the input field
			//^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$
			//https://learning.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
			// phone number with extension
			pattern: {
				required: false,
				type: [RegExp, String],
				// eslint-disable-next-line vue/require-valid-default-prop
				default: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})?[-. ]?([0-9]{4})$/
			},

			//sets the placeholder attribute for the input field
			placeholder: {
				required: false,
				type: String,
				default: "Enter text here..."
			},

			//sets the minlength attribute for the input field
			minlength: {
				required: false,
				type: Number,
				default: 10
			},

			//sets the maxlength attribute for the input field
			maxlength: {
				required: false,
				type: Number,
				default: 14
			},

			// sets the manual alerts
			alertID: {
				required: false,
				type: Object as () => SourceType,
				default: { parent: null, child: null }
			},

			//sets the manual alerts
			alertMessage: {
				required: false,
				type: Object,
				default: null
			},

			//sets the required attribute for the input field
			isRequired: {
				required: false,
				type: Boolean,
				default: false
			},

			//sets the disabled attribute for the input field
			isDisabled: {
				required: false,
				type: Boolean,
				default: false
			},

			//sets the autofocus attribute for the input field
			autofocus: {
				required: false,
				type: Boolean,
				default: false
			},

			//sets the autocomplete attribute for the input field
			isAutocomplete: {
				required: false,
				type: Boolean,
				default: true
			},

			//sets the readonly attribute for the input field
			isReadOnly: {
				required: false,
				type: Boolean,
				default: false
			},

			//checks if label options should appear on the same line or not
			inline: {
				required: false,
				type: Boolean,
				default: false
			},

			//reserves space and created a mask if set to true
			mask: {
				required: false,
				type: Boolean,
				default: false
			},

			//if a valid fontawesome icon class string is passed, it displays it in the input field
			//a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
			icon: {
				required: false,
				type: String,
				default: "fas fa-phone"
			}
		}, //computed

		setup(props, { emit }) {
			// store number
			const dValue = ref(props.value);
			// mixin
			const { validate, followsPattern } = validator(toRefs(props), emit, dValue);

			const phoneMask = function(func) {
				setTimeout(() => {
					const v = func(dValue.value);
					if (v != dValue.value) {
						dValue.value = v;
					}
				}, 1);
			}; //phoneMask

			const mphone = function(v) {
				let r = v.replace(/\D/g, "");
				r = r.replace(/^0/, "");
				if (r.length > 10) {
					// 11+ digits. Format as 5+4.
					r = r.replace(/^(\d\d\d)(\d{3})(\d{0,4}).*/, "($1) $2-$3");
				} else if (r.length > 6) {
					// 6..10 digits. Format as 4+4
					r = r.replace(/^(\d\d\d)(\d{3})(\d{0,4}).*/, "($1) $2-$3");
				} else if (r.length > 3) {
					// 3..5 digits. Add (0XX..)
					r = r.replace(/^(\d\d\d)(\d{3})(\d{0,4}).*/, "($1) $2");
				} else {
					// 0..2 digits. Just add (0XX)
					r = r.replace(/^(\d\d\d)(\d{3})(\d{0,4}).*/, "($1");
				}
				return r;
			}; //mphone

			return {
				validate,
				followsPattern,
				phoneMask,
				mphone,
				dValue
			};
		}
	});
</script>

<style lang="less" scoped>
	@import (reference) "../Less/customMixins.less";

	.phoneInput {
		.inputcss();
	}
</style>
