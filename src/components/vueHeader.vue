//https://codepen.io/pietvanzoen/pen/Ccjlt
<template>
  <div ref="vueHeader" class="vueHeader">
    <div>
      <router-link :to="{ name: 'home' }" class="logo">
        <vue-img :src="logoLink" alt="Logo" />
      </router-link>
      <!-- <div  ref="navigation" @click="toggleNavigation">
        <span></span>
      </div> -->
      <div ref="navigation" class="menuTrigger">
        <vue-button
          buttop-name="toggleNav"
          button-style="icon"
          :button-icon="toggleNavIcon"
          :on-click-action="toggleNavigation.bind(this)"
        />
      </div>
    </div>
    <nav>
      <ul>
        <li
          v-for="(navigation, index) in nav"
          :key="index + '-' + navigation.name"
        >
          <router-link :to="{ name: navigation.component }">
            {{ navigation.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <vue-button
      class="themeToggle"
      buttop-name="themeToggle"
      button-style="text-sm"
      button-text="Theme"
      :button-icon="themeIcon"
      :on-click-action="theme.bind(this)"
    />
  </div>
</template>

<script>
import { toggle } from "@/typeScript/toggle";
import vueButton from "@/components/vueButton";
import vueImg from "./vueImg.vue";

export default {
  name: "VueHeader",

  components: {
    vueButton,
    vueImg
  },

  mixins: [toggle],

  props: {
    logoLink: {
      required: false,
      type: String,
      default: null
    },

    nav: {
      required: true,
      type: Object,
      default: null
    }
  },

  computed: {
    themeIcon: function() {
      return this.activeTheme.icon;
    }, //themeIcon
    toggleNavIcon: function() {
      if (this.isOpen("nav")) {
        return "fas fa-times";
      }
      return "fas fa-bars";
    } //toggleNavIcon
  }, //props

  mounted() {
    document.addEventListener("click", this.clickHandler, {
      capture: false, // top to bottom bubbling/propogation
      once: false //should work only once
    });
  },

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
    } //toggleNavigation
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
  // .boxShadow(@base @one);
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
      display: flex;
      list-style-type: none;

      & > li {
        color: @primaryColor;

        & > a {
          flex: 1;
          margin: 0 @spaceLg;
          color: @navText;
          text-decoration: none !important;
          position: relative;

          &::before {
            content: "";
            position: absolute;
            width: 100%;
            background-color: @secondaryColor;
            bottom: -8px;
            height: 1px;
            transform: scale(0);
            transition: all 0.3s ease-in-out;
          }

          &.router-link-active {
            color: @secondaryColor;
            &::before {
              transform: scale(1);
            }

            &.router-link-exact-active {
              color: @secondaryColor;
            }
          }

          &:hover {
            color: @primaryColor;
            &::before {
              transform: scale(1.2);
            }
          }
        }
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
