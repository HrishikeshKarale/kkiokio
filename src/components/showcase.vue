<template>
	<div class="showcase">
		<router-link
			v-if="component"
			:to="{ name: component }"
		>
			<h3>
				{{ project.title }} <span class="fas fa-external-link-square-alt" />
			</h3>
		</router-link>
		<h3 v-else>{{ project.title }}</h3>
		<!-- eslint-disable-next-line vue/no-v-html -->
		<p v-html="project.description" />
		<ul v-if="project.tags">
			<template
				v-for="tag in project.tags"
				:key="tag"
			>
				<li v-if="tag">
					<span>{{ tag }}</span>
				</li>
			</template>
		</ul>
	</div>
</template>
<script>
	export default {
	  name: "Showcase",
	  props: {
	    project: {
	      required: true,
	      type: Object
	    },
	    component: {
	      required: false,
	      type: String,
	      default: ""
	    }
	  }
	};
</script>

<style lang="less" scoped>
	@import (reference) "./../Less/customVariables.less";
	@import (reference) "./../Less/customMixins.less";

	.showcase {
		display: flex;
		flex-direction: column;
		color: @textColor;
		background-color: @backgroundColor;
		padding: @spaceMd @spaceLg;
		border-radius: @borderRadiusLg;
		justify-content: space-around;
		flex: 1 2 320px;
		height: fit-content;
		border: 1px dashed @primaryColor;

		& > a > h3 {
			margin-top: 0;
			display: flex;
			justify-content: space-between;
		}

		&:hover {
			.boxShadow(@three, @accentColor);
			border: 1px dashed transparent;
			& > a > h3 {
				&:hover {
					color: @accentColor;
				}
				& > span {
					color: @accentColor;
				}
			}
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
				color: @backgroundColor;
				padding: 0 @spaceMd !important;
			}
		}
	}
</style>
