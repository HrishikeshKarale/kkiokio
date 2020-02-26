export const toggle = {
  data() {
    const show = false;

    return {
      show: show
    };
  },

  methods: {
    toggle: function() {
      this.show = !this.show;
    }
  }
  // let show= flase;

  // const toggle= () => {
  //     return show= !show
  // }

  // export { show, toggle}
};
