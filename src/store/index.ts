import { createStore } from "vuex";
const store = createStore({
  state: {
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
    },
    buttonStyle: [
      "small",
      "standard",
      "large",
      "fullWidth",
      "border-sm",
      "border",
      "border-lg",
      "border-fwidth",
      "text-sm",
      "text",
      "text-lg",
      "icon-sm",
      "icon",
      "icon-lg"
    ]
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
