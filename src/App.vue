<template>
  <div id="app">
    <enterprise-app-layout>
      <template slot="header">
        <vue-header :logoLink="logoLink">
          <Span @click.prevent="toggleTheme" class="fas fa-adjust" />
        </vue-header>
      </template>
      <template slot="menu">
        <!-- <vue-navigation
          class="sideNav"
          :class="{ showNav: show }"
          :navigationTitles="d_navData"
          :logoLink="logoLink"
          :hideNav="show"
          :selected="d_selected"
          @nav="nav"
        /> 
        <vue-button
          class="toggle"
          :buttonIcon="
            show ? 'fas fa-angle-double-right' : 'fas fa-angle-double-left'
          "
          buttonStyle="icon"
          :onClickAction="toggleNav"
        /> -->
      </template>
      <template slot="content">
        <router-view />
      </template>
    </enterprise-app-layout>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import vueHeader from "@/components/vueHeader";
import enterpriseAppLayout from "@/components/enterpriseAppLayout";

export default {
  name: "app",
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logoLink = require("@/assets/logo.svg");
    return {
      logoLink: logoLink
    };
  },
  components: {
    // HelloWorld,
    vueHeader,
    enterpriseAppLayout
  }
};
</script>

<style lang="less">
body {
  background-color: #fffafa;
  color: #0c090d; //#2c3e50;
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
