<template>
	<div class="searchBlog">
		<h4>Search for our blogs.</h4>
		<p>You can search for blogs using keywords or tags.</p>
		<vue-form
			text="Search"
			icon="fas fa-search"
			category="fullWidth"
			:singleAction="booleanTrue"
			form="searchBlogForm"
			:ctx="searchBlog.bind(this)"
			:alert="alertObject"
			:validate="!booleanTrue"
			:autocomplete="booleanTrue"
			@alerts="alerts"
		>
			<text-input
				:value="searchQuery"
				name="searchField"
				placeholder="UX; IA; Research; Material ..."
				:required="booleanTrue"
				@alerts="alerts"
				@value="(val) => (searchQuery = val)"
			/>
		</vue-form>
	</div>
</template>

<script>
	import vueForm from "../../components/vueForm.vue";
	import textInput from "@/components/textInput.vue";
	import { alerts } from "@/typeScript/common/alerts";

	export default {
		name: "searchBlog",

		mixins: [alerts],

		components: {
			textInput,
			vueForm,
		}, //components

		data() {
			const searchQuery = "";
			return {
				searchQuery,
			};
		}, //data

		methods: {
			searchBlog: function () {
				// console.log("searchBlog");
			}, //subscribe
		},
	};
</script>


<style lang="less" scoped>
	@import (reference) "../../Less/customMixins.less";
	@import (reference) "../../Less/customVariables.less";
	.searchBlog {
		display: flex;
		flex-direction: column;
		gap: @spaceMd;
		max-width: 320px;
		min-width: 240px;
		height: fit-content;
		& > h4 {
			margin-bottom: 0 !important;
			font-weight: bold;
		}
	}
</style>