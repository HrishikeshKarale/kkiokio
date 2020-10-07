import Vue from "vue";
import VueRouter from "vue-router";
import index from "@/views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "app",
    component: index
  },
  {
    path: "/project",
    // name: "project",
    component: () =>
      import(/* webpackChunkName: "project */ "@/views/project.vue"),
    children: [
      {
        path: "",
        name: "project",
        component: () =>
          import(/* webpackChunkName: "index" */ "@/views/project/index.vue")
      },
      {
        path: "js/drumKit",
        name: "drumKit",
        component: () =>
          import(
            /* webpackChunkName: "drumKit" */ "@/views/project/js/drumKit.vue"
          )
      },
      {
        path: "js/analogClock",
        name: "analogClock",
        component: () =>
          import(
            /* webpackChunkName: "analogClock" */ "@/views/project/js/analogClock.vue"
          )
      },
      {
        path: "js/arrayCardio",
        name: "arrayCardio",
        component: () =>
          import(
            /* webpackChunkName: "arrayCardio" */ "@/views/project/js/arrayCardio.vue"
          )
      },
      {
        path: "js/imageGalery",
        name: "imageGalery",
        component: () =>
          import(
            /* webpackChunkName: "imageGalery" */ "@/views/project/js/imageGalery.vue"
          )
      },
      {
        path: "js/fetchAPI",
        name: "fetchApi",
        component: () =>
          import(
            /* webpackChunkName: "fetchApi" */ "@/views/project/js/fetchApi.vue"
          )
      },
      {
        path: "js/canvasExample",
        name: "canvasExample",
        component: () =>
          import(
            /* webpackChunkName: "canvasExample" */ "@/views/project/js/canvasExample.vue"
          )
      },
      {
        path: "js/checkboxChallange",
        name: "checkboxChallange",
        component: () =>
          import(
            /* webpackChunkName: "checkboxChallange" */ "@/views/project/js/checkboxChallange.vue"
          )
      },
      {
        path: "js/konamiCode",
        name: "konamiCode",
        component: () =>
          import(
            /* webpackChunkName: "konamiCode" */ "@/views/project/js/konamiCode.vue"
          )
      },
      {
        path: "js/scrollIn",
        name: "scrollIn",
        component: () =>
          import(
            /* webpackChunkName: "scrollIn" */ "@/views/project/js/scrollIndicator/index.vue"
          )
      },
      {
        path: "WebUX/packStation",
        name: "packStation",
        component: () =>
          import(
            /* webpackChunkName: "packStation" */ "@/views/project/webUX/packStation.vue"
          )
      },
      {
        path: "WebUX/RSVPApp",
        name: "rsvpApp",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/project/webUX/rsvpApp.vue"
          )
      },
      {
        path: "CSS/pulseAnimation",
        name: "pulseAnimation",
        component: () =>
          import(
            /* webpackChunkName: "pulseAnimation" */ "@/views/project/css/pulseAnimation.vue"
          )
      },
      {
        path: "mobileUX/appSignUp",
        name: "appSignUp",
        component: () =>
          import(
            /* webpackChunkName: "appSignUp" */ "@/views/project/mobileUX/appSignUp.vue"
          )
      },
      {
        path: "mobileUX/medCo",
        name: "medCo",
        component: () =>
          import(
            /* webpackChunkName: "medCo" */ "@/views/project/mobileUX/medCo.vue"
          )
      },
      {
        path: "mobileUX/fitnessFriend",
        name: "fitnessFriend",
        component: () =>
          import(
            /* webpackChunkName: "fitnessFriend" */ "@/views/project/mobileUX/fitnessFriend.vue"
          )
      },
      {
        path: "mobileUX/culinarian",
        name: "culinarian",
        component: () =>
          import(
            /* webpackChunkName: "culinarian" */ "@/views/project/mobileUX/culinarian.vue"
          )
      },
      {
        path: "mobileUX/goGreen",
        name: "goGreen",
        component: () =>
          import(
            /* webpackChunkName: "goGreen" */ "@/views/project/mobileUX/goGreen.vue"
          )
      }
    ]
  },
  {
    path: "/caseStudy",
    name: "caseStudy",
    component: () =>
      import(/* webpackChunkName: "caseStudy" */ "@/views/caseStudy.vue")
  },
  {
    path: "/contactMe",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "@/views/contact.vue")
  },
  {
    path: "/logo",
    name: "logo",
    component: () => import(/* webpackChunkName: "logo" */ "@/views/logo.vue")
  },
  {
    path: "/aboutMe",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/about/index.vue")
  },
  {
    path: "/404PageNotFound",
    alias: "*",
    name: "pageNotFound",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "pageNotFound" */ "@/views/pageNotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: "vue-school-active-class",

  //guides the scroll behaviour for the page.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
  routes
});

//user authentication using meta
//helps check for any conditions before allowing user to go to the requested page
router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin) {
    //user needs login
  } else {
    next();
  }
});

export default router;
