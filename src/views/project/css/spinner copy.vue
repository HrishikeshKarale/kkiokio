<template>
  <div class="spinner" />
</template>
<script>
export default {
  name: "Spinner",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.spinner {
  display: inline-flex;
  border-radius: 50%;
  width: @fontSize*2;
  height: @fontSize*2;
  border: @spaceMd solid #eee;
  border-left-color: @secondaryColor;
  animation: spin 1s ease-in-out infinite;
  .boxShadow(@base);
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
  from {
    transform: rotate(0deg);
  }
}
</style>
