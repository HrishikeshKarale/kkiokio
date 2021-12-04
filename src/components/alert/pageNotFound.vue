<template>
	<article class="systemError">
		<section>
			<!-- <h3>Oops, Something unexpected happened.</h3> -->
			<div class="container">
				<div class="ghost-copy">
					<div class="one"></div>
					<div class="two"></div>
					<div class="three"></div>
					<div class="four"></div>
				</div>
				<div class="ghost">
					<div class="face">
						<div class="eye"></div>
						<div class="eye-right"></div>
						<div class="mouth"></div>
					</div>
				</div>
				<div class="shadow"></div>
			</div>
			<h3 class="top">Looks like something went wrong.</h3>
			{{
				similarRoutes.length > 1 ? similarRoutes : "No Matching Routes found."
			}}
		</section>
	</article>
</template>

<script>
	// vue
	import { inject } from "vue";
	// ts
	import { loading } from "../../typeScript/common/loading";
	export default {
		name: "PageNotFound",
		mixins: [loading],

		data() {
			// global property
			const EMITTER = inject("$emitter");
			const Id = "stackTrace";
			const similarRoutes = this.$route.matched;
			return {
				EMITTER,
				Id,
				similarRoutes
			}; //return
		}, //data

		mounted() {
			EMITTER.emit("alert", {
				type: "warning",
				message: "Invalid Route address",
				description: "Please check the link for accuracy.",
				dismissable: this.booleanTrue,
				code: "101.1",
				timeout: 8
			});
		} //created
	}; //default
</script>

<style lang="less" scoped>
	@import (reference) "../../Less/customMixins.less";
	@import (reference) "../../Less/customVariables.less";

	@height: 800px;
	@planet: 30em;
	@size: 2;
	@top: 4em;

	@white: #ededed;
	@ghostBorder: #bfc0c0;
	@dark: @accent;
	@light: red;

	.systemError {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		min-height: (@height / @size)+64px;
		max-height: @height;
		section {
			& > .top {
				margin-top: @spaceXl;
				text-align: center;
			}

			& > .container {
				margin: 0 auto;
				position: relative;
				width: 240px;
				height: 240px;

				& > .ghost {
					width: 50%;
					height: 53%;
					left: 25%;
					top: 10%;
					position: absolute;
					border-radius: 50% 50% 0 0;
					background: @white;
					border: 1px solid @ghostBorder;
					border-bottom: none;
					animation: float 2s ease-out infinite;

					& > .face {
						position: absolute;
						width: 100%;
						height: 60%;
						top: 20%;

						& > .eye,
						& > .eye-right {
							position: absolute;
							background: @dark;
							width: 13px;
							height: 13px;
							border-radius: 50%;
							top: 40%;
						}

						& > .eye {
							left: 25%;
						}

						& > .eye-right {
							right: 25%;
						}

						& > .mouth {
							position: absolute;
							top: 50%;
							left: 45%;
							width: 10px;
							height: 10px;
							border: 3px solid;
							border-radius: 50%;
							border-color: transparent @dark @dark transparent;
							transform: rotate(45deg);
						}
					}
				}

				& > .shadow {
					position: absolute;
					width: 30%;
					height: 7%;
					background: @ghostBorder;
					left: 35%;
					top: 80%;
					border-radius: 50%;
					animation: scale 2s infinite;
				}

				& > .ghost-copy {
					width: 50%;
					height: 53%;
					left: 25%;
					top: 10%;
					position: absolute;
					border-radius: 50% 50% 0 0;
					// background: @white;
					border: 1px solid @ghostBorder;
					border-bottom: none;
					animation: float 2s ease-out infinite;
					z-index: @bodyZ + 10;

					& > .one,
					& > .two,
					& > .three,
					& > .four {
						position: absolute;
						background: @white;
						top: 85%;
						width: 25%;
						height: 23%;
						border: 1px solid @ghostBorder;
						z-index: @bodyZ + 10;
					}

					& > .one {
						border-radius: 0 0 100% 30%;
						left: -1px;
					}

					& > .two {
						left: 23%;
						border-radius: 0 0 50% 50%;
					}

					& > .three {
						left: 50%;
						border-radius: 0 0 50% 50%;
					}

					& > .four {
						left: 75.5%;
						border-radius: 0 0 30% 100%;
					}
				}
			}

			@keyframes scale {
				0% {
					transform: scale(1);
				}
				50% {
					transform: scale(1.1);
				}
				100% {
					transform: scale(1);
				}
			}

			@keyframes float {
				50% {
					transform: translateY(8px);
				}
			}
		}
	}
</style>
