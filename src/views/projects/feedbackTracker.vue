<template>
	<section title="Related Posts">
		<input id="seekslider" type="range" min="1" max="5" value="4" step="5" />
		valueHover : <span id="durtimeText"></span> valueSeeked :
		<span id="seek"></span> valueHover expect to be equal valueSeeked :
		<span id="test"></span>
	</section>
</template>

<script>
	export default {
		name: "feedbackTracker",
		props: {
			tags: {},
		}, //props
		components: {}, //components
		data() {
			return {};
		},
		computed: {}, //computed
	};
</script>


<style lang="less" scoped>
	@import (reference) "../../Less/customMixins.less";
	@import (reference) "../../Less/customVariables.less";
	.feedbackTracker {
		display: flex;
	}
</style>