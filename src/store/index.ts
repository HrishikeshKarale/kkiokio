//mutations  are Synchronous (commit)
//actions can be synchronous and asynchrous (dispatch)
import contentModule from "./contentAndNav/"
import tableModule from "./table/"
import dataModule from "./data"
import { createStore } from "vuex";
const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    contentModule,
    tableModule,
    dataModule
    // contentModule: require("./contentAndNav"),
    // tableModule: require("./table"),
    // dataModule: require("./data")
  }
});

export default store;
