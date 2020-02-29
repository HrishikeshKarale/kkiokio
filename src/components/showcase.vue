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
  name: "showcase",
  props: ["title", "subtitle"]
};
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customVariables.less";
@import (reference) "./../Less/customMixins.less";

.showcase {
  display: flex;
  flex-direction: row;
  font-size: 20px;
  color: #fff;
  background-color: @primaryColor;
  text-align: center;
  padding: 16px;
  border-radius: 4px;
  margin: 16px;
  cursor: pointer;
  .boxShadow(@three);
  & > * {
    text-decoration: none;
  }

  &:hover {
    background-color: @secondaryColor;
    & > div {
      &.name {
        display: none;
      }
      &.description {
        display: flex;
      }
    }
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
        font-size: 32px;
      }
    }
    &.description {
      display: none;
    }
  }
}
</style>
