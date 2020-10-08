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
      <select ref="audioSource" id="audioSource"></select>
    </div>

    <div class="select">
      <label for="videoSource">Video source: </label>
      <select ref="videoSource" id="videoSource"></select>
    </div>
    <video autoplay />
  </div>
</template>
<script>
export default {
  name: "userMedia",
  data() {
    let audioSelect;
    let videoSelect;
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
      constraints
    };
  },
  methods: {
    // stop both mic and camera
    stopBothVideoAndAudio: function(stream) {
      stream.getTracks().forEach(function(track) {
        if (track.readyState == "live") {
          track.stop();
        }
      });
    }, //stopBothVideoAndAudio

    // stop only camera
    stopVideoOnly: function(stream) {
      stream.getTracks().forEach(function(track) {
        if (track.readyState == "live" && track.kind === "video") {
          track.stop();
        }
      });
    }, //stopVideoOnly

    // stop only mic
    stopAudioOnly: function(stream) {
      stream.getTracks().forEach(function(track) {
        if (track.readyState == "live" && track.kind === "audio") {
          track.stop();
        }
      });
    }, //stopAudioOnly

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
              option.text =
                deviceInfo.label ||
                "microphone " + (this.audioSelect.length + 1);
              this.audioSelect.appendChild(option);
            }
            //checks for video source
            else if (deviceInfo.kind === "videoinput") {
              option.text =
                deviceInfo.label || "camera " + (this.videoSelect.length + 1);
              this.videoSelect.appendChild(option);
            } else {
              console.log(
                deviceInfo.label
                  ? "Found another device: " + deviceInfo.label
                  : "Found another device of kind/type" +
                      deviceInfo.kind +
                      +" : " +
                      deviceInfo
              );
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
        const video = document.querySelector("video");
        navigator.mediaDevices.getUserMedia(this.constraints).then(stream => {
          video.srcObject = stream;
        });
      } else {
        console.error("media access not found");
        //do something here in case of media not found
      }
    } //getMedia
  }, //methods

  mounted() {
    // this.sortMedia();
    this.getMedia();
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
  & > video {
    height: 480px;
  }
}
</style>
