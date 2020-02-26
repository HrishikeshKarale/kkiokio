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
          <p>
            Hours: 8am - 4pm (EST), everyday
            <br />
            Text messages prefered.
          </p>
          <h4>(585) 520-7382</h4>
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
          Name:<br />
          <input type="text" name="name" /><br />
          E-mail:<br />
          <input type="text" name="mail" /><br />
          Phone number:<br />
          <input type="text" name="mail" /><br />
          Message:<br />
          <input type="text" name="comment" size="50" /><br /><br />
          <input type="submit" value="Send" />
          <input type="reset" value="Reset" />
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";

.contact {
  display: flex;
  flex-direction: column;

  & > div {
    &.title {
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
      justify-content: center;
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
        }
      }
    }
  }
}
</style>
