<template>
	<form
		:id="form"
		:ref="form"
		:class="{ vueForm: true, singleAction: singleAction }"
		:name="form"
		:novalidate="validate"
		:autocomplete="autocomplete"
		@submit="ctx"
	>
		<h4 v-if="title" v-text="title" />
		<div class="formElements">
			<slot />
		</div>
		<div class="formButtons">
			<vue-button
				type="submit"
				:text="text"
				tag="formActionButton"
				:category="category"
				:icon="icon"
				:disabled="!validInput"
				:ctx="ctx"
			/>
			<input v-if="!singleAction" class="btn" type="reset" value="Reset" />
		</div>
	</form>
</template>

<script>
	import vueButton from "@/components/vueButton";

	export default {
		name: "VueForm", //props

		components: {
			vueButton,
		}, //data

		props: {
			title: {
				required: false,
				type: [String, null],
				default: null,
			},
			alert: {
				required: true,
				type: Object,
			},
			ctx: {
				required: true,
				type: Function,
			},
			form: {
				required: false,
				type: [String, null],
				default: null,
			},
			text: {
				required: false,
				type: [String, null],
				default: "Submit",
			},
			category: {
				required: false,
				type: [String, null],
				default: "standard",
				validator: function (value) {
					return (
						[
							"standard",
							"large",
							"small",
							"fullWidth",
							"border",
							"border-sm",
							"border-lg",
							"border-fwidth",
							"text",
							"text-sm",
							"text-lg",
							"icon",
							"icon-sm",
							"icon-lg",
							null,
						].indexOf(value) !== -1
					);
				},
			},
			icon: {
				required: false,
				type: [String, null],
				default: "fas fa-clipboard-check",
			},
			singleAction: {
				required: false,
				type: [Boolean, null],
				default: false,
			},
			autocomplete: {
				required: false,
				type: [Boolean, null],
				default: true,
			},
			validate: {
				required: false,
				type: [Boolean, null],
				default: false,
			},
		},

		computed: {
			validInput: function () {
				const alert = this.alert;
				const form = this.$refs[this.form];
				if (form && !alert["error"] && !alert["warning"]) {
					const inputs = [
						...Array.from(form.getElementsByTagName("select")),
						...Array.from(form.getElementsByTagName("input")),
					];

					for (let index = 0; index < inputs.length; ++index) {
						if (inputs[index].required && !inputs[index].value) {
							return false;
						}
						//skipPAsswordMatch value check
						if (inputs[index].type === "password") {
							index++;
						}
					}
					return true;
				}
				return false;
			}, //validInput
		}, //computed

		methods: {
			alerts: function (type, message) {
				// console.log(message);
				if (type == "warning") {
					this.dWarning = message;
				} else if (type == "error") {
					this.dDanger = message;
				} else {
					alert("error in input alert module");
				}
			}, //alerts
		}, //methods
	}; //default
</script>

<style lang="less" scoped>
	@import (reference) "../Less/customMixins.less";
	@import (reference) "../Less/customVariables.less";

	.vueForm {
		display: flex;
		flex-direction: column;
		align-self: center;
		width: max-content;
		height: fit-content;
		gap: @spaceXl;
		width: 100%;
		& > h4 {
			margin-bottom: 0 !important;
		}
		&.singleAction {
			gap: 0;
			flex-flow: row wrap;
			& > .formElements {
				max-width: 320px;
				min-width: 240px;
			}
			& > .formButtons {
				align-self: flex-start;
				justify-content: flex-end;
				margin-right: 0;
			}
		}
		& > div {
			display: flex;
			&.formElements {
				flex-direction: column;
			}

			&.formButtons {
				flex-direction: row-reverse;
				gap: @spaceMd;
				align-items: center;
				& > input {
					font-size: @fontSizeMd;
					&[type="reset"] {
						background-color: transparent;
						&:hover {
							background-color: @accentColor;
							color: @backgroundColor;
						}
					}
				}
			}
		}
	}
</style>
