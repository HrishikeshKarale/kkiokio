import store from "@/store";
import { Store } from "vuex";

import { nameConvention } from "@/typeScript/nameConvention";
import { isCoreComponent } from "@vue/compiler-core";

const module = {
  namespaced: true,
  state: {
    routeComp: [],
    path: ""
  },
  mutations: {
    SET_PATH(state, path): void {
      let temp = path.split("/");
      temp = temp.filter(function (el) {
        return el != "";
      });

      store.state.contentModule.breadcrums.path = ["home", ...temp];

      console.log("SET_PATH", store.state.contentModule.breadcrums.path);
    }, //SET_PATH

    CRUMS(state): void {
      let routeComp:{ comp: string, name: string }[] = [];

      const compList = store.state.contentModule.compList;

      store.state.contentModule.breadcrums.path.forEach(comp => {

        compList.forEach((list) => {
          if (nameConvention.methods.capitalize(comp) === nameConvention.methods.capitalize(list.comp)) {
            routeComp = [...routeComp, list];
          };
        });
      });
      //   routeComp = [compList.map((list) => {
      //       return nameConvention.methods.capitalize(comp) === nameConvention.methods.capitalize(list.comp);
      //   }), ...routeComp];
      // });



      store.state.contentModule.breadcrums.routeComp = routeComp;
      // store.state.contentModule.breadcrums.routeComp = [...routeComp, {comp: null, name: route[route.length-1]}];

      console.log("CRUMS", store.state.contentModule.breadcrums.routeComp);
    },

    IS_COMPONENT(state, comp): { comp: string, name: string } {
      const compList = store.state.contentModule.compList;
      return compList.find((list) => {
        return nameConvention.methods.capitalize(comp) === nameConvention.methods.capitalize(list.comp);
      });
    },

    DEF_COMPONENT(state) {
      console.log("DEF_COMPONENT", store);

    }
  },
  actions: {
    //returns a unique list of tags for individual projects
    async possibleCrums(context) {
      // console.log("possibleCrums", context);

    }, //getTags
    async initialize(context, route) {
      console.log("initialize");
			context.commit("SET_PATH", route);
			context.commit("CRUMS");
      context.commit("DEF_COMPONENT");
      // context.commit("IS_COMPONENT", comp);
      console.log("initialize", store);
    }
  },
  getters: {
    routeComp() {
      return store.state.contentModule.breadcrums.routeComp;
    }, //routeComp

    pageTitle() {
      const route = store.state.contentModule.breadcrums.path;

      //remove %20 if any
      let tempSelect = route[route.length-1];

      while (tempSelect.includes("%20")) {
        tempSelect = tempSelect.replace("%20", " ");
      }

      return tempSelect;
    }, //routeComp
  }
};

export default module;
