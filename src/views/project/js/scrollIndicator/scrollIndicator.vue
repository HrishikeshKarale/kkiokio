<template>
  <div class="scrollIndicator">
    <div class="scrollContent">
      <slot />
    </div>
    <div v-if="this.tagOffset.length > 1" class="scroll">
      <a
        v-for="indicator in this.tagOffset"
        :key="indicator.id"
        :href="'#' + indicator.id"
      >
        <span :class="[indicator.selected ? 'fas' : 'far', 'fa-circle']" />
      </a>
    </div>
  </div>
</template>
<script>
import { debounce } from "@/typeScript/debounce";
// import { smoothScroll } from "@/typeScript/smoothScroll";

export default {
  name: "scrollIndicator",
  data() {
    const x = null;
    const tag = [];
    const tagOffset = [];
    const windowHeight = null;
    const windowBuffer = null;
    return {
      x,
      tag,
      tagOffset,
      windowHeight,
      windowBuffer
    };
  },
  mixins: [debounce],
  methods: {
    checkScroll: function() {
      const highlight = Math.round(this.x.scrollTop);

      for (let i = 0; i < this.tag.length; i++) {
        const tagOffset = this.tagOffset[i];

        if (
          highlight + this.windowBuffer > tagOffset.top &&
          highlight < tagOffset.bottom
        ) {
          tagOffset.selected = true;
        } else {
          tagOffset.selected = false;
        }
      }
      this.prevScrollValue = highlight;
    } //checkScroll
  },
  mounted() {
    this.x = document.getElementsByClassName("body")[0];
    const offsetHeader = Array.from(
      document.getElementsByClassName("vueHeader")
    )[0];
    this.tag = Array.from(document.getElementsByTagName("section"));
    this.tagOffset = this.tag.map(section => {
      return {
        top: section.offsetTop - offsetHeader.offsetHeight,
        bottom:
          section.offsetTop + section.offsetHeight - offsetHeader.offsetHeight,
        id: section.getAttribute("id"),
        selected: false
      };
    });
    if (this.tag.length > 1) {
      this.x.addEventListener("scroll", this.debounce(this.checkScroll), {
        capture: false, // top to bottom bubbling/propogation
        once: false //should work only once
      });
      this.windowHeight = this.x.offsetHeight;
      this.windowBuffer = this.windowHeight * 0.3;
      this.checkScroll();
    }
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../../Less/customMixins.less";
@import (reference) "./../../../../Less/customVariables.less";

.scrollIndicator {
  width: 100%;
  height: 100%;

  & > div {
    display: flex;
    flex-direction: column;

    &.scroll {
      position: fixed;
      top: 40%;
      right: 64px;
      & > span {
        margin-bottom: 32px;
        color: lightgray;
        &.active {
          transform: scale(1.2);
          border-width: 4px;
          color: @primaryColor;
        }
      }
    }

    &.scrolContent {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
}
</style>
