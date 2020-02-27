<template>
  <div class="contact">
    <div class="title">
      <h1>Contact Me</h1>
      <p>
        Hello, I am located in Upstate New York area.
        <br />
        Feel free to use the contact form below and reach out to me for any
        questions yo might have.
        <br />
        You can also write to me the old fashion way.
      </p>
    </div>
    <div class="body">
      <div class="contactDetails">
        <div class="address">
          <h3>Postal Address</h3>
          <p>
            44 Crittenden Way,
            <br />
            Apartment 2,
            <br />
            Rochester, NY 14623
          </p>
        </div>
        <div class="email">
          <h3>Email</h3>
          hrishikesh.karale@gmai.com
        </div>
        <div class="phone">
          <h3>Phone Number</h3>
          <h5>(585) 520-7382</h5>
          <p>
            Hours: 8am - 4pm (EST), everyday
            <br />
            Text messages prefered.
          </p>
          <i>
            *First time caller(s) are screened using virtual assistan<br />to
            weed out spam calls</i
          >
        </div>
      </div>
      <div class="contactForm">
        <form
          action="mailto:hrishikesh.karale@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <text-input
            label="NAME"
            name="nameTextField"
            v-model="name"
            placeholder="John Doe"
            :required="booleanTrue"
          />
          <email-input
            label="E-MAIL"
            name="emailField"
            v-model="email"
            placeholder="JDoe@email.com"
            inputIcon="far fa-envelope"
            :required="booleanTrue"
          />
          <phone-input
            label="PHONE NUMBER"
            name="phoneInputField"
            v-model="phone"
            placeholder="555 555 5555"
          />
          <vue-textarea
            label="MESSAGE"
            name="messageTextareaField"
            v-model="message"
            placeholder="John Doe"
            :required="booleanTrue"
          />
          <div class="button">
            <vue-button
              buttonType="submit"
              buttonName="submitButton"
              buttonText="SUBMIT"
              buttonIcon="fas fa-envelop"
              buttonStyle="small"
              :onClickAction="sendMail"
              inputIcon="far fa-comment-dots"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import vueButton from "../components/vueButton.vue";
import textInput from "../components/textInput.vue";
import emailInput from "../components/emailInput.vue";
import phoneInput from "../components/phoneInput.vue";
import vueTextarea from "../components/vueTextarea.vue";
export default {
  data() {
    const name = null;
    const email = null;
    const phone = null;
    const comment = null;
    const booleanTrue = true;
    return {
      name: name,
      email: email,
      phone: phone,
      comment: comment,
      booleanTrue: booleanTrue
    };
  },
  name: "contact",
  components: {
    vueButton,
    textInput,
    emailInput,
    phoneInput,
    vueTextarea
  },
  methods: {
    sendMail: function() {
      window.open(
        "mailto:hrishikesh.karale@gmail.com?subject=portfolio website (" +
          this.name +
          " " +
          this.email +
          " " +
          this.phone +
          ")&body=" +
          this.comment
      );
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";

.contact {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  & > div {
    &.title {
      margin-bottom: 8vh;
      & > h1 {
        text-align: center;
        & + p {
          font-size: 18px;
          text-align: center;
        }
      }
    }
    &.body {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      & > div {
        display: flex;
        flex-direction: column;
        max-width: 40vw;
        min-width: 24opx;
        &.contactDetails {
          & > div {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
        }
        &.contactForm {
          display: flex;
          flex-direction: column;
          max-width: 40vw;
          min-width: 24opx;
          padding: 16px;
          background-color: #fafbfc;
          border-radius: 8px;
          .boxShadow(@one);
          & > form {
            & > div {
              margin-top: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
