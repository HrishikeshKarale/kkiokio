<template>
	<div class="emailInput" :class="{ inline: inline }">
		<label v-if="label" :class="{ maskField: mask }">
			{{ label }}
			<abbr v-if="isRequired" title="Required Field">*</abbr>
			<span v-else> - Optional field<abbr>*</abbr></span>
		</label>
		<div
			:class="{
				warningContainer: alert ? alert.warning : false,
				errorContainer: alert ? alert.error : false,
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
				@blur="followsPattern"
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
					Has account name consisting of alphabets
					and/or numbers and/or special
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
					Has a domain name consisting of alphabets,
					numbersm . and -. Ex:
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
					Ends with a 2-3 character To plevel
					domain (TLD). Ex: .net, .com,
					.edu, .co etc...
				</div>
			</div>
		</div>
		<input-response
			:warning="alert ? alert.warning : ''"
			:error="alert ? alert.error : ''"
			:char-limit-reached="
				dEmailValue ? maxlength - dEmailValue.length < 0 : false
			"
			:maxlength="maxlength"
		/>
	</div>
</template>

<script lang="ts">
// vue
import { defineComponent, toRef, toRefs } from 'vue';
// components
import inputResponse from '@/components/alert/inputResponse.vue';
// ts
import validator from '@/typeScript/utilities/validator';

export default defineComponent({
	name: 'emailInput', // props

	components: {
		inputResponse,
	}, // data

	props: {
		// sets heading/Label for the input field
		label: {
			required: false,
			type: String,
			default: null,
		},

		// sets name attribute for the input
		// field (required field in case of forms)
		name: {
			required: false,
			type: String,
			default: 'emailInput',
		},

		// users can pass preset values for the input field
		value: {
			required: false,
			type: String,
			default: null,
		},

		// sets the format/pattern for acceptable values for the input field
		// [a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$
		/// ^[^\s@]+@[^\s@]+\.[^\s@]+$/
		pattern: {
			required: false,
			type: [RegExp, String],
			default: new RegExp('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,3}$'),
		},

		// sets the placeholder attribute for the input field
		placeholder: {
			required: false,
			type: String,
			default: 'abc@yahoo.com',
		},

		// sets the maxlength attribute for the input field
		maxlength: {
			required: false,
			type: Number,
			default: 50,
		},

		// sets the multiple attribute for the input field
		multiple: {
			required: false,
			type: Boolean,
			default: false,
		},

		// sets the manual alerts
		alert: {
			required: false,
			type: Object,
			default: null,
		},

		// sets the required attribute for the input field
		isRequired: {
			required: false,
			type: Boolean,
			default: false,
		},

		// sets the disabled attribute for the input field
		isDisabled: {
			required: false,
			type: Boolean,
			default: false,
		},

		// sets the autofocus attribute for the input field
		autofocus: {
			required: false,
			type: Boolean,
			default: false,
		},

		// sets the autocomplete attribute for the input field
		isAutocomplete: {
			required: false,
			type: Boolean,
			default: true,
		},

		// sets the readonly attribute for the input field
		isReadOnly: {
			required: false,
			type: Boolean,
			default: false,
		},

		// checks if label options should appear on the same line or not
		inline: {
			required: false,
			type: Boolean,
			default: false,
		},

		// reserves space and created a mask if set to true
		mask: {
			required: false,
			type: Boolean,
			default: false,
		},

		// if a valid fontawesome icon class string is passed,
		// it displays it in the input field
		// a valid fontawesome icons class string
		// is a string which starts with fas/far/fab/fa
		icon: {
			required: false,
			type: String,
			default: 'fas fa-at',
		},

		// uses the values to trigger validation
		// by using v-on attribute
		keyup: {
			type: Array,
			required: false,
			default: () => ['keyup.tab', 'keyup.enter'],
		},
	}, // beforeMount

	setup(props, { emit }) {
		// store email
		const dEmailValue = toRef(props, 'value');
		// mixin
		const {
			validate,
			followsPattern,
		} = validator(toRefs(props), emit, dEmailValue);

		return {
			dEmailValue,
			validate,
			followsPattern,
		};
	},
});
</script>

<style lang="less" scoped>
	@import (reference) "../less/customMixins.less";

	.emailInput {
		min-width: 160px;

		.inputcss();
	}
</style>
