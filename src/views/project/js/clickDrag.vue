//https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
<template>
  <div class="clickDrag" ref="clickDrag"></div>
</template>
<script>
export default {
  name: "clickDrag",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.clickDrag {
  display: flex;
  flex-direction: column;
}
</style>
