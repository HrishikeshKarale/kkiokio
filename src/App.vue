<template>
  <div id="app">
    <enterprise-app-layout>
      <template slot="header">
        <vue-header :logoLink="logoLink">
          <Span @click.prevent="toggleTheme" class="fas fa-adjust" />
          <template slot="nav">
            <router-link
              v-for="(nav, index) in navigation"
              :key="index + '-' + nav"
              :to="index > 0 ? '/' + nav : '/'"
            >
              {{ nav }}
            </router-link>
          </template>
        </vue-header>
      </template>
      <template slot="content">
        <!-- <scroll-indicator> -->
        <router-view />
        <!-- </scroll-indicator> -->
      </template>
    </enterprise-app-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import vueHeader from "@/components/vueHeader";
import enterpriseAppLayout from "@/components/enterpriseAppLayout";
// import scrollIndicator from "@/components/scrollIndicator.vue";

export default {
  name: "app",
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logoLink = require("@/assets/logo.svg");
    const navigation = [
      "Home",
      "projects",
      "Case Study",
      "Logo",
      "About Me",
      "Contact Me"
    ];
    return {
      navigation,
      logoLink
    };
  },
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
  background-color: @backgroundColor;
  color: @navText; //#2c3e50;
  margin: 0;
  height: 100%;
  width: 100%;
  font-size: @fontSize;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
