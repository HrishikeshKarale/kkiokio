<template>
  <div class="enterpriseAppLayout">
    <div class="head">
      <slot name="header" />
    </div>
    <div class="body">
      <div class="menu">
        <slot name="menu" />
      </div>
      <div class="content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "enterpriseAppLayout"
};
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";

.enterpriseAppLayout {
  display: flex;
  flex-direction: column;
  width: 100%;

  & > div {
    display: flex;
    flex-direction: row;
    height: 100%;

    // &.head {
    //   background-color: #333333;
    // }

    &.body {
      display: flex;
      flex-direction: column;
      z-index: 1000;
      height: 100vh;
      width: 100vw;
      .scroll(100vh);
      > div {
        &.menu {
          display: flex;
          justify-content: space-between;
          width: fit-content;
          position: sticky;
          top: 0;
          left: 0;
          z-index: 2000;
          background-color: @navBackground;

          .boxShadow(@one);

          & > div:last-child {
            flex-direction: row-reverse;
          }
        }

        &.content {
          padding: @spaceLg @spaceXl;
          color: @cometText;
          margin: auto;

          width: 80vw;
        }
      }
    }
  }
}
</style>
