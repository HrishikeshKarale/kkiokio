<template>
  <div class="logo">
    <div>
      <div>
        <img :src="selected" />
      </div>
      <div>
        <template v-for="l in logos">
          <img @click.prevent="select(l.link)" :key="l.id" :src="l.link" />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "logo",
  data() {
    const selected = null;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logos = [
      {
        id: 1,
        link: require("../assets/logo/Artboard 1.svg")
      },
      {
        id: 2,
        link: require("../assets/logo/Artboard 2.svg")
      },
      {
        id: 3,
        link: require("../assets/logo/Artboard 3.svg")
      },
      {
        id: 4,
        link: require("../assets/logo/Artboard 4.svg")
      },
      {
        id: 5,
        link: require("../assets/logo/Artboard 5.svg")
      },
      {
        id: 6,
        link: require("../assets/logo/Artboard 6.svg")
      },
      {
        id: 7,
        link: require("../assets/logo/Artboard 7.svg")
      },
      {
        id: 8,
        link: require("../assets/logo/Artboard 8.svg")
      },
      {
        id: 9,
        link: require("../assets/logo/Artboard 9.svg")
      },
      {
        id: 10,
        link: require("../assets/logo/Artboard 10.svg")
      },
      {
        id: 11,
        link: require("../assets/logo/Artboard 11.svg")
      },
      {
        id: 12,
        link: require("../assets/logo/Artboard 12.svg")
      },
      {
        id: 13,
        link: require("../assets/logo/Artboard 13.svg")
      },
      {
        id: 14,
        link: require("../assets/logo/Artboard 14.svg")
      },
      {
        id: 15,
        link: require("../assets/logo/Artboard 15.svg")
      },
      {
        id: 16,
        link: require("../assets/logo/Artboard 16.svg")
      },
      {
        id: 17,
        link: require("../assets/logo/Artboard 27.svg")
      },
      {
        id: 18,
        link: require("../assets/logo/Artboard 28.svg")
      },
      {
        id: 19,
        link: require("@/assets/logo/Artboard 29.svg")
      },
      {
        id: 20,
        link: require("../assets/logo/Artboard 30.svg")
      },
      {
        id: 21,
        link: require("../assets/logo/Artboard 31.svg")
      },
      {
        id: 22,
        link: require("../assets/logo/Artboard 18.svg")
      },
      {
        id: 23,
        link: require("../assets/logo/Artboard 19.svg")
      },
      {
        id: 24,
        link: require("../assets/logo/Artboard 20.svg")
      },
      {
        id: 25,
        link: require("../assets/logo/Artboard 21.svg")
      },
      {
        id: 26,
        link: require("../assets/logo/Artboard 22.svg")
      },
      {
        id: 27,
        link: require("../assets/logo/Artboard 23.svg")
      },
      {
        id: 28,
        link: require("../assets/logo/Artboard 24.svg")
      },
      {
        id: 29,
        link: require("../assets/logo/Artboard 25.svg")
      },
      {
        id: 30,
        link: require("../assets/logo/Artboard 26.svg")
      },
      {
        id: 31,
        link: require("../assets/logo/Artboard 27.svg")
      }
    ];
    return {
      selected: selected,
      logos: logos
    };
  },
  methods: {
    select: function(link) {
      this.selected = link;
    }
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
    display: flex;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    align-items: baseline;
    & > div {
      margin: 16px;
      & > img {
        width: 32vh;
        height: auto;
      }
      &:last-child {
        align-items: baseline;
        width: 64vw;
        .scroll(60vh);
        .boxShadow(@one);
        img {
          margin: 16px;
          padding: 16px;
          width: 200px;
          height: auto;
          .boxShadow(@two);
          cursor: pointer;
        }
      }
    }
  }
}
</style>
