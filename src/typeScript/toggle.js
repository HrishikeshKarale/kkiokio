import { cookie } from "@/typeScript/cookie";

export const toggle = {
  data() {
    const show = new Array([]);
    const themes = [
      {
        name: "default",
        icon: "fas fa-sun"
      },
      {
        name: "darkMode",
        icon: "fas fa-moon"
      }
    ];
    const selected = null;
    return {
      show,
      themes,
      selected
    };
  },

  methods: {
    toggle: function(id) {
      const show = this.show;
      if (!show.includes(id)) {
        this.show = [...show, id];
        return true;
      } else {
        this.show = show.filter(e => e !== id);
        return false;
      }
    },

    trans: function() {
      document.documentElement.classList.add("transition");
      window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
      }, 300);
    }, //trans

    theme: function() {
      const theme = this.selected;
      // this.cookie = new cookie();
      if (theme != "darkMode") {
        cookie.methods.setCookie("theme", "darkMode", 100);
        this.trans();
        document.documentElement.setAttribute("theme", "darkMode");
        this.selected = "darkMode";
      } else {
        cookie.methods.setCookie("theme", "default", 100);
        this.trans();
        document.documentElement.setAttribute("theme", "default");
        this.selected = "default";
      }
    }
  },

  mounted() {
    if (cookie.methods.checkCookie("theme")) {
      const theme = cookie.methods.getCookie("theme");

      if (theme) {
        this.selected = theme;
        document.documentElement.setAttribute("theme", theme);
      } else {
        cookie.methods.setCookie("theme", "default", 100);
        document.documentElement.setAttribute("theme", "default");
      }
    }
  }
};
