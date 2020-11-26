<template>
  <div id="app">
    <enterprise-app-layout>
      <template #header>
        <vue-header :logo-link="logoLink" :nav="navigation" />
      </template>
    </enterprise-app-layout>
  </div>
</template>

<script>
// @ is an alias to /src
import vueHeader from "@/components/vueHeader";
import enterpriseAppLayout from "@/components/enterpriseAppLayout";
import { nav } from "@/store/navigation";

export default {
  name: "App",

  components: {
    vueHeader,
    enterpriseAppLayout
  },

  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logoLink = require("@/assets/logo.svg");
    const navigation = nav;
    return {
      navigation,
      logoLink
    };
  }
};
</script>

<style lang="less">
@import (reference) "./Less/customVariables.less";
@import (reference) "./Less/customMixins.less";

body {
  background-color: @backgroundColor;
  margin: 0;
  height: 100%;
  width: 100%;
  &#portfolio {
    font-family: @fontFamily, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
</style>
