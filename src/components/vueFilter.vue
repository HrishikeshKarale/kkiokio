<template>
  <div class="vueFilter">
    <div
      :class="{
        open: showFilter || (selected && selected['type'].length != 0)
      }"
    >
      <vue-button
        type="button"
        tag="filterButton"
        icon="fas fa-filter"
        text="Filter"
        category="text"
        :ctx="toggleFilter"
      />
      <template v-if="selected && selected['type'].length >= 0">
        <div
          v-for="(item, index) in selected['type']"
          :key="index"
          class="selectedFilter"
        >
          <template v-if="Array.isArray(selected['value'][index])">
            <div
              v-for="val in selected['value'][index]"
              :key="val"
              class="multi"
            >
              <small data-toggle="tooltip" data-placement="top" :title="item">
                {{ val }}
              </small>
              <span
                class="fas fa-times"
                @click.self="removeFilter(item, val)"
              />
            </div>
          </template>
          <template v-else>
            <div data-toggle="tooltip" data-placement="top" :title="item">
              {{ selected["value"][index] }}
            </div>
            <span
              class="fas fa-times"
              @click.self="removeFilter(item, selected['value'][index])"
            />
          </template>
        </div>
      </template>
    </div>
    <div v-show="showFilter">
      <div>
        <dropdown-list
          label="Type"
          name="filterType"
          :value="filterTypeValue"
          :options="filters['type']"
          @notify="alerts"
          @value="val => (filterTypeValue = val)"
        />
      </div>
      <div v-if="optionsIndex > -1">
        <dropdown-list
          label="Value"
          name="filterType"
          :value="filterOptionValue"
          :options="filters['options'][optionsIndex]"
          @notify="alerts"
          @value="val => (filterOptionValue = val)"
        />
      </div>
      <div v-if="optionsIndex > -1">
        <vue-button
          type="button"
          tag="filterButton"
          text="Add"
          category="small"
          :disabled="filterOptionValue == null"
          :ctx="updateFilter"
        />
      </div>
    </div>
  </div>
</template>

<script>
import vueButton from "./vueButton.vue";
import dropdownList from "./dropdownList.vue";

export default {
  name: "VueFilter", //computed

  components: {
    dropdownList,
    vueButton
  },

  props: {
    filters: {
      required: true,
      type: Object
    },

    selected: {
      required: false,
      type: Object,
      default: null
    }
  }, //props

  emits: ["updateFilter"],

  data() {
    const filterTypeValue = null;
    const filterOptionValue = null;
    const showFilter = false;
    return {
      filterTypeValue,
      filterOptionValue,
      showFilter
    }; //return
  }, //data

  computed: {
    optionsIndex: function() {
      return this.filters["type"].indexOf(this.filterTypeValue);
    }
  }, //computed

  methods: {
    alerts: function(type, message) {
      if (type == "warning") {
        this.dWarning = message;
      } else if (type == "error") {
        this.dDanger = message;
      } else {
        alert("error in input alert module");
      }
    }, //alerts

    toggleFilter: function() {
      this.showFilter = !this.showFilter;
    }, //toggleFilter

    removeFilter: function(type, value) {
      this.filterOptionValue = value;
      this.filterTypeValue = type;
      this.updateFilter();
    }, //removeFilter

    updateFilter: function() {
      this.$emit("updateFilter", {
        type: this.filterTypeValue,
        value: this.filterOptionValue
      });
      this.filterOptionValue = null;
      this.filterTypeValue = null;
      if (this.showFilter) {
        this.toggleFilter();
      }
    } //updateFilter
  } //methods
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../Less/customVariables.less";
@import (reference) "../Less/customMixins.less";

@color: @primaryColor;

.vueFilter {
  display: flex;
  flex-direction: column;
  background-color: @backgroundColor;
  border: 1px dashed @secondaryColor;
  // width: fit-content;
  padding: @spaceMd;
  border-radius: @borderRadius;
  position: relative;
  & > div {
    &:first-child {
      &.open {
        background-color: @backgroundColor;
        width: fit-content;
        border-radius: @borderRadius;
        border: 1px solid ~"darken(@backgroundColor, 10%)";
      }
      .selectedFilter {
        font-size: @fontSizeSm;
        display: inline-flex;
        flex-direction: row;
        // justify-content: space-between;

        & > .multi {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
        }
        & > div {
          font-weight: bold;
          gap: @spaceMd;
          letter-spacing: 1px;
          background-color: @primaryColor;
          color: @white;
          border-radius: @borderRadius;
          padding: 0 @spaceSm;
          span {
            align-self: center;
          }
        }
      }
    }
    &:last-child {
      display: flex;
      flex-direction: column;
      padding: @spaceSm @spaceMd;
      border-radius: 0 4px 4px 4px;
      background-color: @backgroundColor;
      position: absolute;
      top: 32px;
      .boxShadow(@two, @accentColor);
      z-index: @contentZ + 15;
      & > div {
        &:last-child {
          display: flex;
          flex-direction: row-reverse;
        }
      }
    }
  }
}
</style>
