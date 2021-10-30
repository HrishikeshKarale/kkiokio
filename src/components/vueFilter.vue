<template>
	<div class="vueFilter">
		<div
			:class="{
				open: Object.keys(selected).length !== 0,
			}"
		>
			<vue-button
				type="button"
				tag="filterButton"
				icon="fas fa-filter"
				text="Filter"
				category="icon-lg"
				:ctx="toggleFilter"
			/>
			<vue-button
				class="clearAll"
				v-if="Object.keys(selected).length !== 0"
				type="button"
				tag="resetFilterButton"
				text="Reset"
				icon="fas fa-retweet"
				category="icon"
				:ctx="emitFilter.bind(this, null, null)"
			/>
			<template v-if="Object.keys(selected).length !== 0">
				<div
					v-for="(item, index) in selected.type"
					:key="index"
					class="selectedFilter"
				>
					<span v-text="item" />
					<template v-if="Array.isArray(selected.value[index])">
						<div v-for="val in selected['value'][index]" :key="val" class="tag">
							<small
								data-toggle="tooltip"
								data-placement="top"
								:title="item"
								v-text="val"
							/>
							<vue-button
								type="button"
								tag="resetFilterButton"
								text="Reset"
								icon="fas fa-times"
								category="icon-sm"
								:ctx="removeFilter.bind(this, item, val)"
							/>
						</div>
					</template>
					<template v-else>
						<div
							data-toggle="tooltip"
							data-placement="top"
							:title="item"
							class="tag"
							v-text="selected.value[index]"
						/>
						<vue-button
							type="button"
							tag="resetFilterButton"
							text="Reset"
							icon="fas fa-times"
							category="icon-sm"
							:ctx="removeFilter.bind(this, item, selected.value[index])"
						/>
					</template>
				</div>
			</template>
		</div>
		<!-- popup -->
		<vue-form
			v-show="showFilter"
			:title="title"
			text="Filter"
			icon="fas fa-add"
			category="small"
			:ctx="addFilter.bind(this)"
			form="filterForm"
			:alert="{ error: dDanger, warning: dWarning }"
			:validate="!booleanTrue"
			:isAutocomplete="booleanTrue"
			@alerts="alerts"
		>
			<dropdown-list
				label="Type"
				name="filterType"
				:value="filterTypeValue"
				:options="filters['type']"
				@notify="alerts"
				@value="(val) => (filterTypeValue = val)"
			/>
			<dropdown-list
				v-if="optionsIndex() > -1"
				label="Value"
				name="filterType"
				:value="filterOptionValue"
				:options="filters.options[optionsIndex()]"
				@notify="alerts"
				@value="(val) => (filterOptionValue = val)"
			/>
		</vue-form>
	</div>
</template>

