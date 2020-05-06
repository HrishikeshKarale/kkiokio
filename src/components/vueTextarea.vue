<template>
  <div class="vueTextarea" :class="{ inline: inline }">
    <label v-if="label" :class="{ maskField: mask }">
      {{ label }}
      <abbr v-if="required" title="Required Field">*</abbr>
      <span v-else> - Optional field<abbr>*</abbr></span>
    </label>
    <div
      :class="{
        warningContainer: dWarning,
        errorContainer: ddanger,
        iconPadding: inputIcon,
        maskField: mask
      }"
    >
      <span v-if="inputIcon" :class="inputIcon" />
      <textarea
        v-if="!mask"
        :name="name"
        v-model="dTextareaValue"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :pattern="pattern"
        :autofocus="autofocus"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        @input="validate"
      />
    </div>
    <input-response
      :warning="dWarning"
      :error="ddanger"
      :charLimitReached="lengthDelta == 0"
      :maxlength="maxlength"
    />
  </div>
</template>

<script>
import inputResponse from "@/components/inputResponse.vue";

export default {
  name: "vueTextarea",

  data() {
    return {
      //stores errors thrown by the input fields
      ddanger: null,

      //stores errors thrown by the input fields
      dWarning: null,

      //stores textareabox values
      dTextareaValue: null
    }; //return
  }, //data

  props: {
    //sets heading/Label for the input field
    label: {
      required: false,
      type: String,
      default: null
    },

    //sets the name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: String,
      default: "textareaInput"
    },

    //users can pass preset values for the input field
    value: {
      required: false,
      type: String,
      default: null
    },

    //sets the format/pattern for acceptable values for the input field
    pattern: {
      required: false,
      type: [RegExp, String],
      default: null
    },

    //sets the placeholder attribute for the input field
    placeholder: {
      required: false,
      type: String,
      default: "Click to enter"
    },

    //sets the maxlength attribute for the input field
    maxlength: {
      required: false,
      type: Number,
      default: 256
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

    //sets the readonly attribute for the input field
    readonly: {
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

    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    inputIcon: {
      required: false,
      type: String,
      default: null
    },

    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: Boolean,
      default: false
    }
  }, //props

  components: {
    inputResponse
  }, //components

  computed: {
    //returns the difference between maxlength and textboxValue.
    //a negative value indicates that we have exceeded the allowed maximum for the textbox and
    lengthDelta: function() {
      const val = this.dTextValue;
      const maxLength = this.maxlength;

      if (maxLength && val) {
        return maxLength - val.length;
      }
      return null;
    } //lengthDelta
  }, //computed

  methods: {
    //validate the textbox input and set alert messages if required.
    //it also emits/send the current textbox value to  parent component as v-model attribute value
    validate: function() {
      //initialize warning and error messages to null to accomodate change in alert messages
      this.ddanger = null;
      this.dWarning = null;
      //loads current value stored from dTextValue(data) into val(temp) variable val for readability of code
      const val = this.dTextareaValue;
      const maxlength = this.maxLength;
      const pattern = new RegExp(this.pattern);

      //if value for val(temp) exists check for warning triggers
      if (val) {
        //if a patters for acceptable value exists, then trigger warning and set warning message if val (temp) does not follow the patter
        if (pattern && !val.match(pattern)) {
          this.dWarning = "Wrong format: Please follow the pattern " + pattern;
        }
        //if a pattern does not exist or value matches the pattern, check if maxlength exists and length of text entered is greater than maxlength
        //if true trigger an alert and set warning message
        else if (maxlength && maxlength < val.length) {
          this.dWarning =
            "Invalid Input: Allowed maxlength for input exceeded by -" +
            this.lengthDelta +
            " characters.";
        } else {
          //emit/send new values to parent component v-model attribute
          this.$emit("input", val);
        }
      }
      //if a value for val(temp) does not exists  and is required, thentrigger error and set error message
      else {
        if (this.required) {
          this.ddanger = "Required field.";
        }
      }
    } //validate
  }, //methods

  created() {
    //store values passed as props into dTextareaValue for future manipulation
    if (this.value) {
      this.dTextareaValue = this.value;
    }
  }, //created

  beforeMount() {
    const alertMessage = this.alertMessage;

    if (this.value) {
      this.validate();
    }

    if (alertMessage) {
      if (alertMessage["error"]) {
        this.ddanger = alertMessage["error"];
      } else if (alertMessage["warning"]) {
        this.dWarning = alertMessage["warning"];
      } else if (alertMessage["success"]) {
        this.dSuccess = alertMessage["success"];
      } else if (alertMessage["info"]) {
        this.dInfo = alertMessage["info"];
      }
    }
  }, //beforeMount

  watch: {
    //send warning messages back to parent component
    dWarning: function(newValue) {
      this.$emit("alerts", "warning", newValue);
    },

    //send error messages back to parent component
    ddanger: function(newValue) {
      this.$emit("alerts", "error", newValue);
    }
  } //watch
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../Less/customMixins.less";

.vueTextarea {
  min-width: 160px;

  .inputcss();
}
</style>
