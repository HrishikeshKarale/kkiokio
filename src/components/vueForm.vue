<template>
  <form
    :id="dForm"
    :ref="dForm"
    class="vueForm"
    :name="dForm"
    :novalidate="validate"
    :autocomplete="autocomplete"
    @submit="dOnClickAction"
  >
    <div class="formElements">
      <slot />
    </div>
    <div class="formButtons">
      <vue-button
        button-type="submit"
        button-text="Submit"
        buttop-name="formSubmitButton"
        button-style="small"
        button-icon="fas fa-clipboard-check"
        :disabled="!validInput"
        :on-click-action="dOnClickAction"
      />
      <input class="btn" type="reset" value="Reset" />
    </div>
  </form>
</template>

<script>
import vueButton from "@/components/vueButton";

export default {
  name: "VueForm", //props

  components: {
    vueButton
  }, //data

  props: {
    alerts: {
      type: Object,
      required: true
    },
    dOnClickAction: {
      type: Function,
      required: true
    },
    dForm: {
      type: [String, null],
      required: false,
      default: null
    },
    autocomplete: {
      type: [Boolean, null],
      required: false,
      default: true
    },
    validate: {
      type: [Boolean, null],
      required: false,
      default: false
    }
  },

  data() {
    const dButtonType = "submit";

    const dButtonStyle = "small";

    const dBooleanTrue = true;
    const dWarning = null;
    const dDanger = null;

    return {
      dWarning,
      dDanger,
      dButtonType: dButtonType,

      dButtonStyle: dButtonStyle,

      dBooleanTrue: dBooleanTrue
    };
  }, //data

  computed: {
    validInput: function() {
      const alerts = this.alerts;
      const form = this.$refs[this.dForm];
      if (form && !alerts["error"] && !alerts["warning"]) {
        const inputs = [
          ...Array.from(form.getElementsByTagName("select")),
          ...Array.from(form.getElementsByTagName("input"))
        ];

        for (let index = 0; index < inputs.length; ++index) {
          if (inputs[index].required && !inputs[index].value) {
            return false;
          }
        }
        return true;
      }
      return false;
    } //validInput
  }, //mounted

  methods: {
    alert: function(type, message) {
      // console.log(message);
      if (type == "warning") {
        this.dWarning = message;
      } else if (type == "error") {
        this.dDanger = message;
      } else {
        alert("error in input alert module");
      }
    } //alerts
  } //methods
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../Less/customMixins.less";
@import (reference) "../Less/customVariables.less";

.vueForm {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: auto;
  & > div {
    display: flex;
    &.formElements {
      flex-direction: column;
    }
    &.formButtons {
      flex-direction: row-reverse;
      & > input {
        font-size: @fontSizeMd;
        margin-right: @spaceMd;
        &:first-child {
          margin-right: 0;
        }
        &[type="reset"] {
          background-color: transparent;
        }
      }
    }
  }
}
</style>
