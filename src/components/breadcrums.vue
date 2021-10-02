<template>
	<div v-if="breadcrums.length > 1" class="breadcrums">
		<span class="far fa-folder-open" />
		<template v-for="(crums, index) in breadcrums">
			<template v-if="isComponent(crums)[0] && breadcrums.length - 1 > index">
				<span
					v-if="index > 0 && isComponent(crums)[0]['comp']"
					class="fas fa-angle-right"
					:key="crums"
				/>
				<router-link
					v-if="breadcrums.length - 1 > index"
					class="crums"
					:to="{ name: isComponent(crums)[0]['comp'] }"
					:key="crums"
				>
					{{ isComponent(crums)[0]["name"] }}
				</router-link>
			</template>
			<template v-if="breadcrums.length - 1 == index">
				<span v-if="subNav(crums)" class="fas fa-angle-right" :key="crums" />
				<h5 :key="crums">
					{{ subNav(crums) }}
				</h5>
			</template>
		</template>
	</div>
</template>

<script>
	export default {
		name: "Breadcrums",
		data() {
			const projectsList = this.$store.state.projects;
			const navigation = this.$store.state.nav;
			const unique = [];
			return {
				projectsList,
				navigation,
				unique,
			};
		}, //methods
		computed: {
			breadcrums: function () {
				let temp = ("home" + this.$route.path).split("/");
				temp = temp.filter(function (el) {
					return el != "";
				});
				return temp;
			},
		},

		created() {
			//get a list of components to be used for breadcrums
			this.projectsList.forEach((project) => {
				if (project.type !== "Logo") {
					project.value.forEach((proj) => {
						this.unique = [
							{ comp: proj.component, name: proj.title },
							...this.unique,
						];
					});
				}
			});
			this.navigation.forEach((nav) => {
				this.unique = [{ comp: nav.component, name: nav.name }, ...this.unique];
			});
		},

		methods: {
			isComponent: function (comp) {
				return this.unique.filter((uni) => {
					if (comp == uni["comp"]) {
						return uni.name;
					}
				});
				// if (comp) return this.unique.includes(comp);
			}, //isComponent

			subNav: function (selected) {
				let tempSelect = selected.split("#")[0];
				if (tempSelect) {
					tempSelect = tempSelect.toLowerCase();
					this.projectsList.forEach((project) => {
						if (project.type !== "Logo") {
							// console.log(project.type);
							for (let index = 0; index < project.value.length; index++) {
								const proj = project.value[index];
								if (proj.component.toLowerCase() === tempSelect) {
									tempSelect = proj.title;
									break;
								}
							}
						}
					});
				}
				//replace%20 notation with space
				while (tempSelect.includes("%20")) {
					tempSelect = tempSelect.replace("%20", " ");
				}
				return tempSelect;
			},
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
		h1,
		h5 {
			margin: 0 !important;
		}
		& > span {
			color: @accentColor;
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
