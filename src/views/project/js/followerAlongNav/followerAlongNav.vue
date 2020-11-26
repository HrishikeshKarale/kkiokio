<template>
  <nav ref="followerAlongNav" class="followerAlongNav">
    <div ref="dropdownBackground" class="dropdownBackground">
      <span class="fas fa-caret-up fa-2x" />
    </div>
    <slot />
  </nav>
</template>
<script>
export default {
  name: "FollowerAlongNav",
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

  mounted() {
    this.background = this.$refs.dropdownBackground;
    this.nav = this.$refs.followerAlongNav;
    this.triggers = this.nav.querySelectorAll("nav .cool > li");
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
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../../Less/customMixins.less";
@import (reference) "./../../../../Less/customVariables.less";
.followerAlongNav {
  display: flex;
  flex-direction: column;
  nav {
    position: relative;
    perspective: 600px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      &.cool > li {
        position: relative;
        display: flex;
        justify-content: center;
        & > a {
          color: yellow;
          text-decoration: none;
          font-size: 20px;
          background: rgba(0, 0, 0, 0.2);
          padding: 10px 20px;
          display: inline-block;
          margin: 20px;
          border-radius: 5px;
        }
      }
    }
  }
  .dropdown {
    opacity: 0;
    position: absolute;
    overflow: hidden;
    padding: 20px;
    top: -20px;
    border-radius: @borderRadiusSm;
    transition: @transition;
    transform: translateY(100px);
    will-change: opacity;
    display: none;
    &.bio {
      min-width: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1.7;
      & > img {
        float: left;
        margin-right: 20px;
      }
    }
    &.courses {
      min-width: 300px;
      & > li {
        padding: 10px 0;
        display: block;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      }
    }
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
    border-radius: @borderRadius;
    box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
      0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: @transition;
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
}
</style>
