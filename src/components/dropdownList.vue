<template>
  <div class="dropdownList" :class="{ inline: inline }">
    <label v-if="label" :class="{ maskField: mask }" :for="name">
      {{ label }}
      <abbr v-if="required" title="Required Field">*</abbr>
      <span v-else> - Optional field<abbr>*</abbr></span>
    </label>
    <div
      :class="{
        warningContainer: warning,
        errorContainer: danger,
        iconPadding: inputIcon,
        maskField: mask
      }"
    >
      <span v-if="inputIcon" :class="inputIcon" />
      <select
        v-if="!mask"
        :id="name"
        v-model="selectedOption"
        :autofocus="autofocus"
        :disabled="disabled"
        :required="required"
        :multiple="multiple"
        :size="size"
        @change="validate"
      >
        <!-- <option
                    value= ''
                    :selected= '!selectedOption'
                    disabled= 'true'
                    :hidden= 'options.includes(selectedOption) && required'
                >
                    pick an option
               </option> -->
        <option v-for="(option, index) in options" :key="index" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <input-response :error="danger" />
  </div>
</template>

<script>
import inputResponse from "@/components/alert/inputResponse";

export default {
  name: "DropdownList", //props

  components: {
    inputResponse
  }, //data

  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: [String, null],
      default: null
    },

    //sets name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: [String, null],
      default: "dropdownInput"
    },

    //users can pass preset values for the input field (v-model)
    value: {
      required: false,
      type: [String, Number, Array, null],
      default: function(props) {
        if (props.multiple) {
          return [];
        }
        return null;
      }
    },

    //Array of options for user to select .
    options: {
      required: true,
      type: Array
    },

    //no of options  to display at a time.
    size: {
      required: false,
      type: [Number, null],
      default: null
    },

    //sets the multiple attribute for the input field to accept multiple values
    multiple: {
      required: false,
      type: [Boolean, null],
      default: false
    },

    //sets the manual alerts
    alertMessage: {
      required: false,
      type: [Object, null],
      default: null
    },

    //sets the required attribute for the input field
    required: {
      required: false,
      type: [Boolean, null],
      default: false
    },

    //sets the disabled attribute for the input field
    disabled: {
      required: false,
      type: [Boolean, null],
      default: false
    },

    //sets the autofocus attribute for the input field
    autofocus: {
      required: false,
      type: [Boolean, null],
      default: false
    },

    //sets the autocomplete attribute for the input field
    autocomplete: {
      required: false,
      type: [Boolean, null],
      default: true
    },

    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: [Boolean, null],
      default: false
    },

    //reserves space and created a mask if set to true
    mask: {
      required: false,
      type: [Boolean, null],
      default: false
    },

    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    inputIcon: {
      required: false,
      type: [String, null],
      default: null
    }
  },

  emits: ["alerts", "value"],

  data() {
    return {
      //stores errors thrown by the input fields
      danger: null,

      warning: null,

      booleanTrue: true,

      //stores dropdown values
      selectedOption: null
    }; //return
  }, //beforeMount

  watch: {
    //send error messages back to parent component
    danger: function(newValue) {
      this.$emit("alerts", "error", newValue);
    }
  }, //methods

  created() {
    //store value of prop in temp variable for code readability
    const val = this.value;
    const options = this.options;
    const multiple = this.multiple;

    //if val is a singlevalue, check if it is na acceptable input
    if (!multiple && (typeof val == "string" || typeof val == "number")) {
      //if value is an acceptable input store it in selectedOption for future manipulation
      if (options && options.includes(val)) {
        this.selectedOption = val;
      }
      //if not trigger alert and set error message
      else {
        this.error =
          "Invalid Input: The preset value " +
          val +
          " is not included in the options for the dropdown.";
      }
    }
    //if val is an array check if each value towards acceptable values as input
    else if (multiple && Array.isArray(val)) {
      const tempVal = [];
      const alertVal = [];

      //loop through each value to check for validity of input value
      for (const v in val) {
        //if value is an acceptable input store it intempVal for future manipulation
        if (options && options.includes(v)) {
          tempVal.push(v);
        }
        //if not save it in a temp errorval variable for further use to trigger alert
        else {
          alertVal.push(v);
        }
      }

      //save acceptable values back to selectedOption for future manipulation
      this.selectedOption = tempVal;

      //if errorVal exists trigger an alert and set warning message
      if (alertVal) {
        this.danger =
          "Invalid Input: The preset value(s) " +
          alertVal +
          " is/are not included in the options for the dropdown.";
      }
    } else if (val) {
      this.danger =
        "Invalid Input: The preset value(s) " + val + " are not valid";
    }
  }, //created

  beforeMount() {
    const alertMessage = this.alertMessage;

    if (this.value) {
      this.validate();
    }

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
  }, //components

  methods: {
    //validate the textbox input and set alert messages if required.
    //it also emits/send the current textbox value to  parent component as v-model attribute value
    validate: function() {
      //initialize warning and error messages to null to accomodate change in alert messages
      this.danger = null;
      //loads current value stored from selectedOption(data) into val(temp) variable val for readability of code
      const val = this.selectedOption;

      //if value for val(temp) does not exists check if value is required
      //if value is required then trigger alert and set error message
      if (val) {
        //emit/send new values to parent component v-model attribute
        this.$emit("value", val);
      } else {
        if (this.required) {
          this.danger = "Required field.";
        }
      }
    } //validate
  } //WATCH
}; //default
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";

.dropdownList {
  min-width: 160px;

  .inputcss();
}
</style>
