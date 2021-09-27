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

	@sideBarWidth: 320px;

	.sideBySideLayout {
		display: flex;
		flex-flow: row nowrap;
		gap: @spaceXl;
		/* padding: 32px; */

		& > div {
			display: flex;
			flex-direction: column;
			height: 100%;
			gap: @spaceXl;
			height: fit-content;

			&.left {
				.responsive(@1600width - @sideBarWidth, 0);
			}

			&.right {
				max-width: @sideBarWidth;
				min-width: 240px;
				margin-top: 7 * @spaceLg;
			}
		}
		@media screen {
			@media (max-width: @1600width) {
				& > div {
					&.left {
						.responsive(@1200width - @sideBarWidth, 0);
					}
				}
			}
			@media (max-width: @1200width) {
				& > div {
					&.left {
						.responsive(@768width - @sideBarWidth, 0);
					}
				}
			}
			@media (max-width: @768width) {
				flex-direction: column;
				& > div {
					&.left,
					&.right {
						.responsive(@768width, -2);
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
						.responsive(@480width, 0);
					}
				}
			}
			@media (max-width: @320width) {
				& > div {
					&.left,
					&.right {
						.responsive(@1200width - @sideBarWidth, 0);
					}
				}
			}
		}
	}
</style>
