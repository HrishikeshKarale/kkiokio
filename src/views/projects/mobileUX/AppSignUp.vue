<template>
  <div class="AppSignUp">
    <router-link to="/projects">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <vue-img
      :src="dAppSignUp"
      alt="Onboarding Screen ideas for a croudsource tree plntation app"
    />
  </div>
</template>
<script>
import vueImg from "@/components/vueImg.vue";
export default {
  name: "appSignUp",
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dAppSignUp = require("@/assets/mobile/login screen.png");
    return {
      dAppSignUp
    };
  },
  components: {
    vueImg
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.AppSignUp {
  img {
    margin-top: 64px;
    .boxShadow(@two);
  }
}
</style>
