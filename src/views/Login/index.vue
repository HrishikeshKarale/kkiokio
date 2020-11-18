<template>
  <div class="login">
    <div class="trapezoid" />
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
</template>

<script>
import vueImg from "@/components/vueImg.vue";
import textInput from "@/components/textInput.vue";
import passwordInput from "@/components/passwordInput.vue";
import vueForm from "@/components/vueForm";

export default {
  name: "Login",

  components: {
    vueImg,
    textInput,
    passwordInput,
    vueForm
  }, //methods

  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logo = require("@/assets/logo.svg");
    const booleanTrue = true;
    const username = "";
    const password = "";
    const dWarning = null;
    const dDanger = null;

    return {
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
    background-size: 16px 16px;
    filter: opacity(16%);
    opacity: 0.48;
  }
  & > .trapezoid {
    border-bottom: 100vh solid black;
    border-left: 80vw solid transparent;
    border-right: 0 solid transparent;
    height: 100vh;
    width: 100vw;
  }

  & > img {
    position: absolute;
    top: 64px;
    left: 64px;
    height: 40vh;
  }

  & > form {
    position: absolute;
    top: 50vh;
    right: 50vw;
    transform: translate(32vw, 0vh);
    // width: 50vw;
    margin: @spaceLg @spaceXl;
    padding: @spaceLg @spaceXl;
    background-color: @backgroundColor;
    // border: 1px solid @primaryColor;
    // height: min-content;
    border-radius: 4px;
    width: 320px;
    .boxShadow(@one, @secondaryColor);
    // & > h2 {
    //   text-align: center;
    // }
  }
  @media screen {
    @media (max-width: 1024px) {
      position: relative;
    }
  }
}
</style>
