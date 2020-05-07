<template>
  <div class="projects">
    <!-- <div class="title"> -->
      <h1>My Projects</h1>
      <!-- <p>
        Currently My rojects
        <br />
        Feel free to use the contact form below and reach out to me for any
        questions yo might have.
        <br />
        You can also write to me the old fashion way.
      </p>
    </div> -->
    <!-- <div class="content"> -->
    <!-- <span @click="$router.go(-1)" class="fas fa-angle-double-left fa-2x">
      Go Back
    </span> -->
    <!-- <router-link to="/project">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link> -->
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
