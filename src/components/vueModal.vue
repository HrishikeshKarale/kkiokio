<template>
	<div class="vueModal">
		<div id="show-modal" v-if="text | icon">
			<vue-button
				v-if="text"
				:type="buttonType"
				:tag="'open' + tag + 'Modal'"
				:text="text"
				:icon="icon"
				category="large"
				:disabled="!disabled"
				:autofocus="!autofocus"
				:ctx="
					() => {
						$emit('display', !display);
					}
				"
			/>
			<vue-button
				v-else
				:type="buttonType"
				tag='"open"+tag+"Modal"'
				:text="text"
				:icon="icon"
				category="text"
				:disabled="!disabled"
				:autofocus="!autofocus"
				:ctx="
					() => {
						$emit('display', !display);
					}
				"
			/>
		</div>
		<transition v-if="display" name="modal" :show-modal="display">
			<div class="mask">
				<div class="wrapper">
					<div :class="['container', $slots['default'] ? '' : 'loading']">
						<div v-if="title" class="header" v-text="title" />
						<div class="body">
							<slot>
								<dice-load />
							</slot>
						</div>
						<div class="footer" v-if="$slots['default']">
							<template v-if="ctx">
								<vue-button
									:type="buttonType"
									:tag="tag"
									text="CONFIRM"
									:icon="icon"
									category="large"
									:disabled="!disabled"
									:autofocus="!autofocus"
									:ctx="ctx"
								/>
							</template>
							<vue-button
								:type="buttonType"
								tag="closeModal"
								text="Close"
								category="text"
								:disabled="!disabled"
								:autofocus="!autofocus"
								:ctx="
									() => {
										$emit('display', false);
									}
								"
							/>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import vueButton from "@/components/vueButton";
	import diceLoad from "@/views/project/css/diceLoad.vue";

	export default {
		name: "VueModal", //props

		components: {
			vueButton,
			diceLoad,
		}, //data

		props: {
			title: {
				required: false,
				type: [String, null],
				default: null,
			},

			text: {
				required: false,
				type: [String, null],
				default: null,
			},

			tag: {
				required: false,
				type: [String, null],
				default: null,
			},

			icon: {
				required: false,
				type: [String, null],
				default: null,
			},

			display: {
				required: false,
				type: [Boolean, null],
				default: false,
			},

			ctx: {
				required: false,
				type: [Function, null],
				default: null,
			},
		},

		data() {
			const buttonType = "button";
			const booleanTrue = true;
			const autofocus = booleanTrue;
			const disabled = booleanTrue;
			const form = "";
			return {
				buttonType,
				autofocus,
				disabled,
				form,
			}; //return
		}, //components
	}; //default
</script>

<style lang="less" scoped>
	@import (reference) "./../Less/customMixins.less";
	@import (reference) "./../Less/customVariables.less";

	.vueModal {
		display: inline-flex;
		// outline: 9999px solid rgba(0, 0, 0, 0.5);

		.mask {
			position: fixed;
			z-index: @modalZ;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);
			display: table;
			transition: @transition;

			.wrapper {
				display: flex;
				justify-content: center;
				height: 100%;

				.container {
					display: flex;
					flex-flow: column nowrap;
					align-self: center;
					min-width: 80px;
					max-width: fit-content;
					height: fit-content;
					background-color: @backgroundColor;
					border-radius: @borderRadius;
					transition: @transition;
					.boxShadow(@two);
					&.loading {
						border-radius: @spaceLg;
					}

					.header {
						color: @backgroundColor;
						background-color: @navBackground;
						border-top-left-radius: @borderRadius;
						border-top-right-radius: @borderRadius;
						padding: @spaceMd @spaceLg;
						font-size: 2 * @fontSize;
						height: auto;
						text-align: left;
					}

					.body {
						margin: @spaceLg @spaceXl;
						display: flex;
						flex-direction: row;
						flex-wrap: wrap;
					}

					.footer {
						padding: 0 @spaceLg @spaceMd 0;
						display: flex;
						flex-direction: row-reverse;
						align-self: flex-end;
						flex-wrap: nowrap;
						width: fit-content;
					}
				}
			}
		}
	}

	/*
																																																																													    * The following styles are auto-applied to elements with
																																																																													    * transition= "modal" when their visibility is toggled
																																																																													    * by Vue.js.
																																																																													    *
																																																																													    * You can easily play with the modal transition by editing
																																																																													    * these styles.
																																																																													    */

	.enter,
	.leave-active {
		.opacity(0);
	}

	.enter .container,
	.leave-active .container {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}
</style>
