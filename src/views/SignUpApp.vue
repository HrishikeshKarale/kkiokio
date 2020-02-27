<template>
  <div class="signUpApp">
    <router-link to="/Design">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <vue-img
      :src="dSignUpApp"
      alt="Onboarding Screen ideas for a croudsource tree plntation app"
    />
  </div>
</template>
<script>
import vueImg from "../components/vueImg.vue";
export default {
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dSignUpApp = require("../assets/mobile/login screen.png");
    return {
      dSignUpApp: dSignUpApp
    };
  },
  components: {
    vueImg
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";
.signUpApp {
  img {
    margin-top: 64px;
    width: 80vw;
    .boxShadow(@two);
  }
}
</style>
