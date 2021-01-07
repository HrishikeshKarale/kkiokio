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
          As a Designer I believe in setting ego aside and creating an
          experience that caters to my user needs. I have passion for organised
          workflows, visual design language and solving problems.
        </p>
        <vue-button
          tag="loginButton"
          category="border-sm"
          text="About me"
          icon="fas fa-sign-in-alt"
          :ctx="
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
      </div>
    </div>
    <div>
      <div v-for="(skill, index) in skillSet" :key="skill.type" class="skills">
        <!-- <h3>{{ skill.type }}</h3> -->
        <infinite-scroll :list="skill.value" :reverse="index % 2 === 1" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import CountdownTimer from "@/components/countdownTimer.vue";
import vueButton from "@/components/vueButton.vue";
import infiniteScroll from "@/views/project/css/infiniteScroll.vue";
import { skills } from "@/store/skills";

export default {
  name: "Home",
  components: {
    vueButton,
    infiniteScroll
    // CountdownTimer
  },
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const profilePic = require("@/../public/img/profilePic.jpg");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logo = require("@/assets/logo.svg");
    const skillSet = skills;
    return {
      skillSet,
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
  flex-direction: column;
  min-height: @body;
  justify-content: center;
  align-content: center;
  & > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: fit-content;
    flex-wrap: nowrap;
    width: 100%;
    &:first-child {
      justify-content: space-evenly;
      margin-bottom: 0;
      & > div {
        display: flex;
        flex-direction: column;
        margin: @spaceXl;

        & > h2 {
          color: @textColor;
        }
        & > h1,
        & > h2:first-child {
          margin-top: 0;
          margin-bottom: 0;
          &:not(h2) {
            font-weight: bold;
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
        //design and develop box
        &:last-child {
          border: @borderRadius dashed @accentColor;
          height: 320px;
          width: 320px;
          border-radius: 25%;
          cursor: pointer;
          align-self: center;
          & > span {
            font-size: 64px;
            align-self: center;
            padding: @spaceMd @spaceLg;
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
    }
    &:last-child {
      flex-direction: column;
      & > .skills {
        display: flex;
        flex-direction: column;
        height: 40px;
        width: 100%;
        background-color: @backgroundColor;
        &:first-child {
          background-color: red;
        }
        &:last-child {
          background-color: blue;
        }
      }
    }
  }

  @media screen {
    @media (max-width: @maxWidth) {
      flex-direction: column;
      & > div {
        flex-direction: column-reverse;
        margin-bottom: @spaceXl;
        &:first-child {
          & > div {
            &:last-child {
              margin-top: 2 * @spaceXl;
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
  }
}
</style>
