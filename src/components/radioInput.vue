<template>
  <div class="radioInput" :class="{ inline: inline }">
    <label
      v-if="label || (type == 'checkbox' && !options)"
      :class="{ maskField: mask }"
    >
      <!-- checkbox only -->
      <input
        v-if="type == 'checkbox' && !options && !mask"
        ref="singleCheckbox"
        type="checkbox"
        :name="name"
        :checked="value"
        :disabled="disabled"
        :autofocus="autofocus"
        @input="check(value)"
      />
      {{ label }}
      <abbr v-if="required" title="Required Field">*</abbr>
      <span v-else> - Optional field<abbr>*</abbr></span>
      <input :name="name" type="hidden" :value="value" :required="required" />
      <vue-button
        v-if="options && value"
        id="clearSelection"
        :button-type="dButtonType"
        :button-name="dButtonName"
        :button-text="dButtonText"
        :button-icon="dButtonIcon"
        :button-style="dButtonStyle"
        :on-click-action="dOnClickAction"
      />
    </label>
    <div
      v-if="options"
      :class="{
        box: box,
        warningContainer: dWarning,
        errorContainer: dDanger,
        maskField: mask,
        inline: inline
      }"
    >
      <template v-if="!mask">
        <label
          v-for="(option, index) in options"
          :key="index"
          :class="{
            errorLabel: dDanger,
            checked:
              value && type == 'checkbox'
                ? value.includes(option)
                : option == value
          }"
          :style="{
            'color: #aaaaaa; cursor: not-allowed;': disabled
          }"
        >
          <input
            :ref="option"
            :type="type"
            :name="option"
            :checked="
              value && type == 'checkbox'
                ? value.includes(option)
                : option == value
            "
            :value="option"
            :disabled="disabled"
            :autofocus="index == 0 ? autofocus : false"
            @input="check(option)"
          />
          {{ option }}
        </label>
      </template>
    </div>
    <input-response :error="dDanger" />
  </div>
</template>

<script>
import inputResponse from "@/components/inputResponse";
import vueButton from "@/components/vueButton";

export default {
  name: "RadioInput", //watch

  components: {
    inputResponse,
    vueButton
  }, //emits

  props: {
    //sets type for the input field
    //valid values include ['checkbox', 'radio']
    type: {
      required: false,
      type: [String, null],
      validator: function(value) {
        return ["checkbox", "radio"].indexOf(value) !== -1;
      },
      default: "checkbox"
    },

    //sets heading for the checkboxes category
    //in case of single/no-option checkbox, label is used as checkbox text
    label: {
      required: false,
      type: [String, null],
      default: null
    },

    //sets the name attribute for the input field (required field in case of forms)
    name: {
      required: false,
      type: [String, null],
      default: "radioInput"
    },

    //users can pass preset values for the input field
    value: {
      required: true,
      type: function(props) {
        if (!props.options) {
          return Boolean;
        } else if (props.type == "checkbox") {
          return Array;
        } else {
          //type == radio
          return [String, Number];
        }
      },
      default: function(props) {
        if (!props.options) {
          return false;
        } else if (props.type == "checkbox") {
          return [];
        } else {
          //type == radio
          return "";
        }
      }
    },

    //Array of options/labels in case of multiple checkboxes.
    options: {
      required: false,
      type: [Array, null],
      default: null
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

    //checks if label options should appear on the same line or as buttons
    box: {
      required: false,
      type: [Boolean, null],
      default: false
    }
  }, //methods

  emits: ["input", "selected"],

  data() {
    const dButtonType = "button";
    const dButtonName = "clearRadioSelection";
    const dButtonText = "Clear";
    const dButtonIcon = "fas fa-undo";
    const dButtonStyle = "text-sm";
    const dBooleanTrue = true;
    const dOnClickAction = this.clearSelection;
    const dDanger = null;
    const dWarning = null;
    const dSuccess = null;
    const dInfo = null;
    return {
      dButtonType: dButtonType,
      dButtonName: dButtonName,
      dButtonText: dButtonText,
      dButtonIcon: dButtonIcon,
      dButtonStyle: dButtonStyle,
      dBooleanTrue: dBooleanTrue,
      dOnClickAction: dOnClickAction,
      cValue: null,
      //stores errors thrown by the input fields
      dDanger: dDanger,
      dWarning: dWarning,
      dSuccess: dSuccess,
      dInfo: dInfo
    }; //return
  }, //beforeMount

  beforeMount() {
    const alertMessage = this.alertMessage;

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
  }, //data

  methods: {
    clearSelection: function() {
      const options = this.options;
      options.forEach(option => {
        let tag = this.$refs[option].checked;

        if (tag) {
          tag = false;
        }
      });
      this.$emit("selected", null);
    }, //clearSelection

    check: function(checkedValue) {
      let value = this.value;
      // if (value) {
      //   console.log("check: ", Array.from(value), typeof value);
      // }
      if (this.options) {
        //checkbox
        if (this.type == "checkbox") {
          if (value) {
            value = [...value];
            const index = value.indexOf(checkedValue);
            // console.log(
            //   "check: ",
            //   Array.from(value),
            //   value.includes(checkedValue),
            //   value.splice(value.indexOf(checkedValue), 1),
            //   checkedValue
            // );
            if (index != -1) {
              value = value.splice(index, 1);
              // console.log("check: ", Array.from(value), typeof value);
              this.$emit("selected", value);
            } else {
              value = [...this.value, checkedValue];
              this.$emit("selected", value);
            }
          } else {
            this.$emit("selected", [checkedValue]);
          }
        } else {
          //radio
          // console.log(checkedValue, this.type);
          this.$emit("selected", checkedValue);
        }
      } else {
        //this.options does not exist
        console.log(this.$refs["singleCheckbox"].checked);
        this.$emit("selected", this.$refs["singleCheckbox"].checked);
      }
    } //check
  } //components
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../Less/customMixins.less";
@import (reference) "../Less/customVariables.less";

.radioInput {
  .checkboxCss();
}
</style>
