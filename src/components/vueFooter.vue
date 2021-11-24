//https://codepen.io/pietvanzoen/pen/Ccjlt
<template>
	<footer class="vueFooter">
		<router-link :to="{ name: 'home' }" replace>
			<vue-img :src="logoLink" alt="Logo" />
			<h3>
				Hrishikesh Karale
				<h5>Kkiokio.com</h5>
			</h3>
		</router-link>
		<div class="social">
			<a href="https://github.com/HrishikeshKarale">
				<span class="fab fa-github fa-2x" />
				<!-- <b>
            @hrishikesh-karale
          </b> -->
			</a>
			<a href="https://www.npmjs.com/~kkiokio">
				<span class="fab fa-npm fa-2x" />
				<!-- <b>
            @kkiokio
          </b> -->
			</a>
			<a href="https://www.linkedin.com/in/hrishikesh-karale/">
				<span class="fab fa-linkedin-in fa-2x" />
				<!-- <b>
            @hrishikesh-karale
          </b> -->
			</a>
		</div>
		<div>
			<div>
				<h3>Kkiokio</h3>
				<ul>
					<li
						v-for="(navigation, index) in nav"
						:key="index + '-' + navigation.name"
					>
						<router-link
							:to="{ name: navigation.component }"
							v-text="navigation.name"
							replace
						/>
					</li>
				</ul>
			</div>
			<div>
				<h3>Legal</h3>
				<ul>
					<li>
						<router-link
							to="/termsOfService"
							v-text="'Terms Of Service'"
							replace
						/>
					</li>
					<li>
						<router-link
							to="/privacyPolicy"
							v-text="'Privacy Policy'"
							replace
						/>
					</li>
					<li>
						<router-link to="/disclaimer" v-text="'Disclaimer'" replace />
					</li>
					<li>
						<router-link to="/siteMap" v-text="'Site Map'" replace />
					</li>
				</ul>
			</div>
			<div>
				<h3>Buisness</h3>
				<ul>
					<li>
						<router-link to="/buisness" v-text="'For Buisness'" replace />
					</li>
					<li>
						<router-link to="/blog" v-text="'Blogs'" replace />
					</li>
				</ul>
			</div>
		</div>
		<p class="copyright">
			<span class="fas fa-copyright" />
			<b>2020 Hrishikesh Karale, All rights reserved.</b>
		</p>
		<a
			class="clickyTracking"
			title="Real Time Web Analytics"
			href="http://clicky.com/101333366"
			><img
				alt="Clicky"
				src="//static.getclicky.com/media/links/badge.gif"
				border="0"
		/></a>
		<small class="disclaimer">
			* The views expressed on this website are entirely mine.
		</small>
	</footer>
</template>

<script>
	import vueImg from "./vueImg.vue";
	export default {
		name: "VueFooter",
		components: {
			vueImg,
		},
		props: {
			logoLink: {
				required: false,
				type: String,
				default: null,
			},

			nav: {
				required: true,
				type: Object,
				default: null,
			},
		}, //data
	}; //default
</script>

//
<style lang="less" scoped>
	@import (reference) "./../Less/customVariables.less";
	@import (reference) "./../Less/customMixins.less";

	footer {
		padding: @spaceXl @spaceMd;
		position: relative;
		&.vueFooter {
			display: flex;
			flex-flow: column nowrap;
			background-color: @navBackground;
			font-size: @fontSizeSm;
			color: @offWhite;
			width: 100vw;
			z-index: @bodyZ;
			min-height: @footer;
			//footer logo
			& > a {
				display: flex;
				flex-direction: column;
				width: 320px;
				align-self: center;
				align-content: center;
				&:hover {
					border: none;
				}
				&.clickyTracking {
					visibility: hidden;
					height: 0;
				}
				& > .vueImg {
					min-width: 80px !important;
					align-self: center;
					& + h3 {
						display: flex;
						flex-direction: column;
						align-items: center;
						margin-top: @spaceLg;
						font-weight: bold;
						& > h5 {
							align-self: flex-end;
							color: @navText;
						}
					}
				}
			}
			& > div {
				position: relative;
				display: flex;
				flex-direction: row;
				justify-content: space-evenly;
				flex-wrap: wrap;
				width: 100%;
			}
			& > .social {
				display: flex;
				align-self: center;
				justify-content: space-evenly;
				width: fit-content;
				& > a {
					& > span {
						margin: 0 @spaceLg;
					}
				}
			}
			& > .copyright {
				display: flex;
				align-self: center;
				gap: @spaceMd;
				& > span {
					align-self: center;
				}
			}
			& > .disclaimer {
				position: absolute;
				bottom: 0;
				left: 0;
			}
			@media screen {
				@media (max-width: @1600width) {
				}
				@media (max-width: @1200width) {
				}
				@media (max-width: @768width) {
				}
				@media (max-width: @480width) {
				}
				@media (max-width: @320width) {
				}
			}
		}
	}
</style>
