<template>
	<div class="postNav">
		<div class="previous">
			<h3
				@click="
					$router.push({
						name: previous.blog ? 'articlePage' : previous.component,
						params: {
							article: previous.blog ? previous.title : '',
						},
					})
				"
			>
				{{ previous.title }}
			</h3>
		</div>
		<div class="next">
			<h3
				@click="
					$router.push({
						name: next.blog ? 'articlePage' : next.component,
						params: {
							article: next.blog ? next.title : '',
						},
					})
				"
			>
				{{ next.title }}
			</h3>
		</div>
	</div>
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
			flex: 1 1 160px;
			&:before {
				content: "Previous Post";
				font-weight: 700;
				font-size: @fontSize;
			}
			& > h3 {
				font-weight: 900;
				color: @accentColor;
				cursor: pointer;
				margin-left: @spaceMd;
				margin-top: @spaceMd !important;
			}
		}
		& > .next {
			&:before {
				content: "Next Post";
			}
		}
	}
</style>