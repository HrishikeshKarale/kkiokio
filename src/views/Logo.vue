<template>
  <div class="logo">
    <div class="title">
      <h1>Logo's</h1>
      <p>
        A collection of Logo's and other illustrator projectss.
        <br />
        As a not so creative individual, this is an attept to explore
        illustrator and try my hand it.
        <br />
        Thee are either reproductions, modifications own own ideas and projectss
        that I came up with.
      </p>
    </div>
    <div class="body">
      <div>
        <template v-for="l in logos">
          <vue-img :key="l.id" :src="l.link" :alt="l.id + ' - ' + l.link" />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import vueImg from "@/components/vueImg.vue";
export default {
  name: "logo",
  components: {
    vueImg
  },
  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logos = [
      {
        id: 32,
        link: require("@/assets/logo/Artboard1.svg")
      },
      {
        id: 34,
        link: require("@/assets/logo/Artboard3.svg")
      },
      {
        id: 35,
        link: require("@/assets/logo/Artboard4.svg")
      },
      {
        id: 36,
        link: require("@/assets/logo/Artboard5.svg")
      },
      {
        id: 37,
        link: require("@/assets/logo/Artboard 32.svg")
      },
      {
        id: 1,
        link: require("@/assets/logo/Artboard 1.svg")
      },
      {
        id: 2,
        link: require("@/assets/logo/Artboard 2.svg")
      },
      {
        id: 3,
        link: require("@/assets/logo/Artboard 3.svg")
      },
      {
        id: 4,
        link: require("@/assets/logo/Artboard 4.svg")
      },
      {
        id: 5,
        link: require("@/assets/logo/Artboard 5.svg")
      },
      {
        id: 6,
        link: require("@/assets/logo/Artboard 6.svg")
      },
      {
        id: 7,
        link: require("@/assets/logo/Artboard 7.svg")
      },
      {
        id: 8,
        link: require("@/assets/logo/Artboard 8.svg")
      },
      {
        id: 9,
        link: require("@/assets/logo/Artboard 9.svg")
      },
      {
        id: 10,
        link: require("@/assets/logo/Artboard 10.svg")
      },
      {
        id: 11,
        link: require("@/assets/logo/Artboard 11.svg")
      },
      {
        id: 12,
        link: require("@/assets/logo/Artboard 12.svg")
      },
      {
        id: 13,
        link: require("@/assets/logo/Artboard 13.svg")
      },
      {
        id: 14,
        link: require("@/assets/logo/Artboard 14.svg")
      },
      {
        id: 15,
        link: require("@/assets/logo/Artboard 15.svg")
      },
      {
        id: 16,
        link: require("@/assets/logo/Artboard 16.svg")
      },
      {
        id: 17,
        link: require("@/assets/logo/Artboard 27.svg")
      },
      {
        id: 18,
        link: require("@/assets/logo/Artboard 28.svg")
      },
      {
        id: 19,
        link: require("@/assets/logo/Artboard 29.svg")
      },
      {
        id: 20,
        link: require("@/assets/logo/Artboard 30.svg")
      },
      {
        id: 21,
        link: require("@/assets/logo/Artboard 31.svg")
      },
      {
        id: 22,
        link: require("@/assets/logo/Artboard 18.svg")
      },
      {
        id: 23,
        link: require("@/assets/logo/Artboard 19.svg")
      },
      {
        id: 24,
        link: require("@/assets/logo/Artboard 20.svg")
      },
      {
        id: 25,
        link: require("@/assets/logo/Artboard 21.svg")
      },
      {
        id: 26,
        link: require("@/assets/logo/Artboard 22.svg")
      },
      {
        id: 27,
        link: require("@/assets/logo/Artboard 23.svg")
      },
      {
        id: 28,
        link: require("@/assets/logo/Artboard 24.svg")
      },
      {
        id: 29,
        link: require("@/assets/logo/Artboard 25.svg")
      },
      {
        id: 30,
        link: require("@/assets/logo/Artboard 26.svg")
      },
      {
        id: 31,
        link: require("@/assets/logo/Artboard 27.svg")
      },
      {
        id: 33,
        link: require("@/assets/logo/Artboard2.svg")
      }
    ];
    return {
      logos: logos
    };
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";
.logo {
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
            max-width: 16vw;
            min-width: 320px;
            height: auto;
            .boxShadow(@two);
          }
        }
      }
    }
  }
}
</style>
