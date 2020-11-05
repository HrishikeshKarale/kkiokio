<template>
  <div class="enterpriseAppLayout">
    <div class="head">
      <slot name="header" />
    </div>
    <div class="body">
      <div class="menu">
        <slot name="menu" />
      </div>
      <div :key="$route.path" class="content">
        <breadcrums />
        <scroll-indicator>
          <router-view :key="$route.path" />
        </scroll-indicator>
        <q>
          A little
          <abbr
            title="The action of understanding, being aware of, being sensitive to, and vicariously experiencing the feelings, thoughts, and experience of another of either the past or present without having the feelings, thoughts, and experience fully communicated in an objectively explicit manner"
          >
            Empathy
          </abbr>
          goes a long way
        </q>
      </div>
    </div>
  </div>
</template>

<script>
import scrollIndicator from "@/views/project/js/scrollIndicator/scrollIndicator.vue";
import breadcrums from "@/components/breadcrums";

export default {
  name: "EnterpriseAppLayout",
  components: {
    scrollIndicator,
    breadcrums
  }
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
      background-color: @backgroundColor;
      .scroll(100vh);

      //scroll content
      div {
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
          // padding: @spaceLg @spaceXl;
          color: @cometText;
          margin: auto;
          max-width: 80vw;
          min-width: 320px;
          & > .breadcrums {
            margin: 16px 0;
            & > .crums {
              padding: 8px;
              font-weight: bold;
              color: @secondaryColor;
              text-decoration: none;
              & + span {
                color: @cometText;
              }
            }
          }

          & > q {
            // font-size: @fontSizeSm * 4;
            // text-align: center;
            position: absolute;
            font-size: @fontSizeMd;
            font-weight: bold;
            bottom: 0;
            right: 0;
            padding: 16px 32px;
            background-color: @backgroundColor;
            // .boxShadow(@three);
            border-radius: 4px 0 0 0;

            & > abbr {
              color: @secondaryColor;
              text-decoration: none;
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
          .content {
            margin-top: 80px;
          }
        }
      }
    }
  }
}
</style>
