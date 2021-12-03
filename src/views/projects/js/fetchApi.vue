<template>
	<div class="fetchApi">
		<div class="apiResponse">
			<template v-if="studioGhibli.response">
				<template v-for="data in studioGhibli.response" :key="data.id">
					<div :data-title="data.title">
						<h3 v-text="data.title" />
						<div
							:class="{ description: true, show: show.includes(data.id) }"
							v-text="data.description"
						/>
						<div class="viewMore">
							<vue-button
								tag="editButton"
								:text="show.includes(data.id) ? 'less' : 'more'"
								:icon="
									show.includes(data.id)
										? 'fas fa-angle-up'
										: 'fas fa-angle-down'
								"
								category="text-sm"
								:ctx="toggle.bind(this, data.id)"
							/>
						</div>
						<div class="info">
							<div>
								<label for="">director:</label>
								<span v-text="data.director" />
							</div>
							<div>
								<label for="">producer:</label>
								<span v-text="data.producer" />
							</div>
							<div>
								<label for="">release date:</label>
								<span v-text="data.release_date" />
							</div>
							<div>
								<label for="">rt score:</label>
								<span v-text="data.rt_score" />
							</div>
						</div>
					</div>
				</template>
			</template>
		</div>
	</div>
</template>
<script>
	// vue
	import { inject } from "vue";
	// component
	import vueButton from "@/components/vueButton.vue";
	// ts
	import { loading } from "@/typeScript/common/loading";
	import { toggle } from "@/typeScript/toggle.js";

	export default {
		name: "FetchApi",
		components: {
			vueButton
		},
		mixins: [toggle, loading],
		data() {
			// global property
			const EMITTER = inject("$emitter");
			const selectedEndpoint = null;
			const studioGhibli = {
				baseURL: "https://ghibliapi.herokuapp.com/",
				endpoint: ["films", "people", "locations", "species", "vehicles"],
				response: {}
			};
			const locationSearch = {
				baseURL:
					"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",
				endpoint: [],
				response: {}
			};
			return {
				EMITTER,
				selectedEndpoint,
				locationSearch,
				studioGhibli
			};
		},
		mounted() {
			this.selectedEndpoint = this.studioGhibli.endpoint[0];
			this.getApiData(this.studioGhibli, this.selectedEndpoint);
		},

		methods: {
			select: function(value) {
				// console.log("selected: ", value)
				// console.log("fetchApi: ", value);
				if (Array.isArray(value)) {
					this.selectedEndpoint = [...value];
				} else {
					this.selectedEndpoint = value;
				}
			}, //selected

			//handels alerts thrown by the component
			alertMessagefunction(type, message) {
				if (type == "error") {
					this.danger = message;
				} else {
					this.warning = message;
				}
			}, //change

			getApiData: function(source, endpoint) {
				return fetch(source.baseURL + endpoint)
					.then(blob => blob.json())
					.then(data => {
						source.response = data;
					})
					.catch(error => {
						EMITTER.emit("alert", {
							type: "warning",
							message: "Error handling API data",
							description: error,
							dismissable: this.booleanTrue,
							code: "101.1",
							timeout: 8
						});
						// console.error(error)
					})
					.finally(() => {
						// console.log(`Fetch executed on ${source.baseURL}`);
					});
			}
		}
	};
</script>
<style lang="less" scoped>
	@import (reference) "./../../../Less/customMixins.less";
	@import (reference) "./../../../Less/customVariables.less";
	.fetchApi {
		width: 100%;
		height: 100%;
		& > div {
			&.apiFilter {
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 160px;
			}
			&.apiResponse {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				& > div {
					flex: 1;
					min-height: 320px;
					max-height: fit-content;
					min-width: 320px;
					border-radius: @borderRadius;
					padding: @spaceMd @spaceLg;
					margin: @spaceMd @spaceLg;
					.boxShadow(@two);
					& > div {
						&.info {
							margin-top: @spaceXl;
							& > div {
								display: flex;
								justify-content: space-between;
							}
						}
						&.viewMore {
							& > div {
								float: right;
							}
						}
						&.description {
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2; /* number of lines to show */
							-webkit-box-orient: vertical;
							&.show {
								display: block;
								overflow: visible;
								text-overflow: visible;
								-webkit-line-clamp: none;
								-webkit-box-orient: box-flex;
							}
						}
					}
				}
			}
		}
	}
</style>
