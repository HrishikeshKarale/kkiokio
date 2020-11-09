<template>
  <div class="videoControl">
    <video
      ref="video"
      class="flex"
      width="765"
      height="430"
      src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
      loop
      controls
    />
    <div ref="speed" class="speed">
      <div ref="bar" class="speed-bar">1×</div>
    </div>
    <!-- <div>
      <input
        type="range"
        ref="slider"
        :min="min < 1 ? '1' : '0'"
        :max="max"
        step="1"
        v-model="slider"
        @click="playbackSpeed()"
      />
    </div>
    {{ this.slider && this.slider > 0 ? this.slider.toFixed(2) : "1" }}x -->
  </div>
</template>
<script>
export default {
  name: "VideoControl",
  data() {
    let speed;
    let bar;
    let video;
    const min = 0.1;
    const max = 5;
    // const slider = this.min;
    return {
      speed,
      video,
      bar,
      min,
      max
      // slider
    };
  }, //methods

  mounted() {
    this.speed = this.$refs.speed;
    this.video = this.$refs.video;
    this.bar = this.$refs.bar;
    // this.slider = 1;

    this.speed.addEventListener("mousemove", this.handleMove);
  },
  methods: {
    // stop both mic and camera
    handleMove: function(e) {
      const element = e.target;
      const y = e.pageY - element.offsetTop;
      const percent = y / element.offsetHeight;
      const height = Math.round(percent * 100) + "%";
      this.slider = percent * this.max - this.min + this.min;
      this.bar.style.height = height;
      this.bar.textContent = this.slider.toFixed(2) + "×";
      this.video.playbackRate = this.slider;
    } //handleMove

    // playbackSpeed: function() {
    //   this.bar.style.height = (this.slider / this.mac) * 100;
    //   this.bar.textContent = this.slider.toFixed(2) + "×";
    //   this.video.playbackRate = this.slider;
    // } //playbackSpeed
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.videoControl {
  display: flex;
  flex-direction: row;

  & > video {
    .boxShadow(@base @one);

    & + .speed {
      width: 32px;
      background: #efefef;
      margin: 16px;
      border-radius: 50px;
      .boxShadow(@base @two);

      & > .speed-bar {
        background: linear-gradient(0deg, red 0%, green 100%);
        .textShadow(@three);
        border-radius: 50px;
        color: black;
      }
    }
  }
}
</style>
