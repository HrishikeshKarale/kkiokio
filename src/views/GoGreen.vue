<template>
  <div class="goGreen">
    <router-link to="/Project">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <vue-img
      :src="dGoGreen"
      alt="Onboarding Screen ideas for a croudsource tree plntation app"
    />
  </div>
</template>
<script>
import vueImg from "../components/vueImg.vue";
export default {
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dGoGreen = require("../assets/mobile/Go-Green Onboarding screen.png");
    return {
      dGoGreen: dGoGreen
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
.goGreen {
  img {
    margin-top: 64px;
    width: 80vw;
    .boxShadow(@two);
  }
}
</style>
