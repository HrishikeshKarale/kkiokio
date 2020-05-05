<template>
  <div class="vueHeader">
    <router-link :to="{ name: 'app' }" class="logo">
      <vue-img :src="logoLink" alt="Logo" />
    </router-link>
    <span @click.prevent="toggle" class="fas fa-bars" />
    <nav>
      <slot name="nav" />
    </nav>
    <vue-button
      class="themeToggle"
      buttopName="themeToggle"
      buttonStyle="icon-sm"
      :buttonIcon="themeIcon"
      :onClickAction="theme.bind(this)"
    />
  </div>
</template>

<script>
import { toggle } from "@/typeScript/toggle";
import vueButton from "@/components/vueButton";
import vueImg from "./vueImg.vue";

export default {
  name: "vueHeader",

  mixins: [toggle],

  computed: {
    themeIcon: function() {
      if (this.selected) {
        this.themes.forEach(element => {
          if (element.name == this.selected) {
            return element.icon;
          }
        });
      }
      return "fas fa-question-circle";
    }
  },

  components: {
    vueButton,
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
  display: flex;
  align-items: center;
  padding: @spaceMd @spaceXl;
  background-color: @cometText;
  width: 100%;
  height: 64px;
  // .boxShadow(@two);

  & > a.logo > img {
    height: 32px;
    flex: 1;
  }

  & > span {
    display: none;
  }

  & > .themeToggle {
    display: block;
  }

  & > nav {
    flex: 1;

    & > ul {
      align-items: center;
      margin: 0;
    }
  }

  @media screen {
    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: flex-start;
      height: 100vh;
      position: relative;
      width: fit-content;
      padding: @spaceMd @spaceXl;

      & > a.logo > img {
        height: 64px;
      }

      & > span {
        display: block;
        position: absolute;
        right: @spaceXl;
        top: @spaceMd;
      }

      & > nav > ul {
        flex-direction: column;
      }
    }
  }
}
</style>
