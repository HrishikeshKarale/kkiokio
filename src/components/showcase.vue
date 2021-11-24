<template>
	<div class="showcase">
		<router-link
			v-if="component"
			:to="{ name: component, params: { article: article, type: type } }"
			replace
		>
			<vue-img :src="project.img" :alt="project.title" />
			<h4 v-text="project.title" />
			<span class="fas fa-external-link-square-alt">
				Open
			</span>
		</router-link>
		<template v-else>
			<vue-img v-if="project.img" :src="project.img" alt="Moto" />
			<h4 v-text="project.title" />
		</template>
		<template v-if="project.description">
			<!-- eslint-disable-next-line vue/no-v-html -->
			<p v-html="project.description" />
			<ul v-if="project.tags">
				<template v-for="tag in project.tags">
					<li v-if="tag" class="tag" :key="tag">
						<span class="fas fa-tag" />
						<b v-text="tag" />
					</li>
				</template>
			</ul>
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
		padding: @spaceMd @spaceLg;
		border-radius: @borderRadiusLg;
		justify-content: space-around;
		width: 320px;
		height: fit-content;
		.boxShadow(@one);

		& > p {
			// height: 96px;
			width: fit-content;
			overflow: hidden;
			white-space: wrap;
			text-overflow: ellipsis;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}

		& > ul {
			display: flex;
			flex-flow: row wrap;
			gap: @spaceMd;
		}

		& > a,
		& {
			margin-bottom: @spaceLg;
			position: relative;
			& > .vueImg {
				position: relative;
					width: ~"calc(100% + @{spaceXl})" !important;
					height: ~"calc(100% + @{spaceMd})";
				margin-left: -@spaceLg;
				margin-top: -@spaceMd;
				border-radius: @borderRadius @borderRadius 0 0 !important;
				overflow: hidden;
				object-fit: fill !important;
				//gradient
				&::after {
					position: absolute;
					top: 0;
					margin-left: 0;
					height: ~"calc(100% + @{spaceMd})";
					width: ~"calc(100% + 4 * @{spaceMd})";
					content: "";
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
						gap: @spaceMd;
						background-color:white;
						color: @accent;
					}
				}
			}
			& > h4 {
				position: absolute;
				margin-top: 0;
				margin-bottom: @spaceMd;
				bottom: @spaceMd;
				z-index: @contentZ;
			}
			& > span {
				position: absolute;
				top: -@spaceMd;
				right: -@spaceLg;
				background-color: @accent;
				padding: @spaceMd @spaceLg;
				color: @white;
				z-index: @contentZ;
				border-radius: @borderRadius;
						&::before {
							margin-right: @spaceMd;
						}
				&:hover {
					.boxShadow(@threeText, @accent);
				}
			}
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
	}
</style>
