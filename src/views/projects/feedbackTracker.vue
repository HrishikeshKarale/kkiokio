<template>
	<section class="feedbackTracker">
		<h3>Your feedback is important to us</h3>
		<p>How do you feel about the article you just read?</p>
		<div class="subSection">
			<vue-img
				v-for="a in 5"
				:key="a"
				:class="{ active: value == a }"
				:src="require('../../assets/feedback/' + a + '.svg')"
				:alt="feelingsCalculator(a)"
				:caption="feelingsCalculator(a)"
				@click="$emit('input', a)"
				@mouseover="$emit('input', a)"
			/>
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
		flex-direction: column;
		margin-bottom: 2*@spaceXl;
		& > .subSection {
			display: flex;
			flex-flow: row nowrap;
			justify-content: center;
			gap: @spaceXl;
			margin-top: 2*@spaceXl;
			// justify-content: space-between;
			& > .vueImg {
				filter: grayscale(80%);
				align-self: center;
				width: 320px;
				&:hover,
				&.active {
					filter: grayscale(0%);
					transform: scale(1.6);
				}
			}
		}
		& > input {
			width: 88%;
			align-self: center;
		}
	}
</style>