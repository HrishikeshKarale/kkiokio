<template>
  <vue-img
    class="AppSignUp"
    :src="dAppSignUp"
    alt="Onboarding Screen ideas for a croudsource tree plntation app"
  />
</template>
<script>
import vueImg from "@/components/vueImg.vue";
export default {
  name: "AppSignUp",
  components: {
    vueImg
  },
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dAppSignUp = require("@/assets/mobile/login screen.png");
    return {
      dAppSignUp
    };
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";

.AppSignUp {
  margin-top: @spaceXl*2;
  .boxShadow(@one);
  max-width: 80vw;
  min-width: 480px;
}
</style>
