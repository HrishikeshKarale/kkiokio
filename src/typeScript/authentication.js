//https://developers.google.com/identity/sign-in/web/build-button
//https://developer.twitter.com/en/docs/authentication/guides/log-in-with-twitter
//https://developers.facebook.com/apps/215219326652376/settings/basic/
//



// response
// {
//     status: 'connected',
//     authResponse: {
//         accessToken: '...',
//         expiresIn:'...',
//         signedRequest:'...',
//         userID:'...'
//     }
// }




import { cookie } from "@/typeScript/cookie";
import { onBeforeMount } from "vue";

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
      sqliteToken
    };
  }, //data
  mixins: [cookie], //mixins

  computed: {
    signedIn: function () {
      let signedIn = false;
      if (this.gapi) {
        signedIn = this.gapi && this.gapi.isSignedIn();
      }
      else if (localStorage.getItem("user")) {
        signedIn = localStorage.getItem("jwt")!= null;
      }
      return signedIn;
    }
  }, //computed

  methods: {

    logInWithFacebook: async function() {
      // await this.loadFacebookSDK(document, "script", "facebook-jssdk");
      await this.initFacebook();
      window.FB.login(function(response) {
        if (response.authResponse) {
          alert("You are logged in &amp; cookie set!");
          // Now you can redirect the user or do an AJAX request to
          // a PHP script that grabs the signed request from the cookie.
        } else {
          alert("User cancelled login or did not fully authorize.");
        }
      });
      return false;
    }, //logInWithFacebook

    initFacebook: async function() {
      window.fbAsyncInit = function() {
        window.FB.init({
        appId: '215219326652376',
        cookie: true,                     // Enable cookies to allow the server to access the session.
        xfbml: false,                     // Parse social plugins on this webpage.
        version: 'v9.0' 
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
    // //check if user is already loggein
    // FB.getLoginStatus(function(response) {
    //     statusChangeCallback(response);
    // }), //getLoginStatus

    //fb login
    // checkLoginState: function () {
      // FB.getLoginStatus(function(response) {
      //   statusChangeCallback(response);
      // });
    // }, //checkLoginState

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
          this.setCookie("gapi", JSON.stringify(this.gapi));
          localStorage.setItem("gapi", JSON.stringify(this.gapi));
          this.setCookie("user", JSON.stringify(this.user));
          localStorage.setItem("user", JSON.stringify(this.user));
        }
      }
    }, //init

    signOut: function () {
      if (this.gapi) {
        this.gapi.disconnect();
        this.user.isLoggedIn = false;  
      }
      this.deleteCookie("user");
      localStorage.removeItem("jwt");
      this.deleteCookie("user");
      localStorage.removeItem("user");
      location.reload(true);
    }, //signOut
  }, //methods

// <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>

  beforeCreate() {
    const fbId = "facebook-jssdk";
    const googleId = "google-oauth";
    const fbScript = document.getElementById(fbId);
    const googleScript = document.getElementById(googleId);
    
    
    // googleScript.remove();
    // fbScript.remove();
    
    // remove any scripts already loaded for google and fb
    if (!fbScript) {
      // load fb if not already present
      const fbLoginScript = document.createElement("script");
      fbLoginScript.type = "text/javascript";
      fbLoginScript.async = true;
      fbLoginScript.defer = true;
      fbLoginScript.id = fbId;
      fbLoginScript.src =
      "https://connect.facebook.net/en_US/sdk.js?onLoad=triggerFbLoaded";
        document.head.appendChild(fbLoginScript);
      console.log(document.getElementById(fbId));
    }
    if (!googleScript) {
      //load google if not already present
      const googleLoginScript = document.createElement("script");
      googleLoginScript.type = "text/javascript";
      googleLoginScript.async = true;
      googleLoginScript.defer = true;
      googleLoginScript.id = googleId;
      googleLoginScript.src =
      "https://apis.google.com/js/platform.js?onLoad=triggerGoogleLoaded";
      document.head.appendChild(googleLoginScript);
      console.log(document.getElementById(googleId));
    }
      
  }, //beforeCreate
  
  created() {
    //add eventlistner to catch the gapi after the platform.js loads
    window.addEventListener("google-loaded", this.init);
    window.addEventListener("fb-loaded", ()=>{console.log("fbloaded")});
    
    //load google meta for google autnentication if not already present
    if (!document.getElementById(this.Gname)) {
      const googleLoginMeta = document.createElement("meta");
      googleLoginMeta.name = this.Gname;
      googleLoginMeta.content = this.GClientID;
      googleLoginMeta.id = this.Gname;
      document.head.appendChild(googleLoginMeta);
    } 
  }, //created
        // onBeforeMount() {
          
        //   //fb login check
        //   this.logInWithFacebook();
        // }
};
