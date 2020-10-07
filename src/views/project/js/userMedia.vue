<template>
  <div class="userMedia" ref="KeyPressed">
    UserMedia
  </div>
</template>
<script>
export default {
  name: "userMedia",
  data() {
    return {};
  },
  methods: {
    getMedia: function(
      constraints = {
        audio: true,
        video: {
          width: { min: 1280 },
          height: { min: 720 }
        }
      }
    ) {
      try {
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function(mediaStream) {
            const video = document.querySelector("video");
            video.srcObject = mediaStream;
            video.onloadedmetadata = () => {
              video.play();
            };
          })
          .catch(function(err) {
            console.log(err.name + ": " + err.message);
          }); // always check for errors at the end.
        /* use the stream */
      } catch (err) {
        //catch statement here
      }
    } //methods
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
