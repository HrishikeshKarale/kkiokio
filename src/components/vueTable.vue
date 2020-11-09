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
                <!-- <div class= 'tableAction'>
									<span 
										class= 'fas fa-ellipsis-h'
										@click.stop= 'tableAction= !tableAction'
										:class= '{open: tableAction}'
									/>
									<ul
										:class= '{open: tableAction}'
									>
										<li>
											<span class= "fas fa-trash fa-1x"/>
											<span>
												Delete
											</span>
										</li>
										<li>
											<span class= "fas fa-times fa-1x"/>
											<span>
												Remove
											</span>        
										</li>
										<li>
											<span class= "fas fa-pen fa-1x"/>
											<span>
												Edit
											</span>        
										</li>
										<li>
											<span class= "fas fa-check fa-1x"/>
											<span>
												Accept
											</span>        
										</li>
									</ul>
								</div> -->
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
            {{ nameConvention.capitalize(col) }}
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
									:inline= '!d_booleanTrue'
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
              <!-- <vue-button 
								:buttonType= 'buttonType'
								buttonName= "ExpandRow"
								:buttonText= "d_buttonText"
								:buttonIcon= 'entry.showSub? "fas fa-chevron-down":"fas fa-chevron-up"'
								:buttonStyle= 'd_buttonStyle[9]'
								:disabled= '!d_booleanTrue'
								:autofocus= '!d_booleanTrue'
								:formID= "d_form"
								:onClickAction= 'toggleSubTable.bind(this, entry)'
							/>  -->
            </td>

            <td v-for="col in columns" :key="col">
              {{ entry[col] }}
            </td>
            <td>
              <vue-modal
                :modal-title="'Delete ' + entry[select]"
                button-name="toggleExpandButton"
                button-icon="fas fa-trash-alt"
                :on-click-action="consoleClickDelete"
              >
                you can use custom content here to overwrite default content

                <h3>
                  Custom body
                </h3>
              </vue-modal>
              <vue-button
                :button-type="buttonType"
                button-name="ExpandRow"
                :button-icon="
                  entry ? 'fas fa-chevron-left' : 'fas fa-chevron-up'
                "
                :button-style="d_buttonStyle[9]"
                :on-click-action="toggleSubTable.bind(this, entry)"
              />
              <!-- <span 
								:class= 'entry? "fas fa-chevron-right":"fas fa-chevron-down"'
								@click.stop= 'toggleSubTable(entry)'
							/> -->
            </td>
          </tr>
          <!-- <tr 
						v-if= 'entry.subDetails && entry.showSub'
						:key= 'index'
						:id= 'entry[select]+ "expand"'
					>
						<td 
							class= 'subTable'
							:colspan= "columns.length+1"
						>
							<vue-table 
								:tableData= '(entry.subDetails).tableData'
								:columns= '(entry.subDetails).cols'
								:metadata= '{}'
								:title= '(entry.subDetails).title'
								:subtableId= 'entry[select]+ "-subtable"'
							/>
						</td>
					</tr> -->
        </template>
      </tbody>
    </table>
    <div class="paging">
      <div>
        <!-- <radio-input
					name= "rowElements"
					:value= 'showRecords'
					:options= 'metadata.recordsPerPage'
					:required= 'd_booleanTrue'
					:box= 'd_booleanTrue'
					:inline= 'd_booleanTrue'
					@selected= 'setRowElements'
				/> -->
        <dropdown-list
          v-model="dropdownValue"
          label="Show"
          name="showRecords"
          :options="metadata.recordsPerPage"
          :required="d_booleanTrue"
          :inline="d_booleanTrue"
        />
      </div>
      <div>
        <div>
          Showing {{ metadata.start }} - {{ metadata.end }} of
          {{ metadata.totalRecords }} Results.
        </div>
        <div>
          <!-- <span 
						class= 'fas fa-chevron-left'
						@click.stop= 'setPage(metadata.pageNumber-1)'
						v-show= 'metadata.pageNumber> 1'
					/>                                -->
          <vue-button
            v-show="metadata.pageNumber > 1"
            :button-type="buttonType"
            button-name="previousPage"
            button-icon="fas fa-chevron-left"
            :button-style="d_buttonStyle[9]"
            :on-click-action="setPage.bind(this, metadata.pageNumber - 1)"
          />
        </div>
        <div>Page {{ metadata.pageNumber }}</div>
        <div>
          <!-- <span 
						class= 'fas fa-chevron-right'
						@click.stop= 'setPage(metadata.pageNumber+1)'
						v-show= 'metadata.pageNumber< metadata.pageCount'
					/>                                 -->
          <vue-button
            v-show="metadata.pageNumber < metadata.pageCount"
            :button-type="buttonType"
            button-name="nextPage"
            button-icon="fas fa-chevron-right"
            :button-style="d_buttonStyle[9]"
            :on-click-action="setPage.bind(this, metadata.pageNumber + 1)"
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
      type: String,
      default: null
    },

    subtableId: {
      required: false,
      type: String,
      default: null
    },

    select: {
      required: false,
      type: String,
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
    return {
      columns,
      rowElements,
      dropdownValue,
      editColumns
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

  //   watch: {
  //     dropdownValue: function(newValue, oldValue) {
  //       if (newValue != oldValue) {
  //         this.setRowElements(newValue);
  //       }
  //     } //dropdownValue
  //   }, //watch

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
      this.$emit("selected", null);
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

    setRowElements: function(newValue) {
      this.$emit("set-row-elements", newValue);
    } //setRowElements
  } //created
}; //default
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables";

