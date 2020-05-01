<template>
  <div class="medco">
    <router-link to="/projects">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <vue-img
      :src="dMedco"
      alt="Onboarding Screen ideas for a croudsource tree plntation app"
    />
  </div>
</template>
<script>
import vueImg from "@/components/vueImg.vue";
export default {
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dMedco = require("@/assets/mobile/medical research.png");
    return {
      dMedco: dMedco
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
.medco {
  img {
    margin-top: 64px;
    .boxShadow(@two);
  }
}
</style>
