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
