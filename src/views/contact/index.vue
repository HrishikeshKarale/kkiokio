<template>
  <div class="contact">
    <p>
      Hello, My name is Hrishikesh Karale and I live in Upstate New York.
      <br />
      Feel free to use the contact form below and reach out to me for any
      questions yo might have.
      <br />
      You can also write to me the old fashion way.
    </p>
    <div class="details">
      <div class="personal">
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
          hrishikesh.karale@gmail.com
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
            *First time caller(s) are screened using virtual assistan to weed
            out spam calls</i
          >
        </div>
      </div>
      <div class="form">
        <vue-form
          :d-on-click-action="sendMail.bind(this)"
          d-form="contactForm"
          :alerts="{ error: dDanger, warning: dWarning }"
        >
          <text-input
            v-model="name"
            label="Name"
            name="nameTextField"
            placeholder="John Doe"
            :required="booleanTrue"
          />
          <email-input
            v-model="email"
            label="Email"
            name="emailField"
            placeholder="JDoe@email.com"
            input-icon="far fa-envelope"
            :required="booleanTrue"
          />
          <phone-input
            v-model="phone"
            label="Phone number"
            name="phoneInputField"
            placeholder="555 555 5555"
            @alerts="alerts"
          />
          <vue-textarea
            v-model="comment"
            label="message"
            name="messageTextareaField"
            placeholder="message"
            :required="booleanTrue"
          />
        </vue-form>
        <!-- <div class="button">
            <vue-button
              button-type="submit"
              button-name="submitButton"
              button-text="SUBMIT"
              button-icon="fas fa-inbox"
              button-style="small"
              :on-click-action="sendMail"
            />
          </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import vueButton from "@/components/vueButton.vue";
import textInput from "@/components/textInput.vue";
import emailInput from "@/components/emailInput.vue";
import phoneInput from "@/components/phoneInput.vue";
import vueTextarea from "@/components/vueTextarea.vue";
import vueForm from "@/components/vueForm";

export default {
  name: "Contact",
  components: {
    // vueButton,
    textInput,
    emailInput,
    phoneInput,
    vueTextarea,
    vueForm
  },
  data() {
    const dWarning = null;
    const dDanger = null;
    const name = null;
    const email = null;
    const phone = null;
    const comment = null;
    const booleanTrue = true;
    const mailOptions = {
      from: "",
      to: "",
      subject: "",
      text: ""
    };
    return {
      dWarning,
      dDanger,
      name,
      email,
      phone,
      comment,
      booleanTrue,
      mailOptions
    };
  },
  methods: {
    alerts: function(type, message) {
      if (type == "warning") {
        this.dWarning = message;
      } else if (type == "error") {
        this.dDanger = message;
      } else {
        alert("error in input alert module");
      }
    }, //alerts
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
    } //sendMAil
  } //methods
};
</script>

<style lang="less" scoped>
@import (reference) "./../../Less/customMixins.less";
@import (reference) "./../../Less/customVariables.less";

.contact {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  .details {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    & > div {
      display: flex;
      flex-direction: column;
      max-width: 360px;
      min-width: 240px;
      &.personal {
        & > div {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
      }
      &.form {
        min-width: 320px;
        padding: @spaceLg;
        background-color: @backgroundColor;
        border-radius: 8px;
        .boxShadow(@one);
        & > form {
          & > div {
            margin-top: @spaceMd;
            &:first-child {
              margin-top: 0;
            }
          }
        }
      }
    }
  }
}
</style>
