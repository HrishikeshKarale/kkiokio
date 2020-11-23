import { cookie } from "@/typeScript/cookie";

export const toggle = {
  data() {
    const show = [];
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
      } else {
        //filter returns an array where id is not present
        this.show = show.filter(e => e !== id);
      }
    }, //toggle

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
    }, //theme

    activeTheme: function() {
      const themes = this.themes;
      // console.log(themes, this.selected);
      if (this.selected) {
        for (let i = 0; i < themes.length; i++) {
          if (themes[i].name == this.selected) {
            return themes[i];
          }
        }
      }
      return "fas fa-question-circle";
    }, //activeTheme

    isOpen: function(id) {
      return this.show.includes(id);
    } //isOpen
  },

  mounted() {
    if (cookie.methods.checkCookie("theme")) {
      this.selected = cookie.methods.getCookie("theme");
    } else {
      this.selected = "default";
      //set cookie to default for a week
      cookie.methods.setCookie("theme", "default", 7);
    }
    document.documentElement.setAttribute("theme", this.selected);
  }
};
