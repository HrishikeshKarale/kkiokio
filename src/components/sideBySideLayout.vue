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
	@import (reference) "./../Less/customMixins.less";
	@import (reference) "./../Less/customVariables.less";

	.sideBySideLayout {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		gap: 2 * @spaceXl;

		& > div {
			display: flex;
			flex-direction: column;
			height: 100%;

			&.leftComponent {
				max-width: 80%;
				min-width: 320px;
			}

			&.rightComponent {
				position: sticky;
				top: 0;
				width: auto;
				height: fit-content;
			}
		}
	}
</style>
