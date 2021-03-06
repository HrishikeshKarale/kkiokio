//http://jsfiddle.net/8tka5h09/
<template>
  <div class="phoneInput" :class="{ inline: inline }">
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
      <input
        v-if="!mask"
        v-model="dTextValue"
        type="text"
        :name="name"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :minlength="minlength"
        :pattern="pattern"
        :autofocus="autofocus"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        @input="phoneMask(mphone)"
        @blur="validate"
      />
    </div>
    <input-response
      :warning="dWarning"
      :error="dDanger"
      :char-limit-reached="
        dTextValue ? maxlength - dTextValue.length <= 0 : false
      "
      :maxlength="maxlength"
    />
  </div>
</template>

<script>
import inputResponse from "@/components/alert/inputResponse.vue";
import { validator } from "@/typeScript/validator";

export default {
  name: "PhoneInput", //props

  components: {
    inputResponse
  }, //data

  mixins: [validator], //mixins

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
      default: "phoneInput"
    },

    //users can pass preset values for the input field
    value: {
      required: false,
      type: [String, null],
      default: null
    },

    //sets the format/pattern for acceptable values for the input field
    //^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$
    //https://learning.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s03.html
    // phone number with extension
    pattern: {
      required: false,
      type: [RegExp, String, null],
      // eslint-disable-next-line vue/require-valid-default-prop
      default: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})?[-. ]?([0-9]{4})$/
    },

    //sets the placeholder attribute for the input field
    placeholder: {
      required: false,
      type: [String, null],
      default: "Enter text here..."
    },

    //sets the minlength attribute for the input field
    minlength: {
      required: false,
      type: [Number, null],
      default: 10
    },

    //sets the maxlength attribute for the input field
    maxlength: {
      required: false,
      type: [Number, null],
      default: 14
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
      default: "fas fa-phone"
    }
  }, //computed

  emits: ["alerts", "input"],

  data() {
    return {
      //stores errors thrown by the input fields
      dDanger: null,

      //stores errors thrown by the input fields
      dWarning: null,

      //stores textbox values
      dTextValue: null
    }; //return
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
    //store values passed as props into dTextValue for future manipulation
    if (this.value) {
      this.dTextValue = this.value;
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
        value: this.dTextValue,
        maxlength: this.maxLength,
        minlength: this.minLength,
        pattern: this.pattern
      };
      const response = this.validator(object);
      this.dDanger = response.error;
      this.dWarning = response.warning;
    }, //validate

    phoneMask: function(func) {
      setTimeout(() => {
        const v = func(this.dTextValue);
        if (v != this.dTextValue) {
          this.dTextValue = v;
        }
      }, 1);
    }, //phoneMask

    mphone: function(v) {
      let r = v.replace(/\D/g, "");
      r = r.replace(/^0/, "");
      if (r.length > 10) {
        // 11+ digits. Format as 5+4.
        r = r.replace(/^(\d\d\d)(\d{3})(\d{0,4}).*/, "($1) $2-$3");
      } else if (r.length > 6) {
        // 6..10 digits. Format as 4+4
        r = r.replace(/^(\d\d\d)(\d{3})(\d{0,4}).*/, "($1) $2-$3");
      } else if (r.length > 3) {
        // 3..5 digits. Add (0XX..)
        r = r.replace(/^(\d\d\d)(\d{3})(\d{0,4}).*/, "($1) $2");
      } else {
        // 0..2 digits. Just add (0XX)
        r = r.replace(/^(\d\d\d)(\d{3})(\d{0,4}).*/, "($1");
      }
      return r;
    } //mphone
  } //watch
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../Less/customMixins.less";

.phoneInput {
  .inputcss();
}
</style>
