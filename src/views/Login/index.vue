<template>
  <div class="login">
    <vue-img :src="logo" alt="Kkiokio.com" />
  </div>
</template>

<script>
import vueImg from "@/components/vueImg.vue";

export default {
  name: "Login",

  components: {
    vueImg
  },

  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logo = require("@/assets/logo.svg");

    return {
      logo
    };
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../../Less/customMixins.less";
@import (reference) "./../../Less/customVariables.less";

@wizard-step-width-height: 120px;
@wizard-step-font-size: @fontSize;

.login {
  @media screen {
    @media (max-width: 1024px) {
    }
  }
}
</style>
