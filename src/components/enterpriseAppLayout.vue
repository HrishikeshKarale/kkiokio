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
  max-height: 100vh;
  max-width: 100vw;

  & > div {
    display: flex;
    flex-direction: row;
    height: 100%;

    &.head {
      background-color: #333333;
      max-width: 100vw;
    }

    &.body {
      display: flex;
      flex-direction: column;
      z-index: 1000;
      min-height: 100%;
      max-width: 100vw;

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
          .boxShadow(@three);

          & > a {
            padding: 16px;
            color: white;
            font-weight: 24px;
            text-decoration: none;

            &:hover {
              color: @primaryColor;
            }
          }
        }
      }
    }
  }
}
</style>
