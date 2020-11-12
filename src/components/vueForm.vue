<template>
  <form id="dForm" class="vueForm">
    <div class="formElements">
      <slot />
    </div>
    <div class="formButtons">
      <input type="reset" value="Reset" />
      <input type="submit" value="Submit" />
    </div>
  </form>
</template>

<script>
// import vueButton from "@/components/vueButton";

export default {
  name: "VueForm", //props

  components: {
    // vueButton
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
      default: "form"
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
      console.log(this.$ref[this.dForm]);
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
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: nowrap;
  & > div {
    display: flex;
    &.formElements {
      flex-direction: column;
    }
    &.formButtons {
      flex-direction: row-reverse;
    }
  }
}
</style>