<script>
	import vueButton from "./vueButton.vue";
	import vueForm from "./vueForm.vue";
	import dropdownList from "./dropdownList.vue";
	import { alerts } from "@/typeScript/common/alerts";

	export default {
		name: "VueFilter", //computed

		components: {
			dropdownList,
			vueButton,
			vueForm,
		},

		mixins: [alerts],

		props: {
			title: {
				required: false,
				type: String,
				default: null,
			},
			filters: {
				required: true,
				type: Object,
			},

			selected: {
				required: false,
				type: Object,
				default: null,
			},
		}, //props

		emits: ["updateFilters"],

		data() {
			const filterTypeValue = null;
			const filterOptionValue = null;
			const showFilter = false;
			return {
				filterTypeValue,
				filterOptionValue,
				showFilter,
			}; //return
		}, //data
		methods: {
			optionsIndex: function () {
				return this.filters.type.indexOf(this.filterTypeValue);
			},
			toggleFilter: function () {
				this.showFilter = !this.showFilter;
			}, //toggleFilter

			removeFilter: function (type, value) {
				let selectedValue = this.selected.value;
				let selectedType = this.selected.type;
				const typeIndex = selectedType.indexOf(type);
				//check if type exists
				if (typeIndex !== -1) {
					//if type is more than one element
					if (selectedType.length != 1) {
						// check if multiple values exist for the selected type
						if (selectedValue[typeIndex].length > 1) {
							const valueIndex = selectedType.indexOf(value);
							selectedValue[typeIndex].splice(valueIndex, 1);
						} else {
							// remove type and value array
							selectedType.splice(typeIndex, 1);
							// console.log();
							selectedValue.splice(typeIndex, 1);
						}
					} else {
						//type is single element
						// check if multiple values exist for the selected type
						if (selectedValue[typeIndex].length > 1) {
							const valueIndex = selectedType.indexOf(value);
							selectedValue[typeIndex].splice(valueIndex, 1);
						} else {
							// remove type and value array
							selectedType = null;
							selectedValue = null;
						}
					}
					this.emitFilter(selectedType, selectedValue);
				} else {
					//type:value pair does not exist
					this.emitter.emit("alert", {
						type: "warning",
						message: "Filter does not exists",
						description:
							"The filter you selected does not exist, please  make ure the info is correct.",
						dismissable: this.booleanTrue,
						code: "200",
						timeout: 8,
					});
					return;
				}
			}, //removeFilter

			addFilter: function () {
				const addType = this.filterTypeValue;
				const addValue = this.filterOptionValue;

				if (addType !== null && addValue !== null) {
					let selectedValue = null;
					let selectedType = null;

					//if selected already exist
					if (Object.keys(this.selected).length !== 0) {
						selectedValue = this.selected.value;
						selectedType = this.selected.type;
						//if type already exist add value
						if (selectedType.includes(addType)) {
							const tagIndex = selectedType.indexOf(addType);
							// value not found
							if (!selectedValue.includes(addValue)) {
								selectedValue[tagIndex] = [addValue, ...selectedValue[tagIndex]];
							} else {
								this.emitter.emit("alert", {
									type: "info",
									message: "Filter already exists",
									description:
										"The filter you selected already is applied, please select another filter to apply.",
									dismissable: this.booleanTrue,
									code: "200",
									timeout: 8,
								});

								this.filterOptionValue = "";
								this.filterTypeValue = "";
								if (this.showFilter) {
									this.toggleFilter();
								}
								return;
							}
						} else {
							//if type does not exist add type and value
							selectedType = [addType, ...selectedType];
							selectedValue = [[addValue], ...selectedValue];
						}
					} else {
						//if selected does not exists then create it
						selectedType = [addType];
						selectedValue = [[addValue]];
					}

					this.filterOptionValue = "";
					this.filterTypeValue = "";
					if (this.showFilter) {
						this.toggleFilter();
					}
					this.emitFilter(selectedType, selectedValue);
				} else {
					this.emitter.emit("alert", {
						type: "warning",
						message: "Filter not set",
						description:
							"The filter you selected does not have a type or a value set. please try again and make sure you have set both values.",
						dismissable: this.booleanTrue,
						code: "100",
						timeout: 8,
					});
				}
			}, //addFilter

			emitFilter: function (type, value) {
				if (type === null && value === null) {
					this.$emit("updateFilters", {});
				} else {
					this.$emit("updateFilters", {
						type: type,
						value: value,
					});
				}
			}, //emitValues
		}, //methods
	}; //default
</script>

<style lang="less" scoped>
	@import (reference) "../Less/customVariables.less";
	@import (reference) "../Less/customMixins.less";

	@color: @primaryColor;

	.vueFilter {
		display: flex;
		flex-direction: column;
		position: relative;
		width: fit-content;
		.backgroundColor();
		// &.scroll {
		// 	position: sticky;
		// 	top: 32px;
		// 	left: 0;
		// 	border-radius: 50%;
		// }
		& > .open {
			display: flex;
			flex-flow: column wrap;
			background-color: @backgroundColor;
			width: fit-content;
			border-radius: @borderRadius;
			border: 1px solid ~"darken(@backgroundColor, 10%)";
			gap: @spaceLg;
			align-items: flex-end;
			padding: @spaceMd;
			& > .vueButton {
				align-self: flex-start;
				&.clearAll {
					position: absolute;
					top: -@spaceMd;
					right: -3 * @spaceSm;
					background-color: @backgroundColor;
					border: 1px solid @secondaryColor;
				}
			}

			& > .selectedFilter {
				position: relative;
				font-size: @fontSizeSm;
				display: inline-flex;
				width: fit-content;
				flex-flow: row wrap;
				border: 1px dashed @secondaryColor;
				padding: @spaceMd;
				border-radius: @borderRadius;
				gap: @spaceMd;
				// justify-content: space-between;

				& > span {
					position: absolute;
					top: -3 * @spaceMd;
					left: @spaceMd;
					padding: 0 @spaceMd;
					border-radius: @borderRadius;
					background-color: @backgroundColor;
				}
			}
		}
		& > form {
			position: absolute;
			top: @spaceXl + @spaceLg;
			right: 0;
			display: flex;
			flex-direction: column;
			padding: @spaceMd @spaceLg;
			border-radius: @borderRadius;
			background-color: @backgroundColor;
			.boxShadow(@two, @accentColor);
			outline: 9999px solid #000000a3;
			width: max-content;
			z-index: @contentZ + 100;
			& > div {
				&:last-child {
					display: flex;
					flex-direction: row-reverse;
				}
			}
		}
	}
</style>
