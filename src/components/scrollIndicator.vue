<template>
  <div class="scrollIndicator">
    <div class="sample">
      <slot />
    </div>
    <div v-show="this.tag" class="scroll">
      <span
        v-for="indicator in this.tag"
        :key="indicator[0]"
        :class="[indicator[1] ? 'active fas' : 'far', 'fa-circle']"
      />
    </div>
  </div>
</template>
<script>
import { debounce } from "@/typeScript/debounce";
export default {
  name: "scrollIndicator",
  data() {
    const x = null;
    const tag = [];
    const scrollIndicator = [];
    const windowHeight = null;
    const windowBuffer = null;
    return {
      x,
      tag,
      scrollIndicator,
      windowHeight,
      windowBuffer
    };
  },
  mixins: [debounce],
  methods: {
    checkScroll: function() {
      const scrollIndicator = this.scrollIndicator;
      this.tag.forEach((section, index) => {
        const browserScrollPosition = this.x.scrollTop;
        const tag = this.tag[index];

        //if section is in load zone
        if (browserScrollPosition > tag[0] - this.windowBuffer) {
          scrollIndicator[index].classList.add("fas");
          scrollIndicator[index].classList.add("active");
          scrollIndicator[index].classList.remove("far");

          //if section is not in load zone
          if (browserScrollPosition > tag[2] - this.windowBuffer) {
            scrollIndicator[index].classList.remove("fas");
            scrollIndicator[index].classList.remove("active");
            scrollIndicator[index].classList.add("far");
          }
        } else if (
          Math.round(browserScrollPosition) + this.windowHeight <
          section[2]
        ) {
          scrollIndicator[index].classList.remove("fas");
          scrollIndicator[index].classList.remove("active");
          scrollIndicator[index].classList.add("far");
        }
      });
    } //checkScroll
  },
  mounted() {
    this.x = document.getElementsByClassName("body")[0];
    const offsetHeader = Array.from(document.getElementsByClassName("header"));
    this.tag = Array.from(document.getElementsByTagName("section"));
    this.tag = this.tag.map(section => {
      return [
        section.offsetTop - offsetHeader[0].offsetHeight,
        false,
        section.offsetTop + section.offsetHeight - offsetHeader[0].offsetHeight
      ];
    });
    const temp = document.getElementsByClassName("scrollIndicator")[0];
    this.scrollIndicator = temp.getElementsByTagName("span");
    this.x.addEventListener("scroll", this.debounce(this.checkScroll));
    this.windowHeight = window.innerHeight - offsetHeader[0].offsetHeight;
    this.windowBuffer = this.windowHeight * 0.5;
    this.checkScroll();
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";
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

    &.sample {
      display: flex;
      flex-direction: row;
    }
  }
}
</style>
