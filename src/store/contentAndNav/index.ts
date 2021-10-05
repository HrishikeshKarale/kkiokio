import store from "..";
import { honorsAndAwards } from "./honorsAndAwards";
import { lisencesAndCertificates } from "./lisencesAndCertificates";
import { logoList } from "./logoList";
import { nav } from "./navigation";
import { projects } from "./projects";
import { skills } from "./skills";
import { uxProcess } from "./uxProcess";

import { arrayMethods } from "@/typeScript/arrayMethods";

import breadcrums from "./breadcrums"

const module = {
  namespaced: true,
  modules: {
    breadcrums
  },
  state: {
    honorsAndAwards,
    lisencesAndCertificates,
    logoList,
    nav,
    projects,
    skills,
    uxProcess,
    // get unique list of tags
    uniqueTagList: [],
    compList: []
  },
  mutations: {
    // list of unique tags
    SET_UNIQUE_TAG_LIST(state, array) {
      store.state.contentModule.uniqueTagList = arrayMethods.methods.unique(array);
    }, //GET_UNIQUE

    //list of {component, name}[] unique to the projects
    SET_COMP_LIST(state, array) {
      store.state.contentModule.compList = array;
    }, //SET_COMP_LIST
  },
  actions: {
    //returns a unique list of tags for individual projects
    async processPorjects(context, state) {
      let tagList: String[] = [];
      let compList: {
        subNav: {
        id: Number,
        title: String,
        img: String,
        tags: String[],
        description:
          String,
        component: String,
        blog: String
        }[] | null,
        comp: String,
        name: String
      }[] = [];
      context.state.projects.forEach((project) => {
        // console.log(arrayMethods.methods.unique);
        if (project.type != "Logo") {
          project.value.forEach((val) => {
            //store
            compList = [{
              subNav: project.value, comp: val.component, name: val.title
            }, ...compList]
            //save list of tags
            tagList = [...val.tags, ...tagList];
          });
        }
      });

      context.state.nav.forEach((nav) => {
				compList = [{subNav: null, comp: nav.component, name: nav.name }, ...compList];
      });

      context.commit("SET_UNIQUE_TAG_LIST", tagList);
      context.commit("SET_COMP_LIST", compList);
    }, //getTags
  },
  getters: {

    getProjects() {
      return store.state.contentModule.projects;
    }, //getProjects

    uniqueTagList() {
      return store.state.contentModule.uniqueTagList;
    }, //uniqueTagList

    compList() {
      return store.state.contentModule.compList;
    }, //compList
  }
};

export default module;
