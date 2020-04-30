<template>
  <div class="konamiCode">
    <router-link to="/Project">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <div ref="KeyPressed" class="konami">
      <div>
        <h3>konami Code</h3>
      </div>
      <div>
        keyPressed:
        <div>
          <span>{{ keyPressed.code }}</span>
          <span>{{ keyPressed.key }}</span>
        </div>
      </div>
      <div>
        <div v-for="(uc, index) in userCode" :key="uc + '-' + index">
          <span>{{ uc.code }}</span>
          <span>{{ uc.key }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "konamiCode",
  data() {
    const codes = ["kkiokio", "qwerty"];
    const userCode = [];
    const keyPressed = {
      key: null,
      code: null,
      keyCode: null,
      shiftKey: null,
      ctrlKey: null,
      metatKey: null,
      altKey: null
    };
    return {
      codes,
      userCode,
      keyPressed
    };
  },
  methods: {
    codeMatcher: function(event) {
      this.keyPressed["key"] = event.key;
      this.keyPressed["code"] = event.code;
      this.keyPressed["keyCode"] = event.keyCode;
      this.keyPressed["shiftKey"] = event.shiftKey;
      this.keyPressed["ctrlKey"] = event.ctrlKey;
      this.keyPressed["metatKey"] = event.metatKey;
      this.keyPressed["altKey"] = event.altKey;

      let userCode = this.userCode;

      userCode.push(event);
      if (userCode.length > 7) {
        userCode = userCode.slice(1, 8);
      }
      const codess = userCode.map(evt => {
        return evt.key;
      });
      this.codes.forEach(element => {
        //something
        if (element === codess.slice(-element.length, codess.length).join("")) {
          alert(`DING DING DING! Konami code detected: ${element}`);
          return;
        }
      });
      // console.log(this.codes.indexOf(codess), codess);
      this.userCode = userCode;
    }
  },
  mounted() {
    window.addEventListener("keydown", this.codeMatcher);
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.konamiCode {
  width: 100%;
  height: 100%;
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    &.konami {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      & > div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        & > div {
          padding: 16px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          .boxShadow(@two);
          background-color: @primaryColor;
          width: 96px;
          height: 96px;
          & > span {
            margin: auto;
            font-size: 16px;
            &:last-child {
              font-size: 24px;
              font-weight: bold;
            }
            &:first-child {
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}
</style>
