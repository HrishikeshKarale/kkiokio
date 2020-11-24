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
    const user = null;
    return {
      token,
      googleUserProfile,
      profile,
      GclientSecret,
      Gname,
      GClientID,
      gapi,
      user
    };
  }, //data
  methods: {
    init: function(response) {
      if (this.gapi && response.detail.gapi.ca == this.gapi.ca) {
        console.log("already signed In");
      } else {
        this.gapi = response.detail.gapi;
        // console.log("init", this.gapi, this.$router.currentRoute.value.meta);

        if (this.gapi.isSignediN) {
          this.googleUserProfile = this.gapi.getBasicProfile();
          this.user = {
            ID: this.googleUserProfile.getId(),
            "Full Name": this.googleUserProfile.getName(),
            "Given Name": this.googleUserProfile.getGivenName(),
            "Family Name": this.googleUserProfile.getFamilyName(),
            "Image URL": this.googleUserProfile.getImageUrl(),
            Email: this.googleUserProfile.getEmail(),
            Token: this.gapi.getAuthResponse().id_token
          };
        }
      }
    }, //init

    onGoogleSignIn: function(user) {
      const profile = user.getBasicProfile();
      this.profile = profile;
    }, //onGoogleSignIn

    onGoogleSignOut: function() {
      // eslint-disable-next-line no-undef
      this.gapi.disconnect();
      this.user = null;
      this.gapi = null;
    }, //onGoogleSignOut

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
    googleLoginScript.src =
      "https://apis.google.com/js/platform.js?onLoad=triggerGoogleLoaded";
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(googleLoginScript, s);
  },
  created() {
    //add eventlistner to catch the gapi after the platform.js loads
    window.addEventListener("google-loaded", this.init);

    //add meta and srcipt tag for google autnentication
    const googleLoginMeta = document.createElement("meta");
    googleLoginMeta.name = this.Gname;
    googleLoginMeta.content = this.GClientID;
    const s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(googleLoginMeta, s);
    if (this.gapi) {
      console.log(this.gapi);
    }
  } //mounted
};
