<template>
  <div class="enterpriseAppLayout">
    <header v-if="$slots['header']" class="head">
      <slot name="header" />
    </header>
    <div class="body">
      <div v-if="$slots['menu']" class="menu">
        <slot name="menu" />
      </div>
      <transition
        :name="transitionName"
        :mode="transitionMode"
        :enter-active-class="transitionEnterActiveClass"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >
        <div :key="$route.path" class="content">
          <breadcrums />
          <scroll-indicator>
            <router-view :key="$route.path" />
          </scroll-indicator>
          <aside class="moto">
            <vue-img :src="logo" alt="Moto" />
            <q>
              A little
              <abbr
                title="The action of understanding, being aware of, being sensitive to, and vicariously experiencing the feelings, thoughts, and experience of another of either the past or present without having the feelings, thoughts, and experience fully communicated in an objectively explicit manner"
              >
                Empathy
              </abbr>
              goes a long way
            </q>
          </aside>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import scrollIndicator from "@/views/project/js/scrollIndicator/scrollIndicator.vue";
import breadcrums from "@/components/breadcrums";
import vueImg from "./vueImg.vue";
import { authentication } from "@/typeScript/authentication";
import { cookie } from "@/typeScript/cookie";

export default {
  name: "EnterpriseAppLayout",
  components: {
    scrollIndicator,
    breadcrums,
    vueImg
  },

  mixins: [authentication, cookie],
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logo = require("@/assets/logo.svg");
    const DEFAULT_TRANSITION = "fade";
    const DEFAULT_TRANSITION_MODE = "out-in";
    const transitionEnterActiveClass = "";
    const prevHeight = 0;
    return {
      logo,
      transitionName: DEFAULT_TRANSITION,
      transitionMode: DEFAULT_TRANSITION_MODE,
      transitionEnterActiveClass,
      prevHeight
    };
  }, //mixins

  beforeMount() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName =
        to.meta.transitionName ||
        from.meta.transitionName ||
        this.transitionName;
      if (transitionName === "slide") {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      }
      // this.transitionMode = DEFAULT_TRANSITION_MODE;
      this.transitionEnterActiveClass = `${transitionName}-enter-active`;

      if (to.meta.transitionName === "zoom") {
        this.transitionMode = "in-out";
        this.transitionEnterActiveClass = "zoom-enter-active";
        // Disable scrolling in the background.
        document.body.style.overflow = "hidden";
      }

      if (from.meta.transitionName === "zoom") {
        this.transitionMode = null;
        this.transitionEnterActiveClass = null;
        // Enable scrolling again.
        document.body.style.overflow = null;
      }

      this.transitionName = transitionName;

      //check if matched route requires authentication
      if (to.matched.some(record => record.meta.requiresAuth)) {
        //if matched route requires authentication then check for absence of token
        if (localStorage.getItem('jwt') == null && !this.checkCookie("token")) {
          //when no token is found redirect to login page and set redirec
          next({
            name: 'login',
            query: { nextUrl: to.name }
          })
        }
        //if matched route requires authentication and has token
        else {
          let user = "{}";
          if(localStorage.getItem('user')) {
            user = localStorage.getItem('user');
          }
          else if (this.checkCookie('user')){
            //console.log(this.getCookie('user'));
            user = this.getCookie('user');
          }
          // const user = JSON.parse(localStorage.getItem('user') || JSON.parse(this.getCookie('user')) ||{});
          //when token is present check if user is an Admin
          if (to.matched.some(record => record.meta.isAdmin)) {
            //If user is an admin, proceed
            if (user.isAdmin == 1) {
              next()
            }
            //if user is not admin then redirect to  about page
            else {
              next({ path: 'about' })
            }
          } else {
            next()
          }
        }
      }
      // did not match any record where authentication was required.
      //check if guest access is required to matched route
      else if (to.matched.some(record => record.meta.guest)) {
        if (localStorage.getItem('jwt') == null) {
          next()
        }
        else {
          next({ name: 'about' })
        }
      } else {
        next()
      }

      // let user = null;
      // let token = null;
      // // console.log(authentication.data());
      // if (this.checkCookie("user")) {
      //   user = JSON.parse(this.getCookie("user"));
      //   token = this.getCookie("token");
      // } else {
      //   user = JSON.parse(localStorage.getItem("user"));
      //   token = localStorage.getItem("token");
      // }
      // // console.log(from.name, "->", to.name);
      // if (to.meta.requiresAuth) {
      //   if (user != null && token) {
      //     next();
      //   }
      //   else {
      //     this.$router.options.routes[6].meta.redirect = from.name;
      //     to.meta.redirect = from.fullPath;
      //     // console.log(to.meta.redirect, to, this.$router.options.routes[6].meta);
      //     next({
      //       name: "login",
      //       params: { nextUrl: to.fullPath }
      //     });
      //   }
      // }
      // else {
      //   next();
      // }
    });
  }, //beforeMount

  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    }, //beforeLeave
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    }, //enter
    afterEnter(element) {
      element.style.height = "auto";
    } //afterEnter
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";

.enterpriseAppLayout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 100vw;
  & > div {
    display: flex;
    flex-direction: row;
    height: 100%;
    &.head {
      height: fit-content;
      max-width: 100vw;
      z-index: 2000;
    }
    &.body {
      display: flex;
      flex-direction: column;
      max-width: 100vw;
      z-index: 1000;
      .scroll(100vh);

      //scroll content
      div {
        &.menu {
          display: flex;
          justify-content: space-between;
          width: fit-content;
          position: sticky;
          background-color: @navBackground;
          top: 0;
          left: 0;
          z-index: 1500;
          .boxShadow(@one);
          & > div:last-child {
            flex-direction: row-reverse;
          }
        }
        &.content {
          align-items: center;
          color: @textColor;
          margin:  0 auto;
          max-width: 80vw;
          width: 1504px;

          & > .moto {
            display: flex;
            flex-direction: column;
            position: absolute;
            bottom: 0;
            right: 0;
            padding: @spaceMd @spaceLg;
            border-radius: @borderRadius 0 0 0;
            // background-color: @backgroundColor;
            height: fit-content;

            & > img {
              height: 48px;
            }

            & > q {
              font-size: @fontSizeSm;
              font-weight: bold;
              // background-color: @backgroundColor;
              border-radius: @borderRadius 0 0 0;

              & > abbr {
                color: @secondaryColor;
                text-decoration: none;
              }
            }
          }
        }
      }
    }
  }
  @media screen {
    @media (max-width: 1540px) {
      & > div {
        &.head {
          position: fixed;
          left: 0;
          top: 0;
        }
        &.body {
          & > div.content {
            min-width: 480px;
            & > .moto {
              padding: 0;

              & > img {
                display: none;
              }
              & > q {
                padding: @spaceSm @spaceMd;
              }
            }
          }
        }
      }
    }
  }
}

//zoom transition
.zoom-enter-active,
.zoom-leave-active {
  animation-duration: @transitionDuration;
  animation-fill-mode: both;
  animation-name: zoom;
}

.zoom-leave-active {
  animation-direction: reverse;
}

@keyframes zoom {
  from {
    opacity: 0;
    transform: scale3d(0.5, 0.5, 0.5);
  }

  100% {
    opacity: 1;
  }
}

//fade transition
.fade-enter-active,
.fade-leave-active {
  transition-duration: @transitionDuration;
  transition-property: opacity;
  transition-timing-function: @transitionTimingFunction;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

//slide transition
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: @transitionDuration;
  transition-property: height, opacity, transform;
  transition-timing-function: @transitionTimingFunction;
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(96px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-96px, 0);
}
</style>
