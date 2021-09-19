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
		flex-direction: row;
		flex-wrap: nowrap;
		gap: @spaceXl;

		& > div {
			display: flex;
			flex-direction: column;
			height: 100%;
			min-width: 320px;

			&.left {
				max-width: 100%;
				gap: @spaceXl;
			}

			&.right {
				margin-top: 7 * @spaceLg;
				height: fit-content;
				gap: @spaceXl;
			}
		}
		@media screen {
			@media (max-width: @maxWidth) {
				flex-wrap: wrap;
				align-self: center;
				&.left {
					max-width: 80%;
					min-width: 320px;
				}
				& > div {
					&.right {
						display: flex;
						flex-direction: column;
						max-width: 320px;
					}
				}
			}
		}
	}
</style>
