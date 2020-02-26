import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "app",
    component: index
  },
  {
    path: "/Design",
    name: "design",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Design.vue")
  },
  {
    path: "/Case Studies",
    name: "caseStudy",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CaseStudy.vue")
  },
  {
    path: "/Logo",
    name: "logo",
    component: () => import(/* webpackChunkName: "about" */ "../views/Logo.vue")
  },
  {
    path: "/Contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue")
  },
  {
    path: "/About Me",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