@cellWidth: 196px;
@lastCellWidth: 128px;
@firstCellWidth: 64px;

@backgroundColor: #ccd8e0;

.vueTable {
  .boxShadow(@base @one);
  width: fit-content;
  font-size: 16px;
  color: @cometText;

  table {
    display: flex;
    flex-direction: column;
    border-radius: @borderRadiusMd;
    background-color: @backgroundColor;

    thead {
      background-color: @backgroundColor;
      max-height: 96px;

      tr {
        &:first-child {
          width: 100% !important;

          &.searchRow {
            & > th {
              margin: 8px 16px 0 16px;
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
                        color: @secondaryColor;
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
            padding-left: 16px;
            text-align: left;
            width: @cellWidth;
            color: @cometText;
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
                  color: @secondaryColor;
                }

                & > ul {
                  padding-left: 0px;
                  right: 0px;
                  list-style-type: none;
                  height: 0px;
                  overflow: hidden;
                  position: absolute;
                  background-color: @backgroundColor;
                  .boxShadow(@base @two);

                  &.open {
                    height: auto;
                    width: max-content;

                    & > li {
                      display: flex;
                      flex-direction: row;
                      padding: 8px 4px;
                      border-bottom: 1px solid #ccc;

                      &:first-child {
                        border-bottom: 0px solid transparent;
                        margin: 8px 16px 0px 16px;
                        padding-bottom: 0px;
                      }

                      & > label {
                        font-size: @fontSizeSm;
                        color: @cometText;

                        & > input[type="checkbox"] {
                          margin-right: 4px;
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
                border-radius: 0 4px 4px 0;

                &.showOptions {
                  position: absolute;
                  background-color: @backgroundColor;
                  border-radius: @borderRadiusMd;
                  z-index: 100;

                  .boxShadow(@base @one);
                }

                & > div {
                  width: max-content;
                  display: flex;
                  flex-direction: row;
                  margin-right: 16px;

                  & > div {
                    margin-top: 4px;
                  }

                  &:first-child {
                    padding-bottom: 4px;
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
                color: @secondaryColor;
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
              padding-right: 4px;

              div {
                &.smalltext {
                  font-size: 10px;
                  margin-left: 8px;
                  text-decoration: underline;
                  color: @secondaryColor;
                }
              }

              & > div {
                font-size: @fontSizeSm;
                padding: 4px 0;

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
                        color: #fff;
                        padding: 8px;
                        border-radius: 4px;
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
        background-color: #f9f9f9;

        &:nth-child(2n) {
          background-color: white;
        }

        &.selected {
          background-color: @infoBackground;
          font-weight: bold;
        }

        & > td {
          display: flex;
          align-self: center;
          padding-left: 16px;
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
            color: @secondaryColor;

            &.disabled {
              .opacity(0.5);
            }
          }

          /* // &.subTable {
						//     display: flex;
						//     width: 100%;
						//     background-color: #e5e5e5;

						//     .vueTable.inner {
								
						//         table {
						//             border: 1px solid @backgroundColor;

						//             thead {
						//                 height: 32px;
						//                 tr {
						//                     background-color: #959595;

						//                     th {
						//                         &:first-child {
						//                             div {
						//                                 border: none;
						//                             }
						//                         }
						//                     }
						//                 }
						//             }
						//         }
						//     }

						//     div.paging {
						//         display: none;
						//     }
						// } */
        }
      }
    }
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
    padding-top: 4px;
    padding-bottom: 4px;
  }

  & > th {
    padding-bottom: 0;
  }
}

input[type="checkbox"] {
  transform: scale(1.2);
  margin-left: 8px;
}

div.paging {
  display: flex;
  width: 100%;
  background-color: @backgroundColor;
  justify-content: space-between;
  margin-right: 32px;
  height: 48px;

  & > div {
    display: flex;
    flex-direction: row;
    margin: auto 0px;
    font-size: @fontSizeMd;
    color: @cometText;

    &:first-child {
      font-weight: normal;
      margin-left: 4px;
      justify-content: flex-start;
    }

    &:last-child {
      margin-right: 16px;
      justify-content: flex-end;

      & > div {
        margin-right: 16px;
        font-weight: bold;
        margin: auto 16px;

        &:first-child {
          font-weight: normal;
        }

        &:last-child {
          margin-right: 0;
        }
      }

      & span {
        color: @secondaryColor;
        font-size: 20px;
      }
    }
  }
}
</style>
