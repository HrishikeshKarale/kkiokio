/* eslint-disable vue/custom-event-name-casing */ /* eslint-disable
vue/custom-event-name-casing */
<template>
  <div class="vueTable" :class="{ inner: subtableId }">
    <table>
      <thead>
        <tr class="searchRow">
          <th>
            <div>
              {{ title
              }}<input
                name="table"
                type="hidden"
                :value="metadata.selected"
                required="1==1"
              />
            </div>
            <div>
              <text-input
                v-model="searchKey"
                name="tableSearchField"
                placeholder="Search..."
                input-icon="fas fa-search"
              />
            </div>
          </th>
        </tr>
        <tr>
          <th>
            <div
              :class="{
                showOptions: metadata.selected && metadata.selected.length > 0
              }"
            >
              <div>
                <input
                  v-if="!subtableId"
                  id="selectAllRows"
                  type="checkbox"
                  @click="selectAllFromPage"
                />
              </div>
              <div v-if="metadata.selected && metadata.selected.length > 0">
                <div>
                  {{
                    metadata.selected &&
                    metadata.selected.length == tableData.length
                      ? "All " + metadata.selected.length + " Selected"
                      : "Selected: " + metadata.selected.length
                  }}
                </div>
                <div
                  v-if="!subtableId"
                  class="smalltext"
                  @click.stop="textSelectAll()"
                >
                  <template
                    v-if="
                      metadata.selected &&
                        metadata.selected.length > 0 &&
                        metadata.selected.length < metadata.totalRecords
                    "
                  >
                    All {{ metadata.totalRecords }}
                  </template>
                </div>
                <div
                  v-if="!subtableId"
                  class="smalltext"
                  @click.stop="textSelectNone()"
                >
                  <template
                    v-if="
                      metadata.selected &&
                        metadata.selected.length > 0 &&
                        metadata.selected.length <= metadata.totalRecords
                    "
                  >
                    None
                  </template>
                </div>
              </div>
            </div>

            <!-- <div v-else-if= 'subtableId'>
							id: {{subtableId}}
						</div> -->
          </th>

          <th
            v-for="col in columns"
            :key="col.index"
            :class="{ active: metadata.sortKey == col }"
            @click.stop="setSortKey(col)"
          >
            <!-- {{ nameConvention.capitalize(col) }} -->
            {{ col }}
            <!-- <span
							v-if= 'metadata.sortKey == col'
							class= 'fas .fa-stack-1x'
							:class= 'metadata.sortOrders[col] > 0 ? "fa-sort-up" : "fa-sort-down"'
						/> -->
            <span class="fa-stack">
              <i
                class="fas fa-stack-1x"
                :class="
                  metadata.sortKey != col
                    ? 'fa-sort'
                    : metadata.sortOrders[col] > 0
                    ? 'fa-sort-up asc'
                    : null
                "
              />
              <i
                v-show="metadata.sortKey == col"
                class="fas fa-stack-1x"
                :class="
                  metadata.sortKey != col
                    ? 'fa-sort'
                    : metadata.sortOrders[col] > 0
                    ? null
                    : 'fa-sort-down dsc'
                "
              />
            </span>
          </th>
          <th>
            Action
            <div class="editColumns">
              <span
                class="fas fa-cog"
                :class="{ open: editColumns }"
                @click.stop="editColumns = !editColumns"
              />
              <!-- <div
								:class= '{open: editColumns}'
							>
								<checkbox-input
									name= "editColumns"
									v-model= "columns"
									:options= 'columns'
									:inline= '!dBooleanTrue'
								/>
							</div> -->
              <ul :class="{ open: editColumns }">
                <li>
                  <label>Display Columns</label>
                </li>
                <li v-for="col in columns" :key="col">
                  <label>
                    <input
                      type="checkbox"
                      :value="col"
                      :checked="columns.includes(col) ? true : false"
                      @click="toggleColumns(col)"
                    />
                    {{ col }}
                  </label>
                </li>
              </ul>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <template
          v-for="(entry, index) in tableData"
          :key="index"
          :entry="entry"
        >
          <tr
            :id="entry[select]"
            :class="{
              selected:
                metadata.selected && metadata.selected.includes(entry[select])
            }"
            @click.stop="SelectRow(entry[select])"
          >
            <td>
              <input
                v-if="!subtableId"
                type="checkbox"
                class="selectRow"
                :checked="
                  metadata.selected && metadata.selected.includes(entry[select])
                    ? true
                    : false
                "
                @click.self="toggleCheckbox(entry[select])"
              />
            </td>

            <td v-for="col in columns" :key="col">
              {{ entry[col] }}
            </td>
            <td>
              <vue-modal
                :modal-title="'Delete ' + entry[select]"
                tag="toggleExpandButton"
                icon="fas fa-trash-alt"
                :ctx="consoleClickDelete"
              >
                you can use custom content here to overwrite default content

                <h3>
                  Custom body
                </h3>
              </vue-modal>
              <vue-button
                :type="buttonType"
                tag="ExpandRow"
                :icon="
                  entry ? 'fas fa-chevron-left' : 'fas fa-chevron-up'
                "
                :category="dcategory[12]"
                :ctx="toggleSubTable.bind(this, entry)"
              />
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="paging">
      <div>
        <dropdown-list
          v-model="dropdownValue"
          label="Show"
          name="showRecords"
          :options="metadata.recordsPerPage"
          :required="dBooleanTrue"
          :inline="dBooleanTrue"
        />
      </div>
      <div>
        <div>
          Showing {{ metadata.start }} - {{ metadata.end }} of
          {{ metadata.totalRecords }} Results.
        </div>
        <div>
          -->
          <vue-button
            v-show="metadata.pageNumber > 1"
            :type="buttonType"
            tag="previousPage"
            icon="fas fa-chevron-left"
            :category="dcategory[12]"
            :ctx="setPage.bind(this, metadata.pageNumber - 1)"
          />
        </div>
        <div>Page {{ metadata.pageNumber }}</div>
        <div>
          -->
          <vue-button
            v-show="metadata.pageNumber < metadata.pageCount"
            :type="buttonType"
            tag="nextPage"
            icon="fas fa-chevron-right"
            :category="dcategory[12]"
            :ctx="setPage.bind(this, metadata.pageNumber + 1)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueButton from "@/components/vueButton";
