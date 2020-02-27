<template>
  <div class="rsvp">
    <router-link to="/Design">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <div>
      <div class="header">
        <img src="../assets/webApp/RSVP.svg" />
        <div>
          <b>RSVP App</b>
        </div>
        <div class="invite">
          <input
            type="text"
            v-model="dPerson"
            placeholder="Invite Someone"
            @keypress.enter.prevent="addPerson"
          />
          <vue-button
            buttonType="button"
            buttonName="inviteButton"
            buttonText="SUBMIT"
            buttonIcon="fas fa-user-check"
            buttonStyle="standard"
            :onClickAction="addPerson"
          />
        </div>
      </div>
      <div class="body">
        <div>Attending: {{ attending }}</div>
        <div>Unconfirmed:{{ unconfirmed }}</div>
        <div>total: {{ total }}</div>
        <div v-if="dPerson.length > 0">
          <div>
            {{ dPerson }}
          </div>
          <div>
            <input
              type="checkbox"
              :id="dPerson"
              :name="dPerson"
              :checked="invited.status"
            />
          </div>
        </div>
        <template v-if="dInvited">
          <div v-for="invited in dInvited" :key="invited.name">
            <div>
              {{ invited.name }}
            </div>
            <div>
              <input
                type="checkbox"
                :id="invited.name"
                :name="invited.name"
                v-model="invited.status"
                :checked="invited.status"
              />
              <label for="invited.name">Confirmed</label>
            </div>
            <div>
              {{ invited.name }}
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import vueButton from "@/components/vueButton.vue";
export default {
  data() {
    const dPerson = null;
    const dInvited = null;
    return {
      dPerson: dPerson,
      dInvited: dInvited
    };
  },
  components: {
    vueButton
  },

  computed: {
    attending: function() {
      const invited = this.dInvited;
      let counter = 0;
      if (invited) {
        for (let i = 0; i < invited.length; i++) {
          if (invited[i].status) {
            counter++;
          }
        }
      }
      return counter;
    },
    unconfirmed: function() {
      const invited = this.dInvited;
      if (invited) {
        return invited.length - this.attending;
      }
      return 0;
    },
    total: function() {
      const invited = this.dInvited;
      if (invited) {
        return invited.length;
      }
      return 0;
    }
  },

  methods: {
    addPerson: function() {
      const name = this.dPerson;
      let alreadyExist = false;
      if (name) {
        const invited = this.dInvited;
        this.dPerson = null;
        let person = { name: name, status: false };
        if (invited) {
          for (let i = 0; i < invited.length; i++) {
            if (name == invited[i].name) {
              alreadyExist = true;
            } else {
              this.dInvited.push(person);
            }
          }
        } else {
          this.dInvited = new Array(person);
        }
        person = null;
        if (alreadyExist) {
          alert("person already exist in invited list");
          alreadyExist = false;
        }
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "../Less/customVariables.less";
@import (reference) "../Less/customMixins.less";
.rsvp {
  & > div {
    & > div {
      &.body {
        display: flex;
      }
      &.header {
        position: relative;
        & > img {
          margin-top: 40px;
          width: 100%;
        }
        & > div {
          &.invite {
            position: absolute;
            left: 0;
            right: 0;
            bottom: -24px;
            margin: auto;
            background-color: #fafbfc;
            width: fit-content;
            padding: 4px;
            border-radius: 4px;
            height: 64px;
            .boxShadow(@two);
            & > input {
              background-color: #fafbfc;
              width: 400px;
              font-size: 18px;
              height: 40px;
              border: none;
              padding: 4px;
              margin: 4px;
              &:focus,
              &:focus-within {
                border: none;
                outline: none;
              }
            }
          }
          &:not(.invite) {
            position: absolute;
            left: 0;
            right: 0;
            top: 50%;
            text-align: center;
            .textShadow(@five);
            & > b {
              padding: 16px;
              border-radius: 16px;
              opacity: 0.8;
              background-color: #333333;
              font-size: 72px;
              color: white;
            }
          }
        }
      }
    }
  }
}
</style>
