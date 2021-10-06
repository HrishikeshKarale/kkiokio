//mutations  are Synchronous (commit)
//actions can be synchronous and asynchrous (dispatch)
import { createStore } from "vuex";
const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    contentModule: require("./contentAndNav"),
    tableModule: require("./table"),
    authenticationModule: require("./authentication")
  }
});

export default store;
