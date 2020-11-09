<template>
  <div class="contact">
    <p>
      Hello, I am located in Upstate New York area.
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
      <div class="form">
        <form
          action="mailto:hrishikesh.karale@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <text-input
            v-model="name"
            label="NAME"
            name="nameTextField"
            placeholder="John Doe"
            :required="booleanTrue"
          />
          <email-input
            v-model="email"
            label="E-MAIL"
            name="emailField"
            placeholder="JDoe@email.com"
            input-icon="far fa-envelope"
            :required="booleanTrue"
          />
          <phone-input
            v-model="phone"
            label="PHONE NUMBER"
            name="phoneInputField"
            placeholder="555 555 5555"
          />
          <vue-textarea
            v-model="comment"
            label="MESSAGE"
            name="messageTextareaField"
            placeholder="message"
            :required="booleanTrue"
          />
          <div class="button">
            <vue-button
              button-type="submit"
              button-name="submitButton"
              button-text="SUBMIT"
              button-icon="fas fa-comment-dots"
              button-style="small"
              :on-click-action="sendMail"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import vueButton from "@/components/vueButton.vue";
import textInput from "@/components/textInput.vue";
import emailInput from "@/components/emailInput.vue";
import phoneInput from "@/components/phoneInput.vue";
import vueTextarea from "@/components/vueTextarea.vue";
// import nodemailer from "nodemailer";
export default {
  name: "Contact",
  components: {
    vueButton,
    textInput,
    emailInput,
    phoneInput,
    vueTextarea
  },
  data() {
    const name = null;
    const email = null;
    const phone = null;
    const comment = null;
    const booleanTrue = true;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    // const nodemailer = require("nodemailer");
    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "hrishikesh.karale@gmail.com",
    //     pass: "kkiokio6199"
    //   }
    // });
    const mailOptions = {
      from: "",
      to: "",
      subject: "",
      text: ""
    };
    return {
      name,
      email,
      phone,
      comment,
      booleanTrue,
      // nodemailer,
      // transporter,
      mailOptions
    };
  },
  methods: {
    sendMail: function() {
      // this.mailOptions["from"] = this.email;
      // this.mailOptions["to"] = "hrishikesh.karale@gmail.com";
      // this.mailOptions["subject"] =
      //   "FW: kkiokio.com" + " " + this.name + " " + this.phone;
      // this.mailOptions["text"] = this.comment;
      // this.transporter.sendMail(this.mailOptions, function(error, info) {
      //   if (error) {
      //     console.log(error);
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
      // } else {
      //   alert("Email sent: " + info.response);
      //   this.mailOptions["from"] = "hrishikesh.karale@gmail.com";
      //   this.mailOptions["to"] = this.email;
      //   this.mailOptions["subject"] =
      //     "FW: kkiokio.com" + " " + this.name + " " + this.phone;
      //   this.mailOptions["text"] = this.comment;
      //   this.transporter.sendMail(this.mailOptions, function(error, info) {
      //     if (error) {
      //       console.log(error);
      //     } else {
      //       console.log("Email sent: " + info.response);
      //     }
      //   });
      //   }
      // });
    }
  }
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
    justify-content: space-evenly;
    & > div {
      display: flex;
      flex-direction: column;
      max-width: 40vw;
      min-width: 24opx;
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
        .boxShadow(@base @one);
        & > form {
          & > div {
            margin-top: @spaceLg;
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
