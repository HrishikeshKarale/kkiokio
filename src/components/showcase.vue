<template>
	<div class="showcase">
		<router-link
			v-if="component"
			:to="{ name: component, params: { article: article } }"
		>
			<vue-img :src="project.img" alt="Moto" />
			<h4>
				{{ project.title }}
			</h4>
			<span class="fas fa-external-link-square-alt" />
		</router-link>
		<h4 v-else>{{ project.title }}</h4>
		<template v-if="project.description">
			<!-- eslint-disable-next-line vue/no-v-html -->
			<p v-html="project.description" />
			<ul v-if="project.tags">
				<template v-for="tag in project.tags" :key="tag">
					<li v-if="tag">
						<span>{{ tag }}</span>
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
		background-color: @backgroundColor;
		padding: @spaceMd @spaceLg;
		border-radius: @borderRadiusLg;
		justify-content: space-around;
		flex: 1 2 320px;
		height: fit-content;
		// border: 1px dashed @primaryColor;
		.boxShadow(@base, @secondaryColor);

		& > a {
			margin-bottom: @spaceLg;
			position: relative;
			& > .vueImg {
				position: relative;
				width: calc(100% + @spaceXl) !important;
				height: calc(100% + @spaceMd);
				margin-left: -@spaceLg;
				margin-top: -@spaceMd;
				border-radius: @borderRadius @borderRadius 0 0 !important;
				overflow: hidden;
				//gradient
				&::after {
					position: absolute;
					top: 0;
					margin-left: 0;
					margin-top: -@spaceMd;
					height: calc(100% + @spaceMd);
					width: calc(100% + 4 * @spaceMd);
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
			}
			& > h4 {
				position: absolute;
				margin-top: 0;
				margin-bottom: @spaceMd;
				bottom: 0;
				z-index: @contentZ;
			}
			& > span {
				position: absolute;
				top: -@spaceMd;
				right: -@spaceLg;
				font-size: 2 * @fontSizeSm;
				z-index: @contentZ;
			}
		}

		&:hover {
			.boxShadow(@two, @accentColor);
			& > a > h4 {
				&:hover {
					color: @accentColor;
				}
				& > span {
					color: @accentColor;
				}
			}
		}
		& > p {
			font-size: @fontSizeSm;
			// height: 96px;
			width: fit-content;
			overflow: hidden;
			white-space: wrap;
			text-overflow: ellipsis;
		}

		ul {
			display: flex;
			flex-wrap: wrap;
			gap: @spaceMd;
			//tag
			& > li {
				display: flex;
				flex-wrap: nowrap;
				font-size: @fontSizeSm;
				position: relative;
				background-color: @secondaryColor;
				border-radius: @borderRadius;
				color: @textColor;
				padding: 0 @spaceMd !important;
			}
		}
	}
</style>
