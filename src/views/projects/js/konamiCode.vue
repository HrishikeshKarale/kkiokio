<template>
	<div ref="KeyPressed" class="konamiCode">
		<div>
			<div v-for="(uc, index) in userCode" :key="uc + '-' + index">
				<span v-text="uc.code" />
				<span v-text="uc.key" />
			</div>
		</div>
	</div>
</template>
<script>
	// vue
	import { inject } from "vue";
	// ts
	import { loading } from "@/typeScript/common/loading";
	export default {
		name: "KonamiCode",
		mixins: [loading],
		data() {
			// global property
			const EMITTER = inject("$emitter");
			const codes = ["kkiokio", "qwerty"];
			const userCode = [];
			const keyPressed = {
				key: null,
				code: null,
				keyCode: null,
				shiftKey: null,
				ctrlKey: null,
				metatKey: null,
				altKey: null
			};
			return {
				EMITTER,
				codes,
				userCode,
				keyPressed
			};
		},
		mounted() {
			window.addEventListener("keydown", this.codeMatcher, {
				capture: false, // top to bottom bubbling/propogation
				once: false //should work only once
			});
		},
		methods: {
			codeMatcher: function(event) {
				this.keyPressed["key"] = event.key;
				this.keyPressed["code"] = event.code;
				this.keyPressed["keyCode"] = event.keyCode;
				this.keyPressed["shiftKey"] = event.shiftKey;
				this.keyPressed["ctrlKey"] = event.ctrlKey;
				this.keyPressed["metatKey"] = event.metatKey;
				this.keyPressed["altKey"] = event.altKey;

				let userCode = this.userCode;

				userCode.push(event);
				if (userCode.length > 7) {
					userCode = userCode.slice(1, 8);
				}
				const codess = userCode.map(evt => {
					return evt.key;
				});
				this.codes.forEach(element => {
					//something
					try {
						if (
							element === codess.slice(-element.length, codess.length).join("")
						) {
							alert(`DING DING DING! Konami code detected: ${element}`);
							throw null;
						}
					} catch (e) {
						EMITTER.emit("alert", {
							type: "warning",
							message: "Error reacting to the konami code",
							description: e,
							dismissable: this.booleanTrue,
							code: "101.1",
							timeout: 8
						});
						// console.error(e);
					}
				});
				// console.log(this.codes.indexOf(codess), codess);
				this.userCode = userCode;
				event.stopPropogation(); //stop event bubbling
			} //codeMatcher
		}
	};
</script>
<style lang="less" scoped>
	@import (reference) "./../../../Less/customMixins.less";
	@import (reference) "./../../../Less/customVariables.less";
	.konamiCode {
		display: flex;
		flex-direction: column;
		// justify-content: space-around;
		width: 100%;
		height: 100%;

		& > div {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;

			& > div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-content: center;
				padding: @spaceLg;
				border-radius: @borderRadiusLg;
				background-color: @primary;
				width: 96px;
				height: 96px;
				.boxShadow(@four);

				& > span {
					margin: auto;

					&:last-child {
						font-size: @fontSizeSm * 2;
						font-weight: bold;
					}
				}
			}
		}
	}
</style>
