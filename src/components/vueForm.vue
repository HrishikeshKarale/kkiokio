<template>
  <div class="vueForm">
    <div class="formElements">
      <slot />
    </div>
    <div class="formButtons">
      <vue-button
        :buttonType="dButtonType"
        buttonName="ConfirmDetailsButton"
        :buttonText="dButtonTextConfirm"
        :buttonIcon="dButtonIcon"
        :buttonStyle="dButtonStyle[3]"
        :disabled="alerts"
        :autofocus="!dBooleanTrue"
        :formID="dForm"
        :onClickAction="d_onClickAction"
      />
    </div>
  </div>
</template>

<script>
import vueButton from "@/components/vueButton";

export default {
  name: "vueForm",

  data() {
    const dButtonType = "button";

    const dButtonName = "consoleTextButton";

    const dButtonText = "Click Me";

    const dButtonIcon = "fas fa-registered";

    const dButtonStyle = this.$store.state.buttonStyle;

    const dBooleanTrue = true;

    const dForm = "";

    const dOnClickAction = this.consoleClickConfirm;

    return {
      dButtonType: dButtonType,

      dButtonName: dButtonName,

      dButtonText: dButtonText,

      dButtonIcon: dButtonIcon,

      dButtonStyle: dButtonStyle,

      dBooleanTrue: dBooleanTrue,

      dForm: dForm,

      dOnClickAction: dOnClickAction,

      dButtonTextSubmit: "Submit",

      dButtonTextNext: "Next Page",

      dButtonTextPrevious: "Previous Page",

      dButtonTextConfirm: "Confirm",

      dCompleted: false,

      dTotalSteps: null,

      dCurrentStep: null
    };
  }, //data

  props: {
    alerts: {
      type: Object,
      required: true
    }
  }, //props

  components: {
    vueButton
  }, //components

  computed: {
    validInput: function() {
      const alerts = this.alerts;
      const inputs = document.getElementsByTagName("input");

      for (let index = 0; index < inputs.length; ++index) {
        // console.log(inputs[index].name)

        if (
          !alerts["error"] &&
          !alerts["warning"] &&
          inputs[index].required &&
          !inputs[index].value
        ) {
          // console.log(inputs[index].name, '-required')
          return true;
        }
      }
      return false;
    } //validInput
  }, //computed

  methods: {
    consoleClickNext: function() {
      this.dCurrentStep += 1;
      // console.log("NextPageButtonClick", "Page: ", this.d_currentStep)
    }, // consoleClickNext

    consoleClickPrevious: function() {
      this.dCurrentStep -= 1;
      // console.log("PreviousPageButtonClick", "Page: ", this.d_currentStep)
    }, // consoleClickPrevious

    consoleClickSubmit: function() {
      // console.log("Submit")
      this.dCompleted = true;
    }, // consoleClickSubmit

    consoleClickConfirm: function() {
      // console.log("Close")
      alert("form Submitted!");
    } // consoleClickConfirm
  }, //methods

  created() {
    // console.log(this.steps.length)
    this.dTotalSteps = this.steps.length;
    this.dCurrentStep = 1;
  } //created
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../Less/customMixins.less";
@import (reference) "../Less/customVariables.less";

@wizard-color-neutral: #ccc;
@wizard-color-active: #4183d7;
@wizard-color-complete: #87d37c;
@wizard-step-width-height: 48px;
@wizard-step-font-size: @fontSize;

.vueForm {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: nowrap;

  .wizardSteps {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: auto;

    .step-indicator {
      border-collapse: separate;
      display: table;
      margin-left: 0px;
      position: relative;
      table-layout: fixed;
      text-align: center;
      vertical-align: middle;
      padding-left: 0;

      li {
        display: table-cell;
        position: relative;
        float: none;
        padding: 0;
        width: 1%;

        &:after {
          background-color: @wizard-color-neutral;
          content: "";
          display: block;
          height: 4px;
          position: absolute;
          width: 100%;
          top: @wizard-step-width-height / 2;
        }

        &:after {
          left: 50%;
        }

        &:last-child {
          &:after {
            display: none;
          }
        }

        &.active {
          .step {
            border-color: @wizard-color-active;
            color: @wizard-color-active;
          }

          .caption {
            width: 100%;
            color: @wizard-color-active;
          }
        }

        &.complete {
          &:after {
            background-color: @wizard-color-complete;
          }

          .step {
            border-color: @wizard-color-complete;
            color: @wizard-color-complete;
          }

          .caption {
            color: @wizard-color-complete;
          }
        }
      }

      .step {
        background-color: @white;
        border-radius: 50%;
        border: 2px solid @wizard-color-neutral;
        color: @wizard-color-neutral;
        font-size: @wizard-step-font-size;
        height: @wizard-step-width-height;
        line-height: @wizard-step-width-height;
        margin: 0 auto;
        position: relative;
        width: @wizard-step-width-height;
        z-index: 1;

        &:hover {
          cursor: pointer;
        }
      }

      .caption {
        color: @wizard-color-neutral;
        padding: @spaceMd @spaceLg;
      }
    }
  }

  .wizardFrom {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: @spaceLg @spaceXl;
  }

  .wizardButtons {
    margin-top: @spaceLg;
    background-color: @backgroundColor;

    & > div {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: nowrap;
      width: 100%;
    }
  }
}
</style>
