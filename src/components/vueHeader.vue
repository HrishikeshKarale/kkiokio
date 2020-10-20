//https://codepen.io/pietvanzoen/pen/Ccjlt
<template>
  <div class="vueHeader" ref="vueHeader">
    <div>
      <router-link :to="{ name: 'app' }" class="logo">
        <vue-img :src="logoLink" alt="Logo" />
      </router-link>
      <!-- <div  ref="navigation" @click="toggleNavigation">
        <span></span>
      </div> -->
      <div class="menuTrigger" ref="navigation">
        <vue-button
          buttopName="toggleNav"
          buttonStyle="icon"
          :buttonIcon="toggleNavIcon"
          :onClickAction="toggleNavigation.bind(this)"
        />
      </div>
    </div>
    <nav>
      <slot name="nav" />
    </nav>
    <vue-button
      class="themeToggle"
      buttopName="themeToggle"
      buttonStyle="text-sm"
      buttonText="Theme"
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

  methods: {
    clickHandler: function(event) {
      // console.log("modal", !event.target.closest(".vueHeader").length);
      if (!event.target.closest(".vueHeader") && this.isOpen("nav")) {
        this.toggleNavigation();
        // alert("click outside!");
      }
      // event.stopPropogation(); //stop event bubbling
    }, //clickHandler

    toggleNavigation: function() {
      this.$refs["navigation"].classList.toggle("menuOpen");
      this.$refs["vueHeader"].classList.toggle("showNav");
      this.toggle("nav");
      console.log(this.isOpen("nav"));
    } //toggleNavigation
  },

  computed: {
    themeIcon: function() {
      const themes = this.themes;
      if (this.selected) {
        for (let i = 0; i < themes.length; i++) {
          if (themes[i].name == this.selected) {
            return themes[i].icon;
          }
        }
      }
      return "fas fa-question-circle";
    }, //themeIcon
    toggleNavIcon: function() {
      if (this.isOpen("nav")) {
        return "fas fa-times";
      }
      return "fas fa-bars";
    } //toggleNavIcon
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
  }, //props

  mounted() {
    document.addEventListener("click", this.clickHandler, {
      capture: false, // top to bottom bubbling/propogation
      once: false //should work only once
    });
  }
}; //default
</script>

//
<style lang="less" scoped>
@import (reference) "./../Less/customVariables.less";
@import (reference) "./../Less/customMixins.less";

@size: @spaceXl;

.vueHeader {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: @spaceMd @spaceXl;
  background-color: @navBackground;
  width: 100%;
  height: @header;
  .boxShadow(@one);
  & > div {
    display: flex;
    position: relative;
    & > a.logo > img {
      height: 48px;
    }
    & > .menuTrigger {
      margin-left: @spaceLg;
      display: none;
    }
    &:first-child {
      justify-content: space-between;
    }
  }
  & > .themeToggle {
    display: block;
  }
  & > nav {
    & > ul {
      align-items: center;
      margin: 0;
      padding: 0;
      & > li > a {
        padding: 8px;
      }
    }
  }
  @media screen {
    @media (max-width: 1024px) {
      flex-direction: column;
      justify-content: space-between;
      padding: @spaceLg @spaceXl;
      border-radius: 0 4px 4px 0;
      & > div {
        display: flex;
        justify-content: space-between;
        height: fit-content;
        position: relative;
        width: 100%;
        & > a.logo > img {
          height: 32px;
        }
        & > .menuTrigger {
          display: block;
        }
      }
      & > nav {
        height: 100%;
        & > ul {
          display: none;
        }
        & + .themeToggle {
          display: none;
        }
      }
      &.menuOpen + nav > ul {
        display: flex;
        flex-direction: column;
      }
      &.showNav {
        height: 100vh;
        width: fit-content;
        outline: 9999px solid rgba(0, 0, 0, 0.5);
        & > div {
          margin-bottom: @spaceXl;
          & > a.logo > img {
            height: @size * 2;
            margin-left: @spaceLg;
          }
        }
        & > nav {
          & > ul {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            & > li {
              flex: 1 1 40px;
            }
          }
        }
        & > .themeToggle {
          align-self: center;
          padding: auto;
          margin: 0;
          display: block;
        }
      }
    }
  }
}
</style>
