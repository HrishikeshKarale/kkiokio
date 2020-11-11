//https://codepen.io/pietvanzoen/pen/Ccjlt
<template>
  <div ref="vueHeader" class="vueHeader">
    <div v-if="toggleNavIcon" ref="navigation" class="menuTrigger">
      <vue-button
        v-if="toggleNavIcon"
        buttop-name="toggleNav"
        button-style="icon-lg"
        :button-icon="toggleNavIcon"
        :on-click-action="toggleNavigation.bind(this)"
      />
    </div>
    <nav>
      <ul>
        <li
          v-for="(navigation, index) in nav"
          :key="index + '-' + navigation.name"
        >
          <router-link :to="{ name: navigation.component }">
            <div class="navElement">
              <span v-if="index > 0" :class="navigation.icon" />
              <vue-img v-else :src="logoLink" alt="Logo" />
              <div>
                <h4>{{ navigation.name }}</h4>
                <span> {{ navigation.tagline }}</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
    <vue-button
      v-if="themeIcon"
      class="themeToggle"
      buttop-name="themeToggle"
      button-style="small"
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
      return this.activeTheme().icon;
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
  // .boxShadow(@one);
  & > div {
    display: flex;
    position: relative;
    & > a.logo > img {
      height: 48px;
    }
    &.menuTrigger {
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
      flex-direction: row;

      & > li {
        display: flex;
        justify-content: space-evenly;
        flex: 1;
        & > a {
          margin: 0 @spaceLg;
          color: @navText;
          position: relative;

          & > .navElement {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            & > span {
              font-size: @fontSizeSm * 2;
            }
            & > img {
              height: 48px;
            }
            & > div {
              display: flex;
              flex-direction: column;
              margin-left: 16px;
              & > h4 {
                color: @navText;
              }
              & > span {
                font-size: 12px;
                color: grey;
              }
            }
          }

          &.router-link-active {
            color: @secondaryColor;
            &::before {
              transform: scale(1);
            }

            &.router-link-exact-active {
              color: @secondaryColor;
            }
            & > .navElement {
              & > div {
                & > h4 {
                  color: @secondaryColor;
                  font-weight: bold;
                }
                & > span {
                  color: @backgroundColor;
                }
              }
            }
          }

          &:hover {
            color: @primaryColor;
            &::before {
              transform: scale(1.2);
            }
            & > .navElement {
              & > div {
                & > h4 {
                  color: @secondaryColor;
                }
                & > span {
                  color: @backgroundColor;
                }
              }
            }
          }

          &::before {
            content: "";
            position: absolute;
            width: 100%;
            background-color: @secondaryColor;
            bottom: -8px;
            height: 2px;
            transform: scale(0);
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }
  }
  @media screen {
    @media (max-width: 1024px) {
      flex-direction: column;
      padding: @spaceMd @spaceLg;
      border-bottom-right-radius: 8px;
      height: auto;
      & > div.menuTrigger {
        display: flex;
        align-self: flex-end;
      }
      //hides navigation when toggled
      & > nav {
        & > ul {
          display: none;
        }
        & + .themeToggle {
          display: none;
        }
      }
      //displays navigation
      &.showNav {
        height: 100vh;
        outline: 9999px solid rgba(0, 0, 0, 0.5);
        border-bottom-right-radius: 0;
        & > nav {
          height: 100%;
          & > ul {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            & > li {
              margin-top: 16px;
            }
          }
        }
        & > .themeToggle {
          display: flex;
          align-self: flex-end;
          margin: 0;
        }
      }
    }
  }
}
</style>
