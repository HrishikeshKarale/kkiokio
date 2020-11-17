//https://www.html5rocks.com/en/tutorials/getusermedia/intro/
//https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm
//https://davidwalsh.name/browser-camera
<template>
  <div class="userMedia">
    UserMedia
    <!-- <input type="file" accept="image/*;capture=camera" />
    <input type="file" accept="video/*;capture=camcorder" />
    <input type="file" accept="audio/*;capture=microphone" /> -->
    <div class="select">
      <label for="audioSource">Audio source: </label>
      <select id="audioSource" ref="audioSource"></select>
    </div>

    <div class="select">
      <label for="videoSource">Video source: </label>
      <select id="videoSource" ref="videoSource"></select>
    </div>
    <div>
      <vue-button
        buttop-name="screenshot"
        button-style="icon-lg"
        button-icon="fas fa-bullseye"
        :on-click-action="toggleFilter.bind(this)"
      />
      <vue-button
        buttop-name="stopMedia"
        button-style="icon-lg"
        button-icon="fas fa-stop"
        :on-click-action="stopBothVideoAndAudio.bind(this)"
      />
      <vue-button
        buttop-name="stopAudio"
        button-style="icon-lg"
        :button-icon="audio ? 'fas fa-microphone-slash' : 'fas fa-microphone'"
        :on-click-action="stopAudioOnly.bind(this)"
      />
      <vue-button
        buttop-name="stopVideo"
        button-style="icon-lg"
        :button-icon="video ? 'fas fa-video-slash' : 'fas fa-video'"
        :on-click-action="stopVideoOnly.bind(this)"
      />
      <vue-button
        buttop-name="screenshot"
        button-style="icon-lg"
        button-icon="fas fa-camera"
        :on-click-action="getScreenshot.bind(this)"
      />
    </div>
    <div>
      <video ref="html5Video" autoplay />
      <vue-img
        ref="screenshot"
        class="img"
        :src="screenshotImage"
        alt="screenshot"
      />
      <canvas ref="canvas" style="display:none;" />
    </div>
  </div>
