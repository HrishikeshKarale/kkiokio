<template>
	<div class="drumKit">
		<div
			v-for="k in drumKit"
			:key="k.dataKey"
			:class="['key', k.isPlaying ? 'playing' : '']"
			:data-key="k.dataKey"
			@click="clicked"
			@transitionend="endTransition(k.dataKey)"
		>
			<div class="keyboardKey" :data-key="k.key" v-text="k.key" />
			<audio :src="k.audio" :data-key="k.dataKey" />
			<div class="instrument" :data-key="k.dataKey" v-text="k.name" />
		</div>
	</div>
</template>
<script>
	import { nameConvention } from "@/typeScript/nameConvention";
	import { loading } from "@/typeScript/common/loading";
	import { mapGetters } from "vuex";

	export default {
		name: "DrumKit",

		mixins: [nameConvention, loading],
		data() {
			return {};
		},
		computed: {
			...mapGetters({ drumKit: "contentModule/getDrumKit" }),
		}, //computed
		created() {
			window.addEventListener("keydown", this.keyPressed, {
				capture: false, // top to bottom bubbling/propogation
				once: false, //should work only once
			});
		},

		methods: {
			endTransition: function (value) {
				const kit = this.drumKit;
				let k = null;
				for (const i in kit) {
					k = kit[i];
					if (k.dataKey == value) {
						k.isPlaying = false;
					}
				}
			},
			clicked: function () {
				const keyCode = event.target.getAttribute("data-key");
				this.playAudio(keyCode);
			},
			playAudio(keyCode) {
				const audioFiles = Array.from(document.getElementsByTagName("audio"));
				audioFiles.forEach((file) => {
					const dataKey = file.getAttribute("data-key");
					if (dataKey == keyCode) {
						file.currentTime = 0;
						file.isPlaying = true;
						file.play();
					}
				});
			},
			keyPressed: function () {
				const keyCode = event.keyCode;
				this.playAudio(keyCode);
				// event.stopPropogation(); //stop event bubbling
			},
		},
	};
</script>
<style lang="less" scoped>
	@import (reference) "./../../../Less/customMixins.less";
	@import (reference) "./../../../Less/customVariables.less";
	.drumKit {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-around;
		& > div {
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			justify-content: space-around;
			text-align: center;
			padding: @spaceMd;
			border-radius: @borderRadius;
			.boxShadow(@three);
			width: 120px;
			height: 120px;
			cursor: pointer;
			&.key {
				border: 0px solid @primary;
				transition: .transition();
			}
			&.playing {
				transform: scale(1.1);
				border-width: @borderRadius;
			}
		}
	}
</style>
