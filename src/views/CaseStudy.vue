<template>
  <div class="caseStudy">
    <div class="title">
      <h1>Case Studies</h1>
      <p>
        Hello, I am located in Upstate New York area.
        <br />
        Feel free to use the contact form below and reach out to me for any
        questions yo might have.
        <br />
        You can also write to me the old fashion way.
      </p>
    </div>
    <h1>This is an CaseStudy page</h1>
  </div>
</template>

<style lang="less" scoped>
.caseStudy {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 480px;
  & > .title {
    margin-bottom: 8vh;
    & > h1 {
      text-align: center;
      & + p {
        font-size: 18px;
        text-align: center;
      }
    }
  }
}
</style>
