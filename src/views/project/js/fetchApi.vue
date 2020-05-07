<template>
  <div class="fetchApi">
    <div class="apiResponse">
      {{ studioGhibli.response }}
      <template v-if="studioGhibli.response[0]">
        <template v-for="data in studioGhibli.response[0]">
          <div :key="data.id" :data-title="data.title">
            <h3>{{ data.title }}</h3>
            <div :class="{ description: true, show: show.includes(data.id) }">
              {{ data.description }}
            </div>
            <div class="viewMore">
              <vue-button
                buttopName="editButton"
                buttonText="view more"
                buttonStyle="text-sm"
                :onClickAction="toggle.bind(this, data.id)"
              />
            </div>
            <div class="info">
              <div>
                <label for="">director:</label>
                <span>{{ data.director }}</span>
              </div>
              <div>
                <label for="">producer:</label>
                <span>{{ data.producer }}</span>
              </div>
              <div>
                <label for="">release date:</label>
                <span>{{ data.release_date }}</span>
              </div>
              <div>
                <label for="">rt score:</label>
                <span>{{ data.rt_score }}</span>
              </div>
            </div>
          </div>
        </template>
      </template>
      <template v-if="studioGhibli.response[0]">
        <template v-for="data in studioGhibli.response[0]">
          <div :key="data.id" :data-title="data.title">
            <h3>{{ data.title }}</h3>
            <div :class="{ description: true, show: show.includes(data.id) }">
              {{ data.description }}
            </div>
            <div class="viewMore">
              <vue-button
                buttopName="editButton"
                buttonText="view more"
                buttonStyle="text-sm"
                :onClickAction="toggle.bind(this, data.id)"
              />
            </div>
            <div class="info">
              <div>
                <label for="">director:</label>
                <span>{{ data.director }}</span>
              </div>
              <div>
                <label for="">producer:</label>
                <span>{{ data.producer }}</span>
              </div>
              <div>
                <label for="">release date:</label>
                <span>{{ data.release_date }}</span>
              </div>
              <div>
                <label for="">rt score:</label>
                <span>{{ data.rt_score }}</span>
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
</template>
<script>
import vueButton from "@/components/vueButton.vue";
import { toggle } from "@/typeScript/toggle.js";
export default {
  name: "fetchApi",
  data() {
    const studioGhibli = {
      baseURL: "https://ghibliapi.herokuapp.com/",
      endpoint: ["films", "people", "locations", "species", "vehicles"],
      response: []
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
  components: {
    vueButton
  },
  mixins: [toggle],
  methods: {
    getApiData: function(source, index) {
      return fetch(source.baseURL + source.endpoint[index])
        .then(blob => blob.json())
        .then(data => {
          source.response[index] = data;
        })
        .catch(error => console.error(error))
        .finally(() => {
          console.log(`Fetch executed on ${source.baseURL}`);
        });
    }
  },
  mounted() {
    this.getApiData(this.studioGhibli, 0);
    this.getApiData(this.studioGhibli, 1);
    this.getApiData(this.studioGhibli, 2);
    this.getApiData(this.studioGhibli, 3);
    this.getApiData(this.studioGhibli, 4);
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
    &.apiResponse {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      & > div {
        flex: 1;
        min-height: 320px;
        max-height: fit-content;
        min-width: 320px;
        border-radius: 4px;
        padding: @spaceMd @spaceLg;
        margin: @spaceMd @spaceLg;
        .boxShadow(@two);
        & > div {
          &.info {
            margin-top: @spaceXl;
            & > div {
              display: flex;
              justify-content: space-between;
            }
          }
          &.viewMore {
            & > div {
              float: right;
            }
          }
          &.description {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2; /* number of lines to show */
            -webkit-box-orient: vertical;
            &.show {
              display: block;
              overflow: visible;
              text-overflow: visible;
              -webkit-line-clamp: none;
              -webkit-box-orient: box-flex;
            }
          }
        }
      }
    }
  }
}
</style>
