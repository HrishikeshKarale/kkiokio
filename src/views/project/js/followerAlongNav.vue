<template>
  <nav class="followerAlongNav" ref="followerAlongNav">
    <div class="dropdownBackground" ref="dropdownBackground">
      <span class="fas fa-caret-up fa-2x" />
    </div>
    <ul class="cool">
      <li>
        <a href="#">About Me</a>
        <div class="dropdown dropdown1">
          <div class="bio">
            <img src="https://logo.clearbit.com/wesbos.com" />
            <p>
              Wes Bos sure does love web development. He teaches things like
              JavaScript, CSS and BBQ. Wait. BBQ isn't part of web development.
              It should be though!
            </p>
          </div>
        </div>
      </li>
      <li>
        <a href="#">Courses</a>
        <ul class="dropdown courses">
          <li>
            <span class="code">RFB</span>
            <a href="#">React For Beginners</a>
          </li>
          <li>
            <span class="code">ES6</span>
            <a href="#">ES6 For Everyone</a>
          </li>
          <li>
            <span class="code">NODE</span>
            <a href="#">Learn Node</a>
          </li>
          <li>
            <span class="code">STPU</span>
            <a href="#">Sublime Text Power User</a>
          </li>
          <li>
            <span class="code">WTF</span>
            <a href="#">What The Flexbox?!</a>
          </li>
          <li>
            <span class="code">GRID</span>
            <a href="#">CSS Grid</a>
          </li>
          <li>
            <span class="code">LRX</span>
            <a href="#">Learn Redux</a>
          </li>
          <li>
            <span class="code">CLPU</span>
            <a href="#">Command Line Power User</a>
          </li>
          <li>
            <span class="code">MMD</span>
            <a href="#">Mastering Markdown</a>
          </li>
        </ul>
      </li>

      <li>
        <a href="#">Other Links</a>
        <ul class="dropdown dropdown3">
          <li>
            <a class="button" href="#">Twitter</a>
          </li>
          <li>
            <a class="button" href="#">Facebook</a>
          </li>
          <li><a class="button" href="#">Blog</a></li>
          <li>
            <a class="button" href="#">Course Catalog</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "followerAlongNav",
  data() {
    let background;
    let nav;
    let triggers;
    const buffer = 4;
    return {
      background,
      nav,
      triggers,
      buffer
    };
  },
  methods: {
    handleEnter: function(e) {
      const element = e.target;
      element.classList.add("trigger-enter");
      setTimeout(() => {
        element.classList.contains("trigger-enter");
        element.classList.add("trigger-enter-active");
      }, 150);
      this.background.classList.add("open");

      const dropdown = element.querySelector(".dropdown");
      const dropdownCoords = dropdown.getBoundingClientRect();
      const navCoords = this.nav.getBoundingClientRect();

      const coords = {
        height: Math.round(dropdownCoords.height) + this.buffer,
        width: Math.round(dropdownCoords.width) + this.buffer,
        top: Math.round(dropdownCoords.top - navCoords.top) - this.buffer / 2,
        left: Math.round(dropdownCoords.left - navCoords.left) - this.buffer / 2
      };

      this.background.style.setProperty("width", `${coords.width}px`);
      this.background.style.setProperty("height", `${coords.height}px`);
      this.background.style.setProperty(
        "transform",
        `translate(${coords.left}px, ${coords.top}px)`
      );
      // e.stopPropogation(); //stop event bubbling
    }, //handleEnter

    handleLeave: function(e) {
      const element = e.target;
      element.classList.remove("trigger-enter", "trigger-enter-active");
      this.background.classList.remove("open");
      // e.stopPropogation(); //stop event bubbling
    } //handleLeave
  },

  mounted() {
    this.background = this.$refs.dropdownBackground;
    this.nav = this.$refs.followerAlongNav;
    this.triggers = this.nav.querySelectorAll(".cool > li");
    this.triggers.forEach(trigger =>
      trigger.addEventListener("mouseenter", this.handleEnter, {
        capture: false, //bubbling hierarchu top to bottom
        once: false //should work only once
      })
    );
    this.triggers.forEach(trigger =>
      trigger.addEventListener("mouseleave", this.handleLeave, {
        capture: false, //bubbling hierarchu top to bottom
        once: false //should work only once
      })
    );
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.followerAlongNav {
  display: flex;
  flex-direction: column;
  nav {
    position: relative;
    perspective: 600px;
  }

  .cool > li > a {
    color: yellow;
    text-decoration: none;
    font-size: 20px;
    background: rgba(0, 0, 0, 0.2);
    padding: 10px 20px;
    display: inline-block;
    margin: 20px;
    border-radius: 5px;
  }

  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }

  .cool > li {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .dropdown {
    opacity: 0;
    position: absolute;
    overflow: hidden;
    padding: 20px;
    top: -20px;
    border-radius: 2px;
    transition: all 0.5s;
    transform: translateY(100px);
    will-change: opacity;
    display: none;
  }

  .trigger-enter .dropdown {
    display: block;
  }

  .trigger-enter-active .dropdown {
    opacity: 1;
  }

  .dropdownBackground {
    width: 100px;
    height: 100px;
    position: absolute;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
      0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s, opacity 0.1s, transform 0.2s;
    transform-origin: 50% 0;
    display: flex;
    justify-content: center;
    opacity: 0;
    &.open {
      opacity: 1;
      position: absolute;
      .boxShadow(@three);

      & > span {
        position: relative;
        top: -24px;
        color: grey;
      }
    }
  }

  .bio {
    min-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.7;
  }

  .bio img {
    float: left;
    margin-right: 20px;
  }

  .courses {
    min-width: 300px;
  }

  .courses li {
    padding: 10px 0;
    display: block;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  .dropdown a {
    text-decoration: none;
    color: #ffc600;
  }

  a.button {
    background: black;
    display: block;
    padding: 10px;
    color: white;
    margin-bottom: 10px;
  }

  /* Matches Twitter, TWITTER, twitter, tWitter, TWiTTeR... */
  .button[href*="twitter"] {
    background: #019fe9;
  }
  .button[href*="facebook"] {
    background: #3b5998;
  }
  .button[href*="courses"] {
    background: #ffc600;
  }
}
</style>
