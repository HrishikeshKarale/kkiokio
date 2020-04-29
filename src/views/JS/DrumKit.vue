<template>
  <div class="drumKit">
    <router-link to="/Project">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <div>
      <div
        v-for="k in kit"
        @click="clicked"
        :class="['key', k.isPlaying ? 'playing' : '']"
        :data-key="k.dataKey"
        :key="k.dataKey"
        @transitionend="endTransition(k.dataKey)"
      >
        <div class="keyboardKey" :data-key="k.dataKey">
          {{ k.key | capitalize }}
        </div>
        <audio :src="k.audio" :data-key="k.dataKey"></audio>
        <div class="instrument" :data-key="k.dataKey">
          {{ k.name | capitalize }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "drumKit",
  data() {
    const kit = [
      {
        name: "clap",
        key: "A",
        dataKey: "65",
        audio: new Audio("@/assets/audio/clap.wav"),
        isPlaying: false
      },
      {
        name: "hihat",
        key: "S",
        dataKey: "83",
        audio: new Audio("@/assets/audio/hihat.wav"),
        isPlaying: false
      },
      {
        name: "kick",
        key: "D",
        dataKey: "68",
        audio: new Audio("@/assets/audio/kick.wav"),
        isPlaying: false
      },
      {
        name: "openhat",
        key: "F",
        dataKey: "70",
        audio: new Audio("@/assets/audio/openhat.wav"),
        isPlaying: false
      },
      {
        name: "boom",
        key: "G",
        dataKey: "71",
        audio: new Audio("@/assets/audio/boom.wav"),
        isPlaying: false
      },
      {
        name: "ride",
        key: "h",
        dataKey: "72",
        audio: new Audio("@/assets/audio/ride.wav"),
        isPlaying: false
      },
      {
        name: "snare",
        key: "J",
        dataKey: "74",
        audio: new Audio("@/assets/audio/snare.wav"),
        isPlaying: false
      },
      {
        name: "tom",
        key: "K",
        dataKey: "75",
        audio: new Audio("@/assets/audio/tom.wav"),
        isPlaying: false
      },
      {
        name: "tink",
        key: "L",
        dataKey: "76",
        audio: new Audio("@/assets/audio/tink.wav"),
        isPlaying: false
      }
    ];
    return {
      kit
    };
  },
  filters: {
    capitalize: function(value) {
      return value.toUpperCase();
    }
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
          kit.isPlaying = true;
          console.log(kit);
          try {
            kit.audio.play().then(() => {
              //automatic playback started
            });
          } catch (e) {
            console.log(e);
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
    }
  },
  created() {
    window.addEventListener("keydown", this.keyPressed);
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../Less/customMixins.less";
@import (reference) "./../../Less/customVariables.less";
.drumKit {
  & > div {
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
      padding: 8px;
      border-radius: 4px;
      .boxShadow(@three);
      width: 120px;
      height: 120px;
      cursor: pointer;
      &.key {
        border: 0px solid @primaryColor;
        transition: 0.07s;
      }
      &.playing {
        transform: scale(1.1);
        border-width: 4px;
      }
    }
  }
}
</style>
