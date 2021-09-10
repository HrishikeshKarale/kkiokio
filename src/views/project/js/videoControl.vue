<template>
  <div class="videoControl">
    <video
      ref="video"
      class="flex"
      width="765"
      height="430"
      :src="src"
      :loop="!loop"
      :controls="controls"
    />
    <div class="controls">
      <h3>Manual Controls</h3>
      <input
        v-model="range"
        type="range"
        class="speed"
        :min="min"
        :max="max"
        :step="step"
        @click="playbackSpeed()"
      />
      <span v-text="range" />
    </div>
  </div>
</template>
<script>
export default {
  name: "VideoControl",
  props: {
    src: {
      required: true,
      type: String,
      default: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
    },
    speed: {
      required: false,
      type: Number,
      default: 1
    },
    min: {
      required: false,
      type: Number,
      default: 1
    },
    max: {
      required: false,
      type: Number,
      default: 1
    },
    step: {
      required: false,
      type: Number,
      default: () => {
        return this.min;
      }
    }
  }, //computed
  data() {
    let video;
    const loop = this.booleanTrue;
    const controls = this.booleanTrue;
    return {
      video,
      loop,
      controls
    };
  }, //prop
  computed: {
    range: function() {
      return this.speed;
    }
  }, //methods

  mounted() {
    this.video = this.$refs.video;
  },
  methods: {
    playbackSpeed: function() {
      this.video.playbackRate = this.speed;
    } //playbackSpeed
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
    & + .controls {
      display: flex;
      flex-flow: column nowrap;
      position: absolute;
      width: 0;
      height: 100%;
      top: 0;
      right: 0;
      border-radius: 50px 0 0 50px;
      .boxShadow(@one);
      & > * {
        display: none;
        width: 0;
        filter: opacity(0%);
      }
    }
    &:hover {
      & + .controls {
        width: 6 * @spaceXl;
        .backgroundColor();
        & > * {
          display: flex;
          width: fit-content;
          filter: opacity(100%);
        }
      }
    }
  }
}
</style>
