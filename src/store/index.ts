import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
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
    // setPage: function (state, newValue) {
    //   if (state.metadata.pageCount <= newValue[1] || newValue[1] >= 1) {
    //     state.metadata.pageNumber = newValue[1];
    //     newValue[0].commit('initializeData', newValue[0])
    //   }
    // }, //setPage
    // setSelectedRow: function (state, newValue) {
    //   var selected = state.metadata.selected
    //   if (selected && selected.length > 0) {
    //     var index = selected.indexOf(newValue[1])
    //     //value exists in selected
    //     if (index != -1) {
    //       //remove value
    //       selected.splice(index, 1)
    //     }
    //     //value does not exist in selected
    //     else {
    //       selected.push(newValue[1])
    //     }
    //   }
    //   else {
    //     selected[0] = newValue[1]
    //     // console.log('empty selected: ', selected)
    //   }
    //   state.metadata.selected = selected;
    // }, //setSelectedRow
    // setRowElements: function (state, newValue) {
    //   state.metadata.rowElements = newValue[1];
    //   state.metadata.rowElements = newValue[1];
    //   newValue[0].commit('initializeData', newValue[0]);
    // }, //setRowElements
    // setSortKey: function (state, newValue) {
    //   var key = newValue[1]
    //   state.metadata.sortKey = key
    //   state.metadata.sortOrders[key] *= -1
    //   // console.log(state.metadata.sortOrders[key], key)
    //   newValue[0].commit('initializeData', newValue[0]);
    // }, //setSortKey
    // setPageCount: function (state, data) {
    //   var tempPageCount = Math.ceil(data / state.metadata.rowElements);
    //   state.metadata.pageCount = tempPageCount;
    // } //setPageCount
  },
  actions: {
    // async setPageCount(context) {
    //   var data = context.getters.getSpecialTableData
    //   context.commit('setPageCount', data.length)
    // }, //getPageCount
    // async setSortKey(context, newValue) {
    //   context.commit('setSortKey', [context, newValue])
    // }, //setSortKey
    // async setRowElements(context, newValue) {
    //   context.commit('setRowElements', [context, newValue])
    // }, //setRowElements
    // async setPage(context, newValue) {
    //   context.commit('setPage', [context, newValue])
    // }, //setPage
    // async selectRow(context, newValue) {
    //   context.commit('setSelectedRow', [context, newValue])
    // }, //gotoPrevPage
  },
  modules: {
    //do something
  }
});