</template>
<script>
import vueButton from "@/components/vueButton";
import vueImg from "@/components/vueImg.vue";
export default {
  name: "UserMedia",

  components: {
    vueButton,
    vueImg
  },
  data() {
    let audioSelect;
    let videoSelect;
    const screenshotImage = "";
    let html5Video;
    let canvas;
    const audio = false;
    const video = false;
    let screenshot;
    const filterIndex = 0;
    const filters = [
      "grayscale",
      "sepia",
      "blur",
      "brightness",
      "contrast",
      "hue-rotate",
      "hue-rotate2",
      "hue-rotate3",
      "saturate",
      "invert",
      "opacity",
      "dropShadow",
      ""
    ];
    const constraints = {
      audio: true,
      video: {
        width: { min: 1280 },
        height: { min: 720 }
      }
    };
    return {
      audioSelect,
      videoSelect,
      html5Video,
      audio,
      video,
      canvas,
      screenshot,
      filterIndex,
      filters,
      screenshotImage,
      constraints
    };
  }, //methods

  mounted() {
    // this.sortMedia();
    this.getMedia();
  },
  methods: {
    // stop both mic and camera
    stopBothVideoAndAudio: function() {
      navigator.mediaDevices.getUserMedia(this.constraints).then(stream => {
        stream.getTracks().forEach(function(track) {
          if (track.readyState == "live") {
            track.stop();
          }
        });
      });
    }, //stopBothVideoAndAudio

    // stop only camera
    stopVideoOnly: function() {
      this.video = !this.video;
      navigator.mediaDevices.getUserMedia(this.constraints).then(stream => {
        stream.getTracks().forEach(function(track) {
          if (track.readyState == "live" && track.kind === "video") {
            // console.log(track);
            track.stop();
          }
        });
      });
    }, //stopVideoOnly

    // stop only mic
    stopAudioOnly: function() {
      this.audio = !this.audio;
      navigator.mediaDevices.getUserMedia(this.constraints).then(stream => {
        stream.getTracks().forEach(function(track) {
          if (track.readyState == "live" && track.kind === "audio") {
            track.stop();
          }
        });
      });
    }, //stopAudioOnly

    //capture screenshot from webcam video
    getScreenshot: function() {
      this.canvas = this.$refs.canvas;
      this.screenshot = this.$refs.screenshot;
      this.canvas.height = this.html5Video.videoHeight;
      this.canvas.width = this.html5Video.videoWidth;
      this.canvas.getContext("2d").drawImage(this.html5Video, 0, 0);
      // Other browsers will fall back to image/png
      this.screenshotImage = this.canvas.toDataURL("image/webp");
    }, //getScreenshot

    toggleFilter: function() {
      this.html5Video.className = this.filters[
        this.filterIndex++ % this.filters.length
      ];
    }, //toggleFilter

    hasGetUserMedia: function() {
      return navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
    }, //hasGetUserMedia

    sortMedia: function() {
      navigator.mediaDevices
        .enumerateDevices() //get list of devices
        .then(deviceInfos => {
          this.audioSelect = this.$refs.audioSource;
          this.videoSelect = this.$refs.videoSource;
          for (let i = 0; i !== deviceInfos.length; ++i) {
            const deviceInfo = deviceInfos[i];
            const option = document.createElement("option");
            option.value = deviceInfo.deviceId;
            //checks for audio source
            if (deviceInfo.kind === "audioinput") {
              this.audio = true;
              option.text =
                deviceInfo.label ||
                "microphone " + (this.audioSelect.length + 1);
              this.audioSelect.appendChild(option);
            }
            //checks for video source
            else if (deviceInfo.kind === "videoinput") {
              this.video = true;
              option.text =
                deviceInfo.label || "camera " + (this.videoSelect.length + 1);
              this.videoSelect.appendChild(option);
            } else {
              // console.log(
              //   deviceInfo.label
              //     ? "Found another device: " + deviceInfo.label
              //     : "Found another device of kind/type" +
              //         deviceInfo.kind +
              //         +" : " +
              //         deviceInfo
              // );
            }
          }
          this.openStream();
        })
        .catch();
    }, //sortMedia

    //opens streaming for all devices and pauses it
    openStream: function() {
      navigator.mediaDevices.getUserMedia(this.constraints).then(stream => {
        stream.getTracks().forEach(function(track) {
          track.stop();
        });
      });
      this.constraints = {
        audio: {
          deviceId: { exact: this.audioSelect.value }
        },
        video: {
          deviceId: { exact: this.videoSelect.value }
        }
      };
      // navigator.mediaDevices
      //   .getUserMedia(constraints)
      //   .then(gotStream)
      //   .catch(handleError);
    }, //openStream

    getMedia: function() {
      const hasMedia = this.hasGetUserMedia();
      if (hasMedia) {
        this.sortMedia();
        this.html5Video = this.$refs.html5Video;
        navigator.mediaDevices.getUserMedia(this.constraints).then(stream => {
          this.html5Video.srcObject = stream;
        });
      } else {
        console.error("media access not found");
        //do something here in case of media not found
      }
    } //getMedia
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.userMedia {
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  width: 100%;
  height: 100%;
  & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    & > video {
      height: 400px;
      &.grayscale {
        filter: grayscale(50%);
      }
      &.sepia {
        filter: sepia(60%);
      }
      &.blur {
        filter: blur(8px);
      }
      &.brightness {
        filter: brightness(0.4);
      }
      &.contrast {
        filter: contrast(200%);
      }
      &.hue-rotate {
        filter: hue-rotate(90deg);
      }
      &.hue-rotate2 {
        filter: hue-rotate(190deg);
      }
      &.hue-rotate3 {
        filter: hue-rotate(270deg);
      }
      &.saturate {
        filter: saturate(30%);
      }
      &.invert {
        filter: invert(75%);
      }
      &.dropShadow {
        filter: drop-shadow(16px 16px 20px blue);
      }
      &.opacity {
        filter: opacity(25%);
      }
    }
    & > .img {
      width: 240px;
      height: auto;
    }
  }
}
</style>
