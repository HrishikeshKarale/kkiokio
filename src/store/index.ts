import { createStore } from "vuex";
import { honorsAndAwards } from "./data/honorsAndAwards";
import { lisencesAndCertificates } from "./data/lisencesAndCertificates";
import { logoList } from "./data/logoList";
import { nav } from "./data/navigation";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { uxProcess } from "./data/uxProcess";
const store = createStore({
  state: {
    honorsAndAwards,
    lisencesAndCertificates,
    logoList,
    nav,
    projects,
    skills,
    uxProcess,

    //table metadata
    metadata: {
      sortKey: null,
      sortOrders: null,
      selected: [],
      totalRecords: null,
      recordsPerPage: [20, 36, 48, 60, 100],
      pageNumber: 1,
      pageCount: 1,
      start: null,
      end: null,
      rowElements: 36,
      searchKey: null,
      groupBy: null
    }
  },
  mutations: {
    //do something
  },
  actions: {
    //do something
  },
  modules: {
    //do something
  }
});

export default store;
