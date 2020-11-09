<template>
  <div class="showcase">
    <div class="name">
      <span class="title">{{ title }}</span>
      <div class="sub-title">{{ subtitle }}</div>
    </div>
    <div class="description">
      <slot name="description" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Showcase",
  props: {
    title: {
      required: true,
      type: String
    },
    subtitle: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customVariables.less";
@import (reference) "./../Less/customMixins.less";

.showcase {
  display: flex;
  flex-direction: row;
  font-size: @fontSize;
  color: @white;
  background-color: @primaryColor;
  text-align: center;
  padding: @spaceLg;
  border-radius: 4px;
  margin: @spaceLg;
  cursor: pointer;
  .boxShadow(@base @three);
  & * {
    text-decoration: none;
  }

  & > div {
    height: 240px;
    width: 240px;
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

  &:hover {
    background-color: @secondaryColor;
    & > div {
      &.name {
        display: none;
      }
      &.description {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
