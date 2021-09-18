<template>
	<vue-img
		v-if="entry[0] === 'img'"
		:src="entry[1].src"
		:alt="entry[1].alt"
		:caption="entry[1].caption"
	/>
	<p v-else-if="entry[0] === 'altText'" v-html="entry[1]" />
	<p v-else-if="entry[0] === 'text'" v-html="entry[1]" />
</template>
<script>
	import vueImg from "@/components/vueImg.vue";
	export default {
		name: "PostDetails",
		components: {
			vueImg,
		},
		props: {
			entry: {
				required: false,
				type: Array,
			},
		}, //props
	};
</script>
