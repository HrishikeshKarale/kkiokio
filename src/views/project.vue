//https://www.webdesignerdepot.com/2017/09/11-experimental-css-projects-thatll-blow-your-mind/
<template>
  <div class="projects">
    <p>
      Here is a list of projects that I have worked on.
      <br />
      The projects have vbeen divided into categories to make it easy for
      browsing.
    </p>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
export default {
  name: "Projects"
};
</script>

<style lang="less" scoped>
.projects {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 400px;
}
</style>
/* to add a project, add project details to the store project file and then add
the component to the route. links: 1. router: ../router/index.ts 2. store:
../store/projects */
