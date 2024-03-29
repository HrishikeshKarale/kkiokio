// https://tympanus.net/Development/AnimatedCheckboxes/
<template>
	<div class="radioInput" :class="{ inline: inline }">
		<label
			v-if="label || (type == 'checkbox' && !options)"
			:class="{ maskField: mask }"
		>
			<!-- checkbox only -->
			<input
				v-if="type == 'checkbox' && !options && !mask"
				ref="singleCheckbox"
				type="checkbox"
				:name="name"
				:checked="value"
				:disabled="isDisabled"
				:autofocus="autofocus"
				@input="check(value)"
			/>
			{{ label }}
			<abbr v-if="isRequired" title="Required Field">*</abbr>
			<span v-else> - Optional field<abbr>*</abbr></span>
			<input :name="name" type="hidden" :value="value" :required="isRequired" />
			<vue-button
				v-if="options && value"
				id="clearSelection"
				tag="resetValue"
				text="Reset"
				icon="fas fa-undo"
				category="icon-sm"
				:ctx="clearSelection.bind(this)"
			/>
		</label>
		<div
			v-if="options"
			:class="{
				box: box,
				warningContainer: alertMessage.warning,
				errorContainer: alertMessage.danger,
				maskField: mask,
				inline: inline
			}"
		>
			<template v-if="!mask">
				<label
					v-for="(option, index) in options"
					:key="index"
					:class="{
						errorLabel: alertMessage.danger,
						checked:
							value && type == 'checkbox'
								? value.includes(option)
								: option == value
					}"
					:style="{
						'color: #aaaaaa; cursor: not-allowed;': disabled
					}"
				>
					<input
						:ref="option"
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
					/>
					{{ option }}
				</label>
			</template>
		</div>
		<input-response :error="alertMessage.danger" />
	</div>
</template>

<script>
	import inputResponse from "@/components/alert/inputResponse";
	import vueButton from "@/components/vueButton";

	export default {
		name: "RadioInput", //watch

		components: {
			inputResponse,
			vueButton
		}, //emits

		props: {
			//sets type for the input field
			//valid values include ['checkbox', 'radio']
			type: {
				required: false,
				type: String,
				validator: function(value) {
					return ["checkbox", "radio"].indexOf(value) !== -1;
				},
				default: "checkbox"
			},

			//sets heading for the checkboxes category
			//in case of single/no-option checkbox, label is used as checkbox text
			label: {
				required: false,
				type: String,
				default: null
			},

			//sets the name attribute for the input field (required field in case of forms)
			name: {
				required: false,
				type: String,
				default: "radioInput"
			},

			//users can pass preset values for the input field
			value: {
				required: true,
				type: [Boolean, Array, String, Number, null],
				// type: function(props) {
				//   if (!props.options) {
				//     return Boolean;
				//   } else if (props.type != "radio") {
				//     return [Array, null];
				//   } else {
				//     //type == radio
				//     return [String, Number, null];
				//   }
				// },
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

			//Array of options/labels in case of multiple checkboxes.
			options: {
				required: false,
				type: [Array, null],
				default: null
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
			}
		}, //methods

		emits: ["selected", "value"],

		methods: {
			clearSelection: function() {
				const options = this.options;
				options.forEach(option => {
					let tag = this.$refs[option].checked;

					if (tag) {
						tag = false;
					}
				});
				this.$emit("value", null);
			}, //clearSelection

			check: function(checkedValue) {
				let value = this.value;
				if (this.options) {
					//checkbox
					if (this.type == "checkbox") {
						if (value) {
							value = [...value];
							const index = value.indexOf(checkedValue);
							if (index != -1) {
								value = value.splice(index, 1);
								// console.log("check: ", Array.from(value), typeof value);
								this.$emit("value", value);
							} else {
								value = [...this.value, checkedValue];
								this.$emit("value", value);
							}
						} else {
							this.$emit("value", [checkedValue]);
						}
					} else {
						// if type = radio
						// console.log(checkedValue, this.type);
						this.$emit("value", checkedValue);
					}
				} else {
					//this.options does not exist
					// console.log(this.$refs["singleCheckbox"].checked);
					this.$emit("value", this.$refs["singleCheckbox"].checked);
				}
			} //check
		} //components
	}; //default
</script>

<style lang="less" scoped>
	@import (reference) "../Less/customMixins.less";
	@import (reference) "../Less/customVariables.less";

	.radioInput {
		.checkboxCss();
	}
</style>
