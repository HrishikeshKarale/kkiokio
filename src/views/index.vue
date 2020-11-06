<template>
  <div class="index">
    <div class="alert">
      <countdown-timer
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
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CountdownTimer from "@/components/countdownTimer.vue";
// import vueImg from "@/components/vueImg.vue";
// import vueButton from "@/components/vueButton.vue";

export default {
  name: "Home",
  components: {
    CountdownTimer
    // vueButton,
    // vueImg
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

.index {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;

  & > .alert {
    display: flex;
    flex-direction: column;
    background-color: red;
    padding: @spaceMd @spaceLg; //8px 16px;
    position: absolute;
    border-radius: 8px;
    top: 0px;
    color: @white;
    text-align: center;
    .boxShadow(@one);

    & > div {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
