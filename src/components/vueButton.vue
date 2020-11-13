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
    form="formID"
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
      type: String,
      default: "button",
      validator: function(value) {
        return ["button", "submit", "reset", null].indexOf(value) !== -1;
      }
    },

    buttonName: {
      required: false,
      type: String,
      default: null
    },

    buttonIcon: {
      default: null,
      required: function(props) {
        if (["icon", "icon-lg", "icon-sm"].includes(props.buttonStyle)) {
          return true;
        }
        return false;
      },
      type: [String, null]
    },

    buttonText: {
      required: false,
      type: String,
      default: null
    },

    buttonStyle: {
      required: false,
      type: String,
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
      type: Boolean,
      default: false
    },

    autofocus: {
      required: false,
      type: Boolean,
      default: false
    },

    buttonClass: {
      required: false,
      type: String,
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
      type: String,
      default: null
    },

    onClickAction: {
      required: function(props) {
        console.log(props.buttonType);
        if (props.buttonType == "button") {
          return true;
        }
        return false;
      },
      type: Function,
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
  letter-spacing: 2px;
  font-weight: bold;

  .boxShadow(@three);

  &:hover {
    .boxShadow(@one);
  }
  //icon buttons
  &.btn-icon {
    background-color: transparent;
    color: transparent;
    color: @color;
    padding: @spaceSm;
    font-size: @fontSize;

    .boxShadow(@three);

    &:hover {
      .boxShadow(@one);
    }

    &.btn-sm {
      padding: @spaceSm;
      font-size: @fontSizeSm;
    }

    &.btn-lg {
      padding: @spaceSm;
      font-size: @fontSizeSm * 2;
    }
  }

  //text links or  text as buttons
  &.btn-text {
    background-color: transparent;
    color: transparent;
    color: @color;
    padding: @spaceSm @spaceMd;
    border-radius: @borderRadiusMd;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      border: 1px solid @color;
    }
  }

  //buttons with a border outline and transparent background
  &.btn-border {
    border-radius: @borderRadiusMd;
    background-color: @white;
    border: 1px solid @color;
    color: @color;
    font-weight: bold;
  }

  &.fullWidth,
  .btn-fullWidth {
    width: 100%;
  }
}
</style>
