<template>
  <div class="login">
    <div class="tempNav">
      <radio-input
        type="radio"
        :name="dNameRadio"
        :value="dRadioValue"
        :options="dOptions"
        :required="!booleanTrue"
        :disabled="!booleanTrue"
        :autofocus="!booleanTrue"
        :inline="booleanTrue"
        :box="booleanTrue"
        :mask="!booleanTrue"
        @selected="selected"
        @alerts="alerts"
      />
    </div>
    <div class="triangleTopLeft" />
    <div class="loginForm">
      <vue-img :src="logo" alt="Kkiokio.com" />
      <vue-form
        :d-on-click-action="login.bind(this)"
        d-form="loginForm"
        :alerts="{ error: dDanger, warning: dWarning }"
        :validate="!booleanTrue"
        :autocomplete="booleanTrue"
        @alerts="alerts"
      >
        <text-input
          v-model="username"
          label="Username"
          name="usernameTextField"
          placeholder="JohnDoe"
          :required="booleanTrue"
          input-icon="far fa-user"
          @alerts="alerts"
        />
        <password-input
          v-model="password"
          label="Password"
          name="usernameTextField"
          placeholder="*************"
          :required="booleanTrue"
          input-icon="far fa-user"
          :autocomplete="booleanTrue"
          @alerts="alerts"
        />
      </vue-form>
    </div>
  </div>
</template>

<script>
import vueImg from "@/components/vueImg.vue";
import textInput from "@/components/textInput.vue";
import passwordInput from "@/components/passwordInput.vue";
import vueForm from "@/components/vueForm";
import radioInput from "@/components/radioInput.vue";

export default {
  name: "Login",

  components: {
    vueImg,
    textInput,
    passwordInput,
    vueForm,
    radioInput
  }, //methods

  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logo = require("@/assets/logo.svg");
    const booleanTrue = true;
    const username = "";
    const password = "";
    const dWarning = null;
    const dDanger = null;
    const dName = "loginToggle";
    const dLabelChecked = "SignIn";
    const dLabelUnchecked = "SignUp";
    const dToggle = dLabelChecked;
    const dNameRadio = "radioField";
    const dOptions = [dLabelChecked, dLabelUnchecked];
    const dRadioValue = dOptions[0];
    return {
      dNameRadio,
      dRadioValue,
      dOptions,
      dName,
      dToggle,
      dLabelChecked,
      dLabelUnchecked,
      dWarning,
      dDanger,
      logo,
      booleanTrue,
      username,
      password
    };
  },
  methods: {
    login: function() {
      //do something here
    }, //login

    selected: function(value) {
      // console.log("selected: ", value);
      this.dRadioValue = value;
    }, //selected

    alerts: function(type, message) {
      if (type == "warning") {
        this.dWarning = message;
      } else if (type == "error") {
        this.dDanger = message;
      } else {
        alert("error in input alert module");
      }
    } //alerts
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../../Less/customMixins.less";
@import (reference) "./../../Less/customVariables.less";

@wizard-step-width-height: 120px;
@wizard-step-font-size: @fontSize;

.login {
  display: flex;
  flex-direction: column;
  background-color: @backgroundColor;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  &::before {
    content: "";
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/logo.svg);
    background-repeat: initial;
    background-size: 32px 16px;
    filter: opacity(16%);
    opacity: 0.48;
  }
  & > div {
    &.tempNav {
      display: flex;
      flex-direction: row;
      position: absolute;
      top: 32px;
      right: 32px;
      padding: @spaceLg @spaceXl;
      border-radius: 4px;
    }
    &.triangleTopLeft {
      border-top: 100vh solid black;
      border-right: 0 solid transparent;
      border-left: 100vw solid transparent;
      height: 100vh;
      width: 100vw;
    }
    &.loginForm {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      & > img {
        height: 160px;
        margin-bottom: 16px;
      }

      & > form {
        margin: @spaceLg @spaceXl;
        padding: @spaceLg @spaceXl;
        background-color: @backgroundColor;
        border: 1px solid @primaryColor;
        border-radius: 4px;
        width: 320px;
        .boxShadow(@one, @secondaryColor);
      }
    }
  }

  @media screen {
    @media (max-width: 1024px) {
    }
  }
}
</style>
