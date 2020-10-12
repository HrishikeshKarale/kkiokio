<template>
  <div class="projects">
    <h1>My Projects</h1>
    <scroll-indicator>
      <router-view :key="$route.path" />
    </scroll-indicator>
  </div>
</template>

<script>
import scrollIndicator from "@/views/project/js/scrollIndicator/scrollIndicator.vue";

export default {
  name: "projects",
  components: {
    scrollIndicator
  }
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
/* to add a project, add project details to the store project file and then add
the component to the route. links: 1. router: ../router/index.ts 2. store:
../store/projects */
