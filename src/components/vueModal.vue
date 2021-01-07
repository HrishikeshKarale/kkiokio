<template>
  <div class="vueModal">
    <div id="show-modal">
      <vue-button
        v-if="buttonText"
        :type="buttonType"
        :tag="'open' + buttonName + 'Modal'"
        :text="buttonText"
        :icon="buttonIcon"
        :category="buttonStyle[2]"
        :disabled="!booleanTrue"
        :autofocus="!booleanTrue"
        :ctx="ctx"
      />

      <vue-button
        v-else
        :type="buttonType"
        tag='"open"+buttonName+"Modal"'
        :text="buttonText"
        :icon="buttonIcon"
        :category="buttonStyle[9]"
        :disabled="!booleanTrue"
        :autofocus="!booleanTrue"
        :ctx="ctx"
      />
    </div>
    <transition v-if="showModal" name="modal" :show-modal="showModal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div v-if="modalTitle" class="modal-header">
              {{ modalTitle }}
            </div>

            <div class="modal-body">
              <slot>
                default body
              </slot>
            </div>

            <div class="modal-footer">
              <div v-if="ctx">
                <vue-button
                  :type="buttonType"
                  :tag="buttonName"
                  text="CONFIRM"
                  :icon="buttonIcon"
                  :category="buttonStyle[2]"
                  :disabled="!booleanTrue"
                  :autofocus="!booleanTrue"
                  :ctx="ctx"
                />
              </div>
              <div>
                <vue-button
                  :type="buttonType"
                  tag="closeModal"
                  text="Close"
                  :category="buttonStyle[11]"
                  :disabled="!booleanTrue"
                  :autofocus="!booleanTrue"
                  :ctx="ctx"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import vueButton from "@/components/vueButton";

export default {
  name: "VueModal", //props

  components: {
    vueButton
  }, //data

  props: {
    modalTitle: {
      required: false,
      type: [String, null],
      default: null
    },

    buttonText: {
      required: false,
      type: [String, null],
      default: null
    },

    buttonName: {
      required: false,
      type: [String, null],
      default: null
    },

    buttonIcon: {
      required: false,
      type: [String, null],
      default: null
    },

    showModal: {
      required: false,
      type: [Boolean, null],
      default: false
    },

    ctx: {
      required: false,
      type: [Function, null],
      default: null
    }
  },

  data() {
    const buttonType = "button";
    const buttonStyle = this.$store.state.buttonStyle;
    const booleanTrue = true;
    const form = "";
    return {
      buttonType,
      buttonStyle,
      booleanTrue,
      form
    }; //return
  } //components
}; //default
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customMixins.less";
@import (reference) "./../Less/customVariables.less";

.vueModal {
  display: inline-flex;
  outline: 9999px solid rgba(0, 0, 0, 0.5);

  .modal-mask {
    position: fixed;
    z-index: @modalZ;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: @transition;

    .modal-wrapper {
      display: table-cell;
      vertical-align: middle;

      .modal-container {
        min-width: 320px;
        max-width: 800px;
        height: fit-content;
        margin: 0px auto;
        background-color: @backgroundColor;
        border-radius: @borderRadius;
        .boxShadow(@two);
        transition: @transition;
        font-family: Helvetica, Arial, sans-serif;

        .modal-header {
          color: @backgroundColor;
          background-color: #003a65;
          border-top-left-radius: @borderRadius;
          border-top-right-radius: @borderRadius;
          padding: @spaceMd @spaceLg;
          font-size: 2 * @fontSize;
          height: auto;
          text-align: left;
        }

        .modal-body {
          margin: @spaceMd @spaceLg;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        .modal-footer {
          padding: @spaceMd @spaceLg;
          display: flex;
          flex-direction: row-reverse;
          flex-wrap: nowrap;

          & > div {
            margin: auto 0 auto @spaceXl;
            justify-content: space-around;

            &:last-child {
              margin-left: 0px;
            }
          }
        }
      }
    }
  }
}

/*
    * The following styles are auto-applied to elements with
    * transition= "modal" when their visibility is toggled
    * by Vue.js.
    *
    * You can easily play with the modal transition by editing
    * these styles.
    */

.modal-enter,
.modal-leave-active {
  .opacity(0);
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
