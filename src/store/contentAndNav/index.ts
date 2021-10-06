import { arrayMethods } from "@/typeScript/arrayMethods";

import breadcrums from "./breadcrums"

const module = {
  namespaced: true,
  modules: {
    breadcrums
    // breadcrums: require("./breadcrums")
  },
  state: {
    honorsAndAwards: require("./honorsAndAwards"),
    lisencesAndCertificates: require("./lisencesAndCertificates"),
    logoList: require("./logoList"),
    nav: require("./navigation"),
    projects: require("./projects"),
    skills: require("./skills"),
    uxProcess: require("./uxProcess"),
    arrayExercise: require("./arrayExercise"),
    drumKit: require("./drumKit"),
    // get unique list of tags
    uniqueTagList: [],
    compList: []
  },
  mutations: {
    // list of unique tags
    SET_UNIQUE_TAG_LIST(state, array) {
      state.uniqueTagList = arrayMethods.methods.unique(array);
    }, //GET_UNIQUE

    //list of {component, name}[] unique to the projects
    SET_COMP_LIST(state, array) {
      // console.log("SET_COMP_LIST", array);
      state.compList = array;
    }, //SET_COMP_LIST
  },
  actions: {
    //returns a unique list of tags for individual projects
    async processPorjects(context) {
      // console.log("processPorjects");
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
      const projects = context.getters.getProjects;
      projects.forEach((project) => {
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
      const nav = context.getters.getNavigation;

      nav.forEach((nav) => {
				compList = [{subNav: null, comp: nav.component, name: nav.name }, ...compList];
      });

      context.commit("SET_UNIQUE_TAG_LIST", tagList);
      context.commit("SET_COMP_LIST", compList);
    }, //processProjects
  },

  getters: {

    getHonorsAndAwards(state) {
      return state.honorsAndAwards.honorsAndAwards;
    },

    getLisencesAndCertificates(state) {
      return state.lisencesAndCertificates.lisencesAndCertificates;
    },

    getLogoList(state) {
      return state.logoList.logoList;
    },

    getSkills(state) {
      return state.skills.skills;
    },

    getUxProcess(state) {
      return state.uxProcess.uxProcess;
    },

    getNavigation(state) {
      // console.log("GETTER Navigation", state.nav.nav);
      return state.nav.nav;
    }, //getProjects

    getProjects(state) {
      // console.log("GETTER", state.projects.projects);
      return state.projects.projects;
    }, //getProjects

    uniqueTagList(state) {
      return state.uniqueTagList.uniqueTagList;
    }, //uniqueTagList

    getDrumKit(state) {
      return state.drumKit.drumKit;
    }, //uniqueTagList

    getArrayExercise(state) {
      return state.arrayExercise.arrayExercise;
    }, //uniqueTagList

    compList(state) {
      return state.compList;
    }, //compList
  }
};

export default module;
