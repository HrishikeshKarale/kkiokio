<template>
  <div class="vueHeader">
    <div>
      <span class="fas fa-bars" />
      <router-link :to="'/'" v-if="logoLink">
        <img :src="logoLink" />
      </router-link>
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "vueHeader",

  data() {
    return {
      selected: null
    }; //return
  }, //data

  props: {
    logoLink: {
      required: false,
      type: String,
      default: null
    },

    nav: {
      required: false,
      type: Function,
      default: null
    }
  } //props
}; //default
</script>

//
<style lang="less" scoped>
@import (reference) "./../Less/customVariables.less";
@import (reference) "./../Less/customMixins.less";

.vueHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: @spaceMd @spaceLg;
  width: 100%;
  min-height: 40px;
  max-height: 5vh;

  background-color: #333333;
  .boxShadow(@two);
  //0px 2px 4px 2px rgba(40, 40, 40, 0.5)

  & > div {
    margin: auto 0;

    img {
      height: 32px;
      padding: @spaceMd @spaceLg;
    }

    span {
      color: @white;
      margin: auto 16px;
    }
  }
}
</style>
