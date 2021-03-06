//https://markus.oberlehner.net/blog/replicating-the-twitter-tweet-box-with-vue/
<template>
  <div class="passwordInput">
    <div :class="{ inline: inline }">
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
          v-model="dPasswordValue"
          :type="dType"
          :name="name"
          :placeholder="placeholder"
          :maxlength="maxlength"
          :pattern="pattern"
          :autofocus="autofocus"
          :disabled="disabled"
          :readonly="readonly"
          :required="required"
          :autocomplete="autocomplete"
          @input="validate"
        />
        <span
          :class="['fas', dType != 'text' ? 'fa-eye' : 'fa-eye-slash']"
          @click="peek(1)"
        />
        <div v-if="dPasswordValue" class="conditions">
          <div>
            <span
              :class="
                dPasswordValue.match(/(?=.*[A-Z])(?=.*[0-9])/g)
                  ? 'fas fa-check'
                  : 'fas fa-times'
              "
            />
            Numbers present
          </div>
          <div>
            <span
              :class="
                dPasswordValue.match(/\S{1,}/g)
                  ? 'fas fa-check'
                  : 'fas fa-times'
              "
            />
            No Spaces
          </div>
          <div>
            <span
              :class="
                dPasswordValue.match(/(?=.*[A-Z])/g)
                  ? 'fas fa-check'
                  : 'fas fa-times'
              "
            />
            Capital Letter
          </div>
          <div>
            <span
              :class="
                dPasswordValue.match(/(?=.*[a-z])/g)
                  ? 'fas fa-check'
                  : 'fas fa-times'
              "
            />
            Snall letters
          </div>
          <div>
            <span
              :class="
                dPasswordValue.length > 7 ? 'fas fa-check' : 'fas fa-times'
              "
            />
            More than 8 characters
          </div>
          <div>
            <span
              :class="
                dPasswordValue.match(/(?=.*[!@#\\$%\\^&\\*])/g)
                  ? 'fas fa-check'
                  : 'fas fa-times'
              "
            />
            Special character
          </div>
        </div>
      </div>
      <input-response
        :warning="dWarning"
        :error="dDanger"
        :char-limit-reached="
          dPasswordValue ? maxlength - dPasswordValue.length < 0 : false
        "
        :maxlength="maxlength"
      />
    </div>
    <div v-if="match" :class="{ inline: inline }">
      <label v-if="label" :class="{ maskField: mask }">
        Confirm {{ label }}
        <abbr v-if="required" title="Required Field">*</abbr>
        <span v-else> - Optional field<abbr>*</abbr></span>
      </label>
      <div
        :class="{
          warningContainer: dPasswordValue
            ? dPasswordMatch
              ? dPasswordValue === dPasswordMatch
                ? null
                : 'Passwords does not match'
              : null
            : null,
          errorContainer: dPasswordValue
            ? dPasswordMatch
              ? null
              : 'Required Field'
            : null,
          iconPadding: inputIcon,
          maskField: mask
        }"
      >
        <span v-if="inputIcon" :class="inputIcon" />
        <input
          v-if="!mask"
          v-model="dPasswordMatch"
          :type="dTypeMatch"
          :name="name + 'Match'"
          :placeholder="placeholder"
          :maxlength="maxlength"
          :autofocus="autofocus"
          :disabled="disabled"
          :readonly="readonly"
          :autocomplete="!dBooleanTrue"
          @input="validate"
        />
        <span
          :class="['fas', dTypeMatch != 'text' ? 'fa-eye' : 'fa-eye-slash']"
          @click="peek(0)"
        />
        <div v-if="dPasswordValue" class="conditions">
          <div>
            <span
              :class="
                dPasswordValue && dPasswordValue === dPasswordMatch
                  ? 'fas fa-check'
                  : 'fas fa-times'
              "
            />
            {{ label }} Match
          </div>
        </div>
      </div>
      <input-response
        :warning="
          dPasswordValue
            ? dPasswordMatch
              ? dPasswordValue === dPasswordMatch
                ? null
                : 'Passwords does not match'
              : null
            : null
        "
        :error="
          dPasswordValue ? (dPasswordMatch ? null : 'Required Field') : null
        "
      />
    </div>
  </div>
</template>

<script>
import inputResponse from "@/components/alert/inputResponse.vue";
import { validator } from "@/typeScript/validator";

export default {
  name: "PasswordInput", //props

  components: {
    inputResponse
  }, //components

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
      default: "passwordInput"
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
      default: new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})"
      )
    },

    //sets the placeholder attribute for the input field
    placeholder: {
      required: false,
      type: [String, null],
      default: "Enter passsword here..."
    },

    //sets the maxlength attribute for the input field
    maxlength: {
      required: false,
      type: [Number, null],
      default: 50
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

    //if a valid fontawesome icon class string is passed, it displays it in the input field
    //a valid fontawesome icons class string is a string which starts with fas/far/fab/fa
    inputIcon: {
      required: false,
      type: [String, null],
      default: null
    },

    //if true, the component generates a confirmation password box in order to check the password matches the original box password
    match: {
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
    }
  }, //props

  emits: ["alerts"], //emits

  data() {
    const dBooleanTrue = true;
    //stores errors thrown by the input fields
    const dDanger = undefined;
    //stores errors thrown by the input fields
    const dWarning = undefined;
    //stores textbox password values
    const dPasswordValue = undefined;
    //stores textbox password values to match with dPasswordValue
    const dPasswordMatch = undefined;
    //type defaulted to password.
    const dType = "password";
    //type defaulted to password.
    const dTypeMatch = "password";
    return {
      dDanger,
      dWarning,
      dPasswordValue,
      dPasswordMatch,
      dType,
      dTypeMatch,
      dBooleanTrue
    }; //return
  }, //components

  watch: {
    //send warning messages back to parent component
    dWarning: function(newValue) {
      this.$emit("alerts", "warning", newValue);
    },

    //send error messages back to parent component
    dDanger: function(newValue) {
      this.$emit("alerts", "error", newValue);
    }
  }, //methods

  created() {
    //store values passed as props into dPasswordValue for future manipulation
    if (this.value) {
      this.dPasswordValue = this.value;
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
  }, //computed

  methods: {
    //validate the textbox input and set alert messages if required.
    //it also emits/send the current textbox value to  parent component as v-model attribute value
    validate: function() {
      const object = {
        value: this.dPasswordValue,
        maxlength: this.maxLength,
        minlength: this.minLength,
        pattern: this.pattern
      };
      const response = this.validator(object);
      this.dDanger = response.error;
      this.dWarning = response.warning;
    }, //validate

    //
    peek: function(val) {
      if (val === 0) {
        if (this.dTypeMatch === "password") {
          this.dTypeMatch = "text";
        } else {
          this.dTypeMatch = "password";
        }
      } else if (val === 1) {
        if (this.dType === "password") {
          this.dType = "text";
        } else {
          this.dType = "password";
        }
      }
    } //peek
  } //watch
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../Less/customMixins.less";

.passwordInput {
  min-width: 160px;

  & > div {
    .inputcss();
  }
}
</style>
