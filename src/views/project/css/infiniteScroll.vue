<template>
  <div class="infiniteScroll">
    <div v-for="(l, index) in 10" :key="index" :class="{ first: index == 0 }">
      {{ l }}
    </div>
  </div>
</template>
<script>
export default {
  name: "InfiniteScroll",
  props: {
    list: {
      required: true,
      type: Array
    }
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.infiniteScroll {
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: space-around;
  height: 233px;
  width: 3550px;
  margin-bottom: 80px;

  & > div {
    min-height: 80px;
    min-width: 80px;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;

    /*keyframe animations*/
    &.first {
      -webkit-animation: bannermove 30s linear infinite;
      -moz-animation: bannermove 30s linear infinite;
      -ms-animation: bannermove 30s linear infinite;
      -o-animation: bannermove 30s linear infinite;
      animation: bannermove 30s linear infinite;
    }

    &:hover {
      -webkit-transform: scale(1.1);
      -moz-transform: scale(1.1);
      -o-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
      cursor: pointer;

      -webkit-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
    }
  }

  @keyframes bannermove {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: -2125px;
    }
  }

  @-moz-keyframes bannermove {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: -2125px;
    }
  }

  @-webkit-keyframes bannermove {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: -2125px;
    }
  }

  @-ms-keyframes bannermove {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: -2125px;
    }
  }

  @-o-keyframes bannermove {
    0% {
      margin-left: 0px;
    }
    100% {
      margin-left: -2125px;
    }
  }
}
</style>
