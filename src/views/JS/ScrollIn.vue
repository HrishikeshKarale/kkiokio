<template>
  <div class="scrollIn">
    <router-link to="/Project">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <div class="konami">
      <div>
        <h3>Scroll In</h3>
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
      </div>
    </div>
  </div>
</template>
<script>
import { debounce } from "@/typeScript/debounce";
export default {
  name: "scrollIn",
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
    checkScroll: function(e) {
      this.tag.forEach((section, index) => {
        const highlight = this.x.scrollTop;
        if (highlight > this.tagOffset[index] - this.windowBuffer) {
          section.classList.add("bold");
          if (
            this.windowHeight - 1 == highlight &&
            index == this.tag.length - 1
          ) {
            section[index].classList.add("bold");
          }
        } else if (highlight < this.tagOffset[index]) {
          section.classList.remove("bold");
        }
        console.table(
          section.innerText,
          highlight,
          this.tagOffset[index],
          section.offsetHeight,
          this.tag.length,
          this.x.scrollHeight,
          window.innerHeight
        );
      });
    } //checkScroll
  },
  mounted() {
    this.x = document.getElementsByClassName("body")[0];
    const offsetHeader = Array.from(document.getElementsByClassName("header"));
    this.tag = Array.from(document.getElementsByTagName("section"));
    this.tagOffset = this.tag.map(section => {
      return section.offsetTop - offsetHeader[0].offsetHeight;
    });
    this.x.addEventListener("scroll", this.debounce(this.checkScroll));
    this.windowHeight = window.innerHeight - offsetHeader[0].offsetHeight;
    this.windowBuffer = this.windowHeight * 0.5;
    this.checkScroll();
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
    &.konami {
      display: flex;
      flex-direction: row;
      & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        & > article > section {
          height: 50vh;
          width: 50vw;
          margin: 32px;
          background-color: lightblue;
          &.bold {
            background-color: lightcoral;
          }
        }
      }
    }
  }
}
</style>
