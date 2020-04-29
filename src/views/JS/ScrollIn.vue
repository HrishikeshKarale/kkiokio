<template>
  <div class="scrollIn">
    <router-link to="/Project">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <div class="sample">
      <h3>Scroll In</h3>
      <scroll-indicator>
        <article>
          <section>
            <h1>a</h1>
          </section>
          <section>
            <h1>b</h1>
          </section>
          <section>
            <h1>c</h1>
          </section>
        </article>
      </scroll-indicator>
    </div>
  </div>
</template>
<script>
import scrollIndicator from "@/components/scrollIndicator.vue";
export default {
  name: "scrollIn",
  components: {
    scrollIndicator
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../Less/customMixins.less";
@import (reference) "./../../Less/customVariables.less";
.scrollIn {
  width: 100%;
  height: 100%;

  & > div {
    display: flex;
    flex-direction: column;

    &.sample {
      display: flex;
      flex-direction: row;

      article > section {
        height: 50vh;
        width: 50vw;
        margin: 32px;
        background-color: lightblue;
      }
    }
  }
}
</style>
