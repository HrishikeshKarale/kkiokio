<template>
	<div class="slider">
		<template v-for="slide in slides" :key="slide">
			<!-- <transition
        :name="transitionName"
        :mode="transitionMode"
        :enter-active-class="transitionEnterActiveClass"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      > -->
			<div v-if="slide == currentSlide" :class="slide" />
			<!-- </transition> -->
		</template>
		<!-- <vue-img src="" alt="Moto" /> -->
		<vue-button
			class="nextSlide"
			icon="fas fa-angle-right"
			category="large"
			:ctx="() => (currentSlide = nxtSlide())"
		/>
		<vue-button
			class="prevSlide"
			icon="fas fa-angle-left"
			category="large"
			:ctx="() => (currentSlide = prevSlide())"
		/>
		<div class="peek">
			<span
				v-for="slide in slides"
				:key="slide"
				:class="[currentSlide == slide ? 'fas' : 'far', 'fa-circle']"
				@click="currentSlide = slide"
			/>
		</div>
	</div>
</template>
<script lang="ts">
	import { defineComponent, ref } from "vue";
	import VueButton from "@/components/vueButton.vue";
	// import vueImg from "@/components/vueImg.vue";
	import repeatFunctionCall from "@/typeScript/utilities/repeatFunctionCall";

	export default defineComponent({
		components: { VueButton /*vueImg*/ },

		setup() {
			const slides = ref(["red", "white", "blue"]);
			const currentSlide = ref(slides.value[0]);
			const transitionName = ref("slide-fade");
			const transitionMode = ref("");
			const transitionEnterActiveClass = ref("");
			const prevHeight = ref("");

			const nxtSlide = () => {
				const index = slides.value.indexOf(currentSlide.value);
				if (index !== slides.value.length - 1) return slides.value[index + 1];
				else return slides.value[0];
			};

			const prevSlide = () => {
				const index = slides.value.indexOf(currentSlide.value);
				if (index !== 0) return slides.value[index - 1];
				else return slides.value[slides.value.length - 1];
			};

			// const transition = function(to: string, from: string): void {
			//   const toDepth: number = slides.value.indexOf(to);
			//   const fromDepth: number = slides.value.indexOf(from);
			//   transitionName.value = toDepth < fromDepth ? "slide-right" : "slide-left";
			//   transitionEnterActiveClass.value = `${transitionName.value}-enter-active`;
			// };

			const beforeLeave = function (element: HTMLElement): void {
				prevHeight.value = getComputedStyle(element).height;
			}; //beforeLeave

			const enter = function (element: HTMLElement): void {
				const { height } = getComputedStyle(element);

				element.style.height = prevHeight.value;

				setTimeout(() => {
					element.style.height = height;
				});
			}; //enter

			const afterEnter = function (element: HTMLElement): void {
				element.style.height = "auto";
			}; //afterEnter

			const goToSlide = function () {
				currentSlide.value = nxtSlide();
			};

			repeatFunctionCall(goToSlide);

			return {
				slides,
				currentSlide,
				nxtSlide,
				prevSlide,
				beforeLeave,
				enter,
				afterEnter,
				transitionEnterActiveClass,
				transitionName,
				transitionMode,
			};
		},
	});
</script>
<style lang="less">
	@import (reference) "../../../Less/customVariables.less";

	.slider {
		display: flex;
		position: relative;
		& > div {
			width: 100vw;
			height: 80vh;
			&.red {
				background-color: red;
			}
			&.white {
				background-color: white;
			}
			&.blue {
				background-color: blue;
			}
		}
		& > .nextSlide,
		& > .prevSlide {
			position: absolute;
			top: 50%;
			z-index: 100;
			padding: 40vh 32px;
		}
		& > .prevSlide {
			left: 32px;
		}
		& > .nextSlide {
			right: 32px;
		}
		& > .peek {
			width: fit-content;
			height: fit-content;
			position: absolute;
			top: 80vh;
			right: 50vw;
			transform: translate(32px, -48px);
			& > span {
				color: @secondaryColor;
				margin: 0 8px;
				padding: 8px;
				cursor: pointer;
			}
		}
	}
	/* Enter and leave animations can use different */
	/* durations and timing functions.              */
	.slide-fade-enter-active {
		transition: .transition();
	}
	.slide-fade-leave-active {
		transition: .transition();
	}
	.slide-fade-enter, .slide-fade-leave-to
																			/* .slide-fade-leave-active below version 2.1.8 */ {
		transform: translateX(10px);
		opacity: 0;
	}
</style>
