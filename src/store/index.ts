import { createStore } from "vuex";
import dataModule from "./contentAndNav";
import authenticationModule from "./authentication";
import tableModule from "./table";
const store = createStore({
  modules: {
    data: dataModule,
    table: tableModule,
    authentication: authenticationModule
  }
});

export default store;
