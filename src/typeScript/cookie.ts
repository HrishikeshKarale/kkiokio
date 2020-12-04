export const cookie = {
  methods: {
    getCookie: function(name : string) : string {
      const cname : string = name + "=";
      const decodedCookie : string = decodeURIComponent(document.cookie);
      const ca: string[] = decodedCookie.split(";");
      //alternate imlementation for returning value of requested cookie.
      // ca.some(c => {
      //   const str : string = c.trim();
      //   if (str.startsWith(cname)) {
      //     return c.substring(cname.length, c.length)
      //   }
      // });
      for (let i = 0; i < ca.length; i++) {
        let c: string = ca[i];
        // remove spaces at the begining
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
          return c.substring(cname.length, c.length);
        }
      }
      return "";
    },

    setCookie: function (name : string, value : string, exdays = 1, SameSite = "Secure") : void {
      const d : Date = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      const expires : string = "expires=" + d.toUTCString();
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

    deleteCookie: function (name : string, path : string, domain : string) : boolean {
      if (this.checkCookie( name ) ) {
        document.cookie =
          name +
          "=" +
        ((path) ? ";path="+path:"") +
        ((domain)?";domain="+domain:"") +
          ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
        return true;
      }
      return false;
    }, //deleteCookie

    checkCookie: function(name : string) : boolean {
      const value : string = this.getCookie(name);
      if (value == "") {
        return false;
      }
      return true;

      // alternate implementation for if a cookie exists
      // return document.cookie.split(';').some(c => {
      //   return c.trim().startsWith(name + '=');
      // });
    }
  }
};
