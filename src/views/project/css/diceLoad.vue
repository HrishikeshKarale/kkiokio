<template>
  <div class="diceLoad">
    <div class="dice">
  
  <div class="face first-face">
    <div class="dot"></div>  
  </div>
  
  <div class="face second-face">
    <div class="dot"></div>  
    <div class="dot"></div>  
  </div>
  
  <div class="face third-face">
    <div class="dot"></div>  
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
  
  <div class="face fourth-face">
    <div class="column">
      <div class="dot"></div>  
      <div class="dot"></div>  
    </div>
    <div class="column">
      <div class="dot"></div>  
      <div class="dot"></div>  
    </div>    
  </div>
  
  <div class="face fifth-face">
    <div class="column">
      <div class="dot"></div>  
      <div class="dot"></div>  
    </div>
    <div class="column">
      <div class="dot"></div>
    </div>
    <div class="column">
      <div class="dot"></div>  
      <div class="dot"></div>  
    </div>    
  </div>
  
  <div class="face sixth-face">
    <div class="column">
      <div class="dot"></div>  
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div class="column">
      <div class="dot"></div>  
      <div class="dot"></div>  
      <div class="dot"></div>
    </div>    
  </div>
  
</div>


<p>Wait, please...</p>
  </div>
</template>
<script>
export default {
  name: "diceLoad",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
.diceLoad {
  /******************************
 * FLEXBOX STYLES
 ***************************** */
.dice {
  display: -webkit-box;
  display: flex;
  margin-top: 4rem;
  -webkit-box-pack: center;
          justify-content: center;
}

.face {
  display: -webkit-box;
  display: flex;
  width: 3rem;
  height: 3rem;
  margin: 0 0.7rem;
  padding: 0.5rem;
  border-radius: 5px;
  opacity: 0;
}
.face .dot {
  width: 0.8rem;
  height: 0.8rem;
  background: #F44336;
  border-radius: 50%;
}
.face:nth-child(1) {
  border: 2px solid #F44336;
  -webkit-animation: waves 5s linear infinite;
          animation: waves 5s linear infinite;
}
.face:nth-child(1) .dot {
  background: #F44336;
}
.face:nth-child(2) {
  border: 2px solid #E91E63;
  -webkit-animation: waves 5s 0.2s linear infinite;
          animation: waves 5s 0.2s linear infinite;
}
.face:nth-child(2) .dot {
  background: #E91E63;
}
.face:nth-child(3) {
  border: 2px solid #9C27B0;
  -webkit-animation: waves 5s 0.4s linear infinite;
          animation: waves 5s 0.4s linear infinite;
}
.face:nth-child(3) .dot {
  background: #9C27B0;
}
.face:nth-child(4) {
  border: 2px solid #673AB7;
  -webkit-animation: waves 5s 0.6s linear infinite;
          animation: waves 5s 0.6s linear infinite;
}
.face:nth-child(4) .dot {
  background: #673AB7;
}
.face:nth-child(5) {
  border: 2px solid #3F51B5;
  -webkit-animation: waves 5s 0.8s linear infinite;
          animation: waves 5s 0.8s linear infinite;
}
.face:nth-child(5) .dot {
  background: #3F51B5;
}
.face:nth-child(6) {
  border: 2px solid #2196F3;
  -webkit-animation: waves 5s 1s linear infinite;
          animation: waves 5s 1s linear infinite;
}
.face:nth-child(6) .dot {
  background: #2196F3;
}

.first-face {
  -webkit-box-pack: center;
          justify-content: center;
  -webkit-box-align: center;
          align-items: center;
}

.second-face {
  -webkit-box-pack: justify;
          justify-content: space-between;
}
.second-face .dot:last-of-type {
  align-self: flex-end;
}

.third-face {
  -webkit-box-pack: justify;
          justify-content: space-between;
}
.third-face .dot:nth-child(2) {
  align-self: center;
}
.third-face .dot:last-of-type {
  align-self: flex-end;
}

.fourth-face {
  -webkit-box-pack: justify;
          justify-content: space-between;
}
.fourth-face .column {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-pack: justify;
          justify-content: space-between;
}

.fifth-face {
  -webkit-box-pack: justify;
          justify-content: space-between;
}
.fifth-face .column {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-pack: justify;
          justify-content: space-between;
}
.fifth-face .column:nth-child(2) {
  -webkit-box-pack: center;
          justify-content: center;
}

.sixth-face {
  -webkit-box-pack: justify;
          justify-content: space-between;
}
.sixth-face .column {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-pack: justify;
          justify-content: space-between;
}

/****************************************************** */
@-webkit-keyframes waves {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 0;
  }
  4% {
    -webkit-transform: translateY(-25px);
            transform: translateY(-25px);
    opacity: 1;
  }
  8% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
}
@keyframes waves {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 0;
  }
  4% {
    -webkit-transform: translateY(-25px);
            transform: translateY(-25px);
    opacity: 1;
  }
  8% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
  70% {
    opacity: 0;
  }
}

}
</style>
