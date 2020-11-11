<template>
  <div class="scrollIndicator">
    <div class="content">
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
    //used to calculate the height of header/navigation
    const headerOffset = null;
    //saves the sectrion tags used to generate Sub Content navigation links.
    const tag = [];
    //stores the tag (section) ad well as the top and bottom pixel location of the tag as well as if its selected or not.
    const tagOffset = [];
    //stores height opf the current browser window
    const windowHeight = null;
    //stores pixel value above which we select a tag.
    const windowBuffer = null;
    //ratio used to calculate window buffer
    const bufferRatio = 0.18;
    return {
      headerOffset,
      tag,
      tagOffset,
      windowHeight,
      windowBuffer,
      bufferRatio
    };
  },
  mounted() {
    this.initialize();
  },
  methods: {
    checkScroll: function() {
      const highlight = Math.round(this.headerOffset.scrollTop);
      for (let i = 0; i < this.tag.length; i++) {
        const tagOffset = this.tagOffset[i];

        //activate tags depending on the window scroll location and tag top/bottom pixel location within the page.
        if (
          highlight + this.windowBuffer > tagOffset.top &&
          highlight < tagOffset.bottom
        ) {
          tagOffset.selected = true;
        } else {
          //keep last tag selected when scroll exceeds bottom pixel location
          if (
            i == this.tag.length &&
            this.windowHeight + highlight >=
              this.tagOffset[this.tagOffset.length - 1].bottom
          ) {
            tagOffset.selected = true;
          } else {
            tagOffset.selected = false;
          }
        }
      }
      this.prevScrollValue = highlight;
    }, //checkScroll
    initialize: function() {
      this.headerOffset = document.getElementsByClassName("body")[0];
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
        this.headerOffset.addEventListener(
          "scroll",
          this.debounce(this.checkScroll),
          {
            capture: false, // top to bottom bubbling/propogation
            once: false //should work only once
          }
        );
        this.windowHeight = this.headerOffset.offsetHeight;
        this.windowBuffer = this.windowHeight * this.bufferRatio;
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
    position: relative;

    &.scroll {
      position: absolute;
      height: fit-content;
      top: @header + 32px;
      right: 64px;
      &::before {
        content: "Page Content";
        text-align: right;
        font-weight: bold;
      }
      & > a {
        float: right;
        display: flex;
        flex-direction: row-reverse;
        text-decoration: none;
        padding: 8px;
        margin: 4px 0;
        height: 32px;
        background-color: transparent;
        width: auto;
        &:hover,
        &.active {
          border-radius: 4px;
          background-color: @secondaryColor;
          .boxShadow(@base @one);
          & > span:last-child {
            display: block;
            margin-right: 16px;
          }
        }
        & > span {
          .textShadow(@one);
          &:last-child {
            .textShadow(none);
            display: none;
          }
        }
      }
      @media screen {
        @media (max-width: 1024px) {
          bottom: 0px;
          right: 16px;
          &::before {
            content: "Content";
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
