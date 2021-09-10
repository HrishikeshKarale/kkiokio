import { createStore } from "vuex";
import { honorsAndAwards } from "./honorsAndAwards";
import { lisencesAndCertificates } from "./lisencesAndCertificates";
import { logoList } from "./logoList";
import { nav } from "./navigation";
import { projects } from "./projects";
import { skills } from "./skills";
import { uxProcess } from "./uxProcess";
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
