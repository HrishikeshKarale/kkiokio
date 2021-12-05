// https://tympanus.net/Development/AnimatedCheckboxes/
<template>
	<div class="checkboxInput" :class="{ inline: inline }">
		<label
			v-if="label || (type == 'checkbox' && !options?.length)"
			:class="{ maskField: mask, checked: !options?.length && value }"
		>
			<!-- checkbox only -->
			<input
				v-if="type !== 'radio' && !options?.length && !mask"
				ref="singleCheckbox"
				type="checkbox"
				:name="tag"
				:checked="value"
				:disabled="isDisabled"
				:autofocus="autofocus"
				@input="check(value)"
				@keyup[0]="check(value)"
				@keyup[1]="check(value)"
			/>
			{{ label }}
			<abbr v-if="isRequired" title="Required Field">*</abbr>
			<span v-else-if="options"> - Optional field<abbr>*</abbr></span>
			<!-- stores the value of the component to be used when validating a form -->
			<input :name="tag" type="hidden" :value="value" :required="isRequired" />
			<vue-button
				v-if="options?.length && value"
				id="clearSelection"
				tag="resetValue"
				text="Reset"
				category="text-sm"
				:ctx="clearSelection.bind(this)"
			/>
		</label>
		<div
			v-if="options"
			:class="{
				box: box,
				warningContainer: alert ? alert.warning : false,
				errorContainer: alert ? alert.error : false,
				maskField: mask,
				inline: inline
			}"
		>
			<template v-if="!mask">
				<label
					v-for="(option, index) in options"
					:key="index"
					:class="{
						errorLabel: alert ? alert.error : false,
						checked: value.includes(option)
					}"
					:style="{
						'color: #aaaaaa; cursor: not-allowed;': disabled
					}"
				>
					<input
						:ref="
							el => {
								checkbox[index] = el;
							}
						"
						:type="type"
						:name="option"
						:checked="
							value && type == 'checkbox'
								? value.includes(option)
								: option == value
						"
						:value="option"
						:disabled="isDisabled"
						:autofocus="index == 0 ? autofocus : false"
						@input="check(option)"
						@keyup[0]="check(option)"
						@keyup[1]="check(option)"
					/>
					{{ option }}
				</label>
			</template>
		</div>
		<input-response
			:warning="alert ? alert.warning : ''"
			:error="alert ? alert.error : ''"
			:info="alert ? alert.info : ''"
			:success="alert ? alert.success : ''"
		/>
	</div>
</template>

<script lang="ts">
	// vue
	import { defineComponent, ref, onBeforeUpdate, toRef } from "vue";
	//components
	import inputResponse from "./alert/inputResponse.vue";
	import vueButton from "./vueButton.vue";
	// type definition
	import SourceType from "@/typeScript/definition/notify/SourceType";

	export default defineComponent({
		components: {
			inputResponse,
			vueButton
		}, //components

		props: {
			//sets type for the input field
			//valid values include ['checkbox', 'radio']
			type: {
				required: false,
				type: String,
				validator: function(value: string) {
					return ["checkbox", "radio"].indexOf(value) !== -1;
				},
				default: "checkbox"
			},

			//sets heading for the checkboxes category
			//in case of single/no-option checkbox, label is used as checkbox text
			label: {
				required: false,
				type: String,
				default: ""
			},

			//sets the tag attribute for the input field (required field in case of forms)
			tag: {
				required: false,
				type: String,
				default: "checkboxInput"
			},

			//Array of options/labels in case of multiple checkboxes.
			options: {
				required: false,
				type: Array,
				default: () => []
			},

			//users can pass preset values for the input field
			value: {
				required: true,
				type: [Boolean, Array, String, Number],
				default: function(props) {
					if (!props.options) {
						return false;
					} else if (props.type == "checkbox") {
						return [];
					} else {
						//type == radio
						return null;
					}
				}
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

			//checks if label options should appear on the same line or as buttons
			box: {
				required: false,
				type: Boolean,
				default: false
			},

			//uses the values to trigger validation by using v-on attribute
			keyup: {
				type: Array,
				required: false,
				default: () => ["keyup.tab", "keyup.enter"]
			}
		}, //props

		setup(props, { emit }) {
			const singleCheckbox = ref<HTMLInputElement>();
			const checkbox = ref<HTMLInputElement[]>([]);
			const VALUE: any = toRef(props, "value");
			const OPTIONS: any = toRef(props, "options");
			const TYPE: any = toRef(props, "type");
			// const VALUE = props.value;
			// const OPTIONS = props.options;
			// const TYPE = props.type;

			// make sure to reset the refs before each update
			onBeforeUpdate(() => {
				checkbox.value = [];
			});

			const check = checkedValue => {
				let val = VALUE.value;
				if (OPTIONS.value.length) {
					//checkbox
					if (TYPE.value !== "radio") {
						if (val) {
							//check if already exist in the form of an array
							//if not then convert it into an array
							if (Array.isArray(val)) {
								val = [...val];
							} else {
								val = [val];
							}
							const index = val.indexOf(checkedValue);
							if (index > -1) {
								val.splice(index, 1);
								// console.log("check: ", Array.from(val), typeof val);
								emit("value", val);
							} else {
								val = [...val, checkedValue];
								emit("value", val);
							}
						} else {
							emit("value", [checkedValue]);
						}
					} else {
						// if type = radio
						// console.log(checkedValue, this.type);
						emit("value", checkedValue);
					}
				} else {
					//this.options does not exist
					// console.log(this.$refs["singleCheckbox"].checked);
					emit("value", singleCheckbox.value!.checked);
				}
			}; //check

			const clearSelection = () => {
				const element = checkbox.value;
				element.forEach((el: HTMLInputElement) => {
					el.checked = false;
				});
				emit("value", null);
			}; //clearSelection

			return { singleCheckbox, check, clearSelection, checkbox };
		}
	}); //default
</script>

<style lang="less" scoped>
	@import (reference) "../less/customMixins.less";
	@import (reference) "../less/customVariables.less";

	.checkboxInput {
		.checkboxCss();
	}
</style>
