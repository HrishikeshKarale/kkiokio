<template>
  <div class="caseStudy">
    <p>
      Hello, I am located in Upstate New York area.
      <br />
      Feel free to use the contact form below and reach out to me for any
      questions yo might have.
      <br />
      You can also write to me the old fashion way.
    </p>
  </div>
</template>
<script>
export default {
  name: "CaseStudy"
};
</script>

<style lang="less" scoped>
@import (reference) "./../../Less/customMixins.less";
@import (reference) "./../../Less/customVariables.less";

.caseStudy {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 400px;
}
</style>
