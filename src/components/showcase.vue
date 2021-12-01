<template>
	<div class="showcase">
		<router-link
			v-if="component"
			:to="{ name: component, params: { article: article, type: type } }"
			replace
		>
			<vue-img :src="project.img" :alt="project.title" />
			<h4 v-text="project.title" />
			<span class="fas fa-external-link-square-alt" />
		</router-link>
		<template v-else>
			<vue-img v-if="project.img" :src="project.img" alt="Moto" />
			<h4 v-text="project.title" />
		</template>
		<template v-if="project.description">
			<!-- eslint-disable-next-line vue/no-v-html -->
			<p v-html="project.description" />
			<!-- <ul v-if="project.tags">
				<template v-for="tag in project.tags">
					<li v-if="tag" class="tag" :key="tag">
						<span class="fas fa-tag" />
						<b v-text="tag" />
					</li>
				</template>
			</ul> -->
		</template>
	</div>
</template>
<script>
	import vueImg from "./vueImg.vue";
	export default {
		name: "Showcase",
		components: { vueImg },
		props: {
			project: {
				required: true,
				type: Object,
			},
			component: {
				required: false,
				type: String,
				default: "",
			},
			type: {
				required: false,
				type: String,
			},
			article: {
				required: false,
				type: String,
				default: "",
			},
		},
	};
</script>

<style lang="less" scoped>
	@import (reference) "./../Less/customVariables.less";
	@import (reference) "./../Less/customMixins.less";

	.showcase {
		display: flex;
		align-self: flex-start;
		flex-direction: column;
		color: @textColor;
		background-color: @cardBackground;
		border-radius: @borderRadiusLg;
		justify-content: space-around;
		// flex: 480px 240px 320px;
		max-width: 320px;
		height: min-content;
		.boxShadow(@one);
		gap: @spaceLg;
			& > p,
			& > ul {
				margin : 0 @spaceLg !important;
			}
					&:hover {
						.boxShadow(@base);
						& > a > h4 {
							&:hover {
								color: @accent;
							}
							& > span {
								color: @accent;
							}
						}
					}
		// &:hover {

		// 	& > p {
		// 		display: block;
		// 		max-width: 240px;
		// 		margin-bottom: @spaceLg !important;
		// 		&:hover {
		// 			overflow: visible;
		// 		}
		// 	}

		// 	& > ul {
		// 		display: flex;
		// 		flex-flow: row wrap;
		// 		gap: @spaceMd;
		// 		margin-bottom: @spaceLg !important;
		// 	}

		// }
		// & > p {
		// 	display: none;
		// }

			&, & > a{
				position: relative;
				& > .vueImg {
					position: relative;
					left: 0;
					top: 0;
					max-width: 320px;
					min-width: 240px;
					// aspect-ratio: 1.6/1;
					overflow: hidden;
					object-fit: fill !important;
					& > img {
						border-radius: @borderRadiusLg;
					}
					//gradient
					&::after {
						content: "";
						position: absolute;
						border-radius: @borderRadius @borderRadius 0 0 !important;
						top: 0;
						height: 100%;
						width: 100%;
						background: -moz-linear-gradient(
								top,
								rgba(0, 0, 0, 0) 0%,
								rgba(0, 0, 0, 0.3) 59%,
								rgba(0, 0, 0, 0.9) 100%
							),
							no-repeat;
						background: -webkit-gradient(
								linear,
								left top,
								left bottom,
								color-stop(0%, rgba(0, 0, 0, 0)),
								color-stop(59%, rgba(0, 0, 0, 0)),
								color-stop(100%, rgba(0, 0, 0, 0.9))
							),
							no-repeat;
						background: -webkit-linear-gradient(
								top,
								rgba(0, 0, 0, 0) 0%,
								rgba(0, 0, 0, 0.3) 59%,
								rgba(0, 0, 0, 0.9) 100%
							),
							no-repeat;
						background: -o-linear-gradient(
								top,
								rgba(0, 0, 0, 0) 0%,
								rgba(0, 0, 0, 0.3) 59%,
								rgba(0, 0, 0, 0.9) 100%
							),
							no-repeat;
						background: -ms-linear-gradient(
								top,
								rgba(0, 0, 0, 0) 0%,
								rgba(0, 0, 0, 0.3) 59%,
								rgba(0, 0, 0, 0.9) 100%
							),
							no-repeat;
						background: linear-gradient(
								to bottom,
								rgba(0, 0, 0, 0) 0%,
								rgba(0, 0, 0, 0.3) 59%,
								rgba(0, 0, 0, 0.9) 100%
							),
							no-repeat;
					}
					&:hover {
						&::after {
							filter: opacity(64%);
						}
						& ~ span {
							.boxShadow(@two);
						}
					}
				}
				&:not(a) {
					.boxShadow(none);
					& > .vueImg {
						height: 320px;
						aspect-ratio: 1;;
						&::after {
							background-color: transparent;
						}
					}
				}
				& > h4 {
					position: absolute;
					margin-top: 0;
					margin-bottom: @spaceMd;
					bottom: @spaceMd;
					left: @spaceLg;
				}
				& > span {
					position: absolute;
					top: 0;
					right: 0;
					background-color: @accent;
					padding: @spaceMd @spaceLg;
					color: @white;
					z-index: @contentZ;
					border-radius: @borderRadius;
					&:hover {
						.boxShadow(@threeText, @accent);
					}
				}
			}
		// media
			// line-height: @fontSizeMd !important;
	}
</style>
