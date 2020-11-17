<template>
  <div class="enterpriseAppLayout">
    <header v-if="$slots['header']" class="head">
      <slot name="header" />
    </header>
    <div class="body">
      <div v-if="$slots['menu']" class="menu">
        <slot name="menu" />
      </div>
      <div :key="$route.path" class="content">
        <breadcrums />
        <scroll-indicator>
          <router-view :key="$route.path" />
        </scroll-indicator>
        <aside class="moto">
          <vue-img :src="logo" alt="Moto" />
          <q>
            A little
            <abbr
              title="The action of understanding, being aware of, being sensitive to, and vicariously experiencing the feelings, thoughts, and experience of another of either the past or present without having the feelings, thoughts, and experience fully communicated in an objectively explicit manner"
            >
              Empathy
            </abbr>
            goes a long way
          </q>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
import scrollIndicator from "@/views/project/js/scrollIndicator/scrollIndicator.vue";
import breadcrums from "@/components/breadcrums";
import vueImg from "./vueImg.vue";

export default {
  name: "EnterpriseAppLayout",
  components: {
    scrollIndicator,
    breadcrums,
    vueImg
  },
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logo = require("@/assets/logo.svg");
    return {
      logo
    };
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
      max-width: 100vw;
      z-index: 2000;
    }
    &.body {
      display: flex;
      flex-direction: column;
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
          align-items: center;
          color: @cometText;
          margin: auto;
          max-width: 80vw;
          min-width: 320px;

          & > .moto {
            display: flex;
            flex-direction: column;
            position: absolute;
            bottom: 0;
            right: 0;
            padding: @spaceMd @spaceLg;
            border-radius: 4px 0 0 0;
            // background-color: @backgroundColor;
            height: fit-content;

            & > img {
              height: 48px;
            }

            & > q {
              font-size: @fontSizeSm;
              font-weight: bold;
              background-color: @backgroundColor;
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
          & > div.content {
            & > .moto {
              padding: 0;

              & > img {
                display: none;
              }
              & > q {
                padding: @spaceSm @spaceMd;
              }
            }
          }
        }
      }
    }
  }
}
</style>
