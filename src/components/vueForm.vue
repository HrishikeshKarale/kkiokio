<template>
  <form
    :id="dForm"
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
        :disabled="alerts.error || alerts.warning"
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
      type: String,
      required: false,
      default: null
    },
    autocomplete: {
      type: Boolean,
      required: false,
      default: true
    },
    validate: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    const dButtonType = "submit";

    const dButtonStyle = "small";

    const dBooleanTrue = true;

    return {
      dButtonType: dButtonType,

      dButtonStyle: dButtonStyle,

      dBooleanTrue: dBooleanTrue
    };
  }, //methods

  computed: {
    validInput: function() {
      const alerts = this.alerts;
      const inputs = document.getElementsByTagName("input");

      for (let index = 0; index < inputs.length; ++index) {
        if (
          !alerts["error"] &&
          !alerts["warning"] &&
          inputs[index].required &&
          !inputs[index].value
        ) {
          return true;
        }
      }
      return false;
    } //validInput
  }, //components
  methods: {
    formReset: function() {
      // console.log(this.$ref[this.dForm]);
      this.$ref[this.dForm].reset();
    }
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
