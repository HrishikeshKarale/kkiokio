//https://codepen.io/pietvanzoen/pen/Ccjlt
<template>
  <header ref="vueHeader" class="vueHeader">
    <vue-button
      v-if="toggleNavIcon"
      class="menuTrigger"
      buttop-name="toggleNav"
      button-style="icon-lg"
      :button-icon="toggleNavIcon"
      :on-click-action="toggleNavigation.bind(this)"
    />
    <nav>
      <ul>
        <li>
          <router-link :to="{ name: 'home' }">
            <vue-img :src="logoLink" alt="Logo" />
            <h3>
              Hrishikesh Karale
              <h5>Kkiokio.com</h5>
            </h3>
          </router-link>
        </li>
        <li
          v-for="(navigation, index) in nav"
          :key="index + '-' + navigation.name"
        >
          <router-link :to="{ name: navigation.component }">
            <span v-if="index > 0" :class="navigation.icon" />
            <template v-else>
              <vue-img :src="logoLink" alt="Kkiokio.com" />
              <!-- <small>kkiokio.com</small> -->
            </template>
            <div>
              <h4>{{ navigation.name }}</h4>
              <span> {{ navigation.tagline }}</span>
            </div>
          </router-link>
        </li>
      </ul>
    </nav>
    <div>
      <span class="fas fa-user" />
        <div class='user'>
          <template v-if="signedIn" >
            <vue-img :src="this.user? this.user.image: false" alt="Logo" />
            <h5 v-if="this.user">
              {{this.user? this.user.name: null}}
            </h5>
            <h5 v-else>
              Guest
            </h5>
          </template>
          <div class="g-signin2" data-onsuccess="triggerGoogleLoaded" />
          <dropdown-list
          label="Theme"
            name="themeSelector"
            :value="selected"
            :options="themes.map(theme =>theme.name)"
            @input="val=>this.selected = val"
          />
          settings
          <br />
          account
          <br />
          <vue-button
            v-if="!signedIn"
            buttop-name="loginButton"
            button-style="text-sm"
            button-text="LogIn"
            button-icon="fas fa-sign-in-alt"
            :on-click-action="login.bind(this)"
          />
          <vue-button
            v-else
            button-name="googleSignOutButton"
            button-text="logout"
            button-icon="fas fa-sign-out-alt"
            button-style="text-sm"
            :on-click-action="signOut.bind()"
          />
        </div>
    </div>
  </header>
</template>

<script>
import { toggle } from "@/typeScript/toggle";
import { authentication } from "@/typeScript/authentication";
import vueButton from "@/components/vueButton";
import vueImg from "./vueImg.vue";
import dropdownList from "@/components/dropdownList";

