export const cookie = {
  methods: {
    getCookie: function(name) {
      const cname = name + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
          return c.substring(cname.length, c.length);
        }
      }
      return "";
      // alternate implementation
      // return document.cookie.split(';').some(c => {
      //   return c.trim().startsWith(name + '=');
      // });
    },

    setCookie: function(name, value, exdays = 1, SameSite = "Secure") {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      const expires = "expires=" + d.toUTCString();
      document.cookie =
        name +
        "=" +
        value +
        ";" +
        expires +
        ";SameSite=" +
        SameSite +
        ";path=/";
    },

    deleteCookie: function( name, path, domain ) {
    if( this.getCookie( name ) ) {
      document.cookie = name + "=" +
        ((path) ? ";path="+path:"")+
        ((domain)?";domain="+domain:"") +
        ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
      }
    }, //deleteCookie

    checkCookie: function(name) {
      const value = this.getCookie(name);
      if (value == "") {
        return false;
      }
      return true;
      // else {
      //   username = prompt("Please enter your name:", "");
      //   if (username != "" && username != null) {
      //     setCookie(name, value, 365);
      //   }
      // }
    }
  }
};
