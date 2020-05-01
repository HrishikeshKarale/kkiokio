<template>
  <div class="vueHeader">
    <div class="header">
      <div class="logo">
        <router-link :to="'/'" v-if="logoLink">
          <vue-img :src="logoLink" alt="Logo" />
        </router-link>
      </div>
      <nav>
        <slot name="nav" />
      </nav>
      <!-- <div>
        <slot />
      </div> -->
    </div>
    <div class="navigation">
      <vue-img :src="logoLink" alt="Logo" />
      <span @click.prevent="toggle" class="fas fa-bars" />
      <nav v-if="show">
        <slot name="nav" />
      </nav>
    </div>
  </div>
</template>

<script>
import { toggle } from "@/typeScript/toggle";
import vueImg from "./vueImg.vue";

export default {
  name: "vueHeader",

  mixins: [toggle],

  components: {
    vueImg
  },

  props: {
    logoLink: {
      required: false,
      type: String,
      default: null
    },

    nav: {
      required: false,
      type: Function,
      default: null
    }
  } //props
}; //default
</script>

//
<style lang="less" scoped>
@import (reference) "./../Less/customVariables.less";
@import (reference) "./../Less/customMixins.less";

.vueHeader {
  width: 100%;
  nav {
    display: flex;
    flex-direction: row;
    margin: auto 0;

    & > a {
      color: @backgroundColor;
      margin-right: @fontSize + @fontSizeSm;
    }
  }

  @media screen {
    @media (max-width: 1024px) {
      & > div {
        .header {
          display: none;
        }
        &.navigation {
          display: flex;
          & > div {
            display: flex;
            max-height: 100vh;
          }
        }
      }
    }
  }

  & > div {
    &.navigation {
      display: none;
      flex-direction: column;
      flex-wrap: nowrap;
      width: fit-content;
      background-color: @cometText;
      padding: 8px 16px;
      border-radius: 0 4px 4px 0;

      & > span {
        color: @white;
        text-align: center;
      }

      & > img {
        height: 32px;
        margin-bottom: 32px;
      }

      & > div {
        display: flex;
        height: 0vh;
        flex-direction: column;
        justify-content: space-around;

        & > div > a {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          // width: auto;
          color: @backgroundColor;
          text-align: center;

          & > span {
            font-size: 32px;

            & + div {
              padding: 2px;
            }
          }
        }
      }
    }

    &.header {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: @spaceMd @spaceLg;
      height: 100%;
      width: 100%;
      background-color: @cometText;
      margin: auto;
      .boxShadow(@two);

      & > div {
        margin: auto 0;

        &.logo {
          & > a > img {
            height: 48px;
            padding: @spaceMd @spaceLg;
          }
        }

        &.nav {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          & > div {
            display: flex;
            flex-direction: column;
            margin: 0 2vw;
            padding: 8px;
            border-radius: 8px;

            &:hover {
              & > a {
                color: @primaryColor;
                text-decoration: none;
              }
            }

            & > a {
              width: 100%;
              color: @backgroundColor;
              text-align: center;

              & > span {
                font-size: 32px;

                & + div {
                  padding: 2px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
