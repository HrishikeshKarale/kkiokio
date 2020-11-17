import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "@/views/index.vue"),
      meta: { transitionName: 'slide', requiresAuth: false  }
    },
    {
      path: "/caseStudy",
      name: "caseStudy",
      component: () =>
        import(
          /* webpackChunkName: "caseStudy" */ "@/views/caseStudy/index.vue"
        ),
      meta: { transitionName: 'slide', requiresAuth: false  }
    },
    {
      path: "/contact",
      name: "contact",
      component: () =>
        import(/* webpackChunkName: "contact" */ "@/views/contact/index.vue"),
      meta: { transitionName: 'slide', requiresAuth: false  }
    },
    {
      path: "/logo",
      name: "logo",
      component: () =>
        import(/* webpackChunkName: "logo" */ "@/views/logo/index.vue"),
      meta: { transitionName: 'slide', requiresAuth: false  }
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/about/index.vue"),
      meta: { transitionName: 'slide', requiresAuth: false  }
    },
    {
      path: "/project",
      // name: "project",
      component: () =>
        import(/* webpackChunkName: "project" */ "@/views/project.vue"),
      meta: { transitionName: 'slide', requiresAuth: false  },
      children: [
        {
          path: "",
          name: "project",
          component: () =>
            import(
              /* webpackChunkName: "project" */ "@/views/project/index.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/drumKit",
          name: "drumKit",
          component: () =>
            import(
              /* webpackChunkName: "drumKit" */ "@/views/project/js/drumKit.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/analogClock",
          name: "analogClock",
          component: () =>
            import(
              /* webpackChunkName: "analogClock" */ "@/views/project/js/analogClock.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/arrayCardio",
          name: "arrayCardio",
          component: () =>
            import(
              /* webpackChunkName: "arrayCardio" */ "@/views/project/js/arrayCardio.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/imageGalery",
          name: "imageGalery",
          component: () =>
            import(
              /* webpackChunkName: "imageGalery" */ "@/views/project/js/imageGalery.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/fetchAPI",
          name: "fetchApi",
          component: () =>
            import(
              /* webpackChunkName: "fetchApi" */ "@/views/project/js/fetchApi.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/canvasExample",
          name: "canvasExample",
          component: () =>
            import(
              /* webpackChunkName: "canvasExample" */ "@/views/project/js/canvasExample.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/checkboxChallange",
          name: "checkboxChallange",
          component: () =>
            import(
              /* webpackChunkName: "checkboxChallange" */ "@/views/project/js/checkboxChallange.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/konamiCode",
          name: "konamiCode",
          component: () =>
            import(
              /* webpackChunkName: "konamiCode" */ "@/views/project/js/konamiCode.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/scrollIn",
          name: "scrollIn",
          component: () =>
            import(
              /* webpackChunkName: "scrollIn" */ "@/views/project/js/scrollIndicator/index.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/speechRecognition",
          name: "speechRecognition",
          component: () =>
            import(
              /* webpackChunkName: "speechRecognition" */ "@/views/project/js/speechRecognition.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/linkFollower",
          name: "linkFollower",
          component: () =>
            import(
              /* webpackChunkName: "linkFollower" */ "@/views/project/js/linkFollower.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/geoLocation",
          name: "geoLocation",
          component: () =>
            import(
              /* webpackChunkName: "geoLocation" */ "@/views/project/js/geoLocation.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/userMedia",
          name: "userMedia",
          component: () =>
            import(
              /* webpackChunkName: "userMedia" */ "@/views/project/js/userMedia.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/followerAlongNav",
          name: "FollowNav",
          component: () =>
            import(
              /* webpackChunkName: "FollowNav" */ "@/views/project/js/followerAlongNav/index.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/clickDrag",
          name: "clickDrag",
          component: () =>
            import(
              /* webpackChunkName: "clickDrag" */ "@/views/project/js/clickDrag.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "js/videoControl",
          name: "videoControl",
          component: () =>
            import(
              /* webpackChunkName: "videoControl" */ "@/views/project/js/videoControl.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "WebUX/packStation",
          name: "packStation",
          component: () =>
            import(
              /* webpackChunkName: "packStation" */ "@/views/project/webUX/packStation.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "WebUX/RSVPApp",
          name: "rsvpApp",
          component: () =>
            import(
              /* webpackChunkName: "about" */ "@/views/project/webUX/rsvpApp.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "CSS/pulseAnimation",
          name: "pulseAnimation",
          component: () =>
            import(
              /* webpackChunkName: "pulseAnimation" */ "@/views/project/css/pulseAnimation.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "CSS/cardSlider",
          name: "cardSlider",
          component: () =>
            import(
              /* webpackChunkName: "cardSlider" */ "@/views/project/css/cardSlider.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "mobileUX/appSignUp",
          name: "appSignUp",
          component: () =>
            import(
              /* webpackChunkName: "appSignUp" */ "@/views/project/mobileUX/appSignUp.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "mobileUX/medCo",
          name: "medCo",
          component: () =>
            import(
              /* webpackChunkName: "medCo" */ "@/views/project/mobileUX/medCo.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "mobileUX/fitnessFriend",
          name: "fitnessFriend",
          component: () =>
            import(
              /* webpackChunkName: "fitnessFriend" */ "@/views/project/mobileUX/fitnessFriend.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "mobileUX/culinarian",
          name: "culinarian",
          component: () =>
            import(
              /* webpackChunkName: "culinarian" */ "@/views/project/mobileUX/culinarian.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        },
        {
          path: "mobileUX/goGreen",
          name: "goGreen",
          component: () =>
            import(
              /* webpackChunkName: "goGreen" */ "@/views/project/mobileUX/goGreen.vue"
            ),
      meta: { transitionName: 'slide', requiresAuth: false  }
        }
      ]
    },
    {
      // path: "/404PageNotFound",
      path: "/:catchAll(.*)",
      alias: "/pageNotFound",
      name: "pageNotFound",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(
          /* webpackChunkName: "pageNotFound" */ "@/views/pageNotFound.vue"
        ),
      meta: { transitionName: 'slide', requiresAuth: false }
    }
  ]
});

//user authentication using meta
//helps check for any conditions before allowing user to go to the requested page
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireLogin) {
//     //user needs login
//   } else {
//     next();
//   }
// });
// router.beforeEach((to, from, next) => {
//   // if (to.meta.requiresAuth) {
//   //   //user needs login
//   // } else {
//   //   next();
//   // }
//   let transitionName = to.meta.transitionName || from.meta.transitionName;

//   if (transitionName === "slide") {
//     const toDepth = to.path.split("/").length;
//     const fromDepth = from.path.split("/").length;
//     transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
//   }

// //   this.transitionName = transitionName || "fade";

//   next();
// });

export default router;
