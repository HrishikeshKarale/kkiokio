import axios from "axios";
import mitt from "mitt";
const emitter = mitt();

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
    user: {}
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
      axios
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
          emitter.emit("alert", {
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
      return state.loggedIn;
    }
  }
};

export default module;
