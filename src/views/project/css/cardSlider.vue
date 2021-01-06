<template>
  <div class="cardSlider">
    <vue-button
      buttop-name="Previous"
      button-style="icon-lg"
      button-icon="fas fa-chevron-left"
      :ctx="handleScrollPrev.bind(this)"
    />
    <div v-for="index in 10" :key="index" class="card">
      <h3>4.6</h3>
      <span class="fa fa-heart" />
      <div class="image"></div>
      <div class="content">
        <h2>Clasy Royale</h2>
        <p>text</p>
      </div>
    </div>
    <vue-button
      buttop-name="Next"
      button-style="icon-lg"
      button-icon="fas fa-chevron-right"
      :ctx="handleScrollNext.bind(this)"
    />
  </div>
</template>
<script>
import vueButton from "../../../components/vueButton.vue";
export default {
  name: "CardSlider",

  components: {
    vueButton
  },
  data() {
    return {};
  },
  methods: {
    handleScrollNext: function() {
      const cards = document.querySelector(".cardSlider");
      cards.scrollLeft = cards.scrollLeft +=
        window.innerWidth / 2 > 600
          ? window.innerWidth / 2
          : window.innerWidth - 100;
    }, //handleScrollNext
    handleScrollPrev: function() {
      const cards = document.querySelector(".cardSlider");
      cards.scrollLeft = cards.scrollLeft =
        window.innerWidth / 2 > 600
          ? window.innerwidth / 2
          : window.innerWidth - 160;
    } //handleScrollPrev
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.cardSlider {
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: auto;
  overflow: hidden;
  &:after {
    content: "";
    left: 80px;
    height: 100%;
    position: absolute;
    width: 150px;
    z-index: @bodyZ + 10;
    pointer-events: none;
  }
  &:before {
    content: "";
    right: 80px;
    height: 100%;
    position: absolute;
    width: 150px;
    z-index: @bodyZ + 10;
    pointer-events: none;
  }
  & > .card {
    width: 360px;
    min-width: 300px;
    height: auto;
    background: #fafbfc;
    border-radius: @borderRadius;
    position: relative;
    z-index: @bodyZ + 5;
    margin: @spaceXl;
    min-height: 360px;
    transition: @transition;
    .boxShadow(@one);
    cursor: pointer;
    & > h3 {
      position: absolute;
      left: 0;
      top: 0;
      padding: @spaceLg;
    }
    & > span {
      position: absolute;
      right: 0;
      top: 0;
      padding: @spaceLg;
    }
    & > div {
      & > .content {
        padding: @spaceLg;
        & > p {
          opacity: 0.6;
          margin-top: @spaceMd;
        }
      }
      & > .image {
        height: 240px;
        width: 240px;
        margin: 0 @spaceXl;
        margin-top: -96px;
        display: flex;
        justify-content: center;
        transition: @transition;
        background-color: @secondaryColor;
      }
    }
    &:hover {
      transform: translate(0 -8px);
      .boxShadow(@three);
      & > image {
        transform: translate(0, -16px);
      }
    }
  }
}
</style>
