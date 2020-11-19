//https://developers.google.com/identity/sign-in/web/build-button
export const authentication = {
  data() {
    const token = null;
    const profile = false;
    const googleUserProfile = null;
    return {
      token,
      googleUserProfile,
      profile
    };
  }, //data
  methods: {
    onGoogleSignIn: function(user) {
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
    renderGoogleLoginButton: function() {
      // eslint-disable-next-line no-undef
      gapi.signin2.render("google-signin-btn", {
        onsuccess: this.onSignIn
      });
    }, //renderGoogleLoginButton

    // initSigninV2: function() {
    //   gapi.auth2
    //     .init({
    //       client_id:
    //         "758507759739-qsqjadv7gr0sunj6mlkvuh8lc2h74hqn.apps.googleusercontent.com"
    //     })
    //     .then(function(authInstance) {
    //       // now auth2 is fully initialized
    //     });
    // }, //initSigninV2

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
  mounted() {
    window.addEventListener("google-loaded", this.renderGoogleLoginButton);
    // const gapiPromise = (function() {
    //   const deferred = $.Deferred();
    //   window.onLoadCallback = function() {
    //     deferred.resolve(gapi);
    //   };
    //   return deferred.promise();
    // })();
    // gapi.load("auth2", initSigninV2);
  } //mounted
};
