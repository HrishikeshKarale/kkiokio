//https://www.webdesignerdepot.com/2017/09/11-experimental-css-projects-thatll-blow-your-mind/
<template>
  <div class="projects">
    <p>
      Here is a list of projects that I have worked on.
      <br />
      The projects have vbeen divided into categories to make it easy for
      browsing.
    </p>
    <vue-filter
      :filters="{ type: ['tags'], options: [filterList] }"
      :selected="{ type: ['tags'], value: [propFilter] }"
      @updateFilter="updateFilter"
    />
    <section
      v-for="projects in projectsDescription"
      :id="projects.type"
      :key="projects.type"
    >
      <h2>{{ projects.type }}</h2>
      <div>
        <div v-for="project in projects.value" :key="project.id">
          <showcase
            v-show="
              propFilter.length == 0 ||
                (propFilter.length > 0 &&
                  propFilter.some(filter => project.tags.includes(filter)))
            "
            :project="project"
            :component="project.component"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import vueFilter from "@/components/vueFilter.vue";
import showcase from "@/components/showcase.vue";
import { projects } from "@/store/projects";
export default {
  name: "Projects",
  components: {
    vueFilter,
    showcase
  },
  data() {
    const projectsDescription = projects;
    const propFilter = [];
    const filterList = [];
    return {
      projectsDescription,
      propFilter,
      filterList
    };
  },
  created() {
    const tempPropFilter = this.$route.query.filter;
    if (tempPropFilter) {
      this.propFilter = [this.$route.query.filter];
    }
    this.projectsDescription.forEach(project => {
      project.value.forEach(val => {
        this.filterList = [...val.tags, ...this.filterList];
      });
    });
  },
  methods: {
    //needs work
    updateFilter: function(filter) {
      //type does not exists
      if (this.propFilter.length == 0) {
        this.propFilter.push(filter.value);
      } else {
        //type alerady exists
        const index = this.propFilter.indexOf(filter.value);
        //filter does not exists
        // console.log(index, this.propFilter, filter);
        if (index == -1) {
          this.propFilter = [...this.propFilter, filter.value];
          // console.log(this.propFilter, filter);
        } else {
          this.propFilter.splice(index, 1);
        }
      }
    } //updateFilter
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";
.projects {
  display: flex;
  flex-direction: column;
  & > section {
    & > div {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
