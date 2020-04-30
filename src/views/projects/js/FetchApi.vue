<template>
  <div class="fetchApi">
    <router-link to="/Project">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <div class="apiResponse">
      <template v-if="studioGhibli.response">
        <template v-for="data in studioGhibli.response">
          <div :key="data.id" :data-endpoint="data.id">
            {{ data.title }}
          </div>
        </template>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "fetchApi",
  data() {
    const studioGhibli = {
      baseURL: "https://ghibliapi.herokuapp.com/",
      endpoint: ["films", "people", "location", "species", "vehicles"],
      response: {}
    };
    const locationSearch = {
      baseURL:
        "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",
      endpoint: [],
      response: {}
    };
    return {
      locationSearch,
      studioGhibli
    };
  },
  methods: {
    getApiData: function(source, endpoint) {
      return fetch(source.baseURL + endpoint)
        .then(blob => blob.json())
        .then(data => {
          source.response = data;
        })
        .catch(error => console.log(error))
        .finally(() => {
          console.log(`Fetch executed on ${source.baseURL}`);
        });
    }
  },
  mounted() {
    this.getApiData(this.studioGhibli, this.studioGhibli.endpoint[0]);
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.fetchApi {
  width: 100%;
  height: 100%;
  & > div {
    display: flex;
    flex-direction: row;
    &.apiResponse {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
