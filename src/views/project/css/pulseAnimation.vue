<template>
  <div class="pulseAnimation">
    pulseAnimation
    <div class="pulse" />
    <spinner />
  </div>
</template>
<script>
import spinner from "./spinner.vue";
export default {
  name: "PulseAnimation",
  components: {
    spinner
  }, //components
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
  & > .pulse {
    border-radius: 50%;
    width: @fontSize;
    height: @fontSize;
    background: blue;
    &::after {
      content: "";
      position: absolute;
      width: @fontSize;
      height: @fontSize;
      z-index: 1;
      border-radius: 50%;
      background: blue;
      animation: pulse 1s ease infinite;
    }
  }
  @keyframes pulse {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
}
</style>
