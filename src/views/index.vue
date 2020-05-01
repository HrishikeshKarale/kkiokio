<template>
  <div class="index">
    <!-- <div class="alert">
      <countdown-timer
        starttime="Feb 25, 2020 06:24:25"
        endtime="May 15, 2020 12:00:00"
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
      /> 
    </div> -->
    <article>
      <section class="welcomeText">
        <div>
          <vue-img :src="logo" alt="Kkiokio Logo" />
        </div>
        <div>
          <q
            >A little
            <abbr
              title="The action of understanding, being aware of, being sensitive to, and vicariously experiencing the feelings, thoughts, and experience of another of either the past or present without having the feelings, thoughts, and experience fully communicated in an objectively explicit manner"
            >
              Empathy
            </abbr>
            goes a long way
          </q>
        </div>
        <!-- <div>
          <b>Scroll Down</b>
          <span class="far fa-arrow-alt-circle-down fa-3x" />
        </div> -->
      </section>
      <!-- <section id="aboutMe">
        <div>
          <vue-img :src="profilePic" alt="Hrishikesh Karale profile Picture" />
        </div>
        <div>
          <h2>Hrishikesh Karale</h2>
        </div>
        <div>
          <h3>UX Professional</h3>
        </div>
        <div>
          <h4>Full Stack Designer</h4>
        </div>
        <div>
          <vue-button
            buttonName="gotoButton"
            buttonText="Click here to know more about me"
            buttonIcon="fas fa-link"
            buttonStyle="text-sm"
            :onClickAction="() => this.$router.push({ path: `/About Me` })"
          />
        </div>
      </section> -->
    </article>
  </div>
</template>

<script>
// @ is an alias to /src
// import CountdownTimer from "@/components/countdownTimer.vue";
import vueImg from "@/components/vueImg.vue";
// import vueButton from "@/components/vueButton.vue";

export default {
  name: "index",
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const profilePic = require("@/../public/img/profilePic.jpg");
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logo = require("@/assets/logo.svg");
    return {
      profilePic,
      logo
    };
  },
  components: {
    // CountdownTimer,
    // vueButton,
    vueImg
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";

div {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  &.index {
    & > article > section {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;

      &.alert {
        display: flex;
        flex-direction: column;
        background-color: red;
        padding: 8px 16px;
        position: absolute;
        border-radius: 8px;
        top: 80px;
        color: @white;
        text-align: center;
        .boxShadow(@one);

        & > div {
          display: flex;
          flex-direction: row;
        }
      }

      &#aboutMe {
        display: flex;

        & > div {
          text-align: center;

          & > img {
            margin: auto;
            margin-top: 160px;
            height: 320px;
            width: 320px;
            clip-path: circle(120px at center);
          }
        }
      }

      &.welcomeText {
        margin: auto;

        & > div {
          text-align: center;

          & > b {
            display: block;
            color: @cometText;
          }

          & > span {
            position: relative;
            color: @secondaryColor;
          }

          & > img {
            height: 40vh;
          }

          & > q {
            margin: 4vh 0;
            font-size: 4vw;
            text-align: center;

            & > abbr {
              color: #fbce51;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
}
</style>
