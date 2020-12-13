<template>
  <div class="drumKit">
    <div
      v-for="k in kit"
      :key="k.dataKey"
      :class="['key', k.isPlaying ? 'playing' : '']"
      :data-key="k.dataKey"
      @click="clicked"
      @transitionend="endTransition(k.dataKey)"
    >
      <div class="keyboardKey" :data-key="k.key">
        {{ k.key }}
      </div>
      <audio :src="k.audio" :data-key="k.dataKey" />
      <div class="instrument" :data-key="k.dataKey">
        {{ k.name }}
      </div>
    </div>
  </div>
</template>
<script>
import { nameConvention } from "@/typeScript/nameConvention";
import { drumKit } from "@/store/drumKit";

export default {
  name: "DrumKit",

  mixins: [nameConvention],
  data() {
    const kit = drumKit;
    return {
      kit
    };
  },
  created() {
    window.addEventListener("keydown", this.keyPressed, {
      capture: false, // top to bottom bubbling/propogation
      once: false //should work only once
    });
  },

  methods: {
    endTransition: function(value) {
      const kit = this.kit;
      let k = null;
      for (const i in kit) {
        k = kit[i];
        if (k.dataKey == value) {
          k.isPlaying = false;
        }
      }
    },
    clicked: function() {
      const keyCode = event.target.getAttribute("data-key");
      this.playAudio(keyCode);
    },
    playAudio(keyCode) {
      // const audioFiles = Array.from(document.getElementsByTagName("audio"));
      // audioFiles.forEach(file => {
      //   const dataKey= file.getAttribute("data-key");
      //   if (dataKey == keyCode) {
      //     file.audio.currentTime = 0;
      //     file.isPlaying = true;
      //     file.audio.play();
      //   }
      // });

      this.kit.forEach(kit => {
        if (kit.dataKey == keyCode) {
          kit.audio.currentTime = 10;
          kit.audio.crossOrigin = "anonymous";
          kit.audio.autoplay = true;
          kit.isPlaying = true;
          try {
            kit.audio.play().then(() => {
              //automatic playback started
            });
          } catch (error) {
            // console.error(error);
          }
        }
      });

      // let k = null;
      // const kit = this.kit;
      // for (const i in kit) {
      //   k = kit[i];
      //   if (k.dataKey == keyCode) {
      //     k.audio.currentTime = 0;
      //     k.isPlaying = true;
      //     k.audio.play();
      //   }
      // }
    },
    keyPressed: function() {
      const keyCode = event.keyCode;
      this.playAudio(keyCode);
      // event.stopPropogation(); //stop event bubbling
    }
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.drumKit {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  & > div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
    padding: @spaceMd;
    border-radius: @borderRadius;
    .boxShadow(@three);
    width: 120px;
    height: 120px;
    cursor: pointer;
    &.key {
      border: 0px solid @primaryColor;
      transition: @transition;
    }
    &.playing {
      transform: scale(1.1);
      border-width: @borderRadius;
    }
  }
}
</style>
