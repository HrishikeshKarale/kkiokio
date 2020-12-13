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
        errorContainer: dDanger,
        iconPadding: inputIcon,
        maskField: mask
      }"
    >
      <span v-if="inputIcon" :class="inputIcon" />
      <textarea
        v-if="!mask"
        v-model="dTextareaValue"
        :name="name"
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
      :error="dDanger"
      :char-limit-reached="
        dTextareaValue ? maxlength - dTextareaValue.length <= 0 : false
      "
      :maxlength="maxlength"
    />
  </div>
</template>

<script>
import inputResponse from "@/components/inputResponse.vue";

export default {
  name: "VueTextarea", //props

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

    //sets the name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: [String, null],
      default: "textareaInput"
    },

    //users can pass preset values for the input field
    value: {
      required: false,
      type: [String, null],
      default: null
    },

    //sets the format/pattern for acceptable values for the input field
    pattern: {
      required: false,
      type: [RegExp, String, null],
      default: null
    },

    //sets the placeholder attribute for the input field
    placeholder: {
      required: false,
      type: [String, null],
      default: "Click to enter"
    },

    //sets the maxlength attribute for the input field
    maxlength: {
      required: false,
      type: [Number, null],
      default: 256
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
    //sets the readonly attribute for the input field
    readonly: {
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
    },

    //checks if label options should appear on the same line or not
    inline: {
      required: false,
      type: [Boolean, null],
      default: false
    }
  }, //computed

  emits: ["alerts", "input"],

  data() {
    return {
      //stores errors thrown by the input fields
      dDanger: null,

      //stores errors thrown by the input fields
      dWarning: null,

      //stores textareabox values
      dTextareaValue: null
    }; //return
  }, //components

  computed: {
    //returns the difference between maxlength and textboxValue.
    //a negative value indicates that we have exceeded the allowed maximum for the textbox and
    lengthDelta: function() {
      const val = this.dTextareaValue;
      const maxLength = this.maxlength;

      if (maxLength && val) {
        return maxLength - val.length;
      }
      return null;
    } //lengthDelta
  }, //beforeMount

  watch: {
    //send warning messages back to parent component
    dWarning: function(newValue) {
      this.$emit("alerts", "warning", newValue);
    },

    //send error messages back to parent component
    dDanger: function(newValue) {
      this.$emit("alerts", "error", newValue);
    }
  }, //watch

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
        this.dDanger = alertMessage["error"];
      } else if (alertMessage["warning"]) {
        this.dWarning = alertMessage["warning"];
      } else if (alertMessage["success"]) {
        this.dSuccess = alertMessage["success"];
      } else if (alertMessage["info"]) {
        this.dInfo = alertMessage["info"];
      }
    }
  },

  methods: {
    //validate the textbox input and set alert messages if required.
    //it also emits/send the current textbox value to  parent component as v-model attribute value
    validate: function() {
      const object = {
        value: this.dTextareaValue,
        maxlength: this.maxLength,
        minlength: this.minLength,
        pattern: this.pattern
      };
      const response = this.validator(object);
      this.dDanger = response.error;
      this.dWarning = response.warning;
    } //validate
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
