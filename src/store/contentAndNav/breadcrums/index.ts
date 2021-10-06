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

      state.breadcrums.path = ["home", ...temp];

      console.log("SET_PATH", state.breadcrums.path);
    }, //SET_PATH

    CRUMS(state): void {
      let routeComp:{ comp: string, name: string }[] = [];

      const compList = state.compList;

      state.breadcrums.path.forEach(comp => {

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



      state.breadcrums.routeComp = routeComp;
      // state.breadcrums.routeComp = [...routeComp, {comp: null, name: route[route.length-1]}];

      console.log("CRUMS", state.breadcrums.routeComp);
    },

    IS_COMPONENT(state, comp): { comp: string, name: string } {
      const compList = state.compList;
      return compList.find((list) => {
        return nameConvention.methods.capitalize(comp) === nameConvention.methods.capitalize(list.comp);
      });
    },
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
      // context.commit("IS_COMPONENT", comp);
    }
  },
  getters: {
    routeComp(state) {
      return state.routeComp;
    }, //routeComp

    pageTitle(state) {
      const route = state.path;

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
