<template>
  <div class="login">
    <div class="tempNav">
      <router-link :to="{ name: 'home' }">
        <vue-img :src="logoLink" alt="Logo" />
        <h5>Kkiokio.com</h5>
      </router-link>
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
      <h1>{{ dRadioValue }}</h1>
      <vue-form
        v-if="dRadioValue == dOptions[0]"
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
          v-model="emailID"
          label="Password"
          name="usernameTextField"
          placeholder="*************"
          :required="booleanTrue"
          input-icon="far fa-user"
          :autocomplete="booleanTrue"
          @alerts="alerts"
        />
      </vue-form>
      <vue-form
        v-else
        :d-on-click-action="signUp.bind(this)"
        d-form="SignUpForm"
        :alerts="{ error: dDanger, warning: dWarning }"
        :validate="!booleanTrue"
        :autocomplete="booleanTrue"
        @alerts="alerts"
      >
        <text-input
          v-model="name"
          label="Name"
          name="nameTextField"
          placeholder="John Doe"
          :required="booleanTrue"
          input-icon="far fa-user"
          @alerts="alerts"
        />
        <email-input
          v-model="username"
          label="Email ID"
          name="emailTextField"
          placeholder="JohnDoe@email.com"
          :required="booleanTrue"
          input-icon="fas fa-at"
          @alerts="alerts"
        />
        <text-input
          v-model="username"
          label="Username"
          name="usernameTextField"
          placeholder="John Doe"
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
      <div>
        <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark" />
        <vue-button
          buttop-name="themeToggle"
          button-style="small"
          button-text="Theme"
          button-icon="fas fa-bars"
          :on-click-action="() => {}"
        />
        <vue-button
          v-if="!profile"
          buttop-name="googleLoginButton"
          button-style="border"
          button-text="Google SignIn"
          button-icon="fab fa-google"
          :on-click-action="onGoogleSignIn"
        />
        <vue-button
          v-else
          buttop-name="googleLoginButton"
          button-style="border"
          button-text="Google SignOut"
          button-icon="fab fa-google"
          :on-click-action="onGoogleSignOut"
        />
      </div>
    </div>
  </div>
</template>

<script>
import vueImg from "@/components/vueImg.vue";
import textInput from "@/components/textInput.vue";
import emailInput from "@/components/emailInput.vue";
import passwordInput from "@/components/passwordInput.vue";
import vueForm from "@/components/vueForm";
import radioInput from "@/components/radioInput.vue";
import vueButton from "@/components/vueButton";
import { authentication } from "@/typeScript/authentication";

export default {
  name: "Login",

  components: {
    vueImg,
    textInput,
    emailInput,
    passwordInput,
    vueForm,
    vueButton,
    radioInput
  }, //methods

  mixins: [authentication], //mixins

  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logoLink = require("@/assets/logo.svg");
    const booleanTrue = true;
    const username = null;
    const password = null;
    const emailID = null;
    const dWarning = null;
    const dDanger = null;
    const dName = "loginToggle";
    const dLabelChecked = "SignIn";
    const dLabelUnchecked = "SignUp";
    const dToggle = dLabelChecked;
    const dNameRadio = "loginOrSignUp";
    const dOptions = [dLabelChecked, dLabelUnchecked];
    const dRadioValue = dOptions[0];

    return {
      dNameRadio,
      dRadioValue,
      dOptions,
      dName,
      emailID,
      dToggle,
      dLabelChecked,
      dLabelUnchecked,
      dWarning,
      dDanger,
      logoLink,
      booleanTrue,
      username,
      password
    };
  },
  methods: {
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
      justify-content: space-between;
      position: absolute;
      top: 0;
      width: 100vw;
      padding: @spaceLg @spaceXl;
      border-radius: 4px;
      & > a > img {
        height: 80px;
      }
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
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      position: absolute;
      bottom: 40%;
      left: 50%;
      transform: translate(-50%, 40%);
      padding: @spaceLg @spaceXl;
      background-color: @backgroundColor;
      border: 1px solid @primaryColor;
      border-radius: 4px;
      .boxShadow(@one, @secondaryColor);

      & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        margin: @spaceLg @spaceXl;
        &:first-child > form {
          width: 320px;
          border-right: 1px solid @primaryColor;
        }
        &:last-child {
          & > button {
            margin-bottom: 32px;
          }
        }
      }
    }
  }

  @media screen {
    @media (max-width: 1024px) {
    }
  }
}
</style>
