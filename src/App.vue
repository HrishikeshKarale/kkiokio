<template>
  <div id="app">
    <enterprise-app-layout>
      <template slot="header">
        <vue-header :logoLink="logoLink">
          <Span @click.prevent="toggleTheme" class="fas fa-adjust" />
          <template slot="nav">
            <div>
              <router-link :to="'/'" v-if="logoLink">
                <span class="fas fa-home" />
                <div>Home</div>
              </router-link>
            </div>
            <div>
              <router-link :to="'/Project'" v-if="logoLink">
                <span class="fas fa-swatchbook" />
                <div>Projects</div>
              </router-link>
            </div>
            <div>
              <router-link :to="'/Case Studies'" v-if="logoLink">
                <span class="fas fa-coffee" />
                <div>Case Studies</div>
              </router-link>
            </div>
            <div>
              <router-link :to="'/Logo'" v-if="logoLink">
                <span class="fas fa-pencil-ruler" />
                <div>Logo</div>
              </router-link>
            </div>
            <div>
              <router-link :to="'/About Me'" v-if="logoLink">
                <span class="fas fa-user-graduate" />
                <div>About Me</div>
              </router-link>
            </div>
            <div>
              <router-link :to="'/Contact'" v-if="logoLink">
                <span class="fas fa-id-badge" />
                <div>Contact</div>
              </router-link>
            </div>
          </template>
        </vue-header>
      </template>
      <template slot="content">
        <router-view />
      </template>
    </enterprise-app-layout>
  </div>
</template>

<script>
// @ is an alias to /src
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
    vueHeader,
    enterpriseAppLayout
  }
};
</script>

<style lang="less">
body {
  background-color: white;
  color: #0c090d; //#2c3e50;
  margin: 0;
  height: 100%;
  overflow-y: hidden;
  font-size: 18px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
