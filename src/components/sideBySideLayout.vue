<template>
	<div class="sideBySideLayout">
		<div class="leftComponent">
			<slot name="left" />
		</div>
		<div class="rightComponent">
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

			&.leftComponent {
				max-width: 100%;
			}

			&.rightComponent {
				margin-top: 7 * @spaceLg;
				position: sticky;
				top: 2 * @spaceXl;
				height: fit-content;
			}
		}
		@media screen {
			@media (max-width: @maxWidth) {
				flex-wrap: wrap;
				align-self: center;
				&.leftComponent {
					max-width: 80%;
					min-width: 320px;
				}
				& > div {
					&.rightComponent {
						min-width: 320px;
					}
				}
			}
		}
	}
</style>
