<template>
	<div v-if="breadcrums.length > 1" class="breadcrums">
		<template v-for="(crums, index) in breadcrums" :key="crums">
			<template v-if="isComponent(crums)[0] && breadcrums.length - 1 > index">
				<span
					v-if="index > 0 && isComponent(crums)[0]['comp']"
					class="fas fa-angle-right"
				/>
				<router-link
					v-if="breadcrums.length - 1 > index"
					class="crums"
					:to="{ name: isComponent(crums)[0]['comp'] }"
				>
					{{ isComponent(crums)[0]["name"] }}
				</router-link>
			</template>
			<template v-if="breadcrums.length - 1 == index">
				<span v-if="subNav(crums)" class="fas fa-angle-right" />
				<h5>
					{{ subNav(crums) }}
				</h5>
			</template>
		</template>
	</div>
</template>

<script>
	import { nav } from "@/store/navigation";
	import { projects } from "@/store/projects";

	export default {
		name: "Breadcrums",
		data() {
			const projectsDescription = projects;
			const navigation = nav;
			const unique = [];
			return {
				projectsDescription,
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

		mounted() {
			//get a list of components to be used for breadcrums
			this.projectsDescription.forEach((project) => {
				project.value.forEach((proj) => {
					this.unique = [
						{ comp: proj.component, name: proj.title },
						...this.unique,
					];
				});
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
					this.projectsDescription.forEach((project) => {
						for (let index = 0; index < project.value.length; index++) {
							const proj = project.value[index];
							// console.log(proj.component.toLowerCase(), tempSelect.toLowerCase());
							if (proj.component.toLowerCase() === tempSelect) {
								tempSelect = proj.title;
								break;
							}
						}
					});
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
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		// width: fit-content;
		z-index: @contentZ;
		padding: 0 @spaceMd 0 0;
		border-radius: 0 0 @borderRadius @borderRadius;
		background-color: @backgroundColor;
		// position: relative;
		&.scroll {
			background-color: @navBackground;
			padding: 0 0 0 16px;
		}
		h1,
		h5 {
			margin: 0 !important;
		}
		& > span {
			color: @accentColor;
			margin: 0 @spaceMd;
		}
		@media screen {
			@media (max-width: @maxWidth) {
				padding: 0 0 0 88px !important;
			}
		}
	}
</style>
