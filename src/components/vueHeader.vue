//https://codepen.io/pietvanzoen/pen/Ccjlt
<template>
  <div class="vueHeader" ref="vueHeader">
    <div>
      <router-link :to="{ name: 'app' }" class="logo">
        <vue-img :src="logoLink" alt="Logo" />
      </router-link>
      <div class="menuTrigger" ref="navigation" @click="toggleNavigation">
        <span></span>
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
      console.log("modal", !event.target.closest(".vueHeader").length);
      if (!event.target.closest(".vueHeader").length) {
        this.toggleNavigation();
        // alert("click outside!");
      }
    }, //clickHandler

    toggleNavigation: function() {
      this.$refs["navigation"].classList.toggle("menuOpen");
      this.$refs["vueHeader"].classList.toggle("showNav");
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
  }, //props

  mounted() {
    document.addEventListener("click", this.clickHandler);
    // document.click(function(e) {
    //   console.log(e.target);
    //   if (!e.target.closest(".modal").length) {
    //     alert("click outside!");
    //   }
    // });
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
  height: @size * 2;
  .boxShadow(@one);
  & > div {
    position: relative;
    display: flex;
    & > a.logo > img {
      height: 32px;
    }
    & > .menuTrigger {
      display: none;
      padding: @spaceLg;
      width: @size;
      height: @size / 2;
      position: relative;
      cursor: pointer;
      & > span {
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        width: @size;
        height: @size / 8;
        background-color: @primaryColor;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-transition: background-color 0.3s;
        transition: background-color 0.3s;
        &:after,
        &:before {
          position: absolute;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: @primaryColor;
          content: "";
          -webkit-transition: -webkit-transform 0.3s;
          transition: transform 0.3s;
        }
        &:before {
          -webkit-transform: translateY(-@size / 4);
          transform: translateY(-@size / 4);
        }
        &:after {
          -webkit-transform: translateY(@size / 4);
          transform: translateY(@size / 4);
        }
      }
      &.menuOpen {
        & > span {
          &:before {
            -webkit-transform: translateY(-@size / 6) translateX(-@size / 3)
              rotate(-45deg) scaleX(0.5);
            transform: translateY(-@size / 6) translateX(-@size / 3)
              rotate(-45deg) scaleX(0.5);
          }
          &:after {
            -webkit-transform: translateY(@size / 6) translateX(-@size / 3)
              rotate(45deg) scaleX(0.5);
            transform: translateY(@size / 6) translateX(-@size / 3)
              rotate(45deg) scaleX(0.5);
          }
        }
      }
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
          margin-right: 32px;
        }
        & > .menuTrigger {
          display: block;
          position: absolute;
          right: -16px;
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
