<template>
  <div v-if="invited || typing" class="inviteeCard">
    <h4>
      <span class="fas fa-user" />
      {{ invited.name || typing }}
    </h4>
    <checkbox-input
      :id="invited.name || typing"
      :label="invited.status ? 'Confirmed' : 'Confirm'"
      :name="invited.name || typing"
      :value="invited.status"
      :mask="typing"
      @value="val => $emit('invited', { name: invited.name, status: val })"
    />
    <vue-button
      tag="deleteButton"
      category="small"
      text="Uninvite"
      icon="fas fa-user-minus"
      :ctx="uninvite.bind(this)"
    />
  </div>
</template>

<script>
import vueButton from "@/components/vueButton.vue";
import checkboxInput from "@/components/checkboxInput.vue";

export default {
  name: "InviteeCard",
  components: {
    checkboxInput,
    vueButton
  },
  props: {
    typing: {
      type: String,
      required: false,
      default: ""
    },
    invited: {
      type: Object,
      required: false,
      default: null
    }
  },

  emits: ["invited"],

  data() {
    const dEdit = "";
    return {
      dEdit
    };
  },

  methods: {
    uninvite: function() {
      this.$emit("invited", null);
    },
    updateInvited: function(pName, remove = false) {
      // console.log(pName, remove, this.dEdit);
      if (pName) {
        const invited = this.invited;
        if (invited) {
          for (let i = 0; i < invited.length; i++) {
            if (pName == invited[i].name) {
              if (remove) {
                invited.splice(i, 1);
                this.$emit("invited", invited);
                return;
              } else {
                //logic to edit field
              }
            }
          }
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../../../Less/customVariables.less";
@import (reference) "../../../Less/customMixins.less";
.inviteeCard {
  display: flex;
  flex-direction: column;
  margin: @spaceMd;
  padding: @spaceMd @spaceLg;
  border-radius: @borderRadius;
  .boxShadow(@one, @accentColor);
  & > button {
    margin-left: auto;
  }
}
</style>
