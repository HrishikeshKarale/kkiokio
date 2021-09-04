//https://codepen.io/pietvanzoen/pen/Ccjlt
<template>
	<footer class="vueFooter">
		<router-link :to="{ name: 'home' }">
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
						<router-link :to="{ name: navigation.component }">
							{{ navigation.name }}
						</router-link>
					</li>
				</ul>
			</div>
			<div>
				<h3>Legal</h3>
				<ul>
					<li>
						<router-link to="/termsOfService"> Terms Of Service </router-link>
					</li>
					<li>
						<router-link to="/privacyPolicy"> Privacy Policy </router-link>
					</li>
					<li>
						<router-link to="/disclaimer"> Disclaimer </router-link>
					</li>
					<li>
						<router-link to="/siteMap"> Site Map </router-link>
					</li>
				</ul>
			</div>
			<div>
				<h3>Buisness</h3>
				<ul>
					<li>
						<router-link to="/buisness"> For Buisness </router-link>
					</li>
					<li>
						<router-link to="/blog"> Blogs </router-link>
					</li>
				</ul>
			</div>
		</div>
		<p class="copyright">
			<span class="fas fa-copyright" />
			<b>2020 Hrishikesh Karale, All rights reserved.</b>
		</p>
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
				type: [String, null],
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
		margin-top: 4 * @spaceXl;
		&.vueFooter {
			position: relative;
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			// align-items: center;
			justify-content: space-around;
			background-color: @navBackground;
			font-size: @fontSizeSm;
			color: @offWhite;
			max-width: 100vw;
			z-index: @contentZ;
			min-height: @footer;
			//footer logo
			& > a {
				width: 320px;
				align-self: center;
				& > .vueImg {
					height: 80px;
					& + h3 {
						display: flex;
						flex-direction: column;
						margin-top: @spaceLg;
						& > h5 {
							align-self: flex-end;
							color: @white;
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
				align-self: center;
				& > span {
					margin-right: @spaceMd;
				}
			}
			& > .disclaimer {
				position: absolute;
				bottom: 0;
				left: 0;
			}
			@media screen {
				@media (max-width: @maxWidth) {
					flex-direction: column;
				}
			}
		}
	}
</style>
