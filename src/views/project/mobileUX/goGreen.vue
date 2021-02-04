<template>
  <vue-img
    class="goGreen"
    :src="dGoGreen"
    alt="Onboarding Screen ideas for a croudsource tree plntation app"
  />
</template>
<script>
import vueImg from "@/components/vueImg.vue";
export default {
  components: {
    vueImg
  },
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dGoGreen = require("@/assets/mobile/Go-Green Onboarding screen.png");
    return {
      dGoGreen: dGoGreen
    };
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.goGreen {
  margin-top: @spaceXl*2;
  .boxShadow(@one);
  max-width: 80vw;
  min-width: 480px;
}
</style>
