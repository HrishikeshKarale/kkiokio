export const alerts = {
  data() {
    const warning = "";
    const danger = "";
    const success = "";
    const info = "";
    return {
      warning,
      danger,
      success,
      info
    };
  }, //data

  computed: {
    alertObject: function () {
      return {
        error: this.danger,
        warning: this.warning,
        success: this.success,
        info: this.info
      };
    }
  }, //computed

  methods: {
    //use by form elements sent via slot
    alerts: function (type, message) {
      // console.log(message);
      if (type == "warning") {
        this.warning = message;
      } else if (type == "error") {
        this.danger = message;
      } else if (type == "success") {
        this.success = success;
      } else if (type == "info") {
        this.info = info;
      } else {
        alert("error in input alert module");
      }
    } //alerts
  } //methifs
};
