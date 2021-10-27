<template>
	<nav v-if="routeComp.length > 1" class="breadcrums">
		<ol>
			<template v-for="route in routeComp">
				<li
					v-if="pageTitle.toUpperCase() != route.name.toUpperCase()"
					:key="route.name"
				>
					<router-link
						class="crums"
						:to="{ name: route.comp }"
						v-text="route.name"
					/>
					<span class="fas fa-angle-right"> </span>
				</li>
			</template>
			<li>
				<h4 v-text="pageTitle" />
			</li>
		</ol>
	</nav>
</template>

<script>
	import { mapGetters, mapMutations } from "vuex";
	export default {
		name: "Breadcrums",
		data() {
			return {};
		}, //data
		computed: {
			...mapGetters({
				routeComp: "contentModule/breadcrums/routeComp",
				pageTitle: "contentModule/breadcrums/pageTitle",
			}),
		},

		created() {
			this.$store.dispatch(
				"contentModule/breadcrums/initialize",
				this.$route.path
			);
		},
	};
</script>

<style lang="less" scoped>
	@import (reference) "./../Less/customMixins.less";
	@import (reference) "./../Less/customVariables.less";

	.breadcrums {
		display: flex;
		flex-direction: row;
		align-items: center;
		position: sticky;
		top: 0;
		left: 0;
		width: 100%;
		border-radius: 0 0 @borderRadius @borderRadius;
		gap: @spaceLg;
		&.scroll {
			padding: 0 0 0 16px;
			background-color: @navBackground;
			.boxShadow(@four, @navBackground, @headerZ);
			// z-index: @headerZ;
		}
		& > ol {
			flex-flow: row nowrap;
			align-items: center;
			gap: @spaceLg;
			& > li {
				align-items: center;
				gap: @spaceLg;
				& > h4 {
					margin: 0 !important;
				}
				& > span {
					color: @accentColor;
				}
			}
		}
		@media screen {
			@media (max-width: @1600width) {
			}
			@media (max-width: @1200width) {
			}
			@media (max-width: @768width) {
				justify-content: center;
			}
			@media (max-width: @480width) {
			}
			@media (max-width: @320width) {
			}
		}
	}
</style>
