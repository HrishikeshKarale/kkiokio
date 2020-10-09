//https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
<template>
  <div class="linkFollower" ref="linkFollower">
      <p>
        Lorem ipsum dolor sit amet, <a href="">consectetur</a> adipisicing elit.
        Est <a href="">explicabo</a> unde natus necessitatibus esse obcaecati
        distinctio, aut itaque, qui vitae!
      </p>
      <p>
        Aspernatur sapiente quae sint <a href="">soluta</a> modi, atque
        praesentium laborum pariatur earum <a href="">quaerat</a> cupiditate
        consequuntur facilis ullam dignissimos, aperiam quam veniam.
      </p>
      <p>
        Cum ipsam quod, incidunt sit ex <a href="">tempore</a> placeat maxime
        <a href="">corrupti</a> possimus <a href="">veritatis</a> ipsum fugit
        recusandae est doloremque? Hic, <a href="">quibusdam</a>, nulla.
      </p>
      <p>
        Esse quibusdam, ad, ducimus cupiditate <a href="">nulla</a>, quae magni
        odit <a href="">totam</a> ut consequatur eveniet sunt quam provident
        sapiente dicta neque quod.
      </p>
      <p>
        Aliquam <a href="">dicta</a> sequi culpa fugiat
        <a href="">consequuntur</a> pariatur optio ad minima, maxime
        <a href="">odio</a>, distinctio magni impedit tempore enim repellendus
        <a href="">repudiandae</a> quas!
      </p>
  </div>
</template>
<script>
export default {
  name: "linkFollower",
  data() {
    let linksFollowed;
    let highlight;
    return {
      linksFollowed,
      highlight
    };
  },
  methods: {
    highlightLink: function(link) {
      const linkCoords = link.getBoundingClientRect();
      const coords = {
        width: Math.round(linkCoords.width),
        height: Math.round(linkCoords.height),
        top: Math.round(linkCoords.top + window.scrollY),
        left: Math.round(linkCoords.left + window.scrollX)
      };
      this.highlight.style.width = `${coords.width}px`;
      this.highlight.style.height = `${coords.height}px`;
      this.highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    } //highlightLink
  },

  mounted() {
    const triggers = this.$refs.linkFollower;
    this.linksFollowed = Array.from(triggers.querySelectorAll("a"));
    this.highlight = document.createElement("span");
    this.highlight.classList.add("highlight");
    triggers.appendChild(this.highlight);
    this.linksFollowed.forEach(link => {
      link.addEventListener("mouseenter", this.highlightLink(link));
    });
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.linkFollower {
  display: flex;
  flex-direction: column;
  background: #ffc600;
  font-family: "helvetica neue";
  font-weight: 200;
  font-size: 20px;
  & > .highlight {
    transition: all 0.2s;
    border-bottom: 2px solid white;
    position: absolute;
    top: 0;
    background: white;
    left: 0;
    z-index: 5;
    border-radius: 20px;
    display: block;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
}
</style>