import dropdownList from "@/components/dropdownList";
import textInput from "@/components/textInput";
import vueModal from "@/components/vueModal";
import { nameConvention } from "@/typeScript/nameConvention";
import { computed } from "vue";

// import { store } from '@/store/store'
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "VueTable", //props

  components: {
    vueButton,
    vueModal,
    dropdownList,
    textInput
  },

  // store,
  mixins: [nameConvention],

  mapActions,

  mapState,

  mapMutations, //computed

  props: {
    tableData: {
      required: true,
      type: Array,
      default: null
    },

    // columns: {
    //   required: true,
    //   type: Array,
    //   default: null
    // },

    metadata: {
      required: true,
      type: Object,
      default: null
    },

    title: {
      required: false,
      type: [String, null],
      default: null
    },

    subtableId: {
      required: false,
      type: [String, null],
      default: null
    },

    select: {
      required: false,
      type: [String, null],
      default: null
    }
  }, //filters

  emits: [
    "toggle-cloumns",
    "set-page",
    "set-sort-key",
    "set-row-elements",
    "selected",
    "metadata"
  ],

  setup(props, { emit }) {
    const search = computed({
      get: () => this.metadata.searchKey,
      set: value => emit("metadata", value)
    });

    return {
      search
    };
  }, //setup

  data() {
    const rowElements = this.metadata.rowElements;
    const dropdownValue = this.metadata.rowElements;
    const editColumns = false;
    const columns = null;
    const buttonType = "button";
    const dBooleanTrue = true;
    const dcategory = [
      "standard",
      "large",
      "small",
      "fullWidth",
      "border",
      "border-sm",
      "border-lg",
      "border-fwidth",
      "text",
      "text-sm",
      "text-lg",
      "icon",
      "icon-sm",
      "icon-lg"
    ];
    return {
      columns,
      dBooleanTrue,
      buttonType,
      rowElements,
      dropdownValue,
      editColumns,
      dcategory
    }; //return
  }, //components

  computed: {
    showRecords: function() {
      return this.metadata.rowElements;
    }, //metadata.showRecords

    searchKey: {
      set(value) {
        if (value != this.metadata.searchKey) {
          this.$store.dispatch("setmetadata.searchKeyValue", value);
        }
      },
      get() {
        return this.$store.state.metadata.searchKey;
      }
    } //metadata.searchKey
  }, //methods

  created() {
    const tempArray = [];

    Object.keys(this.tableData[0]).forEach(function eachKey(key) {
      tempArray.push(key); // alerts key
    });
    this.columns = tempArray;
  }, //created

  methods: {
    toggleColumns: function(newValue) {
      this.$emit("toggle-cloumns", newValue);
    }, //toggleColumns

    toggleSubTable: function() {
      //do something
    }, //toggleSubTable

    dataTableColumns: function() {
      this.column = Object.keys(this.tableData[0]).forEach(function eachKey(
        key
      ) {
        return key; // alerts key
        // alert(foo[key]); // alerts value
      });
    }, //dataTablecolumns

    intermediateState: function(selected) {
      const selectAllrows = document.getElementById("selectAllRows");

      if (selected) {
        if (selected.length == 0) {
          selectAllrows.indeterminate = false;
          selectAllrows.checked = false;
        } else if (selected && selected.length < this.tableData.length) {
          selectAllrows.indeterminate = true;
          selectAllrows.checked = false;
        } else if (selected && selected.length == this.tableData.length) {
          selectAllrows.indeterminate = false;
          selectAllrows.checked = true;
        }
      } else {
        selectAllrows.indeterminate = false;
        selectAllrows.checked = false;
      }
    }, //intermediate

    toggleCheckbox: function(id) {
      event.target.checked = false;
      this.SelectRow(id);
    }, //toggleCheckbox

    //check or uncheck a checkbox DOM and include it in the selected[] for the table
    SelectRow: function(id) {
      const selected = this.metadata.selected;
      const tr = document.getElementById(id);
      const checkbox = tr.getElementsByClassName("selectRow")[0];

      //check if already exists
      if (!checkbox.checked) {
        //if not then add
        selected.push(id);
      } else {
        //if yes then remove
        selected.splice(selected.indexOf(id), 1);
      }

      //toggle intermediate state
      this.intermediateState(selected);
    }, //toggle

    textSelectNone: function() {
      this.$emit("value", null);
      const selectAllrows = document.getElementById("selectAllRows");
      selectAllrows.checked = false;
      selectAllrows.indeterminate = false;
    }, //textSelectNone

    selectAllFromPage: function() {
      const selected = this.metadata.selected;
      const selectAllrows = document.getElementById("selectAllRows");
      const inputs = document.getElementsByClassName("selectRow");
      const selectAll = selectAllrows.checked;

      for (const checkbox in inputs) {
        const td = inputs[checkbox].parentNode;
        const tr = td.parentNode;

        //check if selectAll or selectNone
        if (!selectAll) {
          //if selectNone, then remove selected
          if (selected.includes(tr.id)) {
            this.SelectRow(tr.id);
          }
        }
        //if SelectAll, then include not selected from page.
        else if (!selected.includes(tr.id)) {
          this.SelectRow(tr.id);
        }
      }
    }, //selectAllFromPage

    setPage: function(newValue) {
      this.$emit("set-page", newValue);
    }, //setPage

    setSortKey: function(newValue) {
      this.$emit("set-sort-key", newValue);
    }, //setPage
    consoleClickDelete: function() {
      // console.log("del");
    }, //consoleClickDelete
    setRowElements: function(newValue) {
      this.$emit("set-row-elements", newValue);
    } //setRowElements
  } //methods
}; //default
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables";