export default {
  name: "VueHeader",

  components: {
    dropdownList,
    vueButton,
    vueImg
  }, //components

  data() {
    const dbooleanTrue = true;
    return {
      dbooleanTrue
    };
  }, //data

  mixins: [toggle, authentication],

  props: {
    logoLink: {
      required: false,
      type: [String, null],
      default: null
    },

    nav: {
      required: true,
      type: Object,
      default: null
    }
  },

  computed: {
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
    // console.log(this.$router.currentRoute.value.meta.requiresAuth);
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

    login: function() {
      this.$router.push({ name: "login" });
    }, //login

    toggleNavigation: function() {
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

@lowOpacity: 0.64;
@midOpacity: 0.84;

//nav sub text
.navSubText() {
  color: @navText;
  opacity: @lowOpacity;
}

header {
  &.vueHeader {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: @spaceMd @spaceXl;
    background-color: @navBackground;
    max-width: 100vw;
    z-index: @headerZ;
    height: @header;
    .boxShadow(@one, @shadowColor, @headerZ + 10);
    & > .menuTrigger {
      display: none;
    }
    & > nav {
      & > ul {
        display: flex;
        flex-direction: row;

        & > li {
          display: flex;
          justify-content: space-evenly;
          align-items: flex-start;
          flex: 1;
          //hide website name and logo
          &:first-child {
            display: none;
            & > a > img {
              display: block;
              height: 64px;
              align-self: center;
              & + h3 {
                display: flex;
                flex-direction: column;
                & > h5 {
                  align-self: flex-end;
                  color: @white;
                }
              }
            }
          }
          & > a {
            margin: 0 @spaceLg;
            color: @navText;
            position: relative;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;

            & > span {
              font-size: @fontSizeSm * 2;
              .navSubText();
            }
            & > img {
              height: 48px;
            }
            & > div {
              display: flex;
              flex-direction: column;
              margin-left: @spaceLg;
              //nav Text
              & > h4 {
                color: @navText;
                //nav subText
                & + span {
                  font-size: 12px;
                  .navSubText();
                }
              }
            }
            //styling selected link
            &.router-link-active {
              color: @secondaryColor;
              &::before {
                transform: scale(0.8);
              }
              &.router-link-exact-active {
                color: @secondaryColor;
              }
              & > span {
                opacity: 1;
              }
              & > div {
                & > h4 {
                  color: @secondaryColor;
                  font-weight: bold;
                  & + span {
                    color: @navText;
                    opacity: 1;
                  }
                }
              }
            }
            //bottom line for nav
            &::before {
              content: "";
              position: absolute;
              width: 100%;
              background-color: @secondaryColor;
              bottom: -8px;
              height: 2px;
              transform: scale(0);
              transition: @transition;
            }
            //hover effect for li
            &:hover {
              color: @primaryColor;
              &::before {
                transform: scale(1.2);
              }
              & > span {
                color: @navText;
                opacity: 1;
              }
              & > div {
                & > h4 {
                  color: @secondaryColor;
                  & + span {
                    color: @navText;
                    opacity: 1;
                  }
                }
              }
            }
          }
        }
      }
      //user account
      & + div {
        display: flex;
        margin-left: auto;
        position: relative;
        & > span {
          color: @secondaryColor;
          padding: @spaceMd;
          border: 1px solid @secondaryColor;
          border-radius: 50%;
          cursor: pointer;
          & + .user {
            display: none;
            position: absolute;
            
            .boxShadow(@one, @shadowColor, @header + 10);
            & > img {
              width: 80px;
            }
            & > .g-signin2 {
              display: none;
            }
          }
        }
        &:hover {
          & > span {
            color: @textColor;
              background-color: @secondaryColor;
              border-radius: 50% 50% 0 50%;
              .boxShadow(@one, @shadowColor, @header + 10);
            & + .user {
              display: flex;flex-direction: column;
            border: 1px solid @secondaryColor;
            background-color: @backgroundColor;
            top: 100%;
            right: 0;
            height: fit-content;
            width: fit-content;
            border-radius: @borderRadius; 
            padding: @spaceLg @spaceXl;
            z-index: inherit;
            }
          }
        }
      }
    }
    @media screen {
      @media (max-width: 1540px) {
        .scroll(100vh);
        &.vueHeader {
          flex-direction: column;
          flex-wrap: nowrap;
          position: fixed;
          left: 0;
          top: 0;
          padding: @spaceMd @spaceLg;
          border-bottom-right-radius: @borderRadiusLg;
          height: auto;
          width: fit-content;
          & > .menuTrigger {
            display: flex;
            align-self: flex-end;
          }
          //hides navigation when toggled
          & > nav {
            display: none;
            //user account
            & + div {
              position: fixed;
              bottom: @spaceXl;
              right: @spaceXl;
              & > span {
                color: @secondaryColor;
                padding: @spaceMd;
                font-size: 2* @fontSizeSm;
                border: 4px solid @secondaryColor;
                border-radius: 50%;
                .textShadow(@one);
                .boxShadow(@one);
                cursor: pointer;
                & + .user {
                  display: none;
                  flex-direction: column;
                  border: 1px solid @secondaryColor;
                  background-color: @backgroundColor;
                  position: absolute;
                  top: -672%; //328px
                  right: 0;
                  height: fit-content;
                  width: fit-content;
                  border-radius: @borderRadius; 
                  padding: @spaceLg @spaceXl;
                  & > img {
                    width: 80px;
                  }
                  & > .g-signin2 {
                    display: none;
                  }
                }
              }
              &:hover {
                & > span {
                    border-radius: 50% 0 50% 50%;
                    background-color: @secondaryColor;
                    color: @navBackground;
                  & + .user {
                    display: flex;
                    // .boxShadow(@one, @shadowColor, @header + 10);
                  }
                }
              }
            }
          }
          //displays navigation
          &.showNav {
            height: 100vh;
            outline: 9999px solid rgba(0, 0, 0, 0.5);
            border-bottom-right-radius: 0;
            & > nav {
              display: flex;
              flex-direction: column;
              height: 100%;
              & > ul {
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                & > li {
                  margin-top: @spaceLg;
                  & > a {
                    & > img {
                      height: @spaceXl;
                    }
                  }
                  &:first-child {
                    display: flex;
                    & > a {
                      flex-direction: column;
                      & > img {
                        height: 96px;
                      }
                      &::before {
                        display: none;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
        }
  }

}
</style>
