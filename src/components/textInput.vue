<template>
	<div class="textInput" :class="{ inline: inline }">
		<label v-if="label" :class="{ maskField: mask }">
			{{ label }}
			<abbr v-if="required" title="Required Field">*</abbr>
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
				:disabled="disabled"
				:readonly="readonly"
				:autocomplete="autocomplete"
				:required="required"
				v-on:keyup[0]="validate"
				v-on:keyup[1]="validate"
				@input="validate"
				@blur="followsPattern"
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

<script lang='ts'>
	// vue
	import { defineComponent, ref, reactive } from "vue";
	// components
	import inputResponse from "@/components/alert/inputResponse.vue";
	// ts
	import validator from "@/typeScript/utilities/validator";
	// type definition
	import SourceType from "@/typeScript/definition/notify/SourceType";

	export default defineComponent({
		components: {
			inputResponse
		}, // components

		props: {
			// sets heading/Label for the
			// input field
			label: {
				required: false,
				type: String,
				default: ""
			},

			// sets tag attribute for the
			// input field (required field in case of forms)
			tag: {
				required: false,
				type: String,
				default: "textInput"
			},

			// users can pass preset values
			// for the input field
			value: {
				required: false,
				type: String,
				default: ""
			},

			// sets the format/pattern for
			// acceptable values for the input field
			pattern: {
				required: false,
				type: [RegExp, String]
			},

			// sets the placeholder attribute
			// for the input field
			placeholder: {
				required: false,
				type: String,
				default: "Enter text here..."
			},

			// sets the minlength attribute
			// for the input field
			minlength: {
				required: false,
				type: Number,
				default: 0
			},

			// sets the maxlength attribute
			// for the input field
			maxlength: {
				required: false,
				type: [Number],
				default: 50
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

			// sets the required attribute
			// for the input field
			required: {
				required: false,
				type: Boolean,
				default: false
			},

			// sets the disabled attribute
			// for the input field
			disabled: {
				required: false,
				type: Boolean,
				default: false
			},

			// sets the autofocus attribute
			// for the input field
			autofocus: {
				required: false,
				type: Boolean,
				default: false
			},

			// sets the autocomplete attribute
			// for the input field
			autocomplete: {
				required: false,
				type: Boolean,
				default: true
			},

			// sets the readonly attribute
			// for the input field
			readonly: {
				required: false,
				type: Boolean,
				default: false
			},

			// checks if label options should
			// appear on the same line or not
			inline: {
				required: false,
				type: Boolean,
				default: false
			},

			// reserves space and created a
			// mask if set to true
			mask: {
				required: false,
				type: Boolean,
				default: false
			},

			// if a valid fontawesome icon class
			// string is passed, it displays it in the input field
			// a valid fontawesome icons class
			// string is a string which starts with fas/far/fab/fa
			icon: {
				required: false,
				type: String,
				default: ""
			},

			// uses the values to trigger validation by using v-on attribute
			keyup: {
				type: Array,
				required: false,
				default: () => ["keyup.tab", "keyup.enter"]
			}
		}, // props

		setup(props, { emit }) {
			const dValue = ref("");
			const alertObject = reactive({
				warning: props.alertMessage ? props.alertMessage.warning : "",
				error: props.alertMessage ? props.alertMessage.error : ""
			});
			const { validate, followsPattern } = validator(props, emit, dValue);
			return {
				alertObject,
				dValue,
				validate,
				followsPattern
			};
		}
	});
</script>

<style lang="less" scoped>
	@import (reference) "../less/customMixins.less";
	.textInput {
		.inputcss();
		/* .placeholder(); */
	}
</style>
