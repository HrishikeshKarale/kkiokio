<template>
  <div v-if="!close" class="alert" :class="type">
    <div>
      <span :class="[type, alertIcon]" />
      <div :class="type">
        <div class="message">
          <h5>
            <b>{{ type == "danger" ? code + " - " : "" }} {{ message }}</b>
          </h5>
          <p>
            {{ description }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="dismissible">
      <vue-button
        tag="closeAlertButton"
        icon="fas fa-times"
        :category="icon"
        :on-click-action="closeAlertBox.bind(this)"
      />
    </div>
  </div>
</template>

<script>
import vueButton from "@/components/UIComponents/Buttons";

export default {
  name: "Alert", //data

  components: {
    vueButton
  }, //components

  props: {
    type: {
      required: true,
      type: String,
      default: "info",
      validator: function(value) {
        if (["info", "success", "warning", "danger"].includes(value)) {
          return true;
        } else {
          alert(
            "Invalid prop value found in <vue-alert>.\nPossible values: [info, success, warning, danger]\nYou Entered: " +
              value
          );
        }
      }
    },

    code: {
      type: String,
      required: function() {
        if (this.type == "danger") {
          return true;
        }
        return false;
      },
      default: ""
    },

    message: {
      required: true,
      type: String,
      default: "default/no alert message specified"
    },

    description: {
      required: true,
      type: String,
      default: "default/no alert message specified"
    },

    dismissible: {
      required: false,
      type: Boolean,
      default: false
    },

    timeout: {
      required: false,
      type: Number,
      default: null
    }
  },

  data() {
    const alertIcon = "";
    const booleanTrue = true;
    const close = false;
    const buttonName = "closeAlertButton";
    return {
      alertIcon,
      close,
      buttonName,
      booleanTrue
    }; //return
  }, //methods

  created() {
    switch (this.type) {
      case "warning":
        this.alertIcon = "fas fa-exclamation-triangle";
        break;
      case "info":
        this.alertIcon = "fas fa-info-circle";
        break;
      case "success":
        this.alertIcon = "fas fa-check-circle";
        break;
      case "danger":
        this.alertIcon = "fas fa-exclamation-circle";
        break;
    }
  }, //created

  mounted() {
    const timeout = this.timeout;

    if (timeout && timeout != 0) {
      setTimeout(this.closeAlertBox, timeout * 1000);
    }
  }, //props

  methods: {
    closeAlertBox() {
      this.close = true;
    }, //closeAlertBox

    closeAlert: function() {
      document
        .getElementsByClassName("dangerAlert")
        .fadeTo(5000, 0)
        .slideUp(500, function() {
          this.remove();
        }); //slideUp
    } //closeAlert
  } //mounted
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../../Less/customVariables.less";

.alert {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: @borderRadiusMd;
  border: 1px solid transparent;
  width: fit-content;
  background-color: @textColor;
  border-left-width: 8px;
  padding: @spaceSm @spaceMd;

  &.danger {
    border-color: @dangerText;

    h5,
    span {
      color: @dangerText;
    }
  }
  &.warning {
    border-color: @warningText;

    h5,
    span {
      color: @warningText;
    }
  }
  &.success {
    border-color: @successText;

    h5,
    span {
      color: @successText;
    }
  }
  &.info {
    border-color: @infoText;

    h5,
    span {
      color: @infoText;
    }
  }

  & > div {
    display: flex;
    flex-direction: row;

    & > span {
      padding: @spaceSm*3+ @spaceXs @spaceMd @spaceSm @spaceSm;
    }

    & > div {
      display: flex;
      flex-direction: column;

      & > .alertMessage {
        & > p {
          font-size: 16px;
        }
      }

      & > .slot {
        display: flex;
        flex-direction: row-reverse;
      }
    }
  }
}
</style>
