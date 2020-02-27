<template>
  <div class="medco">
    <router-link to="/Design">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <img src="../assets/mobile/medical research.png" />
  </div>
</template>
<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";
.medco {
  img {
    margin-top: 64px;
    width: 80vw;
    .boxShadow(@two);
  }
}
</style>
