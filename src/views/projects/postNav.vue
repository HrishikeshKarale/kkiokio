<template>
	<section class="postNav">
		<div class="previous" v-if="previous != null">
			<h3
				@click="
					$router.push({
						name: previous.blog ? 'articlePage' : previous.component,
						params: {
							article: previous.blog ? previous.title : '',
						},
					})
				"
				v-text="previous.title"
			/>
		</div>
		<div v-if="next != null" class="next">
			<h3
				@click="
					$router.push({
						name: next.blog ? 'articlePage' : next.component,
						params: {
							article: next.blog ? next.title : '',
						},
					})
				"
				v-text="next.title"
			/>
		</div>
	</section>
</template>

<script>
	export default {
		name: "postNav",

		props: {
			next: {
				required: true,
				type: Object,
			},
			previous: {
				required: true,
				type: Object,
			},
		}, //props
	};
</script>

<style lang="less" scoped>
	@import (reference) "../../Less/customMixins.less";
	@import (reference) "../../Less/customVariables.less";

	.postNav {
		display: flex;
		flex-flow: row nowrap;
		width: 100%;
		border-width: 1px 0;
		border-color: @primaryColor !important;
		padding: @spaceXl @spaceSm;
		& > .previous,
		& > .next {
			position: relative;
			flex: 1 1 160px;
			&::before {
				content: "Previous Post";
				font-weight: 700;
				font-size: @fontSize;
			}
			&::after {
				content: "";
				position: absolute;
				left: 0;
				top: 3 * @spaceLg;
				border-left: @spaceLg solid @primaryColor;
				height: 60%;
			}
			& > h3 {
				font-weight: 900;
				letter-spacing: 2px !important;
				color: @accentColor;
				cursor: pointer;
				margin-left: @spaceXl;
			}
		}
		& > .next {
			&:before {
				content: "Next Post";
			}
		}
		@media screen {
			@media (max-width: @1600width) {
				// .responsive(@1200width, -3);
			}

			@media (max-width: @1200width) {
				& > .previous,
				& > .next {
					& > h3 {
						font-size: @fontSize;
						font-weight: 300;
						margin-top: @spaceLg !important;
						margin-bottom: 0 !important;
					}
				}
			}

			@media (max-width: @768width) {
				// .responsive(@480width, -1);
			}

			@media (max-width: @480width) {
				// .responsive(@320width, 0);
				flex-flow: column nowrap !important;
				& > .previous,
				& > .next {
					& > h3 {
						font-size: 2 * @fontSizeMd;
						font-weight: 300;
						margin-top: @spaceLg !important;
						margin-bottom: 0 !important;
					}
					&:before {
						margin-bottom: @spaceMd;
					}
				}
			}

			@media (max-width: @320width) {
				.responsive(@320width, -2);
			}
		}
	}
</style>