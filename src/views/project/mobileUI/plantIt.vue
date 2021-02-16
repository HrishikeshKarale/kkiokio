<template>
  <vue-img
    class="plantIt"
    :src="dplantIt"
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
    const dplantIt = require("@/assets/mobile/PlantIt board.png");
    return {
      dplantIt: dplantIt
    };
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.plantIt {
  margin-top: @spaceXl*2;
  .boxShadow(@one);
  max-width: 80vw;
  min-width: 480px;
}
</style>
