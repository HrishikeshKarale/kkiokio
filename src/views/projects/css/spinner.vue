<template>
  <div class="spinner" />
</template>
<script>
export default {
  name: "Spinner"
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.spinner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: @fontSize*4;
  height: @fontSize*4;
  border: @spaceMd solid #eee;
  border-right-color: @accent;
  border-left-color: @primary;
  animation: spin 2s ease-in-out infinite;
  .boxShadow(@base);
  &::after {
    content: "Loading";
    color: @textColor;
    font-weight: bold;
    background-color: @accent;
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
