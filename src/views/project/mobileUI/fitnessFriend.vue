<template>
  <vue-img
    class="fitnessFriend"
    :src="dFitnessFriend"
    alt="Concept walkthroughfor a fitness app"
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
    const dFitnessFriend = require("@/assets/mobile/fitness friend.png");
    return {
      dFitnessFriend: dFitnessFriend
    };
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.fitnessFriend {
  margin-top: @spaceXl*2;
  .boxShadow(@one);
  max-width: 80vw;
  min-width: 480px;
}
</style>
