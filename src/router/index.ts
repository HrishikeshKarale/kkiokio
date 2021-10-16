import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

//set up emiter for login's
import mitt from "mitt";
const emitter = mitt();

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
  {
    path: "/blogs",
    name: "blogs",
    component: () =>
      import(/* webpackChunkName: "blogs" */ "@/views/blogs.vue"),
    meta: {
      transitionName: "fade",
      requiresAuth: false //true
    }
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/about/index.vue"),
    meta: {
      transitionName: "fade",
      requiresAuth: true
    }
  },
  {
    path: "/work",
    name: "work",
    component: () =>
      import(/* webpackChunkName: "work" */ "@/views/project.vue"),
    meta: {
      transitionName: "fade",
      requiresAuth: false //true
    },
    children: [
      {
        path: ":type",
        name: "work",
    component: () =>
      import(/* webpackChunkName: "work" */ "@/views/project.vue"),
        meta: {
          transitionName: "fade",
          requiresAuth: false //true
        },
      },
    ]
  },
  {
    path: "/work/:type/:article",
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
    path: "/work/js/drumKit",
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
    path: "/work/js/analogClock",
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
    path: "/work/js/arrayCardio",
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
    path: "/work/js/imageGalery",
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
    path: "/work/js/fetchAPI",
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
    path: "/work/js/canvasExample",
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
    path: "/work/js/checkboxChallange",
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
    path: "/work/js/konamiCode",
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
    path: "/work/js/scrollIn",
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
    path: "/work/js/speechRecognition",
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
    path: "/work/js/linkFollower",
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
    path: "/work/js/geoLocation",
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
    path: "/work/js/userMedia",
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
    path: "/work/js/followerAlongNav",
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
    path: "/work/js/clickDrag",
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
    path: "/work/js/videoControl",
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
    path: "/work/WebUX/RSVPApp",
    name: "rsvpApp",
    component: () =>
      import(
        /* webpackChunkName: "rsvpApp" */ "@/views/projects/webUX/rsvpApp.vue"
      ),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
  },
  {
    path: "/work/CSS/pulseAnimation",
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
    path: "/work/CSS/cardScroller",
    name: "cardSlider",
    component: () =>
      import(
        /* webpackChunkName: "cardScroller" */ "@/views/projects/css/cardSlider/index.vue"
      ),
    meta: { transitionName: "fade", requiresAuth: false }
  },
  {
    path: "/work/CSS/infiniteScroll",
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
    // this generates a separate chunk (pageNotFound.[hash].js) for this route
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
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
    // emitter.emit("loadingScreen", true);
    // if (localStorage.getItem('jwt') == null) {
    //   //   next({
    //     //     path: '/login',
    //     //     params: { nextUrl: to.fullPath }
    //     //   })
    // } else {
    //   const user = JSON.parse(localStorage.getItem('user') || '{}');
    //   if (to.matched.some(record => record.meta.isAdmin)) {
    //     if (user.isAdmin == 1) {
    //       next()
    //     }
    //     else {
    //       next({ name: 'userboard' })
    //     }
    //   } else {
    //     next()
    //   }
    // }
  // } else if (to.matched.some(record => record.meta.guest)) {
    //   if (localStorage.getItem('jwt') == null) {
    //     next()
    //   }
    //   else {
    //     next({ name: 'userboard' })
    //   }
    // } else {
    //   next()
    // }
//   }
// })

export default router;
