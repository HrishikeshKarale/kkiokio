<template>
  <div v-if="breadcrums.length > 1" class="breadcrums">
    <template v-for="(crums, index) in breadcrums" :key="crums">
      <template v-if="isComponent(crums)[0] && breadcrums.length - 1 > index">
        <span
          v-if="index > 0 && isComponent(crums)[0]['comp']"
          class="fas fa-angle-right"
        />
        <router-link
          v-if="breadcrums.length - 1 > index"
          class="crums"
          :to="{ name: isComponent(crums)[0]['comp'] }"
        >
          <h5>{{ isComponent(crums)[0]["name"] }}</h5>
        </router-link>
      </template>
      <template v-if="breadcrums.length - 1 == index">
        <span class="fas fa-angle-right" />
        <h1>
          {{ crums }}
        </h1>
      </template>
    </template>
  </div>
</template>

<script>
import { nav } from "@/store/navigation";
import { projects } from "@/store/projects";

export default {
  name: "Breadcrums",
  data() {
    const projectsDescription = projects;
    const navigation = nav;
    const unique = [];
    return {
      projectsDescription,
      navigation,
      unique
    };
  }, //methods
  computed: {
    breadcrums: function() {
      let temp = ("home" + this.$route.path).split("/");
      temp = temp.filter(function(el) {
        return el != "";
      });
      return temp;
    }
  },

  mounted() {
    //get a list of components to be used for breadcrums
    this.projectsDescription.forEach(project => {
      project.value.forEach(proj => {
        this.unique = [
          { comp: proj.component, name: proj.title },
          ...this.unique
        ];
      });
    });
    this.navigation.forEach(nav => {
      this.unique = [{ comp: nav.component, name: nav.name }, ...this.unique];
    });
  },

  methods: {
    isComponent: function(comp) {
      return this.unique.filter(uni => {
        if (comp == uni["comp"]) {
          return uni.name;
        }
      });
      // if (comp) return this.unique.includes(comp);
    }, //isComponent

    subNav: function(selected) {
      this.projectsDescription.forEach(project => {
        project.value.forEach(proj => {
          console.log(proj.component, selected);
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";

.breadcrums {
  display: flex;
  flex-direction: row;
  margin: @spaceLg 0;
  align-items: center;
  & > .crums {
    padding: @spaceMd;
    text-decoration: none;
    & > h5 {
      margin: 0 !important;
    }
  }
  & > h1 {
    margin: 0 !important;
  }
  & > span {
    color: @textColor;
  }
  @media screen {
    @media (max-width: @maxWidth) {
      margin: @spaceXl 0 0 @spaceXl !important;
    }
  }
}
</style>
