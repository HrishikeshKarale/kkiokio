<template>
	<div class="sideBySideLayout">
		<div class="left">
			<slot name="left" />
		</div>
		<div class="right">
			<slot name="right" />
		</div>
	</div>
</template>

<script>
	export default {
		name: "sideBySideLayout",
	};
</script>

<style lang= "less" scoped>
	@import (reference) "../Less/customMixins.less";
	@import (reference) "../Less/customVariables.less";

	.sideBySideLayout {
		display: flex;
		flex-flow: row nowrap;
		gap: @spaceXl;

		& > div {
			display: flex;
			flex-direction: column;
			height: 100%;
			width: 100%;

			&.left {
				width: 100%;
				gap: @spaceXl;
			}

			&.right {
				margin-top: 7 * @spaceLg;
				height: fit-content;
				gap: @spaceXl;
			}
		}
		@media screen {
			@media (max-width: @1600width) {
				& > div {
					&.left {
						width: @1200width;
					}
					&.right {
						width: 320px;
					}
				}
			}
			@media (max-width: @1200width) {
				flex-direction: column;
				& > div {
					&.left,
					&.right {
						width: calc(@768width - 2 * @spaceXl);
					}
					&.right {
						margin-top: 0;
						flex-flow: row wrap;
					}
				}
			}
			@media (max-width: @768width) {
				& > div {
					&.left,
					&.right {
						max-width: 100%;
						min-width: @480width;
						justify-content: center;
					}
				}
			}
			@media (max-width: @480width) {
				& > div {
					&.left,
					&.right {
						width: @480width;
					}
				}
			}
			@media (max-width: @320width) {
				& > div {
					&.left,
					&.right {
						width: @320width;
					}
				}
			}
		}
	}
</style>
