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
			gap: @spaceXl;
			height: fit-content;

			&.left {
				.res1600p();
			}

			&.right {
				max-width: 320px;
				min-width: 240px;
				margin-top: 7 * @spaceLg;
			}
		}
		@media screen {
			@media (max-width: @1600width) {
				& > div {
					&.left {
						.res1200p();
					}
				}
			}
			@media (max-width: @1200width) {
				& > div {
					&.left {
						.res1200p();
					}
				}
			}
			@media (max-width: @768width) {
				flex-direction: column;
				& > div {
					&.left,
					&.right {
						.res768p();
					}
					&.right {
						margin-top: 0;
						flex-flow: row wrap;
						justify-content: center;
					}
				}
			}
			@media (max-width: @480width) {
				& > div {
					&.left,
					&.right {
						.res480p();
					}
				}
			}
			@media (max-width: @320width) {
				& > div {
					&.left,
					&.right {
						.res320p();
					}
				}
			}
		}
	}
</style>
