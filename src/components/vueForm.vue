<template>
	<form
		:id="tag"
		:ref="tag"
		:class="{ vueForm: true, singleAction: singleAction }"
		:name="tag"
		:novalidate="validate"
		:autocomplete="isAutocomplete"
		@submit="ctx"
	>
		<h3 v-if="title" v-text="title" />
		<p v-if="description" v-text="description" />
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
				:isDisabled="!validInput"
				:ctx="ctx"
			/>
			<input v-if="!singleAction" class="btn" type="reset" value="Reset" />
		</div>
	</form>
</template>
<script lang='ts'>
	// vue
	import { defineComponent, computed, onMounted, toRef } from "vue";
	// components
	import vueButton from "@/components/vueButton.vue";
	// type definition
	import SourceType from "@/typeScript/definition/notify/SourceType";

	export default defineComponent({
		name: "VueForm",

		components: {
			vueButton
		}, // components

		props: {
			title: {
				required: false,
				type: String,
				default: null
			},

			description: {
				required: false,
				type: String,
				default: null
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
			ctx: {
				required: true,
				type: Function
			},
			tag: {
				required: false,
				type: String,
				default: null
			},
			text: {
				required: false,
				type: String,
				default: "Submit"
			},
			category: {
				required: false,
				type: String,
				default: "standard",
				validator: (value: string): boolean =>
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
						null
					].indexOf(value) !== -1
			},
			icon: {
				required: false,
				type: String,
				default: "fas fa-clipboard-check"
			},
			singleAction: {
				required: false,
				type: Boolean,
				default: false
			},
			isAutocomplete: {
				required: false,
				type: Boolean,
				default: true
			},
			validate: {
				required: false,
				type: Boolean,
				default: false
			}
		}, // props

		setup(props) {
			const TAG = toRef(props, "tag");
			const ALERT = toRef(props, "alertMessage");
			const VALIDATE = toRef(props, "validate");

			let formElement = document.getElementById(TAG.value);

			onMounted(() => {
				formElement = document.getElementById(TAG.value);
			});

			// returns true if inputs entered are valid
			// or validate flag set to false
			const validInput = computed((): boolean => {
				if (!VALIDATE.value) return true;
				if (formElement && !ALERT.value.error && !ALERT.value.warning) {
					const inputs = [
						...Array.from(formElement.getElementsByTagName("select")),
						...Array.from(formElement.getElementsByTagName("input"))
					];

					for (let index = 0; index < inputs.length; index += 1) {
						if (inputs[index].required && !inputs[index].value) {
							return false;
						}
						// skipPAsswordMatch value check
						if (inputs[index].type === "password") {
							index += 1;
						}
					}
					return true;
				}
				return false;
			});

			return {
				validInput
			};
		}
	});
</script>

<style lang='less' scoped>
	@import (reference) "../Less/customMixins.less";
	@import (reference) "../less/customVariables.less";

	.vueForm {
		display: flex;
		flex-direction: column;
		align-self: center;
		justify-content: center;
		width: fit-content;
		height: fit-content;
		gap: @spaceXl;
		& > h3,
		& > p {
			margin-bottom: 0 !important;
		}
		& > p {
			min-width: 240px;
			max-width: 480px;
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
							background-color: @accent;
							color: @backgroundColor;
						}
					}
				}
			}
		}
	}
</style>
