<template>
  <div class="cardScroller">
    <vue-button
      id="previous"
      tag="Previous"
      category="large"
      icon="fas fa-chevron-left"
      :ctx="handleScrollPrev.bind(this)"
    />
    <div class="cardsBg" />
    <div ref="cards" class="cards">
      <slot />
    </div>
    <vue-button
      id="next"
      tag="Next"
      category="large"
      icon="fas fa-chevron-right"
      :ctx="handleScrollNext.bind(this)"
    />
  </div>
</template>
<script>
import vueButton from "../../../../components/vueButton.vue";
export default {
  name: "CardScroller",

  components: {
    vueButton
  },
  props: {
    autoScroll: {
      required: false,
      type: Boolean,
      default: false
    }
  }, //props

  data() {
    const cards = this.$refs.cards;
    const timer = null;
    const wait = 2;
    const directionRight = true;
    return {
      cards,
      timer,
      wait,
      directionRight
    };
  },

  mounted() {
    this.cards = document.querySelector(".cards");
    // if (this.autoScroll) {
    // 	this.timer = setInterval(() => {
    // 		console.log(this.directionRight ? "right" : "left", this.rightScroll());
    // 		if (this.directionRight) {
    // 			if (this.rightScroll()) {
    // 				this.handleScrollNext();
    // 			} else {
    // 				this.directionRight = false;
    // 			}
    // 		} else {
    // 			console.log(
    // 				this.directionRight ? "right" : "left",
    // 				this.leftScroll()
    // 			);
    // 			if (this.leftScroll()) {
    // 				this.handleScrollPrev();
    // 			} else {
    // 				this.directionRight = true;
    // 			}
    // 		}
    // 	}, this.wait * 1000);
    // }
  },

  beforeUnmount() {
    clearInterval(this.timer);
  }, //beforeUnmount

  methods: {
    rightScroll: function() {
      return this.cards.scrollLeft < window.innerWidth;
    }, //rightScroll

    leftScroll: function() {
      return this.cards.scrollLeft <= 0;
    }, //leftScroll

    handleScrollNext: function() {
      this.cards.scrollLeft = this.cards.scrollLeft += window.outerWidth;
    }, //handleScrollNext

    handleScrollPrev: function() {
      this.cards.scrollLeft = this.cards.scrollLeft -= window.outerWidth;
    } //handleScrollPrev
  }
};
</script>
<style lang="less" scoped>
@import (reference) "../../../../Less/customMixins.less";
@import (reference) "../../../../Less/customVariables.less";
.cardScroller {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  overflow: hidden;
  padding: @spaceMd;
  // background-color: @textColor;
  border: 1px dashed @accentColor;
  border-radius: @borderRadiusLg;
  position: relative;

  & > button {
    position: absolute;
    z-index: @contentZ + 25 !important;
    right: 0;
    height: 80px;
    border-radius: 50% 0 0 50%;
    &#previous {
      border-radius: 0 50% 50% 0;
      right: auto;
      left: 0;
    }
  }
  & > .cardsBg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: @primaryColor;
    z-index: @contentZ;
    // opacity: 0.1;
    filter: opacity(8%);
  }
  & > .cards {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    scroll-behavior: smooth;
    overflow: auto;
    gap: @spaceXl;
    width: 100%;
    z-index: @contentZ+10;
    &::-webkit-scrollbar {
      height: 0px;
    }
    &::after {
      content: "";
      display: block;
      min-width: 20px;
      height: 100px;
      position: relative;
    }
    & > .card {
      display: flex;
      position: relative;
      flex-direction: column;
      min-width: 240px;
      max-width: 360px;
      border-radius: @borderRadius;
      z-index: @contentZ + 5;
      margin: @spaceMd @spaceLg;
      padding: @spaceMd @spaceLg;
      min-height: 360px;
      transition: @transition;
      border: 1px solid @accentColor;
      .boxShadow(none);
      cursor: pointer;
      & > h4,
      & > span {
        position: absolute;
        left: 0;
        top: 0;
        padding: @spaceLg;
        margin: 0;
      }
      & > span {
        left: auto;
        right: 0;
      }
      & > .image {
        display: flex;
        align-self: center;
        height: 240px;
        width: 240px;
        transition: @transition;
        background-color: grey;
      }
      & > .content {
        transition: @transition;
        & > p {
          opacity: 0.6;
          margin-top: @spaceMd;
        }
      }
      &:hover {
        transform: translate(0, -4px);
        .boxShadow(@two, @accentColor);
        & > .image,
        & > .content {
          transform: translate(0, -16px);
        }
      }
    }
  }
}
</style>
