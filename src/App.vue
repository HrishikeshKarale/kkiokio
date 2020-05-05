<template>
  <div id="app">
    <enterprise-app-layout>
      <template v-slot:header>
        <vue-header :logoLink="logoLink">
          <template v-slot:nav>
            <ul>
              <li
                v-for="(nav, index) in navigation"
                :key="index + '-' + nav.name"
              >
                <router-link :to="{ name: nav.component }">
                  {{ nav.name }}
                </router-link>
              </li>
            </ul>
          </template>
        </vue-header>
      </template>
      <template v-slot:content>
        <!-- <scroll-indicator> -->
        <router-view :key="$route.path" />
        <!-- </scroll-indicator> -->
      </template>
    </enterprise-app-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import vueHeader from "@/components/vueHeader";
import enterpriseAppLayout from "@/components/enterpriseAppLayout";
import { nav } from "@/store/navigation";
// import { nameConvention } from "@/typeScript/nameConvention";
// import scrollIndicator from "@/components/scrollIndicator.vue";

export default {
  name: "app",

  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logoLink = require("@/assets/logo.svg");
    const navigation = nav;
    return {
      navigation,
      logoLink
    };
  },

  mixins: [
    // nameConvention,
  ],

  components: {
    // scrollIndicator,
    vueHeader,
    enterpriseAppLayout
  }
};
</script>

<style lang="less">
@import (reference) "./Less/customVariables.less";
@import (reference) "./Less/customMixins.less";

body {
  background-color: white; //#ececec;
  color: @navText; //#2c3e50;
  margin: 0;
  height: 100%;
  width: 100%;
  font-size: @fontSize;

  ul {
    display: flex;
    list-style-type: none;

    & > li {
      color: @primaryColor;

      & > a {
        flex: 1;
        margin: 0 @spaceLg;
        color: @backgroundColor;
        text-decoration: none !important;

        &:hover {
          color: @primaryColor;
        }
      }
    }
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
