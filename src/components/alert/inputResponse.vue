<template>
  <div class="inputResponse">
    <div v-if="error" class="errorMessage">
      <span class="fas fa-exclamation-circle" />
      <b>{{ error }}</b>
    </div>
    <div v-else-if="warning" class="warningMessage">
      <span class="fas fa-exclamation-triangle" />
      <b>{{ warning }}</b>
    </div>
    <div v-else-if="info" class="infoMessage">
      <span class="fas fa-info-circle" />
      <b>{{ info }}</b>
    </div>
    <div v-else-if="charLimitReached" class="infoMessage">
      <span class="fas fa-info-circle" />
      Character limit of {{ maxlength }} reached
    </div>
  </div>
</template>

<script>
export default {
  name: "InputResponse",

  props: {
    error: {
      type: [String, null],
      required: false,
      default: null
    },

    warning: {
      type: [String, null],
      required: false,
      default: null
    },

    info: {
      type: [String, null],
      required: false,
      default: null
    },

    charLimitReached: {
      type: [Boolean, null],
      required: false,
      default: false
    },

    maxlength: {
      type: [Number, null],
      required: false,
      default: null
    }
  } //props
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../../Less/customVariables.less";

.inputResponse {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;

  & > div {
    margin: @spaceSm 0;
    font-size: @fontSizeSm;
    // font-family: monospace;
    font-weight: bold;
    letter-spacing: 1px !important;
    & > span {
      margin-right: @spaceSm;
    }

    &.infoMessage {
      color: @infoText;
    }

    &.warningMessage {
      color: @warningText;
    }

    &.errorMessage {
      color: @dangerText;
    }
  }
}
</style>
