const module = {
  namespaced: true,
  state: {
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
  getters: {
    //do something
  }
};

export default module;
