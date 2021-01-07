<template>
  <div class="lineLoad">
    <div>
      <span class="line line-1"></span>
      <span class="line line-2"></span>
      <span class="line line-3"></span>
      <span class="line line-4"></span>
      <span class="line line-5"></span>
      <span class="line line-6"></span>
      <span class="line line-7"></span>
      <span class="line line-8"></span>
      <span class="line line-9"></span>
      <span class="line line-10"></span>
    </div>
    <h4>Loading...</h4>
  </div>
</template>
<script>
export default {
  name: "LineLoad"
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";

.lineLoad {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  & > div {
    display: flex;
    flex-direction: row;
    height: 40px;
    width: fit-content;
    & > span {
      align-self: center;
      &.line {
        display: inline-flex;
        width: 8px;
        height: 32px;
        border-radius: @borderRadius;
        background: @accentColor;
        animation: opacity-2 1000ms infinite ease-in-out;
        margin: 0 @spaceSm;
        &.line-1 {
          animation-delay: 800ms;
        }
        &.line-2 {
          animation-delay: 600ms;
        }
        &.line-3 {
          animation-delay: 400ms;
        }
        &.line-4 {
          animation-delay: 200ms;
        }
        &.line-6 {
          animation-delay: 200ms;
        }
        &.line-7 {
          animation-delay: 400ms;
        }
        &.line-8 {
          animation-delay: 600ms;
        }
        &.line-9 {
          animation-delay: 800ms;
        }
        &.line-9 {
          animation-delay: 900ms;
        }
      }
    }
  }
  & > h4 {
    margin: 0;
    align-self: center;
    text-transform: uppercase;
    width: fit-content;
  }
}

@keyframes opacity-2 {
  0% {
    opacity: 1;
    height: 32px;
  }
  20% {
    opacity: 0.2;
    height: 24px;
  }
  40% {
    opacity: 0.4;
    height: 16px;
  }
  50% {
    opacity: 0.5;
    height: 8px;
  }
  60% {
    opacity: 0.6;
    height: 16px;
  }
  80% {
    opacity: 0.8;
    height: 24px;
  }
  100% {
    opacity: 1;
    height: 32px;
  }
}
</style>
