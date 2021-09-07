<template>
	<div v-if="!close" :class="['vueAlert', type]">
		<span :class="[type, alertIcon]" />
		<div :class="type">
			<h5>
				<b>{{ type == "danger" ? code + " - " : "" }} {{ message }}</b>
			</h5>
			<p v-text="description" />
		</div>
		<template v-if="dismissible">
			<vue-button
				tag="closeAlertButton"
				icon="fas fa-times"
				category="icon"
				:ctx="closeAlertBox.bind(this)"
			/>
		</template>
	</div>
</template>

<script>
	import vueButton from "@/components/vueButton.vue";

	export default {
		name: "vueAlert", //data

		components: {
			vueButton,
		}, //components

		props: {
			type: {
				required: true,
				type: String,
				default: "info",
				validator: function (value) {
					if (["info", "success", "warning", "danger"].includes(value)) {
						return true;
					} else {
						alert(
							"Invalid prop value found in <vue-alert>.\nPossible values: [info, success, warning, danger]\nYou Entered: " +
								value
						);
					}
				},
			},

			code: {
				type: String,
				required: function () {
					if (this.type == "danger") {
						return true;
					}
					return false;
				},
				default: "",
			},

			message: {
				required: true,
				type: String,
				default: "default/no alert message specified",
			},

			description: {
				required: true,
				type: String,
				default: "default/no alert message specified",
			},

			dismissible: {
				required: false,
				type: Boolean,
				default: false,
			},

			timeout: {
				required: false,
				type: Number,
				default: null,
			},
		},

		data() {
			const alertIcon = "";
			const booleanTrue = true;
			const close = false;
			const tag = "closeAlertButton";
			return {
				alertIcon,
				close,
				tag,
				booleanTrue,
			}; //return
		}, //methods

		created() {
			switch (this.type) {
				case "warning":
					this.alertIcon = "fas fa-exclamation-triangle";
					break;
				case "info":
					this.alertIcon = "fas fa-info-circle";
					break;
				case "success":
					this.alertIcon = "fas fa-check-circle";
					break;
				case "danger":
					this.alertIcon = "fas fa-exclamation-circle";
					break;
			}
		}, //created

		mounted() {
			const timeout = this.timeout;

			if (timeout && timeout != 0) {
				setTimeout(this.closeAlertBox, timeout * 1000);
			}
		}, //props

		methods: {
			closeAlertBox() {
				this.close = true;
			}, //closeAlertBox
		}, //mounted
	}; //default
</script>

<style lang="less" scoped>
	@import (reference) "../../Less/customVariables.less";

	.vueAlert {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		border-radius: @borderRadius;
		border: 1px solid transparent;
		min-width: fit-content;
		max-width: 320px;
		border-left-width: 8px;
		padding: @spaceSm @spaceMd;
		gap: @spaceMd;
		z-index: @modalZ;
		&.bottom {
			top: auto;
			bottom: @spaceXl;
		}

		& > span {
			padding: @spaceLg 0 0 0;
		}

		& > div {
			display: flex;
			flex-direction: column;
			& > h5 {
				margin: 0 !important;
				margin-top: @spaceLg !important;
				& + p {
					margin-bottom: @spaceMd !important;
				}
			}
		}

		//alert type
		&.danger {
			border-color: @dangerText;
			background-color: @dangerBackground;

			h5,
			span {
				color: @dangerText;
			}
		}
		&.warning {
			border-color: @warningText;
			background-color: @warningBackground;

			h5,
			span {
				color: @warningText;
			}
		}
		&.success {
			border-color: @successText;
			background-color: @successBackground;

			h5,
			span {
				color: @successText;
			}
		}
		&.info {
			border-color: @infoText;
			background-color: @infoBackground;

			h5,
			span {
				color: @infoText;
			}
		}
	}
</style>
