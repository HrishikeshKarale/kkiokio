<template>
  <vue-img
    class="culinarian"
    :src="dCulinarian"
    alt="Culinarian App walkthrough and styleguide"
  />
</template>
<script>
import vueImg from "@/components/vueImg.vue";
export default {
  name: "Culinarian",
  components: {
    vueImg
  },
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dCulinarian = require("@/assets/mobile/culinarian.png");
    return {
      dCulinarian
    };
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.culinarian {
  margin-top: @spaceXl*2;
  .boxShadow(@one);
  max-width: 80vw;
  min-width: 480px;
}
</style>
