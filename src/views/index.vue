<template>
  <div class="profileOverview">
    <!-- <countdown-timer
        class="alert"
        start-time="Oct 25, 2020 06:24:25"
        end-time="Dec 01, 2020 12:00:01"
        trans='{  
          "day":"Day",
          "hours":"Hours",
          "minutes":"Minuts",
          "seconds":"Seconds",
          "expired":"Please contact the administrator (hrishirich619@gmail.com).",
          "running":"Site Launch CountDown",
          "upcoming":"Till start of event.",
          "status": {
            "expired":"We apologise fior the delay, Please come back tomorrow.",
            "running":"Site is being currently updated.",
            "upcoming":"Future"
          }
        }'
      /> -->
    <div>
      <span>HELLO THERE</span>
      <h2>
        My name is
      </h2>
      <h1>
        Hrishikesh Karale.
      </h1>
      <h2>
        I design Things.
      </h2>
      <p>
        I am a multi-disciplined designer based out of Rochester, NY. My
        experience ranges from UI/UX Design to Front-End Development.
      </p>
      <p>
        As a Designer I believe in setting ego aside and creating an experience
        that caters to my user needs. I have passion for organised workflows,
        visual design language and solving problems.
      </p>
      <vue-button
        buttop-name="loginButton"
        button-style="border-sm"
        button-text="About me"
        button-icon="fas fa-sign-in-alt"
        :on-click-action="
          () => {
            this.$router.push({ name: 'about' });
          }
        "
      />
    </div>
    <div @click="this.$router.push({ name: 'project' })">
      <span>Designer</span>
      <span>&</span>
      <span>Developer</span>
      <!-- <vue-button
        buttop-name="loginButton"
        button-style="icon-sm"
        button-icon="fas fa-sign-in-alt"
        :on-click-action="
          () => {
            this.$router.push();
          }
        "
      /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import CountdownTimer from "@/components/countdownTimer.vue";
// import vueImg from "@/components/vueImg.vue";
import vueButton from "@/components/vueButton.vue";

export default {
  name: "Home",
  components: {
    vueButton
    // vueImg,
    // CountdownTimer
  },
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const profilePic = require("@/../public/img/profilePic.jpg");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logo = require("@/assets/logo.svg");
    return {
      profilePic,
      logo
    };
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";

.profileOverview {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: @body;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: @spaceXl @spaceXl;
    margin: auto @spaceXl;
    & > h1,
    & > h2:first-child {
      margin-top: 0;
      margin-bottom: 0;
      &:not(h2) {
        font-weight: bold;
        color: @secondaryColor;
      }
    }
    & > p {
      max-width: 640px;
      margin-bottom: @spaceXl;
    }
    & > button {
      align-self: flex-end;
    }
    // &.alert {
    //   background-color: @dangerText;
    //   padding: @spaceMd @spaceLg;
    //   border-radius: @borderRadius;
    //   height: fit-content;
    //   width: fit-content;
    //   .boxShadow(@one);
    // }

    //designa dndevelop box
    &:last-child {
      border: @borderRadius dashed @secondaryColor;
      height: 480px;
      width: 480px;
      border-radius: 25%;
      cursor: pointer;
      & > span {
        font-size: 64px;
        align-self: center;
        // padding: @spaceMd @spaceLg;
        font-weight: bold;
        transform: rotate(-45deg);
        &:first-child {
          align-self: flex-start;
        }
        &:nth-child(2) {
          padding: @spaceMd 0;
          transform: rotate(0deg);
        }
        &:last-child {
          align-self: flex-end;
        }
      }
    }
  }
  @media screen {
    @media (max-width: 1540px) {
      flex-direction: column-reverse;
      & > div {
        &:last-child {
          height: 240px;
          width: 240px;
          align-self: center;
          & > span {
            font-size: 2 * @fontSize;
          }
        }
      }
    }
  }
}
</style>
