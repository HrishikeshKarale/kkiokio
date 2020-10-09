//https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
<template>
  <div class="geoLocation">
    Geo Location
  </div>
</template>
<script>
export default {
  name: "geoLocation",
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.geoLocation {
  display: flex;
  flex-direction: column;
}
</style>