@cellWidth: 116px;
@lastCellWidth: 128px;
@firstCellWidth: 64px;

.vueTable {
  .boxShadow(@one);
  width: fit-content;
  font-size: @fontSizeMd;
  color: @white;

  table {
    display: flex;
    flex-direction: column;
    border-radius: @borderRadius;
    background-color: @backgroundColor;

    thead {
      max-height: 116px;

      tr {
        &:first-child {
          width: 100%;

          &.searchRow {
            & > th {
              margin: 8x @spaceLg 0 @spaceLg;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              width: 100%;

              & > div {
                border: none;
                display: flex;
                flex-direction: row;
                margin: auto 0;

                &:last-child {
                  &#search {
                    display: flex;
                    flex-direction: row;

                    span {
                      &.fas {
                        position: relative;
                        left: 0px;
                        right: -24px;
                        color: @accentColor;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        &:last-child {
          & > th {
            padding-left: @spaceLg;
            text-align: left;
            width: @cellWidth;
            color: @textColor;
            cursor: pointer;

            &:last-child {
              width: @lastCellWidth;
              cursor: default;

              & > .editColumns {
                float: right;
                font-size: 10px;
                position: relative;
                cursor: pointer;

                &:hover {
                  color: @accentColor;
                }

                & > ul {
                  padding-left: 0px;
                  right: 0px;
                  list-style-type: none;
                  height: 0px;
                  overflow: hidden;
                  position: absolute;
                  background-color: @backgroundColor;
                  .boxShadow(@two);

                  &.open {
                    height: auto;
                    width: max-content;

                    & > li {
                      display: flex;
                      flex-direction: row;
                      padding: @spaceMd @spaceSm;
                      border-bottom: 1px solid #ccc;

                      &:first-child {
                        border-bottom: 0px solid transparent;
                        margin: @spaceMd @spaceLg 0px @spaceLg;
                        padding-bottom: 0px;
                      }

                      & > label {
                        font-size: @fontSizeSm;
                        color: @textColor;

                        & > input[type="checkbox"] {
                          margin-right: @spaceSm;
                          transform: scale(1);
                        }
                      }
                    }
                  }
                }
              }
            }

            &:first-child {
              width: @firstCellWidth;
              position: relative;
              display: flex;
              flex-direction: row;
              & > div {
                display: flex;
                flex-direction: row;
                cursor: default;
                border-radius: 0 @borderRadius @borderRadius 0;
                &.showOptions {
                  position: absolute;
                  background-color: @backgroundColor;
                  border-radius: @borderRadius;
                  z-index: @bodyZ + 5;
                  .boxShadow(@one);
                }
                & > div {
                  width: max-content;
                  display: flex;
                  flex-direction: row;
                  margin-right: @spaceLg;
                  & > div {
                    margin-top: @spaceSm;
                  }
                  &:first-child {
                    padding-bottom: @spaceSm;
                  }
                }
              }
            }
            & > div {
              cursor: pointer;
            }
            & > span {
              & > i.fa-sort {
                .opacity(0.3);
              }
              & > .asc,
              & > .dsc {
                color: @accentColor;
              }
            }
            &.active {
              &.asc {
                border-bottom: none;
              }
              &.dsc {
                border-top: none;
              }
            }
            &:first-child {
              padding-right: @spaceSm;
              div {
                &.smalltext {
                  font-size: 10px;
                  margin-left: @spaceMd;
                  text-decoration: underline;
                  color: @accentColor;
                }
              }
              & > div {
                font-size: @fontSizeSm;
                padding: @spaceSm 0;
                div {
                  ul {
                    display: inline;
                    list-style: none;
                    padding: 0;
                    margin: 0;

                    div:before {
                      content: null;
                      height: 3px;
                      width: 0;
                      border: 7px solid transparent;
                      border-bottom-color: #1d1d1d;
                      top: -16px;
                      left: 14px;
                    }

                    li {
                      div {
                        background: #1d1d1d;
                        color: @white;
                        padding: @spaceMd;
                        border-radius: @borderRadius;
                        position: absolute;
                        display: none;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    & > tbody {
      .scroll(64vh);

      & > tr {
        background-color: @backgroundColor;

        &:nth-child(2n) {
          background-color: @white;
        }

        &.selected {
          background-color: @infoBackground;
          font-weight: bold;
        }

        & > td {
          display: flex;
          align-self: center;
          padding-left: @spaceLg;
          vertical-align: middle;
          text-align: left;
          width: @cellWidth;
          // height: 100%;

          &:last-child {
            width: @lastCellWidth;
          }

          &:first-child {
            width: @firstCellWidth;
          }

          & > span {
            color: @accentColor;

            &.disabled {
              .opacity(0.5);
            }
          }
        }
      }
    }
  } /*
  Max width before this PARTICULAR table gets nasty
  This query will take effect for any screen smaller than 760px
  and also iPads specifically.
  https://css-tricks.com/responsive-data-tables/
  */
  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: @maxWidth) {
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -1111px;
      left: -1111px;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;

      &:before {
        /* Now like a table header */
        position: absolute;
        /* Top/left values mimic padding */
        top: 6px;
        left: 6px;
        width: 45%;
        padding-right: 10px;
        white-space: nowrap;
      }
    }

    /*
    Label the data
    */
    /* td:nth-of-type(1):before { content: "First Name"; }
      td:nth-of-type(2):before { content: "Last Name"; }
      td:nth-of-type(3):before { content: "Job Title"; }
      td:nth-of-type(4):before { content: "Favorite Color"; }
      td:nth-of-type(5):before { content: "Wars of Trek?"; }
      td:nth-of-type(6):before { content: "Secret Alias"; }
      td:nth-of-type(7):before { content: "Date of Birth"; }
      td:nth-of-type(8):before { content: "Dream Vacation City"; }
      td:nth-of-type(11):before { content: "GPA"; }
      td:nth-of-type(10):before { content: "Arbitrary Data"; } */
  }
}

tr {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  // height: 48px;

  & > td,
  & > th {
    height: inherit;
    border-left: 1px solid #ddd;
    padding-top: @spaceSm;
    padding-bottom: @spaceSm;
  }

  & > th {
    padding-bottom: 0;
  }
}

input[type="checkbox"] {
  transform: scale(1.2);
  margin-left: @spaceMd;
}

div.paging {
  display: flex;
  width: 100%;
  background-color: @backgroundColor;
  justify-content: space-between;
  margin-right: @spaceXl;
  height: 48px;

  & > div {
    display: flex;
    flex-direction: row;
    margin: auto 0px;
    font-size: @fontSizeMd;
    color: @textColor;

    &:first-child {
      font-weight: normal;
      margin-left: @spaceSm;
      justify-content: flex-start;
    }

    &:last-child {
      margin-right: @spaceLg;
      justify-content: flex-end;

      & > div {
        margin-right: @spaceLg;
        font-weight: bold;
        margin: auto @spaceLg;

        &:first-child {
          font-weight: normal;
        }

        &:last-child {
          margin-right: 0;
        }
      }

      & span {
        color: @accentColor;
        font-size: 20px;
      }
    }
  }
}
</style>
