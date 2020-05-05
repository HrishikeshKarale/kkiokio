<template>
  <div class="projects">
    <div class="title">
      <h1>projects</h1>
      <p>
        Currently My projects
        <br />
        Feel free to use the contact form below and reach out to me for any
        questions yo might have.
        <br />
        You can also write to me the old fashion way.
      </p>
    </div>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
export default {
  name: "projects"
};
</script>

<style lang="less" scoped>
.projects {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 480px;
  & > .title {
    margin-bottom: 8vh;
    & > h1 {
      text-align: center;
      & + p {
        text-align: center;
      }
    }
  }
}
</style>
