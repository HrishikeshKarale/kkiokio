<template>
	<div class="scrollIn">
		<follower-along-nav>
			<nav>
				<ul class="cool">
					<li>
						<a href="#">About Me</a>
						<div class="dropdown dropdown1">
							<div class="bio">
								<img src="https://logo.clearbit.com/wesbos.com" />
								<p>
									Wes Bos sure does love web development. He teaches things like
									JavaScript, CSS and BBQ. Wait. BBQ isn't part of web
									development. It should be though!
								</p>
							</div>
						</div>
					</li>
					<li>
						<a href="#">Courses</a>
						<ul class="dropdown courses">
							<li>
								<span class="code">RFB</span>
								<a href="#">React For Beginners</a>
							</li>
							<li>
								<span class="code">ES6</span>
								<a href="#">ES6 For Everyone</a>
							</li>
							<li>
								<span class="code">NODE</span>
								<a href="#">Learn Node</a>
							</li>
							<li>
								<span class="code">STPU</span>
								<a href="#">Sublime Text Power User</a>
							</li>
							<li>
								<span class="code">WTF</span>
								<a href="#">What The Flexbox?!</a>
							</li>
							<li>
								<span class="code">GRID</span>
								<a href="#">CSS Grid</a>
							</li>
							<li>
								<span class="code">LRX</span>
								<a href="#">Learn Redux</a>
							</li>
							<li>
								<span class="code">CLPU</span>
								<a href="#">Command Line Power User</a>
							</li>
							<li>
								<span class="code">MMD</span>
								<a href="#">Mastering Markdown</a>
							</li>
						</ul>
					</li>

					<li>
						<a href="#">Other Links</a>
						<ul class="dropdown dropdown3">
							<li>
								<a class="button" href="#">Twitter</a>
							</li>
							<li>
								<a class="button" href="#">Facebook</a>
							</li>
							<li><a class="button" href="#">Blog</a></li>
							<li>
								<a class="button" href="#">Course Catalog</a>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</follower-along-nav>
	</div>
</template>
<script>
	import { loading } from "@/typeScript/common/loading";
	import followerAlongNav from "@/views/project/js/followerAlongNav/followerAlongNav.vue";
	export default {
		name: "FollowNav",
		mixins: [loading],
		components: {
			followerAlongNav,
		},
	};
</script>
<style lang="less" scoped>
	@import (reference) "./../../../../Less/customMixins.less";
	@import (reference) "./../../../../Less/customVariables.less";
	.scrollIn {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		nav {
			position: relative;
			perspective: 600px;

			ul {
				list-style: none;
				display: flex;
				justify-content: center;
				&.cool > li {
					position: relative;
					display: flex;
					justify-content: center;
					& > a {
						color: yellow;
						text-decoration: none;
						font-size: 20px;
						background: rgba(0, 0, 0, 0.2);
						padding: 10px 20px;
						display: inline-block;
						margin: 20px;
						border-radius: 5px;
					}
				}
			}
		}
		.dropdown {
			opacity: 0;
			position: absolute;
			overflow: hidden;
			padding: 20px;
			top: -20px;
			border-radius: @borderRadiusSm;
			transition: @transition;
			transform: translateY(100px);
			will-change: opacity;
			display: none;
			&.bio {
				min-width: 400px;
				display: flex;
				justify-content: center;
				align-items: center;
				line-height: 1.7;
				& > .vueImg {
					float: left;
					margin-right: 20px;
				}
			}
			&.courses {
				min-width: 300px;
				& > li {
					padding: 10px 0;
					display: block;
					border-bottom: 1px solid rgba(0, 0, 0, 0.2);
				}
			}
		}
		.trigger-enter .dropdown {
			display: block;
		}

		.trigger-enter-active .dropdown {
			opacity: 1;
		}
	}
</style>
