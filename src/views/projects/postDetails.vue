<template>
	<template v-if="entry[0] === 'img'">
		<div class='multipleImg' v-if="Array.isArray(entry[1])" >
			<vue-img
				v-for="entry in entry[1]"
				:key='entry.src'
				:src="entry.src"
				:alt="entry.alt"
				:caption="entry.caption"
			/>
		</div>
		<vue-img
			v-else
			:src="entry[1].src"
			:alt="entry[1].alt"
			:caption="entry[1].caption"
		/>
	</template>
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
