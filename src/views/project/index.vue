<template>
  <div class="projectList">
    <article>
      <section v-for="projects in projectsDescription" :key="projects.type">
        <h2>{{ projects.type }}</h2>
        <div>
          <div v-for="project in projects.value" :key="project.id">
            <router-link
              :to="{
                name: project.component
              }"
            >
              <showcase :title="project.title" :subtitle="project.subtitle">
              </showcase>
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
  name: "projectList",
  data() {
    const projectsDescription = projects;
    return {
      projectsDescription
    };
  },
  components: {
    showcase
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
    & > a,
    & > a > * {
      text-decoration: none;
    }
  }
}
</style>
