// onerror= "this.onerror=null; this.src='image.png'"
<template>
  <figure class="vueImg">
    <img
      v-once
      :src="src ? src : dImageSource"
      :alt="alt"
      :title="alt"
      loading="lazy"
    />
    <figcaption v-if="caption" v-text="caption" />
  </figure>
</template>

<script>
export default {
  name: "VueImg", //data

  props: {
    src: {
      required: true,
      type: String,
      default: null
    },

    alt: {
      required: false,
      type: [String, null],
      default: function(value) {
        if (value) {
          return value;
        }
        return "An image goes here";
      },
      caption: {
        required: false,
        type: String,
        default: null
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
  display: flex;
  justify-content: center;
  gap: @spaceLg;
  z-index: @contentZ;
  margin-block-end: 0;
  margin-block-start: 0;
  margin-inline-end: 0;
  margin-inline-start: 0;
}
</style>
