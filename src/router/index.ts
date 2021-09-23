import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/index.vue"),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "@/views/contact/index.vue"),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  // {
  //   path: "/logo",
  //   name: "logo",
  //   component: () =>
  //     import(/* webpackChunkName: "logo" */ "@/views/logo/index.vue"),
  //   meta: {
  //     transitionName: "fade",
  //     requiresAuth: false //true
  //   }
  // },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/about/index.vue"),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects",
    name: "project",
    component: () =>
      import(/* webpackChunkName: "project" */ "@/views/project.vue"),
    meta: {
      transitionName: "fade",
      requiresAuth: false //true
    }
  },
  {
    path: "/Articles/:article",
    name: "articlePage",
    component: () =>
      import(
        /* webpackChunkName: "project" */ "@/views/projects/articlePage.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false //true
    }
  },
  {
    path: "/projects/js/drumKit",
    name: "drumKit",
    component: () =>
      import(
        /* webpackChunkName: "drumKit" */ "@/views/projects/js/drumKit.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/js/analogClock",
    name: "analogClock",
    component: () =>
      import(
        /* webpackChunkName: "analogClock" */ "@/views/projects/js/analogClock.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/js/arrayCardio",
    name: "arrayCardio",
    component: () =>
      import(
        /* webpackChunkName: "arrayCardio" */ "@/views/projects/js/arrayCardio.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/js/imageGalery",
    name: "imageGalery",
    component: () =>
      import(
        /* webpackChunkName: "imageGalery" */ "@/views/projects/js/imageGalery.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/js/fetchAPI",
    name: "fetchApi",
    component: () =>
      import(
        /* webpackChunkName: "fetchApi" */ "@/views/projects/js/fetchApi.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/js/canvasExample",
    name: "canvasExample",
    component: () =>
      import(
        /* webpackChunkName: "canvasExample" */ "@/views/projects/js/canvasExample.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/js/checkboxChallange",
    name: "checkboxChallange",
    component: () =>
      import(
        /* webpackChunkName: "checkboxChallange" */ "@/views/projects/js/checkboxChallange.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/js/konamiCode",
    name: "konamiCode",
    component: () =>
      import(
        /* webpackChunkName: "konamiCode" */ "@/views/projects/js/konamiCode.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/js/scrollIn",
    name: "scrollIn",
    component: () =>
      import(
        /* webpackChunkName: "scrollIn" */ "@/views/projects/js/scrollIndicator/index.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/js/speechRecognition",
    name: "speechRecognition",
    component: () =>
      import(
        /* webpackChunkName: "speechRecognition" */ "@/views/projects/js/speechRecognition.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/js/linkFollower",
    name: "linkFollower",
    component: () =>
      import(
        /* webpackChunkName: "linkFollower" */ "@/views/projects/js/linkFollower.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/js/geoLocation",
    name: "geoLocation",
    component: () =>
      import(
        /* webpackChunkName: "geoLocation" */ "@/views/projects/js/geoLocation.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/js/userMedia",
    name: "userMedia",
    component: () =>
      import(
        /* webpackChunkName: "userMedia" */ "@/views/projects/js/userMedia.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/js/followerAlongNav",
    name: "FollowNav",
    component: () =>
      import(
        /* webpackChunkName: "FollowNav" */ "@/views/projects/js/followerAlongNav/index.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/js/clickDrag",
    name: "clickDrag",
    component: () =>
      import(
        /* webpackChunkName: "clickDrag" */ "@/views/projects/js/clickDrag.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/js/videoControl",
    name: "videoControl",
    component: () =>
      import(
        /* webpackChunkName: "videoControl" */ "@/views/projects/js/videoControl.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/WebUX/RSVPApp",
    name: "rsvpApp",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/projects/webUX/rsvpApp.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/CSS/pulseAnimation",
    name: "pulseAnimation",
    component: () =>
      import(
        /* webpackChunkName: "pulseAnimation" */ "@/views/projects/css/pulseAnimation.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/projects/CSS/cardScroller",
    name: "cardSlider",
    component: () =>
      import(
        /* webpackChunkName: "cardScroller" */ "@/views/projects/css/cardSlider/index.vue"
      ),
    meta: { transitionName: "fade", requiresAuth: false }
  },
  {
    path: "/projects/CSS/infiniteScroll",
    name: "infiniteScroll",
    component: () =>
      import(
        /* webpackChunkName: "infiniteScroll" */ "@/views/projects/css/infiniteScroll.vue"
      ),
    meta: { transitionName: "fade", requiresAuth: false }
  },
  {
    path: "/TermsOfService",
    name: "termsOfService",
    component: () =>
      import(
        /* webpackChunkName: "termsOfService" */ "@/views/termsOfService.vue"
      ),
    meta: { transitionName: "fade", requiresAuth: false }
  },
  {
    path: "/PrivacyPolicy",
    name: "privacyPolicy",
    component: () =>
      import(
        /* webpackChunkName: "termsOfService" */ "@/views/privacyPolicy.vue"
      ),
    meta: { transitionName: "fade", requiresAuth: false }
  },
  {
    // path: "/404PageNotFound",
    path: "/:catchAll(.*)",
    // alias: "/404pageNotFound",
    name: "pageNotFound",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "pageNotFound" */ "@/components/alert/pageNotFound.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (localStorage.getItem('jwt') == null) {
//       next({
//         path: '/login',
//         params: { nextUrl: to.fullPath }
//       })
//     } else {
//       const user = JSON.parse(localStorage.getItem('user') || '{}');
//       if (to.matched.some(record => record.meta.isAdmin)) {
//         if (user.isAdmin == 1) {
//           next()
//         }
//         else {
//           next({ name: 'userboard' })
//         }
//       } else {
//         next()
//       }
//     }
//   } else if (to.matched.some(record => record.meta.guest)) {
//     if (localStorage.getItem('jwt') == null) {
//       next()
//     }
//     else {
//       next({ name: 'userboard' })
//     }
//   } else {
//     next()
//   }
// })

export default router;
