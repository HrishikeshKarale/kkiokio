<template>
	<div class="enterpriseAppLayout">
		<template v-if="$slots['header']">
			<slot name="header" />
		</template>
		<div class="body">
			<template v-if="$slots['menu']">
				<slot name="menu" />
			</template>
			<transition
				:name="transitionName"
				:mode="transitionMode"
				:enter-active-class="transitionEnterActiveClass"
				@beforeLeave="beforeLeave"
				@enter="enter"
				@afterEnter="afterEnter"
			>
				<div :key="$route.path" class="content">
					<countdown-timer
						class="alert"
						start-time="January 24, 2021 23:59:99"
						end-time="Aug 16, 2021 00:00:01"
						trans='{
              "day":"Day",
              "hours":"Hours",
              "minutes":"Minuts",
              "seconds":"Seconds",
              "expired":"Please contact the administrator (hrishirich619@gmail.com).",
              "running":"Please report any bugs to site administrator at hrishirich619@gmail.com",
              "upcoming":"Till start of event.",
              "status": {
                "expired":"We apologise fior the delay, Please come back tomorrow.",
                "running":"Site is currently being updated.",
                "upcoming":"Future"
              }
            }'
					/>
					<breadcrums />
					<scroll-indicator>
						<router-view :key="$route.path" />
					</scroll-indicator>
					<template v-if="$slots['moto']">
						<slot name="moto" />
					</template>
				</div>
			</transition>
			<template v-if="$slots['footer']">
				<slot name="footer" />
			</template>
		</div>
	</div>
</template>

<script>
	import scrollIndicator from "@/views/project/js/scrollIndicator/scrollIndicator";
	import CountdownTimer from "@/components/countdownTimer.vue";
	import breadcrums from "@/components/breadcrums";
	import { authentication } from "@/typeScript/authentication";
	import { cookie } from "@/typeScript/cookie";

	export default {
		name: "EnterpriseAppLayout",
		components: {
			CountdownTimer,
			scrollIndicator,
			breadcrums,
		},

		mixins: [authentication, cookie],
		data() {
			const DEFAULT_TRANSITION = "fade";
			const DEFAULT_TRANSITION_MODE = "out-in";
			const transitionEnterActiveClass = "";
			const prevHeight = 0;
			return {
				transitionName: DEFAULT_TRANSITION,
				transitionMode: DEFAULT_TRANSITION_MODE,
				transitionEnterActiveClass,
				prevHeight,
			};
		}, //mixins

		beforeMount() {
			this.$router.beforeEach((to, from, next) => {
				let transitionName =
					to.meta.transitionName ||
					from.meta.transitionName ||
					this.transitionName;
				if (transitionName === "slide") {
					const toDepth = to.path.split("/").length;
					const fromDepth = from.path.split("/").length;
					transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
				}
				// this.transitionMode = DEFAULT_TRANSITION_MODE;
				this.transitionEnterActiveClass = `${transitionName}-enter-active`;

				if (to.meta.transitionName === "zoom") {
					this.transitionMode = "in-out";
					this.transitionEnterActiveClass = "zoom-enter-active";
					// Disable scrolling in the background.
					document.body.style.overflow = "hidden";
				}

				if (from.meta.transitionName === "zoom") {
					this.transitionMode = null;
					this.transitionEnterActiveClass = null;
					// Enable scrolling again.
					document.body.style.overflow = null;
				}

				this.transitionName = transitionName;

				//check if matched route requires authentication
				if (to.matched.some((record) => record.meta.requiresAuth)) {
					//if matched route requires authentication then check for absence of token
					if (localStorage.getItem("jwt") == null && !this.checkCookie("token")) {
						//when no token is found redirect to login page and set redirec
						next({
							name: "login",
							query: { nextUrl: to.name },
						});
					}
					//if matched route requires authentication and has token
					else {
						let user = "{}";
						if (localStorage.getItem("user")) {
							user = localStorage.getItem("user");
						} else if (this.checkCookie("user")) {
							//console.log(this.getCookie('user'));
							user = this.getCookie("user");
						}
						// const user = JSON.parse(localStorage.getItem('user') || JSON.parse(this.getCookie('user')) ||{});
						//when token is present check if user is an Admin
						if (to.matched.some((record) => record.meta.isAdmin)) {
							//If user is an admin, proceed
							if (user.isAdmin == 1) {
								next();
							}
							//if user is not admin then redirect to  about page
							else {
								next({ path: "home" });
							}
						} else {
							next();
						}
					}
				}
				//authentication was not required.
				//check if guest access is required to matched route
				else if (to.matched.some((record) => record.meta.guest)) {
					if (localStorage.getItem("jwt") == null) {
						next();
					} else {
						next({ name: "about" });
					}
				} else {
					next();
				}
			});
		}, //beforeMount

		mounted() {
			// document.addEventListener("scroll", this.scrollNav);
		}, //mounted

		methods: {
			// scrollNav: function(event) {
			//   console.log("scrollNav", event);
			// }, //scrollNav
			beforeLeave(element) {
				this.prevHeight = getComputedStyle(element).height;
			}, //beforeLeave
			enter(element) {
				const { height } = getComputedStyle(element);

				element.style.height = this.prevHeight;

				setTimeout(() => {
					element.style.height = height;
				});
			}, //enter
			afterEnter(element) {
				element.style.height = "auto";
			}, //afterEnter
		},
	};
