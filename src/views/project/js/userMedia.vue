//https://www.html5rocks.com/en/tutorials/getusermedia/intro/
//https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm
//https://davidwalsh.name/browser-camera
<template>
  <div class="userMedia">
    UserMedia
    <!-- <input type="file" accept="image/*;capture=camera" />
    <input type="file" accept="video/*;capture=camcorder" />
    <input type="file" accept="audio/*;capture=microphone" /> -->
    <video autoplay />
  </div>
</template>
<script>
export default {
  name: "userMedia",
  data() {
    const constraints = {
      audio: true,
      video: {
        width: { min: 1280 },
        height: { min: 720 }
      }
    };
    return {
      constraints
    };
  },
  methods: {
    hasGetUserMedia: function() {
      return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    }, //hasGetUserMedia

    getMedia: function() {
      if (this.hadGetUserMedia || true == true) {
        const video = document.querySelector("video");
        navigator.mediaDevices.getUserMedia(this.constraints).then(stream => {
          video.srcObject = stream;
        });
      } else {
        console.log("media access not found");
        //do something here in case of media not found
      }
    } //getMedia

    // getMedia: function(
    //   constraints = {
    //     audio: true,
    //     video: {
    //       width: { min: 1280 },
    //       height: { min: 720 }
    //     }
    //   }
    // ) {
    //   try {
    //     navigator.mediaDevices
    //       .getUserMedia(constraints)
    //       .then(function(mediaStream) {
    //         const video = document.querySelector("video");
    //         video.srcObject = mediaStream;
    //         video.onloadedmetadata = () => {
    //           video.play();
    //         };
    //       })
    //       .catch(function(err) {
    //         console.log(err.name + ": " + err.message);
    //       }); // always check for errors at the end.
    //     /* use the stream */
    //   } catch (err) {
    //     //catch statement here
    //   }
    // }
  }, //methods

  mounted() {
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
}
</style>
