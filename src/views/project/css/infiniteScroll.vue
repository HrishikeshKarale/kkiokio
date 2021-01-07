<template>
  <div class="infiniteScroll">
    <div :class="['images', reverse ? 'reverse' : null]">
      <div
        v-for="(l, index) in [
          ...list,
          ...list,
          ...list,
          ...list,
          ...list,
          ...list,
          ...list,
          ...list,
          ...list,
          ...list,
          ...list,
          ...list
        ]"
        :key="index"
      >
        <span>
          {{ l }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "InfiniteScroll",
  props: {
    list: {
      required: true,
      type: Array
    },
    reverse: {
      required: false,
      type: [Boolean, null],
      default: false
    }
  } //props
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";

@speed: 40s;

.infiniteScroll {
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
  & > .images {
    display: flex;
    position: absolute;
    animation: slideshow-right @speed linear infinite;
    &.reverse {
      animation: slideshow-left @speed linear infinite;
    }
    height: max-content;
    width: max-content;
    & > div {
      display: flex;
      justify-content: center;
      align-content: center;
      height: max-content;
      width: max-content;
      border: 2px dotted @accentColor;
      padding: @spaceMd @spaceXl;
      height: max-content;
      width: max-content;
    }
  }
  @keyframes slideshow-right {
    0% {
      right: 0;
    }
    100% {
      right: -200%;
    }
  }
  @keyframes slideshow-left {
    0% {
      left: 0;
    }
    100% {
      left: -200%;
    }
  }
}
</style>
