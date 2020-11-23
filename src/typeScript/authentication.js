//https://developers.google.com/identity/sign-in/web/build-button

// import { cookie } from "@/typeScript/cookie";

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
    return {
      token,
      googleUserProfile,
      profile,
      GclientSecret,
      Gname,
      GClientID,
      gapi
    };
  }, //data
  methods: {
    // init: function () {
    //   // eslint-disable-next-line no-undef
    //   gapi.load("auth2", function() {
    //     /* Ready. Make a call to gapi.auth2.init or some other API */
    //   });
    // }, //init
    onGoogleSignIn: function(user) {
      console.log("profile", user.detail.gapi);
      const profile = user.getBasicProfile();
      this.profile = profile;
    }, //onGoogleSignIn
    onGoogleSignOut: function() {
      // eslint-disable-next-line no-undef
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(() => {
        location.reload(true);
      });
    }, //onGoogleSignOut

    initSigninV2: function() {
      // eslint-disable-next-line no-undef
      gapi.auth2
        .init({
          // eslint-disable-next-line @typescript-eslint/camelcase
          client_id: this.GClientID
        })
        .then(function(authInstance) {
          // now auth2 is fully initialized
          console.log("authenticated", authInstance);
        });
    }, //initSigninV2

    // onSuccessGoogle: function(googleUser) {
    //   console.log("Logged in as: " + googleUser.getBasicProfile().getName());
    // }, //onSuccessGoogle

    // onFailureGoogle: function(error) {
    //   console.log(error);
    // }, //onFailureGoogle

    // renderButtonGoogle: function() {
    //   gapi.signin2.render("my-signin2", {
    //     scope: "profile email",
    //     width: 240,
    //     height: 50,
    //     longtitle: true,
    //     theme: "dark",
    //     onsuccess: this.onSuccessGoogle,
    //     onfailure: this.onFailureGoogle
    //   });
    // }, //renderButtonGoogle

    // onGoogleSignIn: function(googleUser) {
    //   // Useful data for your client-side scripts:
    //   this.googleUserProfile = googleUser.getBasicProfile();
    //   console.log("ID: " + this.googleUserProfile.getId()); // Don't send this directly to your server!
    //   console.log("Full Name: " + this.googleUserProfile.getName());
    //   console.log("Given Name: " + this.googleUserProfile.getGivenName());
    //   console.log("Family Name: " + this.googleUserProfile.getFamilyName());
    //   console.log("Image URL: " + this.googleUserProfile.getImageUrl());
    //   console.log("Email: " + this.googleUserProfile.getEmail());

    //   // The ID token you need to pass to your backend:
    //   this.idToken = googleUser.getAuthResponse().id_token;
    //   // console.log("ID Token: " + idToken);
    // }, //onGoogleSignIn

    // onGoogleSignOut: function() {
    //   // const auth2 = gapi.auth2.getAuthInstance();
    //   const auth2 = this.googleUserProfile.getAuthInstance();
    //   auth2.signOut().then(function() {
    //     console.log("User signed out.");
    //   });
    // }, //onGoogleSignOut

    login: function() {
      //do something here
    }, //login

    signUp: function() {
      //do something here
    } //signUp
  }, //methods

  beforeCreate() {
    const googleLoginScript = document.createElement("script");
    googleLoginScript.type = "text/javascript";
    googleLoginScript.async = true;
    googleLoginScript.defer = true;
    googleLoginScript.src = "https://apis.google.com/js/platform.js?onLoad=triggerGoogleLoaded";
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(googleLoginScript, s);
  },
  created() {
    window.addEventListener("google-loaded", this.onGoogleSignIn);
    //add meta and srcipt tag for google autnentication
    const googleLoginMeta = document.createElement("meta");
    googleLoginMeta.name = this.Gname;
    googleLoginMeta.content = this.GClientID;
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(googleLoginMeta, s);
    setTimeout(function() {
      // eslint-disable-next-line no-undef
      this.gapi = gapi;
      // eslint-disable-next-line no-undef
      // gapi.signin2.render("g - signin2", {
      //   onsuccess: this.onGoogleSignIn
      // });
    }, 100);
  } //mounted
};
