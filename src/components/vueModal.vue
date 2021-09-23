<template>
	<div class="vueModal">
		<div v-if="text || icon" id="show-modal">
			<vue-button
				v-if="text"
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
						<div v-if="$slots['default']" class="footer">
							<template v-if="ctx">
								<vue-button
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
								class="close"
								tag="closeModal"
								icon="fas fa-times"
								category="icon"
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
	import diceLoad from "@/views/projects/css/diceLoad.vue";

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
			const autofocus = this.booleanTrue;
			const disabled = this.booleanTrue;
			const form = "";
			return {
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

		& > .mask {
			position: fixed;
			z-index: @modalZ;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.64);
			display: table;
			transition: @transition;

			& > .wrapper {
				display: flex;
				justify-content: center;
				height: 100%;

				& > .container {
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
					.backgroundColor();
					&.loading {
						border-radius: @borderRadiusLg;
					}
					& > .body {
						position: relative;
						margin: @spaceLg @spaceXl;
						display: flex;
						flex-direction: column;
						padding: @spaceLg @spaceLg;
					}
					& > .header {
						color: @backgroundColor;
						background-color: @navBackground;
						border-top-left-radius: @borderRadius;
						border-top-right-radius: @borderRadius;
						padding: @spaceMd @spaceLg;
						font-size: 2 * @fontSize;
						height: auto;
						padding: @spaceLg @spaceLg;
					}
					& > .footer {
						padding: 0 @spaceLg @spaceMd 0;
						display: flex;
						flex-direction: row-reverse;
						align-self: flex-end;
						flex-wrap: nowrap;
						width: fit-content;
						& > .close {
							position: absolute;
							top: @spaceMd;
							right: @spaceMd;
						}
					}
				}
			}
		}
	}
</style>
