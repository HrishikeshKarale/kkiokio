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
      required: false,
      type: [String, null],
      default: null
    },

    warning: {
      required: false,
      type: [String, null],
      default: null
    },

    info: {
      required: false,
      type: [String, null],
      default: null
    },

    charLimitReached: {
      required: false,
      type: [Boolean, null],
      default: false
    },

    maxlength: {
      required: false,
      type: [Number, null],
      default: null
    }
  } //props
}; //default
</script>

<style lang="less" scoped>
@import (reference) "../Less/customVariables.less";

.inputResponse {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & > div {
    margin: @spaceSm 0;
    font-size: @fontSizeSm;
    font-family: monospace;
    font-weight: 700;

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
