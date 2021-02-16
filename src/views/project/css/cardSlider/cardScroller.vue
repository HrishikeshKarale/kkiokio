<template>
  <div class="cardScroller">
    <vue-button
      id="previous"
      tag="Previous"
      category="icon-lg"
      icon="fas fa-chevron-left"
      :ctx="handleScrollPrev.bind(this)"
    />
    <div ref="cards" class="cards">
      <slot />
    </div>
    <vue-button
      id="next"
      tag="Next"
      category="icon-lg"
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

  data() {
    const cards = this.$refs.cards;
    return {
      cards
    };
  },

  mounted() {
    this.cards = document.querySelector(".cards");
  },
  methods: {
    handleScrollNext: function() {
      this.cards.scrollLeft = this.cards.scrollLeft +=
        window.innerWidth / 2 > 160
          ? window.innerWidth / 2
          : window.innerWidth - 160;
    }, //handleScrollNext
    handleScrollPrev: function() {
      this.cards.scrollLeft = this.cards.scrollLeft -=
        window.innerWidth / 2 > 160
          ? window.innerWidth / 2
          : window.innerWidth - 160;
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
  height: min-content;
  overflow: hidden;
  &::after,
  &::before {
    content: "";
    display: block;
    width: 80px;
    height: 100%;
    position: absolute;
    z-index: @contentZ + 15 !important;
    pointer-events: none;
    right: 0;
    //   background: rgb(255, 255, 255);
    //   background: -moz-linear-gradient(
    //     90deg,
    //     rgba(255, 255, 255, 0) 0%,
    //     rgba(250, 251, 252, 1) 100%
    //   );
    //   background: -webkit-linear-gradient(
    //     90deg,
    //     rgba(255, 255, 255, 0) 0%,
    //     rgba(250, 251, 252, 1) 100%
    //   );
    //   background: linear-gradient(
    //     90deg,
    //     rgba(255, 255, 255, 0) 0%,
    //     rgba(250, 251, 252, 1) 100%
    //   );
    //   filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#fafbfc",GradientType=1);
  }
  &::before {
    content: "";
    display: block;
    width: 80px;
    height: 100%;
    position: absolute;
    z-index: @contentZ + 15 !important;
    pointer-events: none;
    left: 0;
    // background: rgb(250, 251, 252);
    // background: -moz-linear-gradient(
    //   90deg,
    //   rgba(250, 251, 252, 1) 0%,
    //   rgba(255, 255, 255, 0) 100%
    // );
    // background: -webkit-linear-gradient(
    //   90deg,
    //   rgba(250, 251, 252, 1) 0%,
    //   rgba(255, 255, 255, 0) 100%
    // );
    // background: linear-gradient(
    //   90deg,
    //   rgba(250, 251, 252, 1) 0%,
    //   rgba(255, 255, 255, 0) 100%
    // );
    // filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fafbfc",endColorstr="#ffffff",GradientType=1);
  }
  & > button {
    position: absolute;
    z-index: @contentZ + 25 !important;
    right: 0;
    &#previous {
      right: auto;
      left: 0;
    }
  }
  & > .cards {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    scroll-behavior: smooth;
    overflow: auto;
    width: 100%;
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
