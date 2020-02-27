<template>
  <div class="countdownTimer">
    <div class="day">
      <span class="number">{{ days }}</span>
      <div class="format">{{ wordString.day }}</div>
    </div>
    <div class="hour">
      <span class="number">{{ hours }}</span>
      <div class="format">{{ wordString.hours }}</div>
    </div>
    <div class="min">
      <span class="number">{{ minutes }}</span>
      <div class="format">{{ wordString.minutes }}</div>
    </div>
    <div class="sec">
      <span class="number">{{ seconds }}</span>
      <div class="format">{{ wordString.seconds }}</div>
    </div>
    <div class="message">{{ message }}</div>
    <div class="status-tag" :class="statusType">{{ statusText }}</div>
  </div>
</template>
<script>
export default {
  name: "countdownTimer",
  props: ["starttime", "endtime", "trans"],
  data: function() {
    return {
      timer: "",
      wordString: {},
      start: "",
      end: "",
      interval: "",
      days: "",
      minutes: "",
      hours: "",
      seconds: "",
      message: "",
      statusType: "",
      statusText: ""
    };
  },
  created: function() {
    this.wordString = JSON.parse(this.trans);
  },
  mounted() {
    this.start = new Date(this.starttime).getTime();
    this.end = new Date(this.endtime).getTime();
    // Update the count down every 1 second
    this.timerCount(this.start, this.end);
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end);
    }, 1000);
  },
  methods: {
    timerCount: function(start, end) {
      // Get todays date and time
      const now = new Date().getTime();

      // Find the distance between now an the count down date
      const distance = start - now;
      const passTime = end - now;

      if (distance < 0 && passTime < 0) {
        this.message = this.wordString.expired;
        this.statusType = "expired";
        this.statusText = this.wordString.status.expired;
        clearInterval(this.interval);
        return;
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime);
        this.message = this.wordString.running;
        this.statusType = "running";
        this.statusText = this.wordString.status.running;
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance);
        this.message = this.wordString.upcoming;
        this.statusType = "upcoming";
        this.statusText = this.wordString.status.upcoming;
      }
    },
    calcTime: function(dist) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000);
    }
  }
};
</script>

<style lang="less" scoped>
@import (reference) "./../Less/customVariables.less";
@import (reference) "./../Less/customMixins.less";

.countdownTimer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 20px;
  color: #fff;
  width: 100%;

  .day,
  .hour,
  .min,
  .sec {
    display: flex;
    flex-direction: column;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    margin: 0 5px;
    .format {
      font-weight: 300;
      font-size: 14px;
      //@include margin-start(5);
      //display: inline-block;
      opacity: 0.8;
      width: 60px;
    }
  }
  .number {
    background-color: @primaryColor;
    padding: 0 5px;
    border-radius: 5px;
    width: 60px;
    text-align: center;
  }
  .message {
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px;
  }
  .status-tag {
    width: 270px;
    margin: 10px 5vw;
    padding: 8px 0;
    font-weight: 500;
    color: #000;
    text-align: center;
    border-radius: 15px;
    &.upcoming {
      background-color: lightGreen;
    }
    &.running {
      background-color: gold;
    }
    &.expired {
      background-color: silver;
    }
  }
}
</style>
