// https://tympanus.net/Development/CreativeButtons/
// https://tympanus.net/Development/ButtonStylesInspiration/
// https://tympanus.net/Development/DistortedButtonEffects/
// https://tympanus.net/Development/ProgressButtonStyles/
// https://tympanus.net/Development/ButtonStylesInspiration/
<template>
  <button
    :class="[
      'vueButton',
      ['fullWidth', 'border-fwidth'].includes(buttonStyle) ? 'fullWidth' : null,
      buttonClass
    ]"
    :type="buttonType"
    :value="buttonType != 'button' ? buttonType : null"
    :name="buttonName"
    :autofocus="autofocus"
    :disabled="disabled"
    :form="formID"
    @click.stop.prevent="onClickAction"
  >
    <span v-if="buttonIcon" :class="buttonIcon" />
    <template v-if="!['icon', 'icon-sm', 'icon-lg'].includes(buttonStyle)">
      {{ buttonText }}
    </template>
  </button>
</template>

<script>
export default {
  name: "VueButton",

  props: {
    buttonType: {
      required: false,
      type: [String, null],
      default: "button",
      validator: function(value) {
        return ["button", "submit", "reset", null].indexOf(value) !== -1;
      }
    },

    buttonName: {
      required: false,
      type: [String, null],
      default: null
    },

    buttonIcon: {
      default: null,
      required: function(props) {
        return ["icon", "icon-lg", "icon-sm"].indexOf(props.buttonStyle) !== -1;
      },
      type: [String, null]
    },

    buttonText: {
      required: false,
      type: [String, null],
      default: null
    },

    buttonStyle: {
      required: false,
      type: [String, null],
      default: "standard",
      validator: function(value) {
        return (
          [
            "standard",
            "large",
            "small",
            "fullWidth",
            "border",
            "border-sm",
            "border-lg",
            "border-fwidth",
            "text",
            "text-sm",
            "text-lg",
            "icon",
            "icon-sm",
            "icon-lg",
            null
          ].indexOf(value) !== -1
        );
      }
    },

    disabled: {
      required: false,
      type: [Boolean, null],
      default: false
    },

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

    buttonClass: {
      required: false,
      type: [String, null],
      default: function(props) {
        let tempClass = "btn";
        switch (props.buttonStyle) {
          case "standard":
            tempClass += " btn-primary";
            break;
          case "icon":
            tempClass += " btn-icon";
            break;
          case "icon-sm":
            tempClass += " btn-icon btn-sm";
            break;
          case "icon-lg":
            tempClass += " btn-icon btn-lg";
            break;
          case "text":
            tempClass += " btn-link btn-text";
            break;
          case "text-sm":
            tempClass += " btn-text btn-sm";
            break;
          case "text-lg":
            tempClass += " btn-text btn-lg";
            break;
          case "small":
            tempClass += " btn-primary btn-sm";
            break;
          case "large":
            tempClass += " btn-primary btn-lg";
            break;
          case "fullWidth":
            tempClass += " btn-fullWidth btn-block";
            break;
          case "border":
            tempClass += " btn-border";
            break;
          case "border-sm":
            tempClass += " btn-border btn-sm";
            break;
          case "border-lg":
            tempClass += " btn-border btn-lg";
            break;
          case "border-fwidth":
            tempClass += " btn-border btn-fullWidth btn-block";
            break;
          default:
            tempClass += "";
        }
        return tempClass;
      }
    },

    formID: {
      required: false,
      type: [String, null],
      default: function(props) {
        if (props.buttonName) {
          return props.buttonName;
        }
        return "form";
      }
    },

    onClickAction: {
      required: function(props) {
        // console.log(props.buttonType);
        if (props.buttonType == "button") {
          return true;
        }
        return false;
      },
      type: [Function, null],
      default: function() {
        alert(
          "button undefined: Please send a function to execute when the button is clicked"
        );
      }
    }
  } //props
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../Less/customVariables.less";
@import (reference) "../Less/customMixins.less";

@color: @secondaryColor; // #1B746D;

.vueButton {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  width: fit-content;

  & > span {
    margin-right: @spaceMd;
  }

  &.btn-sm {
    padding: @spaceSm @spaceMd;
    font-size: @fontSizeSm;
  }

  &.btn-lg {
    padding: @spaceMd @spaceLg;
    font-size: @fontSizeSm * 2;
  }

  .boxShadow(@three);

  &:hover {
    .boxShadow(@one);
  }
  //icon buttons
  &.btn-icon {
    background-color: transparent;
    color: @color;
    padding: @spaceSm;
    font-size: @fontSize;

    & > span {
      margin-right: 0;
    }

    .textShadow(@one);

    &:hover {
      .textShadow(@base);
    }
  }

  //text links or  text as buttons
  &.btn-text {
    background-color: transparent;
    color: @color;
    padding: 0 !important;
    font-weight: bold;
    border-radius: 0 !important;

    &:hover {
      border-bottom: 1px solid @color;
    }
  }

  //buttons with a border outline and transparent background
  &.btn-border {
    background-color: @backgroundColor;
    border: 1px solid @color;
  }

  &.fullWidth,
  .btn-fullWidth {
    width: 100%;
  }
}
</style>
