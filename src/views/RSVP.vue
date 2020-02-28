<template>
  <div class="rsvp">
    <router-link to="/Design">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <div>
      <div class="header">
        <vue-img :src="dRSVPImage" alt="RSVP Landing Image" />
        <div>
          <b>RSVP App</b>
        </div>
        <div class="invite">
          <input
            type="text"
            v-model="dPerson"
            placeholder="Jon Doe"
            @keypress.enter.prevent="addPerson"
          />
          <vue-button
            buttonType="button"
            buttopName="inviteButton"
            buttonText="INVITE"
            buttonIcon="fas fa-user-check"
            buttonStyle="standard"
            :onClickAction="addPerson"
          />
        </div>
      </div>
      <div class="body">
        <div class="details">
          <div>
            <h2>Invitees</h2>
            <!-- <vue-button
              buttonType="button"
              buttopName="toggleButton"
              :buttonText="show ? 'Attending' : 'ALL'"
              buttonStyle="small"
              buttonIcon="fas fa-eye"
              :onClickAction="toggle.bind()"
            /> -->
          </div>
          <div>
            <div>Attending: {{ attending }}</div>
            <div>Unconfirmed:{{ unconfirmed }}</div>
            <div>total: {{ total }}</div>
          </div>
        </div>
        <div v-if="dPerson">
          <div>
            {{ dPerson }}
          </div>
          <div>
            <input type="checkbox" :id="dPerson" :name="dPerson" />
            <label :for="dPerson">Confirmed</label>
          </div>
        </div>
        <template v-if="dInvited">
          <template v-for="(invited, index) in dInvited">
            <div :key="index">
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
                <label :for="invited.name">Confirmed</label>
              </div>
            </div>
            <div :key="index + 'buttons'">
              <vue-button
                buttopName="editButton"
                buttonStyle="icon"
                buttonIcon="fas fa-pen"
                :onClickAction="updateInvited.bind(this, invited.name, false)"
              />
              <vue-button
                buttopName="deleteButton"
                buttonStyle="icon"
                buttonIcon="fas fa-eye"
                :onClickAction="updateInvited.bind(this, invited.name, true)"
              />
            </div>
          </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import vueButton from "@/components/vueButton.vue";
import vueImg from "@/components/vueImg.vue";
import { toggle } from "../typeScript/toggle";
export default {
  name: "rsvp",
  data() {
    const dPerson = null;
    const dInvited = null;
    const dEdit = null;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dRSVPImage = require("../assets/webApp/RSVP.svg");
    return {
      dPerson,
      dInvited,
      dRSVPImage,
      dEdit
    };
  },
  components: {
    vueButton,
    vueImg
  },
  mixins: [toggle],
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
    updateInvited: function(pName, remove) {
      console.log(pName, remove, this.dEdit);
      if (pName) {
        const invited = this.dInvited;
        if (invited) {
          for (let i = 0; i < invited.length; i++) {
            if (pName == invited[i].name) {
              if (remove) {
                invited.splice(i, 1);
              } else {
                if (this.dEdit) {
                  if (this.edit.includes(i)) {
                    return;
                  } else {
                    this.dEdit.push(i);
                  }
                } else {
                  this.dEdit = new Array(i);
                }
              }
              return;
            }
          }
        }
      }
    },
    addPerson: function() {
      const pName = this.dPerson;
      let alreadyExist = false;
      if (pName) {
        const invited = this.dInvited;
        this.dPerson = null;
        let person = { name: pName, status: false };
        if (invited) {
          for (let i = 0; i < invited.length; i++) {
            if (pName == invited[i].name) {
              alreadyExist = true;
              break;
            } else {
              this.dInvited.push(person);
              break;
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
        flex-direction: column;
        & > div {
          display: flex;
          flex-direction: row;
          margin: 8px 16px;

          &.details {
            justify-content: space-between;
            & > div {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              text-align: right;
            }
          }
        }
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
            padding: 8px;
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
              margin: auto 4px;
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