</script>

<style lang="less" scoped>
	@import (reference) "./../Less/customMixins.less";
	@import (reference) "./../Less/customVariables.less";

	.enterpriseAppLayout {
		display: flex;
		flex-direction: column;
		position: relative;
		height: 100vh;
		width: 100vw;
		& > div {
			display: flex;
			flex-direction: row;
			height: 100%;
			&.body {
				display: flex;
				flex-direction: column;
				max-width: 100vw;
				.scroll(100vh);

				//scroll content
				div {
					&.content {
						align-self: center;
						color: @textColor;
						max-width: 72vw;
						// min-width: 1024px;
						margin: 0 @spaceXl;
						// background-color: lightcyan;
						//countdown timer
						& > .alert {
							flex-direction: row;
							background-color: @dangerBorder;
							padding: @spaceMd @spaceLg;
							border-radius: @borderRadiusLg;
							height: fit-content;
							width: fit-content;
						}
					}
				}
			}
		}
		@media screen {
			@media (max-width: @maxWidth) {
				& > div {
					&.body {
						& > div.content {
							max-width: 1024px;
							min-width: 320px;
						}
					}
				}
			}
		}
	}

	//zoom transition
	.zoom-enter-active,
	.zoom-leave-active {
		animation-duration: @transitionDuration;
		animation-fill-mode: both;
		animation-name: zoom;
	}

	.zoom-leave-active {
		animation-direction: reverse;
	}

	@keyframes zoom {
		from {
			opacity: 0;
			transform: scale3d(0.5, 0.5, 0.5);
		}

		100% {
			opacity: 1;
		}
	}

	//fade transition
	.fade-enter-active,
	.fade-leave-active {
		transition-duration: @transitionDuration;
		transition-property: opacity;
		transition-timing-function: @transitionTimingFunction;
	}

	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}

	//slide transition
	.slide-left-enter-active,
	.slide-left-leave-active,
	.slide-right-enter-active,
	.slide-right-leave-active {
		transition-duration: @transitionDuration;
		transition-property: height, opacity, transform;
		transition-timing-function: @transitionTimingFunction;
		overflow: hidden;
	}

	.slide-left-enter,
	.slide-right-leave-active {
		opacity: 0;
		transform: translate(96px, 0);
	}

	.slide-left-leave-active,
	.slide-right-enter {
		opacity: 0;
		transform: translate(-96px, 0);
	}
</style>
