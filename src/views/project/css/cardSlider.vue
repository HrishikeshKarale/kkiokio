<template>
  <div class="cardSlider">
    <vue-button
      buttop-name="Previous"
      button-style="icon-lg"
      button-icon="fas fa-chevron-left"
      :on-click-action="handleScrollPrev.bind(this)"
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
      :on-click-action="handleScrollNext.bind(this)"
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
    z-index: 100;
    pointer-events: none;
  }
  &:before {
    content: "";
    right: 80px;
    height: 100%;
    position: absolute;
    width: 150px;
    z-index: 100;
    pointer-events: none;
  }
  & > .card {
    width: 360px;
    min-width: 300px;
    height: auto;
    background: #fafbfc;
    border-radius: @borderRadiusMd;
    position: relative;
    z-index: 10;
    margin: 32px;
    min-height: 360px;
    transition: all 0.25 ease;
    .boxShadow(@base @one);
    cursor: pointer;
    & > h3 {
      position: absolute;
      left: 0;
      top: 0;
      padding: 16px;
    }
    & > span {
      position: absolute;
      right: 0;
      top: 0;
      padding: 16px;
    }
    & > div {
      & > .content {
        padding: @spaceLg;
        & > p {
          opacity: 0.6;
          margin-top: 8px;
        }
      }
      & > .image {
        height: 240px;
        width: 240px;
        margin: 0 32px;
        margin-top: -96px;
        display: flex;
        justify-content: center;
        transition: all 0.25 ease-out;
        background-color: red;
      }
    }
    &:hover {
      transform: translate(0 -8px);
      .boxShadow(@base @three);
      & > image {
        transform: translate(0, -16px);
      }
    }
  }
}
</style>
