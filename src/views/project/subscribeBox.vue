<template>
	<div class="subscribe">
		<h4>Subscribe to our news letter</h4>
		<p>
			Our e-mail updates will keep you informed on our company progress, blogs,
			work and other important content.
		</p>
		<vue-form
			text="Subscribe"
			icon="fas fa-rss"
			category="small"
			:singleAction="booleanTrue"
			form="subscribeForm"
			:ctx="subscribe.bind(this)"
			:alert="alertObject"
			:validate="!booleanTrue"
			:autocomplete="booleanTrue"
			@alerts="alerts"
		>
			<email-input
				:value="emailID"
				name="emailTextField"
				placeholder="JohnDoe@abc.com"
				:required="booleanTrue"
				@alerts="alerts"
				@value="(val) => (emailID = val)"
			/>
		</vue-form>
	</div>
</template>

<script>
	import vueForm from "../../components/vueForm.vue";
	import emailInput from "@/components/emailInput.vue";
	import { alerts } from "@/typeScript/common/alerts";

	export default {
		name: "subscribeBox",

		mixins: [alerts],

		components: {
			emailInput,
			vueForm,
		}, //components

		data() {
			const emailID = "";
			return {
				emailID,
			};
		}, //data

		methods: {
			subscribe: function () {
				// console.log("subscribe");
			}, //subscribe
		},
	};
</script>


<style lang="less" scoped>
	@import (reference) "../../Less/customMixins.less";
	@import (reference) "../../Less/customVariables.less";
	.subscribe {
		display: flex;
		flex-direction: column;
		gap: @spaceMd;
		border-radius: @borderRadius;
		border: 1px solid @secondaryColor;
		max-width: 320px;
		.boxShadow(@one);
		.backgroundColor();
		& > * {
			padding: 0 @spaceLg;
			&:first-child {
				padding-top: @spaceLg;
			}
			&:last-child {
				margin-bottom: @spaceLg;
				align-self: flex-start;
			}
		}
		& > h4 {
			margin-top: 0 !important;
			margin-bottom: 0 !important;
			font-weight: bold;
		}
	}
</style>