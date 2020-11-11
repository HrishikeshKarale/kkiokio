<template>
  <div class="logo">
    <p>
      A collection of Logo's and other illustrator projects.
      <br />
      As a not so creative individual, this is an attept to explore illustrator
      and try my hand it.
      <br />
      Thee are either reproductions, modifications own own ideas and projects
      that I came up with.
    </p>
    <div>
      <template v-for="l in logos" :key="l.id">
        <vue-img :src="l.link" :alt="l.id + ' - ' + l.link" />
      </template>
    </div>
  </div>
</template>
<script>
import vueImg from "@/components/vueImg.vue";
import { logoList } from "@/store/logoList";
export default {
  name: "Logo",
  components: {
    vueImg
  },
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logos = logoList;
    return {
      logos
    };
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../Less/customMixins.less";
@import (reference) "./../../Less/customVariables.less";
.logo {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  &.body {
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    & > div {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      &:last-child {
        img {
          margin: @spaceMd @spaceLg;
          border-radius: 8px;
          padding: @spaceMd;
          max-width: 16vw;
          min-width: 320px;
          height: auto;
          .boxShadow(@two);
        }
      }
    }
  }
}
</style>
