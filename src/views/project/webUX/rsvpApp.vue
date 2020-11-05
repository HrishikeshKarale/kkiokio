<template>
  <div class="rsvp">
    <router-link to="/project">
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
            v-model="dPerson"
            type="text"
            placeholder="Jon Doe"
            @keypress.enter.prevent="addPerson"
          />
          <vue-button
            button-type="button"
            buttop-name="inviteButton"
            button-text="INVITE"
            button-icon="fas fa-user-check"
            button-style="standard"
            :on-click-action="addPerson"
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
            <input :id="dPerson" type="checkbox" :name="dPerson" />
            <label :for="dPerson">Confirmed</label>
          </div>
        </div>
        <template v-if="dInvited">
          <template v-for="(invited, index) in dInvited" :key="index">
            <div>
              <div>
                {{ invited.name }}
              </div>
              <div>
                <input
                  :id="invited.name"
                  v-model="invited.status"
                  type="checkbox"
                  :name="invited.name"
                  :checked="invited.status"
                />
                <label :for="invited.name">Confirmed</label>
              </div>
            </div>
            <div>
              <vue-button
                buttop-name="editButton"
                button-style="icon"
                button-icon="fas fa-pen"
                :on-click-action="updateInvited.bind(this, invited.name, false)"
              />
              <vue-button
                buttop-name="deleteButton"
                button-style="icon"
                button-icon="fas fa-eye"
                :on-click-action="updateInvited.bind(this, invited.name, true)"
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
import { toggle } from "@/typeScript/toggle";
export default {
  name: "Rsvp",
  components: {
    vueButton,
    vueImg
  },
  mixins: [toggle],
  data() {
    const dPerson = null;
    const dInvited = null;
    const dEdit = null;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const dRSVPImage = require("@/assets/webApp/RSVP.svg");
    return {
      dPerson,
      dInvited,
      dRSVPImage,
      dEdit
    };
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
    updateInvited: function(pName, remove) {
      // console.log(pName, remove, this.dEdit);
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
@import (reference) "../../../Less/customVariables.less";
@import (reference) "../../../Less/customMixins.less";
.rsvp {
  & > div {
    & > div {
      &.body {
        display: flex;
        flex-direction: column;
        & > div {
          display: flex;
          flex-direction: row;
          margin: @spaceMd @spaceLg;

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
          margin-top: @spaceXl;
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
            padding: @spaceMd;
            border-radius: 4px;
            height: 64px;
            .boxShadow(@two);
            & > input {
              background-color: #fafbfc;
              width: 400px;
              height: 40px;
              border: none;
              padding: @spaceSm;
              margin: auto @spaceSm;
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
              padding: @spaceLg;
              border-radius: 16px;
              opacity: 0.8;
              background-color: #333333;
              font-size: @fontSize * 4;
              color: white;
            }
          }
        }
      }
    }
  }
}
</style>
