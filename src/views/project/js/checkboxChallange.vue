<template>
  <div class="checkboxChallange">
    <div class="checkboxes">
      <div v-for="option in options" :key="option.id">
        <input
          type="checkbox"
          :name="option.label"
          :id="option.label"
          v-model="option.checked"
          @click="check(option.id, $event)"
        />
        <label :for="option.label" class="noselect">{{ option.label }}</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "checkboxChallange",
  data() {
    const lastChecked = undefined;
    const options = [
      { id: 0, checked: false, label: "This is an inbox layout." },
      { id: 1, checked: false, label: "Check one item" },
      { id: 2, checked: false, label: "Hold down your Shift key" },
      { id: 3, checked: false, label: "Check a lower item" },
      {
        id: 4,
        checked: false,
        label: "Everything inbetween should also be set to checked"
      },
      { id: 5, checked: false, label: "Try do it without any libraries" },
      { id: 6, checked: false, label: "Just regular JavaScript (or Vue)" },
      { id: 7, checked: false, label: "Good Luck!" },
      { id: 8, checked: false, label: "Don't forget to tweet your result!" }
    ];
    return {
      lastChecked,
      options
    };
  },
  methods: {
    check: function(id, event) {
      const shiftKeyPressed = event.shiftKey;
      if (this.lastChecked && shiftKeyPressed) {
        //do something
        // console.log("select in between");
        for (let x = 0; x < this.options.length; x++) {
          if (
            this.options[x].id > this.lastChecked &&
            this.options[x].id < id
          ) {
            this.options[x].checked = !this.options[x].checked;
          }
        }
      }
      this.lastChecked = id;
    }
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.checkboxChallange {
  width: 100%;
  height: 100%;
  & > .checkboxes {
    background-color: yellow;
    margin: auto;
    background-color: #fafbfc;
    .boxShadow(@one);
    width: max-content;
    display: flex;
    flex-direction: column;
    & > div {
      padding: @spaceLg;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid lightgrey;
      &:nth-child(2n) {
        background-color: lightgrey;
      }
      & > input {
        & + label {
          font-weight: normal;
          padding: 0 @spaceLg;
          margin: 0;
        }
        &:checked + label {
          text-decoration: line-through;
        }
      }
    }
  }
}
</style>
