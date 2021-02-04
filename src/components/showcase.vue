<template>
  <div class="showcase">
    <router-link v-if="component" :to="{ name: component }">
      <h3>{{ project.title }}</h3>
    </router-link>
    <h3 v-else>{{ project.title }}</h3>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p v-html="project.description" />
    <ul v-if="project.tags">
      <template v-for="tag in project.tags" :key="tag">
        <li v-if="tag">
          <span class="fas fa-circle" />
          <span>{{ tag }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Showcase",
  props: {
    project: {
      required: true,
      type: Object
    },
    component: {
      required: false,
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customVariables.less";
@import (reference) "./../Less/customMixins.less";

.showcase {
  display: flex;
  flex-direction: column;
  color: @textColor;
  background-color: @backgroundColor;
  padding: @spaceMd @spaceLg;
  border-radius: @borderRadius;
  margin: @spaceMd @spaceLg;
  min-width: 240px;
  max-width: 24vw;
  .boxShadow(@one, @accentColor);

  & > div {
    &.name {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      & > .title {
        font-weight: bold;
        font-size: @fontSizeSm * 2;
      }
    }
    &.description {
      display: none;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    //offset the tag and account for position absolute
    margin-left: @spaceLg;
    //tag
    & > li {
      display: flex;
      flex-wrap: nowrap;
      font-size: @fontSize;
      position: relative;
      margin-bottom: @spaceMd;
      margin-right: @spaceLg + @spaceMd;
      background-color: @accentColor;
      border-radius: 0 @borderRadius @borderRadius 0;
      color: @textColor;
      align-self: center;
      width: fit-content;
      //triangle
      &:before {
        content: "";
        position: absolute;
        left: calc(-@fontSizeMd + 2px);
        border: solid calc(@fontSizeMd - 2px) transparent;
        border-left-width: 0;
        border-right-color: @accentColor;
      }
      //text and icon
      & > span {
        margin: 0 @spaceMd;
        color: @white;
        font-size: @fontSizeSm;
        font-weight: bold;
        letter-spacing: 2px !important;
        //fontawesome circle
        &.fas {
          position: absolute;
          top: 12px;
          left: -@fontSizeSm / 2;
          margin: 0;
          font-size: 10px;
          color: @white;
        }
      }
    }
  }
}
</style>
