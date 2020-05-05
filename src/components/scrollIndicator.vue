<template>
  <div class="scrollIndicator">
    <div class="sample">
      <slot />
    </div>
    <div v-show="this.tag" class="scroll">
      <a
        v-for="indicator in this.tag"
        :key="indicator[0]"
        :href="'#' + indicator[3]"
      >
        <span :class="[indicator[1] ? 'active fas' : 'far', 'fa-circle']" />
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
        let toggleClass = false;

        let scrollClasslist = null;
        if (scrollIndicator[index]) {
          scrollClasslist = scrollIndicator[index].classList;

          //if section is in load zone
          if (browserScrollPosition > tag[0] - this.windowBuffer) {
            toggleClass = !toggleClass;

            //if section is not in load zone
            if (browserScrollPosition > tag[2] - this.windowBuffer) {
              toggleClass = !toggleClass;
            }
          } else if (
            Math.round(browserScrollPosition) + this.windowHeight <
            section[2]
          ) {
            toggleClass = !toggleClass;
          }

          if (toggleClass) {
            scrollClasslist.toggle("fas");
            scrollClasslist.toggle("active");
            scrollClasslist.toggle("far");
          }
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
        section.offsetTop + section.offsetHeight - offsetHeader[0].offsetHeight,
        section.getAttribute("id")
      ];
    });
    console.log(this.tag);
    const temp = document.getElementsByClassName("scrollIndicator")[0];
    this.scrollIndicator = temp.getElementsByTagName("span");
    this.x.addEventListener("scroll", this.debounce(this.checkScroll));
    this.windowHeight = window.innerHeight - offsetHeader[0].offsetHeight;
    this.windowBuffer = this.windowHeight * 0.5;
    if (this.scrollIndicator) {
      this.checkScroll();
    }
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
