<template>
  <div class="scrollIndicator">
    <div class="scrollContent">
      <slot />
    </div>
    <div v-if="tagOffset.length > 1" class="scroll">
      <a
        v-for="indicator in tagOffset"
        :key="indicator.id"
        :href="'#' + indicator.id"
        :class="{ active: indicator.selected }"
      >
        <span :class="[indicator.selected ? 'fas' : 'far', 'fa-circle']" />
        <span>{{ indicator.id }}</span>
      </a>
    </div>
  </div>
</template>
<script>
import { debounce } from "@/typeScript/debounce";
// import { smoothScroll } from "@/typeScript/smoothScroll";

export default {
  name: "ScrollIndicator",
  mixins: [debounce],
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
  mounted() {
    this.initialize();
  },
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
    }, //checkScroll
    initialize: function() {
      this.x = document.getElementsByClassName("body")[0];
      const offsetHeader = Array.from(
        document.getElementsByClassName("vueHeader")
      )[0];
      this.tag = Array.from(document.getElementsByTagName("section"));
      this.tagOffset = this.tag.map(section => {
        return {
          top: section.offsetTop - offsetHeader.offsetHeight,
          bottom:
            section.offsetTop +
            section.offsetHeight -
            offsetHeader.offsetHeight,
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
    justify-content: center;

    &.scroll {
      position: fixed;
      top: 120px;
      right: 64px;
      & > a {
        float: right;
        display: flex;
        flex-direction: row-reverse;
        text-decoration: none;
        padding: 8px;
        margin: 4px 0;
        height: 32px;
        &:hover,
        &.active {
          border-radius: 4px;
          .boxShadow(@one);
          & > span:last-child {
            display: flex;
            margin-right: 16px;
          }
        }
        & > span {
          &:last-child {
            display: none;
          }
        }
      }
    }

    &.scrolContent {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
