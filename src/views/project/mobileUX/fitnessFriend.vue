<template>
  <div class="fitnessFriend">
    <router-link to="/project">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <vue-img :src="dFitnessFriend" alt="Concept walkthroughfor a fitness app" />
  </div>
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
  img {
    margin-top: @spaceXl*2;
    .boxShadow(@two);
  }
}
</style>
