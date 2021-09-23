<template>
	<div class="scrollIn">
		<h3>Scroll In</h3>
		<scroll-indicator>
			<article>
				<section id="a">
					<h1>Scroll In Example block A</h1>
				</section>
				<section id="b">
					<h1>Scroll In Example block B</h1>
				</section>
				<section id="c">
					<h1>Scroll In Example block C</h1>
				</section>
			</article>
		</scroll-indicator>
	</div>
</template>
<script>
	import scrollIndicator from "@/views/projects/js/scrollIndicator/scrollIndicator";
	export default {
		name: "ScrollIn",
		components: {
			scrollIndicator,
		},
	};
</script>
<style lang="less" scoped>
	@import (reference) "./../../../../Less/customMixins.less";
	@import (reference) "./../../../../Less/customVariables.less";
	.scrollIn {
		width: 100%;
		height: 100%;

		article > section {
			width: 50vw;
			background-color: lightblue;
		}
	}
</style>
