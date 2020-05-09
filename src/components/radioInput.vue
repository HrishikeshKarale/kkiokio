<template>
  <div class="radioInput" :class="{ inline: inline }">
    <label v-if="label" :class="{ maskField: mask }">
      {{ label }}
      <abbr v-if="required" title="Required Field">*</abbr>
      <span v-else> - Optional field<abbr>*</abbr></span>
      <input
        :name="name"
        type="hidden"
        :value="checkedValue"
        :required="required"
      />
      <vue-button
        v-if="checkedValue && !required"
        id="clearSelection"
        :buttonType="buttonType"
        :buttonName="buttonName"
        :buttonText="buttonText"
        :buttonIcon="buttonIcon"
        :buttonStyle="buttonStyle[8]"
        :onClickAction="onClickAction"
      />
    </label>
    <div
      :class="{
        box: box,
        warningContainer: warning,
        errorContainer: danger,
        maskField: mask
      }"
    >
      <template v-if="!mask">
        <label
          v-for="(option, index) in options"
          :key="index + '-' + option"
          :class="{
            errorLabel: danger,
            checked: option == value
          }"
          :style="{
            'color: #aaaaaa; cursor: not-allowed;': disabled
          }"
        >
          <input
            type="radio"
            :name="name"
            :value="option"
            :disabled="disabled"
            v-model="checkedValue"
            :autofocus="index == 0 ? autofocus : false"
          />
          {{ option }}
        </label>
      </template>
    </div>
    <input-response :error="danger" />
  </div>
</template>

<script>
import inputResponse from "@/components/inputResponse";
import vueButton from "@/components/vueButton";

export default {
  name: "radioInput",

  data() {
    const checkedValue = null;
    const buttonType = "button";
    const buttonName = "clearRadioSelection";
    const buttonText = "Clear";
    const buttonIcon = "fas fa-times";
    const buttonStyle = this.$store.state.buttonStyle;
    const booleanTrue = true;
    const onClickAction = this.clearSelection;
    const danger = null;
    const warning = null;
    const success = null;
    const info = null;
    // const cValue = null;
    return {
      checkedValue,
      buttonType,
      buttonName,
      buttonText,
      buttonIcon,
      buttonStyle,
      booleanTrue,
      onClickAction,
      // cValue,
      //stores errors thrown by the input fields
      danger,
      warning,
      success,
      info
    }; //return
  }, //data

  methods: {
    clearSelection: function() {
      const table = document.getElementsByClassName("checked");

      table.item(0).childNodes[0].checked = false;
      this.checkedValue = null;
      this.$emit("select", this.checkedValue);
      // let status = cell.getAttribute('data-status');
      // if (status === 'open') {
      //     // Grab the data
      // }
      // const parent= document.getElementById('clearSelection').parentNode
      // console.log('hi: ', parent.getElementsByTagName('input').checked)
      // parent.getElementByTagName("input").checked=  false;
    }, //clearSelection

    check: function(checkedValue) {
    //   console.log("checked: ", checkedValue);
      this.$emit("select", checkedValue);
      const table = document.getElementsByClassName("checked");
      table.item(0).childNodes[0].checked = true;
    } //checked
  }, //methods

  props: {
    //sets heading for the checkboxes category
    //in case of single/no-option checkbox, label is used as checkbox text
    label: {
      required: false,
      type: String,
      default: null
    },

    //sets the name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: String,
      default: "radioInput"
    },

    //Array of options/labels in case of multiple checkboxes.
    options: {
      required: false,
      type: Array,
      default: null
    },

    //users can pass preset values for the input field
    value: {
      required: false,
      type: [String, Array, Number, Boolean],
      default: function() {
        if (this.options) {
          return null;
        }
        return false;
      }
    },

    //sets the manual alerts
    alertMessage: {
      required: false,
      type: Object
    },

    //sets the required attribute for the input field
    required: {
      required: false,
      type: Boolean,
      default: false
    },

    //sets the disabled attribute for the input field
    disabled: {
      required: false,
      type: Boolean,
      default: false
    },

    //sets the autofocus attribute for the input field
    autofocus: {
      required: false,
      type: Boolean,
      default: false
    },

    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    },

    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: Boolean,
      default: false
    },

    //checks if label options should appear on the same line or as buttons
    box: {
      required: false,
      type: Boolean,
      default: false
    }
  }, //props

  beforeMount() {
    //handle pre existing alert messages
    const alertMessage = this.alertMessage;
    if (alertMessage) {
      if (alertMessage["error"]) {
        this.danger = alertMessage["error"];
      } else if (alertMessage["warning"]) {
        this.warning = alertMessage["warning"];
      } else if (alertMessage["success"]) {
        this.success = alertMessage["success"];
      } else if (alertMessage["info"]) {
        this.info = alertMessage["info"];
      }
    }
  }, //beforeMount

  watch: {
    checkedValue: function(newValue, oldValue) {
      if (newValue != oldValue) {
        this.check(newValue);
      }
    } //checkedValue
  }, //watch

  components: {
    inputResponse,
    vueButton
  } //components
}; //default
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";

.radioInput {
  .checkboxCss();

  .box {
    padding: 4px 8px;
    margin-left: 8px;
    width: fit-content;
    background-color: @backgroundColor;
    border-radius: @borderRadiusMd;

    &.checked {
      background-color: @secondaryColor;
      color: @backgroundColor;

      & > label {
        font-weight: bold;
      }
    }

    & > label {
      & > input {
        display: none;
      }
    }
  }
}
</style>
