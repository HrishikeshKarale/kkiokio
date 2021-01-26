<template>
  <div class="multiToggle" :class="{ inline: inline }">
    <label v-if="label" :class="{ maskField: mask }">
      {{ label }}
    </label>
    <div
      class="checkbox-toggle"
      :class="{
        warningContainer: dWarning,
        errorContainer: dDanger,
        maskField: mask
      }"
      role="checkbox"
      tabindex="0"
      :aria-checked="dToggled"
      @keydown="toggle"
      @click.prevent="toggle"
    >
      <template v-if="!mask">
        <div class="checkbox-slide" :class="classes">
          <div class="checkbox-switch" :class="classes" />
        </div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-show="showLabels" class="checkbox-label" v-html="labelToggle" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiToggle", //data

  props: {
    //sets heading/Label for multitoggle
    label: {
      required: false,
      type: [String, null],
      default: null
    },

    //sets name attribute for multitoggle  (required field in case of forms)
    name: {
      required: false,
      type: [String, null],
      default: "textInput"
    },

    //users can pass preset values for multitoggle
    value: {
      required: false,
      type: [Boolean, String, null],
      default: false
    },

    //toggles label for multitoggle
    showLabels: {
      required: false,
      type: [Boolean, null],
      default: false
    },

    //sets label text for checked state for multitoggle
    labelChecked: {
      required: true,
      type: String,
      default: ""
    },

    //sets label text for unchecked state for multitoggle
    labelUnchecked: {
      required: true,
      type: String,
      default: ""
    },

    //sets the manual alerts
    alertMessage: {
      required: false,
      type: [Object, null],
      default: null
    },

    //sets the disabled attribute for multitoggle
    disabled: {
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
  }, //computed

  emits: ["value", "alerts"], //props

  data() {
    //stores errors thrown by the input fields
    const dDanger = null;
    //stores errors thrown by the input fields
    const dWarning = null;
    //stores textbox values
    const dToggled = null;
    return {
      dDanger,
      dWarning,
      dToggled
    }; //return
  },

  computed: {
    //triggers and returns class values depending on the toggle state
    classes: function() {
      return {
        checked: this.dToggled,
        unchecked: !this.dToggled,
        disabled: this.disabled
      };
    }, //classes

    //triggers and returns label title depending on the toggle state
    labelToggle: function() {
      return this.dToggled && this.showLabels
        ? this.labelChecked
        : this.labelUnchecked;
    } //labelToggle
  }, //methods

  created() {
    //store values passed as props into dToggled for future manipulation
    if (this.value) {
      this.dToggled = this.value;
    }
  }, //created

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
  }, //emits

  methods: {
    //toggle state unless toggle is disabled
    toggle: function(e) {
      if (this.disabled && e.keyCode === 9) {
        // not if disabled or tab is pressed
        return;
      }
      this.dToggled = !this.dToggled;
      this.$emit("value", !this.dToggled);
    } //toggle
  } //beforeMount
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../Less/customVariables.less";

@round: @spaceLg;

.multiToggle {
  width: fit-content;

  .checkbox-toggle {
    display: flex;
    flex-direction: row;
    align-items: center;

    &:focus {
      outline: none;
    }

    .checkbox-slide {
      display: block;
      width: 64px;
      height: @spaceXl;
      border-radius: @round;
      cursor: pointer;
      border: 1px solid ~"darken(#e0e0e0, 10%)";

      //dLabelChecked
      &.checked {
        transition: all 350ms;
        background: blue;
        border-color: @primaryColor;
      }

      &.unchecked {
        transition: all 350ms;
        background: red;
      }

      &.disabled {
        cursor: not-allowed;
        background: red;
      }

      .checkbox-switch {
        display: block;
        padding: 0;
        margin: 0;
        width: @spaceXl;
        height: @spaceXl;
        border-radius: @round;
        background: @accentColor;
        cursor: pointer;

        &.checked {
          transform: translateX(32px);
          transition: all 350ms;
          background: @accentColor;
        }

        &.unchecked {
          transition: all 350ms;
        }

        &.disabled {
          cursor: not-allowed;
        }
      }
    }

    .checkbox-label {
      width: max-content;
      color: @accentColor;
      margin-left: @spaceMd;
      font-weight: bold;
    }
  }
}
</style>
