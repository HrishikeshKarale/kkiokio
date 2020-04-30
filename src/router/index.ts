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
    path: "/Project",
    name: "Project",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Project.vue")
    // children: [
    //   {
    //     path: "JS/DrumKit",
    //     name: "drumKit",
    //     component: () =>
    //       import(/* webpackChunkName: "about" */ "@/views/projects/js/DrumKit.vue")
    //   }
    // ]
  },
  {
    path: "/Project/JS/DrumKit",
    name: "drumKit",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/projects/js/DrumKit.vue")
  },
  {
    path: "/Project/JS/AnalogCLock",
    name: "analogClock",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/projects/js/AnalogClock.vue"
      )
  },
  {
    path: "/Project/JS/ArrayCardio",
    name: "arrayCardio",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/projects/js/ArrayCardio.vue"
      )
  },
  {
    path: "/Project/JS/ImageGalery",
    name: "imageGalery",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/projects/js/ImageGalery.vue"
      )
  },
  {
    path: "/Project/JS/FetchApi",
    name: "fetchApi",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/projects/js/FetchApi.vue")
  },
  {
    path: "/Project/JS/CanvasExample",
    name: "canvasExample",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/projects/js/CanvasExample.vue"
      )
  },
  {
    path: "/Project/JS/CheckboxChallange",
    name: "checkboxChallange",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/projects/js/CheckboxChallange.vue"
      )
  },
  {
    path: "/Project/JS/KonamiCode",
    name: "konamiCode",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/projects/js/KonamiCode.vue"
      )
  },
  {
    path: "/Project/JS/ScrollIn",
    name: "scrollIn",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/projects/js/ScrollIn.vue")
  },
  {
    path: "/Project/web-UX/PackStation",
    name: "packStation",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/projects/webUX/PackStation.vue"
      )
  },
  {
    path: "/Project/web-UX/RSVPApp",
    name: "rsvpApp",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/projects/webUX/RSVP.vue")
  },
  {
    path: "/Project/MobileUX/SignUpApp",
    name: "signUpApp",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/projects/mobileUX/SignUpApp.vue"
      )
  },
  {
    path: "/Project/MobileUX//MedCo",
    name: "medCo",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/projects/mobileUX/MedCo.vue"
      )
  },
  {
    path: "/Project/MobileUX//FitnessFriend",
    name: "fitnessFriend",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/projects/mobileUX/FitnessFriend.vue"
      )
  },
  {
    path: "/Project/MobileUX//Culinarian",
    name: "Culinarian",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/projects/mobileUX/Culinarian.vue"
      )
  },
  {
    path: "/Project/MobileUX//GoGreen",
    name: "goGreen",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/projects/mobileUX/GoGreen.vue"
      )
  },
  {
    path: "/Case Studies",
    name: "caseStudy",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/CaseStudy.vue")
  },
  {
    path: "/Logo",
    name: "logo",
    component: () => import(/* webpackChunkName: "about" */ "@/views/Logo.vue")
  },
  {
    path: "/Contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Contact.vue")
  },
  {
    path: "/About Me",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
