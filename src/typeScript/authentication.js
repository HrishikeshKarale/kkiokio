//https://developers.google.com/identity/sign-in/web/build-button

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
  mixins: [cookie], //mixins
  methods: {
    init: function(response) {
      // if (this.gapi && response.detail.gapi.ca == this.gapi.ca) {
      //   console.log("already signed In");
      // } else {
      //   this.gapi = response.detail.gapi;
      //   // console.log("init", this.gapi, this.$router.currentRoute.value.meta);

      //   if (this.gapi.isSignedIn()) {
      //     this.googleUserProfile = this.gapi.getBasicProfile();
      //     this.user = {
      //       ID: this.googleUserProfile.getId(),
      //       "Full Name": this.googleUserProfile.getName(),
      //       "Given Name": this.googleUserProfile.getGivenName(),
      //       "Family Name": this.googleUserProfile.getFamilyName(),
      //       "Image URL": this.googleUserProfile.getImageUrl(),
      //       Email: this.googleUserProfile.getEmail(),
      //       Token: this.gapi.getAuthResponse().id_token
      //     };
      //   }
      // }
      if (response) {
        this.gapi = response.detail.gapi;
        // console.log("init", this.gapi, "\n\n", (this.gapi.getBasicProfile()).getName(), "\n\n", this.$router.currentRoute.value.meta);

        if (this.gapi.isSignedIn()) {
          this.googleUserProfile = this.gapi.getBasicProfile();
          this.user = {
            ID: this.googleUserProfile.getId(),
            "Full Name": this.googleUserProfile.getName(),
            "Given Name": this.googleUserProfile.getGivenName(),
            "Family Name": this.googleUserProfile.getFamilyName(),
            "Image URL": this.googleUserProfile.getImageUrl(),
            Email: this.googleUserProfile.getEmail(),
            Token: this.gapi.getAuthResponse().id_token,
            isLoggedIn: this.gapi.isSignedIn()
          };
          this.setCookie("gapi", JSON.stringify(this.gapi));
          this.setCookie("user", JSON.stringify(this.user));
        }
      }
    }, //init

    onGoogleSignOut: function() {
      // eslint-disable-next-line no-undef
      const diss = this.gapi.disconnect();
      console.log(diss);
      this.user.isLoggedIn = false;
      this.setCookie("user", JSON.stringify(this.user));
      location.reload(true);
    }, //onGoogleSignOut

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
  } //mounted
};
