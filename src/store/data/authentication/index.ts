// vue
import { inject } from "vue";

const module = {
  namespaced: true,
  state: {
    server: "http://localhost:5001/portfolio-website-689b4/us-central1/router",
    config: {
      "Content-Type": "text/plain",
      "Access-Control-Allow-Origin": "*"
    },
    loggedIn: false,
    token: null,
    user: {},
    // set up vue injections
    EMITTER: inject("$emitter"),
    AXIOS: inject("$axios")
  },
  mutations: {
    //do something
    handleSignUp: (state, payload) => {
      //do something
    }
  },
  actions: {
    //do something
    async handleSignUp({ commit, state }, payload) {
      const url =
        state.server + "/api/authentication/register/" + payload.isAdmin;
      state.AXIOS
        .post(
          url,
          {
            name: payload.name,
            email: payload.email,
            username: payload.username,
            password: payload.password,
            isAdmin: payload.isAdmin
          },
          state.config
        )
        .then(response => {
          state.user = response.data.user;
          state.token = "response.data.user";
          state.loggedIn = true;
        })
        .catch(error => {
          state.user = "";
          state.token = "";
          state.loggedIn = true;
          state.EMITTER.emit("alert", {
            type: "danger",
            message: "SignUp Request Failed",
            description: "Please try again.",
            dismissable: true,
            code: "101",
            timeout: 4
          });
          // console.error(error);
        });
      //POST request
    }
  },
  getters: {
    //do something
    loggedIn(state) {
      return state.loggedIn.loggedIn;
    }
  }
};

export default module;
