<template>
	<div class="arrayCardio">
		<div class="result">
			<label for="">Filter</label>
			{{ born(inventors, 1800, 1900) }}
			<label for="">Computed (Map)</label>
			{{ firstName }}
			<!-- <label for="">Computed (sort by birth)</label>
      {{ orderedByBirth }} -->
			<label for="">Computed (reduce)</label>
			{{ yearsLived }}
			<label for="">Computed (some inventors are Adult)</label>
			{{ isAdult }}
			<label for="">Computed (every inventors is Adult)</label>
			{{ allAdult }}
			<label for="">Computed (find inventors first name Albert)</label>
			{{ findAdult("Albert") }}
			<label for=""
				>Computed (find inventors index for first name Albert)</label
			>
			{{ findAdultIndex("Albert") }}
			<label for="">Computed (remove inventors with first name Albert)</label>
			{{ removeInvestor("Albert") }}
			<label for="">Computed (sort by age)</label>
			{{ investorAge }}
			<label for="">Computed (reduce car by instances)</label>
			{{ carInstances }}
			<label for="">Computed (sort people by firstName)</label>
			{{ orderPeopleByFirst }}
		</div>
		<div class="data">
			{{ inventors }}
			<vue-table
				:table-data="inventors"
				:metadata="metadata"
				@setPage="metadata.pageNumber"
				@setSortKey="metadata.setSortKey"
				@selectRow="metadata.selectRow"
				@setRowElements="metadata.rowElements"
			/>
			<table>
				<thead>
					<tr>
						<th v-for="key in Object.keys(inventors[0])" :key="key">
							{{ key }}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(inv, index) in inventors" :key="index">
						<td v-for="key in Object.keys(inv)" :key="inv + '-' + key">
							{{ inv[key] }}
						</td>
					</tr>
				</tbody>
			</table>
			<table>
				<tbody>
					<tr v-for="(ppl, index) in people" :key="ppl + ' ' + index">
						<td>
							{{ ppl }}
						</td>
					</tr>
				</tbody>
			</table>
			<table>
				<tbody>
					<tr v-for="(dta, index) in data" :key="index + '-' + dta">
						<td>
							{{ dta }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
	import { arrayExercise } from "@/store/arrayExercise";
	import { mapState } from "vuex";

	import vueTable from "@/components/vueTable.vue";
	export default {
		name: "ArrayCardio",

		mapState,

		components: {
			vueTable,
		},

		mixins: [arrayExercise],
		computed: {
			...mapState(["metadata"]),

			isAdult: function () {
				return this.inventors.some(
					(inv) => new Date().getFullYear() - inv.year > 18
				);
			}, //isAdult
			allAdult: function () {
				return this.inventors.every(
					(inv) => new Date().getFullYear() - inv.year > 18
				);
			}, //allAdult
			firstName: function () {
				return this.inventors.map((inv) => inv.first + " " + inv.last);
			}, //firstName
			orderedByBirth: function () {
				// eslint-disable-next-line vue/no-side-effects-in-computed-properties
				return this.inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
			}, //orderedByBirth
			yearsLived: function () {
				// eslint-disable-next-line vue/no-side-effects-in-computed-properties
				return this.inventors.reduce(
					(lifeSpan, inv) => lifeSpan + (inv.passed - inv.year),
					0
				);
			}, //yearsLived
			investorAge: function () {
				// eslint-disable-next-line vue/no-side-effects-in-computed-properties
				return this.inventors.sort((a, b) =>
					a.passed - a.year > b.passed - b.year ? 1 : -1
				);
			}, //investorAge
			carInstances: function () {
				return this.data.reduce((obj, item) => {
					if (!obj[item]) {
						obj[item] = 0;
					}
					obj[item]++;
					return obj;
				}, {});
			}, //carInstances
			orderPeopleByFirst: function () {
				// eslint-disable-next-line vue/no-side-effects-in-computed-properties
				return this.people.sort((person1, person2) => {
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const [last1, first1] = person1.split(", ");
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const [last2, first2] = person2.split(", ");
					return first1 > first2 ? 1 : -1;
				});
			}, //orderPeopleByFirst
		},
		mounted() {
			this.emitter.emit("loadingScreen", false);
		},
		unmounted() {
			this.emitter.emit("loadingScreen", true);
		},
		methods: {
			findAdult: function (name) {
				return this.inventors.find((inv) => inv.first === name);
			}, //findAdult
			findAdultIndex: function (name) {
				return this.inventors.findIndex((inv) => inv.first === name);
			}, //findAdultIndex
			removeInvestor: function (name) {
				const index = this.findAdultIndex(name);
				const inventors = this.inventors;
				return [
					...inventors.slice(0, index),
					...inventors.slice(index + 1, inventors.length),
				];
			}, //removeInvestor
			born: function (value, year, passed) {
				// eslint-disable-next-line prefer-const
				let temp = [];
				for (const v in value) {
					if (value[v]["year"] >= year && value[v]["passed"] <= passed) {
						temp.push(value[v]);
					}
				}
				// console.log(value);
				return temp;
			}, //born
		}, //methods
	};
</script>
<style lang="less" scoped>
	@import (reference) "./../../../Less/customMixins.less";
	@import (reference) "./../../../Less/customVariables.less";

	.arrayCardio {
		display: flex;
		flex-direction: row;
		& > .data {
			& > table {
				.boxShadow(@two);
				width: fit-content;
				padding: @spaceMd @spaceLg;
				border-radius: @borderRadiusLg;
				border: 1px solid black;
				background-color: #fafbfc;
				& > tbody,
				& > thead {
					& > tr {
						margin: @spaceSm;
						& > th {
							text-align: left;
						}
						& > td {
							//do something
							padding: @spaceSm @spaceMd;
						}
					}
				}
			}
		}
	}
</style>
