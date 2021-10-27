<template>
	<div class="inputResponse">
		<div v-if="error" class="errorMessage">
			<span class="fas fa-exclamation-circle" />
			<b v-text="error" />
		</div>
		<div v-else-if="warning" class="warningMessage">
			<span class="fas fa-exclamation-triangle" />
			<b v-text="warning" />
		</div>
		<div v-else-if="info" class="infoMessage">
			<span class="fas fa-info-circle" />
			<b v-text="info" />
		</div>
		<div v-else-if="charLimitReached" class="infoMessage">
			<span class="fas fa-info-circle" />
			Character limit of {{ maxlength }} reached
		</div>
	</div>
</template>

<script>
	export default {
		name: "InputResponse",

		props: {
			error: {
				type: String,
				required: false,
				default: null,
			},

			warning: {
				type: String,
				required: false,
				default: null,
			},

			info: {
				type: String,
				required: false,
				default: null,
			},

			charLimitReached: {
				type: Boolean,
				required: false,
				default: false,
			},

			maxlength: {
				type: Number,
				required: false,
				default: null,
			},
		}, //props
	}; //default
</script>

<style lang="less" scoped>
	@import (reference) "../../Less/customVariables.less";

	.inputResponse {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		z-index: @contentZ;

		& > div {
			display: flex;
			margin-top: @spaceMd;
			font-size: @fontSizeSm;
			align-items: flex-start;
			justify-content: space-between;
			letter-spacing: 1px !important;
			line-height: @fontSizeSm *1.618;
			gap: @spaceMd;
			height: fit-content;

			&.infoMessage {
				color: @infoText;
			}

			&.warningMessage {
				color: @warningText;
			}

			&.errorMessage {
				color: @dangerText;
			}
		}
	}
</style>
