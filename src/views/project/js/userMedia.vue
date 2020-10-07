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
