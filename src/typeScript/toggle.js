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
    const selected = themes[1].name;
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

    isOpen: function(id) {
      return this.show.includes(id);
    } //isOpen
  },

  watch: {
    selected: function (newValue, oldValue) {
      if (newValue != oldValue) {
        cookie.methods.setCookie("theme", newValue, 100);
        this.trans();
        document.documentElement.setAttribute("theme", newValue);
      }
    }
  }, //watch

  created() {
    if (cookie.methods.checkCookie("theme")) {
      this.selected = cookie.methods.getCookie("theme");
    } else {
      this.selected = this.themes[1].name;
      cookie.methods.setCookie("theme", this.selected, 100);
    }
    document.documentElement.setAttribute("theme", this.selected);
  }
};
