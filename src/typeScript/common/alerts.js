export const alerts = {
  data() {
    const dWarning = "";
    const dDanger = "";
    return {
      dWarning,
      dDanger
    };
  }, //data

  computed: {
    alertObject: function () {
      return { error: this.dDanger, warning: this.dWarning };
    }
  }, //computed

  methods: {
    //use by form elements sent via slot
    alerts: function (type, message) {
      // console.log(message);
      if (type == "warning") {
        this.dWarning = message;
      } else if (type == "error") {
        this.dDanger = message;
      } else {
        alert("error in input alert module");
      }
    } //alerts
  } //methifs
};
