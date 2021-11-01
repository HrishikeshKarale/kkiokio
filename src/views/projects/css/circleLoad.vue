<template>
  <div class="loader" />
</template>
<script>
export default {
  name: "CircleLoad"
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";

@wt: 4px;
.loader {
  display: flex;
  width: 20 * @wt;
  height: 20 * @wt;
  border-radius: 50%;
  border: @wt solid transparent;
  border-top-color: @primary;
  background-color: transparent;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  &:before {
    content: "";
    position: absolute;
    top: @wt;
    left: @wt;
    right: @wt;
    bottom: @wt;
    border-radius: 50%;
    border: @wt solid transparent;
    border-top-color: @accent;
    -webkit-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite;
  }
  &:after {
    content: "";
    position: absolute;
    top: 3 * @wt;
    left: 3 * @wt;
    right: 3 * @wt;
    bottom: 3 * @wt;
    border-radius: 50%;
    border: @wt solid transparent;
    border-top-color: @primary;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
  }
}
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
