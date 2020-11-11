<template>
  <div class="projectList">
    <article>
      <section
        v-for="projects in projectsDescription"
        :id="projects.type"
        :key="projects.type"
      >
        <h2>{{ projects.type }}</h2>
        <div>
          <div v-for="project in projects.value" :key="project.id">
            <router-link
              :to="{
                name: project.component
              }"
            >
              <showcase :project="project" />
            </router-link>
          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
import showcase from "@/components/showcase.vue";
import { projects } from "@/store/projects";

export default {
  name: "ProjectList",
  components: {
    showcase
  },
  data() {
    const projectsDescription = projects;
    return {
      projectsDescription
    };
  }
};
</script>
<style lang="less" scoped>
.projectList {
  display: flex;
  flex-direction: column;

  & > article > section > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
  }
}
</style>
