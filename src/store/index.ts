//mutations  are Synchronous (commit)
//actions can be synchronous and asynchrous (dispatch)
import { createStore } from "vuex";
import contentModule from "./contentAndNav";
import authenticationModule from "./authentication";
import tableModule from "./table";
const store = createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    contentModule,
    tableModule,
    authenticationModule
  }
});

export default store;
