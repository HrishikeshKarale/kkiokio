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
        @selected="val => (dRadioValue = val)"
        @alerts="alerts"
      />
    </div>
    <div class="triangleTopLeft" />
    <div class="loginForm">
      <h1>{{ dRadioValue }}</h1>
      <div>
        <vue-form
          v-if="dRadioValue == dOptions[0]"
          :dOnClickAction="handleLogin.bind(this)"
          dForm="loginForm"
          :alerts="{ error: dDanger, warning: dWarning }"
          :validate="!booleanTrue"
          :autocomplete="booleanTrue"
          @alerts="alerts"
        >
          <email-input
            :value="emailID"
            label="Email ID"
            name="emailTextField"
            placeholder="JohnDoe@abc.com"
            :required="booleanTrue"
            input-icon="fas fa-at"
            @alerts="alerts"
            @input="val => (emailID = val)"
          />
          <password-input
            :value="password"
            label="Password"
            name="usernameTextField"
            placeholder="*************"
            :required="booleanTrue"
            input-icon="far fa-user"
            :autocomplete="booleanTrue"
            @alerts="alerts"
            @input="val => (password = val)"
          />
        </vue-form>
        <vue-form
          v-else
          :dOnClickAction="handleSignUp.bind(this)"
          dForm="SignUpForm"
          :alerts="{ error: dDanger, warning: dWarning }"
          :validate="!booleanTrue"
          :autocomplete="booleanTrue"
          @alerts="alerts"
        >
          <text-input
            :value="signupName"
            label="Name"
            name="nameTextField"
            placeholder="John Doe"
            :required="booleanTrue"
            input-icon="far fa-user"
            @alerts="alerts"
            @input="val => (signupName = val)"
          />
          <email-input
            :value="signupEmail"
            label="Email ID"
            name="emailTextField"
            placeholder="JohnDoe@email.com"
            :required="booleanTrue"
            input-icon="fas fa-at"
            @alerts="alerts"
            @input="val => (signupEmail = val)"
          />
          <text-input
            :value="signupUsername"
            label="Username"
            name="usernameTextField"
            placeholder="John Doe"
            :required="booleanTrue"
            input-icon="far fa-user"
            @alerts="alerts"
            @input="val => (signupUsername = val)"
          />
          <password-input
            :value="signupPassword"
            label="Password"
            name="paswordTextField"
            placeholder="*************"
            :required="booleanTrue"
            :match="booleanTrue"
            input-icon="far fa-user"
            :autocomplete="booleanTrue"
            @alerts="alerts"
            @input="val => (signupPassword = val)"
          />
        </vue-form>
        <div>
          <vue-button
            v-if="gapi && gapi.isSignedIn()"
            button-name="googleSignOutButton"
            button-text="Sign out"
            button-icon="fas fa-bar"
            button-style="border"
            :disabled="!dBooleanTrue"
            :autofocus="!dBooleanTrue"
            :on-click-action="onGoogleSignOut.bind()"
          />
          <div v-else class="g-signin2" data-onsuccess="triggerGoogleLoaded" />
        </div>
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
import VueButton from "@/components/vueButton.vue";

export default {
  name: "Login",

  components: {
    vueImg,
    textInput,
    emailInput,
    passwordInput,
    vueForm,
    vueButton,
    radioInput,
    VueButton
  }, //methods

  mixins: [authentication],

  emits: ["loggedIn"], //emits

  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logoLink = require("@/assets/logo.svg");
    const booleanTrue = true;
    //signUp
    const signupName = null;
    const signupEmail = null;
    const signupPassword = null;
    const signupUsername = null;
    const passwordConfirmation = null;
    //signIn
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
    const dBooleanTrue = true;
    const isAdmin = 0;
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
      signupUsername,
      signupName,
      signupEmail,
      signupPassword,
      passwordConfirmation,
      password,
      dBooleanTrue,
      isAdmin
    };
  }, //data

  computed: {
    signedIn() {
      return this.gapi && this.gapi.isSignedIn();
    }
  }, //computed

  watch: {
    signedIn: function(newValue, oldValue) {
      if (newValue != oldValue) {
        // console.log(this.$router.options.routes[6].meta.redirect);
        this.$router.push({
          name: this.$router.options.routes[6].meta.redirect
        });
        // this.$router.back();3
      }
    }
  }, //watch

  methods: {
    handleLogin(e) {
      e.preventDefault();
      if (this.password.length > 0) {
        this.axios
          .post("http://localhost:8001/login", {
            email: this.emailID,
            password: this.password
          })
          .then(response => {
            const isAdmin = response.data.user.isAdmin;
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("jwt", response.data.token);

            if (localStorage.getItem("jwt") != null) {
              // eslint-disable-next-line vue/custom-event-name-casing
              this.$emit("loggedIn");
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl);
              } else if (isAdmin == 1) {
                this.$router.push("admin");
              } else {
                this.$router.push("home");
              }
            }
          })
          .catch(error => {
            console.error(error.response);
          });
      }
    }, //handleLogin

    handleSignUp(e) {
      e.preventDefault();
      let url = "http://localhost:8001/register";
      if (this.isAdmin != null || this.isAdmin == 1) {
        url = "http://localhost:8001/register-admin";
      }
      //POST request
      this.axios
        .post(url, {
          name: this.signupName,
          email: this.signupEmail,
          username: this.signupUsername,
          password: this.signupPassword,
          isAdmin: this.isAdmin
        })
        .then(response => {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("jwt", response.data.token);

          if (localStorage.getItem("jwt") != null) {
            // eslint-disable-next-line vue/custom-event-name-casing
            this.$emit("loggedIn");
            if (this.$route.params.nextUrl != null) {
              this.$router.push(this.$route.params.nextUrl);
            } else {
              this.$router.push("/");
            }
          }
        })
        .catch(error => {
          console.error(error);
        });
    }, //handleSignUp

    alerts: function(type, message) {
      if (type == "warning") {
        this.dWarning = message;
      } else if (type == "error") {
        this.dDanger = message;
      } else {
        alert("error in input alert module");
      }
    } //alerts
  } //methods
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
      flex-direction: column;
      justify-content: center;
      align-content: center;
      position: absolute;
      bottom: 40%;
      left: 50%;
      transform: translate(-50%, 40%);
      & > h1 {
        margin: @spaceLg auto;
        & + div {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
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
              justify-content: space-evenly;
            }
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
