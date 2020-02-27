<template>
  <div class="culinarian">
    <router-link to="/Design">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <vue-img
      :src="dCulinarian"
      alt="Culinarian App walkthrough and styleguide"
    />
  </div>
</template>
<script>
import vueImg from "../components/vueImg.vue";
export default {
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dCulinarian = require("../assets/mobile/culinarian.png");
    return {
      dCulinarian: dCulinarian
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
.culinarian {
  img {
    margin-top: 64px;
    width: 80vw;
    .boxShadow(@two);
  }
}
</style>
