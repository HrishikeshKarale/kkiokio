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
  {
    path: "/logo",
    name: "logo",
    component: () =>
      import(/* webpackChunkName: "logo" */ "@/views/logo/index.vue"),
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
      requiresAuth: false
    }
  },
  {
    path: "/project",
    // name: "project",
    component: () =>
      import(/* webpackChunkName: "project" */ "@/views/project.vue"),
    meta: {
      transitionName: "fade",
      requiresAuth: false //true
    },
    children: [
      {
        path: "",
        name: "project",
        component: () =>
          import(/* webpackChunkName: "project" */ "@/views/project/index.vue"),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/drumKit",
        name: "drumKit",
        component: () =>
          import(
            /* webpackChunkName: "drumKit" */ "@/views/project/js/drumKit.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/analogClock",
        name: "analogClock",
        component: () =>
          import(
            /* webpackChunkName: "analogClock" */ "@/views/project/js/analogClock.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/arrayCardio",
        name: "arrayCardio",
        component: () =>
          import(
            /* webpackChunkName: "arrayCardio" */ "@/views/project/js/arrayCardio.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/imageGalery",
        name: "imageGalery",
        component: () =>
          import(
            /* webpackChunkName: "imageGalery" */ "@/views/project/js/imageGalery.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/fetchAPI",
        name: "fetchApi",
        component: () =>
          import(
            /* webpackChunkName: "fetchApi" */ "@/views/project/js/fetchApi.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/canvasExample",
        name: "canvasExample",
        component: () =>
          import(
            /* webpackChunkName: "canvasExample" */ "@/views/project/js/canvasExample.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/checkboxChallange",
        name: "checkboxChallange",
        component: () =>
          import(
            /* webpackChunkName: "checkboxChallange" */ "@/views/project/js/checkboxChallange.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/konamiCode",
        name: "konamiCode",
        component: () =>
          import(
            /* webpackChunkName: "konamiCode" */ "@/views/project/js/konamiCode.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/scrollIn",
        name: "scrollIn",
        component: () =>
          import(
            /* webpackChunkName: "scrollIn" */ "@/views/project/js/scrollIndicator/index.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/speechRecognition",
        name: "speechRecognition",
        component: () =>
          import(
            /* webpackChunkName: "speechRecognition" */ "@/views/project/js/speechRecognition.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/linkFollower",
        name: "linkFollower",
        component: () =>
          import(
            /* webpackChunkName: "linkFollower" */ "@/views/project/js/linkFollower.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/geoLocation",
        name: "geoLocation",
        component: () =>
          import(
            /* webpackChunkName: "geoLocation" */ "@/views/project/js/geoLocation.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/userMedia",
        name: "userMedia",
        component: () =>
          import(
            /* webpackChunkName: "userMedia" */ "@/views/project/js/userMedia.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/followerAlongNav",
        name: "FollowNav",
        component: () =>
          import(
            /* webpackChunkName: "FollowNav" */ "@/views/project/js/followerAlongNav/index.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/clickDrag",
        name: "clickDrag",
        component: () =>
          import(
            /* webpackChunkName: "clickDrag" */ "@/views/project/js/clickDrag.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "js/videoControl",
        name: "videoControl",
        component: () =>
          import(
            /* webpackChunkName: "videoControl" */ "@/views/project/js/videoControl.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "WebUX/packStation",
        name: "packStation",
        component: () =>
          import(
            /* webpackChunkName: "packStation" */ "@/views/project/webUX/packStation.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "WebUX/RSVPApp",
        name: "rsvpApp",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/project/webUX/rsvpApp.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "CSS/pulseAnimation",
        name: "pulseAnimation",
        component: () =>
          import(
            /* webpackChunkName: "pulseAnimation" */ "@/views/project/css/pulseAnimation.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "CSS/cardScroller",
        name: "cardSlider",
        component: () =>
          import(
            /* webpackChunkName: "cardScroller" */ "@/views/project/css/cardSlider/index.vue"
          ),
        meta: { transitionName: "fade", requiresAuth: false }
      },
      {
        path: "CSS/infiniteScroll",
        name: "infiniteScroll",
        component: () =>
          import(
            /* webpackChunkName: "infiniteScroll" */ "@/views/project/css/infiniteScroll.vue"
          ),
        meta: { transitionName: "fade", requiresAuth: false }
      },
      {
        path: "mobileUI/appSignUp",
        name: "appSignUp",
        component: () =>
          import(
            /* webpackChunkName: "appSignUp" */ "@/views/project/mobileUI/appSignUp.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "mobileUI/medCo",
        name: "medCo",
        component: () =>
          import(
            /* webpackChunkName: "medCo" */ "@/views/project/mobileUI/medCo.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "mobileUI/fitnessFriend",
        name: "fitnessFriend",
        component: () =>
          import(
            /* webpackChunkName: "fitnessFriend" */ "@/views/project/mobileUI/fitnessFriend.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "mobileUI/culinarian",
        name: "culinarian",
        component: () =>
          import(
            /* webpackChunkName: "culinarian" */ "@/views/project/mobileUI/culinarian.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "mobileUI/PlantIt",
        name: "plantIt",
        component: () =>
          import(
            /* webpackChunkName: "plantIt" */ "@/views/project/mobileUI/plantIt.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "UserExperience/DictionaryCaseStudy",
        name: "dictionaryCaseStudy",
        component: () =>
          import(
            /* webpackChunkName: "dictionaryCaseStudy" */ "@/views/project/UX/dictionaryCaseStudy.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "UserExperience/Rupay",
        name: "rupay",
        component: () =>
          import(
            /* webpackChunkName: "rupay" */ "@/views/project/UX/rupay.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "UserExperience/SkinSafe",
        name: "skinSafe",
        component: () =>
          import(
            /* webpackChunkName: "skinSafe" */ "@/views/project/UX/skinSafe.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "UserExperience/CrowdCo",
        name: "crowdCo",
        component: () =>
          import(
            /* webpackChunkName: "crowdCo" */ "@/views/project/UX/crowdCo.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "UserExperience/TinyThoughts",
        name: "tinyThoughts",
        component: () =>
          import(
            /* webpackChunkName: "rupay" */ "@/views/project/UX/tinyThoughts.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      },
      {
        path: "UserExperience/HRMediaPlatform",
        name: "mediaHRPlatform",
        component: () =>
          import(
            /* webpackChunkName: "mediaHRPlatform" */ "@/views/project/UX/mediaHRPlatform.vue"
          ),
        meta: {
          transitionName: "fade",
          requiresAuth: false
        }
      }
    ]
  },
  {
    path: "/privacyPolicy",
    name: "privacyPolicy",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/privacyPolicy.vue"),
    meta: { transitionName: "fade", requiresAuth: false }
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login/index.vue"),
    meta: {
      transitionName: "fade",
      requiresAuth: false
    }
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
