<template>
  <div class="pulseAnimation">
    pulseAnimation
  </div>
</template>
<script>
export default {
  name: "pulseAnimation",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.pulseAnimation {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
