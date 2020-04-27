<template>
  <div class="vueHeader">
    <div class="header">
      <div class="logo">
        <router-link :to="'/'" v-if="logoLink">
          <vue-img :src="logoLink" alt="Logo" />
        </router-link>
      </div>
      <div class="nav">
        <slot name="nav" />
      </div>
      <div>
        <slot />
      </div>
    </div>
    <div class="navigation">
      <vue-img :src="logoLink" alt="Logo" />
      <span @click.prevent="toggle" class="fas fa-bars" />
      <div v-if="show">
        <slot name="nav" />
      </div>
    </div>
  </div>
</template>

<script>
import { toggle } from "@/typeScript/toggle";
import vueImg from "./vueImg.vue";
export default {
  name: "vueHeader",

  data() {
    return {
      selected: null
    }; //return
  }, //data

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
  //0px 2px 4px 2px rgba(40, 40, 40, 0.5)
  @media screen {
    @media (max-width: 800px) and (min-width: 100px), (max-height: 800px) {
      & > div {
        &.header {
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
      background-color: #333333;
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
          color: white;
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
      justify-content: space-between;
      padding: @spaceMd @spaceLg;
      height: 100%;
      width: 100vw;
      background-color: #333333;
      color: @white;
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
              color: white;
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
