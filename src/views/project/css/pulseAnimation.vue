<template>
  <div class="pulseAnimation">
    pulseAnimation
    <div class="pulse" />
    <spinner />

    <div v-for="(skill, index) in skillSet" :key="skill.type" class="skills">
      <!-- <h3>{{ skill.type }}</h3> -->
      <infinite-scroll :list="skill.value" :reverse="index % 2 === 1" />
    </div>
  </div>
</template>
<script>
import spinner from "./spinner.vue";
import infiniteScroll from "./infiniteScroll.vue";
import { skills } from "@/store/skills";
export default {
  name: "PulseAnimation",
  components: {
    spinner,
    infiniteScroll
  }, //components
  data() {
    const skillSet = skills;
    return {
      skillSet
    };
  } //data
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.pulseAnimation {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  & > div {
    &.pulse {
      border-radius: 50%;
      width: @fontSize;
      height: @fontSize;
      background: @secondaryColor;
      &::after {
        content: "";
        position: absolute;
        width: @fontSize;
        height: @fontSize;
        z-index: 1;
        border-radius: 50%;
        background: @secondaryColor;
        animation: pulse 1s ease infinite;
      }
    }
    &.skills {
      display: flex;
      flex-direction: column;
      height: 40px;
    }
  }
  @keyframes pulse {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
}
</style>
