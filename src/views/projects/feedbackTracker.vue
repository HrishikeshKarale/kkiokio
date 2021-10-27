<template>
	<section class="feedbackTracker">
		<h3>Your feedback is important to us</h3>
		<p>How do you feel about the article you just read?</p>
		<div class="images">
			<template v-for="a in 5" :key="a">
				<vue-img
					:class="{ active: value == a }"
					:src="require('../../assets/feedback/' + a + '.svg')"
					:alt="feelingsCalculator(a)"
					:caption="feelingsCalculator(a)"
					@click="$emit('input', a)"
					@mouseover="$emit('input', a)"
				/>
			</template>
		</div>
		<input type="range" :min="min" :max="max" :value="value" :step="step" hidden/>
	</section>
</template>

<script>
	import vueImg from "../../components/vueImg.vue";
	export default {
		name: "feedbackTracker",
		props: {
			value: {
				required: true,
				type: Number,
				default: 3,
			},
		}, //props
		components: { vueImg }, //components
		data() {
			const max = 5;
			const min = 1;
			const step = 1;
			return {
				max,
				min,
				step,
			};
		},
		methods: {
			feelingsCalculator: function (a) {
				const feelings = [
					"It needs work",
					"I've seen better",
					"It's okay",
					"This is a good one!",
					" WOW!",
				];
				return feelings[a - 1];
			},
		},
	};
</script>


<style lang="less" scoped>
	@import (reference) "../../Less/customMixins.less";
	@import (reference) "../../Less/customVariables.less";
	.feedbackTracker {
		display: flex;
		flex-flow: column nowrap;
		& > .images {
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			& > .vueImg {
				transform: scale(0.8);
				filter: grayscale(90%);
				&:hover,
				&.active {
					filter: grayscale(0%);
					transform: scale(1);
				}
				& > figcaption {
					font-weight: 700 !important;
					color: @primaryColor;
				}
			}
		}
		& > input {
			width: 88%;
			align-self: center;
		}
	}
</style>