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
      <!-- <div class="footer">
        <a href="https://github.com/HrishikeshKarale">
          <span class="fab fa-github fa-2x" />
          <div>@HrishikeshKarale</div>
        </a>
        <a href="https://www.linkedin.com/in/hrishikesh-karale-6086071a">
          <span class="fab fa-linkedin-in fa-2x" />
          <div>@hrishikesh-karale-6086071a</div>
        </a>
      </div> -->
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
      max-width: 100vw;
      height: fit-content;
      z-index: 2000;
    }
    &.body {
      display: flex;
      flex-direction: column;
      z-index: 1000;
      min-height: @body;
      max-width: 100vw;
      z-index: 100;
      .scroll(100vh);
      > div {
        z-index: 200;
        &.menu {
          display: flex;
          justify-content: space-between;
          width: fit-content;
          position: sticky;
          top: 0;
          left: 0;
          background-color: @navBackground;
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
        &.footer {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: center;
          position: absolute;
          bottom: 16px;
          right: 0.5vw;
          height: 80px;
          max-width: 100vw;
          background-color: #333333;
          border-radius: 4px;
          text-align: center;
          // .boxShadow(@three);
          & > a {
            padding: @spaceLg;
            color: white;
            font-weight: @fontSize;
            text-decoration: none;
            &:hover {
              color: @primaryColor;
            }
          }
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
