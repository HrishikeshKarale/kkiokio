<template>
  <div class="radioInput" :class="{ inline: inline, oneLiner: !options }">
    <label
      v-if="label"
      :class="{ maskField: mask }"
      @click.prevent="check(label)"
    >
      <template v-if="!options">
        <input
          :ref="name"
          v-model="checkedValue"
          :type="type"
          :name="name"
          :value="label"
        />
        <span
          :class="
            type == 'radio'
              ? checkedValue == option
                ? 'fas fa-circle'
                : 'far fa-circle'
              : checkedValue == label
              ? 'fas fa-check-square'
              : 'far fa-square'
          "
        />
      </template>
      {{ label }}
      <abbr v-if="required" title="Required Field">*</abbr>
      <span v-else> - Optional field<abbr>*</abbr></span>
      <vue-button
        v-if="checkedValue && !required"
        id="clearSelection"
        :button-type="buttonType"
        :button-name="buttonName"
        :button-text="buttonText"
        :button-icon="buttonIcon"
        :button-style="buttonStyle[8]"
        :on-click-action="onClickAction"
      />
    </label>
    <div
      v-if="options"
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
            checked: option == checkedValue
          }"
          :style="{
            'color: #aaaaaa; cursor: not-allowed;': disabled
          }"
          @click.prevent="check(option)"
        >
          <input
            :ref="name"
            v-model="checkedValue"
            :type="type"
            :name="name"
            :value="option"
            :disabled="disabled"
            :autofocus="index == 0 ? autofocus : false"
          />
          <span
            :class="
              type == 'radio'
                ? checkedValue == option
                  ? 'fas fa-circle'
                  : 'far fa-circle'
                : checkedValue == label
                ? 'fas fa-check-square'
                : 'far fa-square'
            "
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
  name: "RadioInput", //watch

  components: {
    inputResponse,
    vueButton
  }, //components

  props: {
    //checkbox or radio button
    type: {
      required: true,
      type: String,
      default: "radio",
      validator: function(value) {
        return ["radio", "checkbox"].indexOf(value) !== -1;
      }
    },

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
      type: [String, Array, Number],
      default: function(props) {
        if (props.options) {
          return null;
        }
        return null;
      }
    },

    //sets the manual alerts
    alertMessage: {
      required: false,
      type: Object,
      default: null
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
  }, //data

  emits: ["select"],

  data() {
    const checkedValue = [];
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
  }, //beforeMount

  watch: {
    checkedValue: function(newValue, oldValue) {
      if (Array.isArray(newValue) || Array.isArray(oldValue)) {
        this.arrDifference(newValue, oldValue);
        // console.log("watch: ", this.arrDifference(newValue, oldValue));
      }
      // console.log(oldValue);
    } //checkedValue
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
  },

  methods: {
    //returns the difference in values between two arrays
    arrDifference: function(a1, a2) {
      const a = [],
        diff = [];
      for (let i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
      }
      for (let i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
          delete a[a2[i]];
        } else {
          a[a2[i]] = true;
        }
      }
      for (const k in a) {
        diff.push(k);
      }
      return diff;
    }, //arrDifference

    clearSelection: function() {
      this.$refs[this.name].forEach(element => {
        if (element.checked) {
          element.checked = false;
        }
      });
      this.checkedValue = null;
      this.$emit("select", null);
    }, //clearSelection

    check: function(checkedValue) {
      const tempRef = this.$refs[this.name];
      for (let i = 0; i < tempRef.length; i++) {
        const element = tempRef[i];
        //when correct element found, check for type and add value
        //when element not found, remove
        if (element.value == checkedValue) {
          //radio
          if (this.type == "radio") {
            this.$emit("select", checkedValue);
            break;
          } else {
            //checkbox
            if (this.checkedValue.includes(checkedValue)) {
              // console.log(
              //   ...this.checkedValue,
              //   checkedValue,
              //   this.checkedValue.includes(checkedValue)
              // );
              this.checkedValue.splice(
                this.checkedValue.indexOf(checkedValue),
                1
              );
            } else {
              // console.log(element.value, this.checkedValue.indexOf(checkedValue));
              this.checkedValue = [checkedValue];
            }
            element.checked = !element.checked;
            this.$emit("select", this.checkedValue);
            break;
          }
        }
      }

      // this.$refs[this.name].forEach(element => {
      //   //when correct element found, check for type and add value
      //   //when element not found, remove
      //   if (element.value == checkedValue) {
      //     //radio
      //     if (this.type == "radio") {
      //       this.$emit("select", checkedValue);
      //     } else {
      //       //checkbox
      //       this.checkedValue = [...Array.from(this.checkedValue)];
      //       if (this.checkedValue.includes(checkedValue)) {
      //         this.checkedValue.splice(
      //           this.checkedValue.indexOf(checkedValue),
      //           1
      //         );
      //       } else {
      //         // console.log(element.value, this.checkedValue.indexOf(checkedValue));
      //         this.checkedValue = [checkedValue];
      //       }
      //       element.checked = !element.checked;
      //       this.$emit("select", checkedValue);
      //     }
      //   }
      // });
    } //checked
  } //components
}; //default
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";

.radioInput {
  .checkboxCss();
}
</style>
