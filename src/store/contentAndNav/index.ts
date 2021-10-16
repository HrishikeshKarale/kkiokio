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
    compList: [],
    categoryList: [],
    selectedProject: {},
    nextArticle: null,
    previousArticle: null
  },
  mutations: {
    // list of unique tags
    SET_UNIQUE_TAG_LIST(state, array) {
      state.uniqueTagList = arrayMethods.methods.unique(array);
    }, //GET_UNIQUE

    // list of unique categories
    SET_UNIQUE_CATEGORY_LIST(state, array) {
      state.categoryList = array;
    }, //GET_UNIQUE

    //list of {component, name}[] unique to the projects
    SET_COMP_LIST(state, array) {
      // console.log("SET_COMP_LIST", array);
      state.compList = array;
    }, //SET_COMP_LIST

    //store data related to current Article being displayed
    SET_SELECTED_PROJECT(state, payload) {
      console.log("SET_SELECTED_PROJECT", payload);
      state.selectedProject = payload;
    }, //SET_SELECTED_PROJECT

    //store data related to current Article being displayed
    SET_NEXT_ARTICLE(state, payload) {
      console.log("SET_NEXT_ARTICLE", payload);
      state.nextArticle = payload;
    }, //SET_NEXT_ARTICLE

    //store data related to current Article being displayed
    SET_PEVIOUS_ARTICLE(state, payload) {
      console.log("SET_PEVIOUS_ARTICLE", payload);
      state.previousArticle = payload;
    }, //SET_PEVIOUS_ARTICLE
  },
  actions: {
    // loads data for selected project and adjoining projects
    projectData: async function (context, article) {
      let articleFound = false;
      const postTitle = article;
      const projects = context.getters.getProjects;
      let selectedArticle:any = {};
      let selectedTags = [];
      let selectedTitle = "";
      context.commit("SET_NEXT_ARTICLE", projects[0].value[0]);
      context.commit("SET_PEVIOUS_ARTICLE", projects.at(-1).value.at(-1));
      for (const project of projects) {
        // console.log("project Data");
        for (const proj of project.value) {
          if (!articleFound && proj.title === postTitle && proj.blog) {
            articleFound = true;
            console.log("VALUE", Object.values(proj.blog)[0]);
            selectedArticle = Object.values(proj.blog)[0];
            selectedTags = proj.tags;
            selectedTitle = proj.title;
            console.log(articleFound, " - ", proj.title);
            context.commit("SET_SELECTED_PROJECT", {
              article: selectedArticle,
              tags: selectedTags,
              title: selectedTitle});
          } else {
            if (articleFound) {
              context.commit("SET_NEXT_ARTICLE", proj);
              return null;
            } else {
              context.commit("SET_PEVIOUS_ARTICLE", proj);
            }
          }
        }
      }
    }, //projectData


    //returns a unique list of tags for individual projects
    processPorjects: async function (context) {
      // console.log("processPorjects");
      let tagList: string[] = [];
      let categoryList: string[] = [];
      let compList: {
        subNav: {
        id: number,
        title: string,
        img: string,
        tags: string[],
        description:
          string,
        component: string,
        blog: string
        }[] | null,
        comp: string,
        name: string
      }[] = [];
      const projects = context.getters.getProjects;
      projects.forEach((project) => {
        // console.log(arrayMethods.methods.unique);
        categoryList = [...categoryList,project.type];
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

      context.commit("SET_UNIQUE_CATEGORY_LIST", categoryList);
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

    getDrumKit(state) {
      return state.drumKit.drumKit;
    }, //uniqueTagList

    getArrayExercise(state) {
      return state.arrayExercise.arrayExercise;
    }, //uniqueTagList

    compList(state) {
      return state.compList;
    }, //compList

    uniqueTagList(state) {
      return state.uniqueTagList;
    }, //uniqueTagList

    categoryList(state) {
      // console.log(state.categoryList);
      return state.categoryList;
    }, //uniqueTagList

    getSelectedProject(state) {
      console.log("getSelectedProject", state.selectedProject);
      return state.selectedProject;
    },

    getNextArticle(state) {
      console.log("getNextArticle", state.nextArticle);
      return state.nextArticle;
    },

    getPreviousArticle(state) {
      console.log("getPreviousArticle", state.previousArticle);
      return state.previousArticle;
    },
  }
};

export default module;
