<template>
  <div class="fitnessFriend">
    <router-link to="/Design">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <img src="../assets/mobile/fitness friend.png" />
  </div>
</template>
<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";
.fitnessFriend {
  img {
    margin-top: 64px;
    width: 80vw;
    .boxShadow(@two);
  }
}
</style>
