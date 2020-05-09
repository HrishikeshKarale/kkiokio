<template>
  <div class="enterpriseAppLayout">
    <div class="head">
      <slot name="header" />
    </div>
    <div class="body">
      <template>
        <div class="menu">
          <slot name="menu" />
        </div>
      </template>
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
  height: 100vh;
  max-width: 100vw;
  & > div {
    display: flex;
    flex-direction: row;
    height: 100%;
    &.head {
      height: fit-content;
      order: 1;
      max-width: 100vw;
      z-index: 2000;
    }
    &.body {
      display: flex;
      flex-direction: column;
      order: 2;
      min-height: @body;
      max-width: 100vw;
      z-index: 1000;
      .scroll(100vh);
      > div {
        &.menu {
          display: flex;
          justify-content: space-between;
          width: fit-content;
          position: sticky;
          background-color: @navBackground;
          top: 0;
          left: 0;
          z-index: 1500;
          .boxShadow(@one);
          & > div:last-child {
            flex-direction: row-reverse;
          }
        }
        &.content {
          padding: @spaceLg @spaceXl;
          background-color: @backgroundColor;
          color: @cometText;
          margin: auto;
          max-width: 80vw;
          min-width: 320px;
        }
      }
    }
  }
  @media screen {
    @media (max-width: 1024px) {
      // position: relative;
      & > div {
        &.head {
          position: fixed;
          left: 0;
          top: 0;
        }
        &.body {
          @media screen {
            @media (max-width: 1024px) {
            }
          }
        }
      }
    }
  }
}
</style>
