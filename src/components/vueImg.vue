// onerror= "this.onerror=null; this.src='image.png'"
<template>
  <img
    v-once
    class="vueImg"
    :src="src ? src : dImageSource"
    :alt="alt"
    :title="alt"
  />
</template>

<script>
export default {
  name: "VueImg", //data

  props: {
    src: {
      required: true,
      type: [String, Boolean],
      default: false
    },

    alt: {
      required: false,
      type: [String, null],
      default: function(value) {
        if (value) {
          return value;
        }
        return "An image goes here";
      }
    }
  },

  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dImageSource = require("@/assets/default.svg");
    return {
      dImageSource: dImageSource
    }; //return
  } //props
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../Less/customVariables.less";

.vueImg {
  display: inline-flex;
  background-color: transparent;
}
</style>
