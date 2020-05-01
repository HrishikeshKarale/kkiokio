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
    path: "/projects",
    name: "projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/projects.vue"),
    children: [
      {
        path: "JS/DrumKit",
        name: "drumKit",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/js/DrumKit.vue"
          )
      },
      {
        path: "JS/AnalogCLock",
        name: "analogClock",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/js/AnalogClock.vue"
          )
      },
      {
        path: "JS/ArrayCardio",
        name: "arrayCardio",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/js/ArrayCardio.vue"
          )
      },
      {
        path: "JS/ImageGalery",
        name: "imageGalery",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/js/ImageGalery.vue"
          )
      },
      {
        path: "JS/FetchApi",
        name: "fetchApi",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/js/FetchApi.vue"
          )
      },
      {
        path: "JS/CanvasExample",
        name: "canvasExample",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/js/CanvasExample.vue"
          )
      },
      {
        path: "JS/CheckboxChallange",
        name: "checkboxChallange",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/js/CheckboxChallange.vue"
          )
      },
      {
        path: "JS/KonamiCode",
        name: "konamiCode",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/js/KonamiCode.vue"
          )
      },
      {
        path: "JS/ScrollIn",
        name: "scrollIn",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/js/ScrollIn.vue"
          )
      },
      {
        path: "WebUX/PackStation",
        name: "packStation",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/webUX/PackStation.vue"
          )
      },
      {
        path: "WebUX/RSVPApp",
        name: "rsvpApp",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/webUX/RSVP.vue"
          )
      },
      {
        path: "AppSignUp",
        name: "appSignUp",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/mobileUX/AppSignUp.vue"
          )
      },
      {
        path: "mobileUX//MedCo",
        name: "medCo",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/mobileUX/MedCo.vue"
          )
      },
      {
        path: "mobileUX//FitnessFriend",
        name: "fitnessFriend",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/mobileUX/FitnessFriend.vue"
          )
      },
      {
        path: "mobileUX//Culinarian",
        name: "Culinarian",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/mobileUX/Culinarian.vue"
          )
      },
      {
        path: "mobileUX//GoGreen",
        name: "goGreen",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/views/projects/mobileUX/GoGreen.vue"
          )
      }
    ]
  },
  {
    path: "/Case Study",
    name: "caseStudy",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/CaseStudy.vue")
  },
  {
    path: "/Contact Me",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Contact.vue")
  },
  {
    path: "/About Me",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/about/index.vue")
  },
  {
    path: "*",
    name: "pageNotFound",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/PageNotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
