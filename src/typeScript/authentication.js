//https://developers.google.com/identity/sign-in/web/build-button
//https://developer.twitter.com/en/docs/authentication/guides/log-in-with-twitter
//https://developers.facebook.com/apps/215219326652376/settings/basic/

import { cookie } from "@/typeScript/cookie";

export const authentication = {
  data() {
    const token = null;
    const profile = false;
    const googleUserProfile = null;
    const GclientSecret = "mpYEEEaJX4lCHdESYhKVUoJ1";
    const Gname = "google-signin-client_id";
    const GClientID =
      "94699127686-kq6vksueuk2rne078alt4pv2951hvq13.apps.googleusercontent.com";
    const gapi = null;
    const user = null;
    const sqliteUser = null;
    const sqliteToken = null;
    const fbUser = null;
    const fbToken = null;
    return {
      token,
      googleUserProfile,
      profile,
      GclientSecret,
      Gname,
      GClientID,
      gapi,
      user,
      sqliteUser,
      sqliteToken,
      fbUser,
      fbToken
    };
  }, //data
  mixins: [cookie], //mixins

  methods: {

    fbLogin: async function () {
      if(window.FB) {
        const abc = this.logInWithFacebook()
        // console.log(localStorage.getItem("fbUser"));
          .then((authResponse) => {
            console.log("response", authResponse, typeof authResponse);
            if(authResponse) {
              this.setCookie("fbUser", JSON.stringify(authResponse));
              localStorage.setItem("fbUser", JSON.stringify(authResponse));
              this.setCookie("fbToken", authResponse.accessToken);
              localStorage.setItem("fbToken", authResponse.accessToken);
            }
          })
          // .catch(error => {
          //   console.error("error", error);
          // });
      }
    }, //fbLogin

    async logInWithFacebook() {
      window.FB.login(response => {
        console.log("resp", response.authResponse, response.status);
        if (response.status == "connected") {
              localStorage.setItem("fbUser", JSON.stringify(response.authResponse));
              localStorage.setItem("fbToken", response.authResponse.accessToken);
          // return response.authResponse;
          
          // alert("You are logged in &amp; cookie set!");
          // Now you can redirect the user or do an AJAX request to
          // a PHP script that grabs the signed request from the cookie.
        }
        else {
          throw new Error(`response object status: ${response.status}`);
          // alert("User cancelled login or did not fully authorize.");
        }
      });
    }, //logInWithFacebook

    initFacebook: async function () {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: "215219326652376", //You will need to change this
          xfbml: false, // Parse social plugins on this webpage.
          cookie: true, // This is important, it's not enabled by default
          version: "v9.0"
        });
      };
    }, //initFacebook

    loadFacebookSDK: async function(d, s, id) {
      let js = null;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }, //loadFacebookSDK

    //initialize user data when signedIn via Google
    init: function(response) {
      if (response) {
        this.gapi = response.detail.gapi;

        //if signedIn
        if (this.gapi.isSignedIn()) {
          this.googleUserProfile = this.gapi.getBasicProfile();
          this.user = {
            ID: this.googleUserProfile.getId(),
            name: this.googleUserProfile.getName(),
            image: this.googleUserProfile.getImageUrl(),
            email: this.googleUserProfile.getEmail(),
            token: this.gapi.getAuthResponse().id_token,
            isLoggedIn: this.gapi.isSignedIn(),
            isAdmin: 0
          };
          // this.setCookie("gapi", JSON.stringify(this.gapi));
          // localStorage.setItem("gapi", JSON.stringify(this.gapi));
          this.setCookie("gUser", JSON.stringify(this.user));
          localStorage.setItem("gUser", JSON.stringify(this.user));
          this.setCookie("gToken", JSON.stringify(this.user.token));
          localStorage.setItem("gToken", JSON.stringify(this.user.token));
        }
      }
    }, //init

    signOut: function() {
      if (this.gapi) {
        this.gapi.disconnect();
        this.user.isLoggedIn = false;
      }
      else if (window.FB.getUserID()) {
        window.FB.logout();
      }
      localStorage.removeItem("user");
      localStorage.removeItem("gUser");
      localStorage.removeItem("fbUser");
      this.deleteCookie("user");
      this.deleteCookie("gUser");
      this.deleteCookie("fbUser");
      localStorage.removeItem("jwt");
      localStorage.removeItem("fbToken");
      localStorage.removeItem("gToken");
      this.deleteCookie("jwt");
      this.deleteCookie("gToken");
      this.deleteCookie("fbToken");
      location.reload(true);
    } //signOut
  }, //methods

  computed: {
    signedIn: function() {
      //websiteLogin
      if (localStorage.getItem("user")) {
        return localStorage.getItem("jwt")? true: false
      }
      //loggedIn via google
      else if (localStorage.getItem("gUser")) {
        return localStorage.getItem("gToken")? true: false;
      }
      //logged in via fb
      else if (localStorage.getItem("fbUser")) {
        return localStorage.getItem("fbToken")? true: false;
      }
      return false;
    }
  }, //computed

  watch: {
    signedIn: function(newValue, oldValue) {
      const route = this.$router.currentRoute.value.query.returnUrl;
      console.log("signedIn: in route ", oldValue, "=>", newValue, route);
      if (newValue != oldValue) {
        if (newValue) {
          if (route) {
            this.$router.push({
              name: route
            });
          } else {
            this.$router.push({
              name: "home"
            });
          }
        }
      } else {
        console.log(newValue);
      }
    }
  }, //watch

  beforeCreate() {
    const googleId = "google-oauth";
    const googleScript = document.getElementById(googleId);
    if (googleScript) {
      googleScript.remove();
    }
    //load google if not already present
    const googleLoginScript = document.createElement("script");
    googleLoginScript.type = "text/javascript";
    googleLoginScript.async = true;
    googleLoginScript.defer = true;
    googleLoginScript.id = googleId;
    googleLoginScript.src =
      "https://apis.google.com/js/platform.js?onLoad=triggerGoogleLoaded";
    document.head.appendChild(googleLoginScript);
  }, //beforeCreate

  async created() {
      await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
    //add eventlistner to catch the gapi after the platform.js loads
    window.addEventListener("google-loaded", this.init);

    //load google meta for google autnentication if not already present
    if (!document.getElementById(this.Gname)) {
      const googleLoginMeta = document.createElement("meta");
      googleLoginMeta.name = this.Gname;
      googleLoginMeta.content = this.GClientID;
      googleLoginMeta.id = this.Gname;
      document.head.appendChild(googleLoginMeta);
    }
  }, //created
};
