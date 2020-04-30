<template>
  <div class="packStation">
    <div>
      <router-link to="/Project">
        <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
      </router-link>
    </div>
    <div class="title">
      <h1>Pack Station</h1>
      <p>
        Sample Screens for a Mobile Pack Station.
        <br />
        Tha pack station is web app that can be used by users to pack and ship
        fulfillment orders in a warehouse.
        <br />
        This Project is a successful implementation of a grid which follows the
        Golden Ratio.
      </p>
    </div>
    <div class="body">
      <div>
        <template v-for="l in screens">
          <vue-img :key="l.id" :src="l.link" :alt="l.id + ' - ' + l.link" />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import vueImg from "@/components/vueImg.vue";
export default {
  name: "packStation",
  components: {
    vueImg
  },
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const screens = [
      {
        id: 32,
        link: require("@/assets/packstation/loginPage Packaging.jpg")
      },
      {
        id: 34,
        link: require("@/assets/packstation/1.svg")
      },
      {
        id: 35,
        link: require("@/assets/packstation/2.svg")
      },
      {
        id: 36,
        link: require("@/assets/packstation/3.svg")
      },
      {
        id: 37,
        link: require("@/assets/packstation/4.svg")
      },
      {
        id: 1,
        link: require("@/assets/packstation/5.svg")
      },
      {
        id: 2,
        link: require("@/assets/packstation/6.svg")
      },
      {
        id: 3,
        link: require("@/assets/packstation/7.svg")
      },
      {
        id: 4,
        link: require("@/assets/packstation/8.svg")
      },
      {
        id: 5,
        link: require("@/assets/packstation/9.svg")
      }
    ];
    return {
      screens
    };
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.packStation {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  & > div {
    &.title {
      margin-bottom: 8vh;
      & > h1 {
        text-align: center;
        & + p {
          font-size: 18px;
          text-align: center;
        }
      }
    }
    &.body {
      display: flex;
      flex-direction: column-reverse;
      flex-wrap: wrap;
      & > div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        &:last-child {
          img {
            margin: 8px 16px;
            border-radius: 8px;
            padding: 8px;
            height: 16vw;
            .boxShadow(@two);
          }
        }
      }
    }
  }
}
</style>
