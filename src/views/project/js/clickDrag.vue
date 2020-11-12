//https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
<template>
  <div ref="clickDrag" class="clickDrag">
    <div class="item item1">01</div>
    <div class="item item2">02</div>
    <div class="item item3">03</div>
    <div class="item item4">04</div>
    <div class="item item5">05</div>
    <div class="item item6">06</div>
    <div class="item item7">07</div>
    <div class="item item8">08</div>
    <div class="item item9">09</div>
    <div class="item item10">10</div>
    <div class="item item11">11</div>
    <div class="item item12">12</div>
    <div class="item item13">13</div>
    <div class="item item14">14</div>
    <div class="item item15">15</div>
    <div class="item item16">16</div>
    <div class="item item17">17</div>
    <div class="item item18">18</div>
    <div class="item item19">19</div>
    <div class="item item20">20</div>
    <div class="item item21">21</div>
    <div class="item item22">22</div>
    <div class="item item23">23</div>
    <div class="item item24">24</div>
    <div class="item item25">25</div>
  </div>
</template>
<script>
export default {
  name: "ClickDrag",
  data() {
    let slider;
    const isDown = false;
    let startX;
    let scrollLeft;
    return {
      slider,
      isDown,
      startX,
      scrollLeft
    };
  }, //methods

  mounted() {
    this.slider = this.$refs.clickDrag;
    this.slider.addEventListener("mousedown", this.mouseClickEnter, {
      catpure: false,
      once: false
    });

    this.slider.addEventListener("mouseleave", this.mouseLeaveEvent, {
      catpure: false,
      once: false
    });

    this.slider.addEventListener("mouseup", this.mouseClickRelease, {
      catpure: false,
      once: false
    });

    this.slider.addEventListener("mousemove", this.mouseMoveEvent, {
      catpure: false,
      once: false
    });
  }, //data

  methods: {
    mouseClickEnter: function(e) {
      const slider = this.slider;
      this.isDown = true;
      slider.classList.add("active");
      this.startX = e.pageX - slider.offsetLeft;
      this.scrollLeft = slider.scrollLeft;
      // console.log(slider, e.pageX, slider.offsetLeft, slider.scrollLeft);
    }, //mouseClickEnter
    mouseClickRelease: function() {
      this.isDown = false;
      this.slider.classList.remove("active");
    }, //mouseClickRelease
    mouseLeaveEvent: function() {
      this.isDown = false;
      this.slider.classList.remove("active");
    }, //mouseLeaveEvent
    mouseMoveEvent: function(e) {
      const slider = this.slider;
      if (!this.isDown) return; // stop the fn from running
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - this.startX) * 3;
      slider.scrollLeft = this.scrollLeft - walk;
      // e.stopPropogation(); //stop event bubbling
    } //mouseMoveEvent
  } //mounted
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.clickDrag {
  height: 800px;
  padding: 100px;
  width: 100%;
  border: 1px solid grey;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  transition: @transition;
  transform: scale(0.99);
  will-change: transform;
  position: relative;
  font-size: 0;
  perspective: 500px;
  &.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
    transform: scale(1);
  }

  & > .item {
    width: 200px;
    height: calc(100% - 40px);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    font-weight: 100;
    .boxShadow(@two);
    &:first-child {
      background-color: red;
      .boxShadow(none);
      // display: none;
    }
    &:nth-child(9n + 2) {
      background-color: dodgerblue;
    }
    &:nth-child(9n + 3) {
      background-color: goldenrod;
    }
    &:nth-child(9n + 4) {
      background-color: paleturquoise;
    }
    &:nth-child(9n + 5) {
      background-color: gold;
    }
    &:nth-child(9n + 6) {
      background-color: cadetblue;
    }
    &:nth-child(9n + 7) {
      background-color: tomato;
    }
    &:nth-child(9n + 8) {
      background-color: lightcoral;
    }
    &:nth-child(9n + 9) {
      background-color: darkslateblue;
    }
    &:nth-child(9n) {
      background-color: rebeccapurple;
    }
    &:nth-child(even) {
      transform: scaleX(1.31) rotateY(40deg);
    }
    &:nth-child(odd) {
      transform: scaleX(1.31) rotateY(-40deg);
    }
  }
}
</style>
