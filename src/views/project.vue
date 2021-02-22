//https://www.webdesignerdepot.com/2017/09/11-experimental-css-projects-thatll-blow-your-mind/
<template>
  <div class="projects">
    <p>
      Here is a list of projects that I have worked on.
      <br />
      The projects have vbeen divided into categories to make it easy for
      browsing.
    </p>
    <section
      v-for="projects in projectList"
      :id="projects.type"
      :key="projects.type"
    >
      <h2>{{ projects.type }}</h2>
      <div>
        <template v-for="project in projects.value" :key="project.id">
          <showcase :project="project" :component="project.component" />
        </template>
      </div>
    </section>
    <!-- <router-view :key="$route.path" /> -->
  </div>
</template>

<script>
import showcase from "@/components/showcase.vue";
import { projects } from "@/store/projects";
export default {
  name: "Projects",
  components: {
    showcase
  },
  data() {
    const projectsDescription = projects;
    const propFilter = null;
    return {
      projectsDescription,
      propFilter
    };
  },
  computed: {
    projectList: function() {
      // console.log(this.propFilter);
      if (this.propFilter) {
        this.projectsDescription.filter(project => {
          return project.value.forEach(val =>
            val.tags.includes(this.propFilter)
          );
        });
      }
      return this.projectsDescription;
    }
  },
  created() {
    this.propFilter = this.$route.query.filter;
    // console.log(this.projectsDescription);
  },
  mounted() {
    // console.log("mounted: ", this.projectList);
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";
.projects {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 400px;
  & > section > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    flex: 1 2 0;
    & > div {
      border: 1px dashed @primaryColor;
    }
  }
}
</style>
/* to add a project, add project details to the store project file and then add
the component to the route. links: 1. router: ../router/index.ts 2. store:
../store/projects */
