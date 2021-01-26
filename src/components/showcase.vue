<template>
  <div class="showcase">
    <h3>{{ project.title }}</h3>
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
  padding: @spaceLg;
  border-radius: @borderRadius;
  margin: @spaceLg;
  min-width: 240px;
  max-width: 24vw;
  cursor: pointer;
  .boxShadow(@one);
  & * {
    text-decoration: none;
  }

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
    //tag
    & > li {
      font-size: @fontSize;
      position: relative;
      margin-bottom: @spaceMd;
      margin-left: @spaceLg;
      padding: 0 10px 0 12px;
      background-color: @accentColor;
      border-radius: 0 @borderRadius @borderRadius 0;
      color: @textColor;
      width: fit-content;
      //triangle
      &:before {
        content: "";
        position: absolute;
        left: -@fontSizeSm;
        border: solid @fontSizeSm transparent;
        border-left-width: 0;
        border-right-color: @accentColor;
      }
      & > span {
        margin: 0 @spaceMd;
        //fontawesome circle
        &.fas {
          position: absolute;
          top: 9px;
          left: 0;
          margin: 0;
          font-size: 10px;
          color: @white;
        }
      }
    }
  }
}
</style>
