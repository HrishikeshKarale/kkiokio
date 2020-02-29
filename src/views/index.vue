<template>
  <div class="index">
    <!-- <div class="alert">
      <countdown-timer
        starttime="Feb 25, 2020 06:24:25"
        endtime="Feb 28, 2020 12:00:00"
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
           }}'
      />
    </div> -->
    <div class="welcomeText">
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
        <a href="">
          <b>Scroll Down</b>
          <span class="far fa-arrow-alt-circle-down fa-3x" />
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import CountdownTimer from "@/components/countdownTimer.vue";
import vueImg from "../components/vueImg.vue";
export default {
  name: "index",
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logo = require("../assets/logo.svg");
    return {
      logo: logo
    };
  },
  components: {
    // CountdownTimer,
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
    & > div {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      &.alert {
        display: flex;
        flex-direction: column;
        background-color: red;
        padding: 6px 16px;
        position: absolute;
        border-radius: 8px;
        .boxShadow(@one);
        top: 80px;
        width: 80vw;
        color: white;
        text-align: center;
        & > div {
          display: flex;
          flex-direction: row;
        }
      }
      &.welcomeText {
        & > div {
          & > a {
            text-decoration: none;
            text-align: center;
            & > b {
              display: block;
              color: @cometText;
            }
            & > span {
              position: relative;
              color: @secondaryColor;
            }
          }
          & > img {
            margin: 8vh 0 4vh 0;
            height: 40vh;
          }
          & > q {
            margin: 4vh 0 16vh 0;
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
