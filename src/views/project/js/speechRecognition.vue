//https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
<template>
  <div class="speechRecognition">
    Speech Recognition
    <div class="words" contenteditable></div>
  </div>
</template>
<script>
export default {
  name: "SpeechRecognition",
  data() {
    let p;
    let words;
    return {
      p,
      words
    };
  },

  mounted() {
    //picks available speech recognition class for chrome or firefox
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    //initialises recognition class for the browser
    const recognition = new window.SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "en-US";

    //creates a paragraph tag to display converted text
    this.p = document.createElement("p");
    this.words = document.querySelector(".words");
    this.words.appendChild(this.p);

    //eventlistner(s)
    recognition.addEventListener("result", this.detectSpeech, {
      capture: false, // top to bottom bubbling/propogation
      once: false //should work only once
    });
    recognition.addEventListener("end", recognition.start, {
      capture: false, // top to bottom bubbling/propogation
      once: false //should work only once
    });
    recognition.start();
  },
  methods: {
    detectSpeech: function(e) {
      const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");

      const poopScript = transcript.replace(/poop|poo|shit|dump/gi, "💩");
      this.p.textContent = poopScript;

      if (e.results[0].isFinal) {
        this.p = document.createElement("p");
        this.words.appendChild(this.p);
      }
      event.stopPropogation(); //stop event bubbling
    } //detectSpeech
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.speechRecognition {
  display: flex;
  flex-direction: column;
  background: #ffc600;
  font-family: "helvetica neue";
  font-weight: 200;
  font-size: 20px;

  .words {
    min-width: 800px;
    margin: 50px auto;
    background: white;
    border-radius: 5px;
    .boxShadow(@base @base @two);
    padding: 1rem 2rem 1rem 5rem;
    min-height: 600px;
    .scroll(64vh);
    background: -webkit-gradient(
        linear,
        0 0,
        0 100%,
        from(#d9eaf3),
        color-stop(4%, #fff)
      )
      0 4px;
    background-size: 100% 3rem;
    position: relative;
    line-height: 3rem;
  }
  p {
    margin: 0 0 3rem;
  }

  .words:before {
    content: "";
    position: absolute;
    width: 4px;
    top: 0;
    left: 30px;
    bottom: 0;
    border: 1px solid;
    border-color: transparent #efe4e4;
  }
}
</style>
