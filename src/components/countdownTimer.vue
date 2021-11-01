<template>
  <div v-if="days || hours || minutes" class="countdownTimer">
    <div class="day">
      <span class="number" v-text="days"/>
      <p class="format" v-text="wordString.day"/>
    </div>
    <div class="hour">
      <span class="number" v-text="hours"/>
      <p class="format" v-text="wordString.hours"/>
    </div>
    <div class="min">
      <span class="number" v-text="minutes"/>
      <p class="format" v-text="wordString.minutes"/>
    </div>
    <div class="sec">
      <span class="number" v-text="seconds"/>
      <p class="format" v-text="wordString.seconds"/>
    </div>
    <div class="message" v-text="message"/>
    <div class="status-tag" :class="statusType" v-text="statusText"/>
  </div>
</template>
<script>
export default {
  name: "CountdownTimer",
  props: {
    startTime: {
      required: true,
      type: [String, Number],
      default: function() {
        return new Date().getTime();
      }
    }, // startTime
    endTime: {
      required: true,
      type: [String, Number],
      default: function() {
        return new Date().getTime();
      }
    }, // endTime
    trans: {
      required: true,
      type: String
    } //trans
  },
  //["startTime", "endTime", "trans"],
  data() {
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
    this.start = new Date(this.startTime).getTime();
    this.end = new Date(this.endTime).getTime();
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
  justify-content: space-evenly;
  font-size: @fontSize;
  // color: @backgroundColor;

  .day,
  .hour,
  .min,
  .sec {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-self: center;
    font-size: @fontSizeSm * 2;
    font-weight: bolder;
    text-align: center;
    margin: 0 @spaceSm;
    color: @backgroundColor;
    .format {
      color: @textColor;
      font-weight: 500;
      font-size: @fontSizeSm;
      opacity: 0.8;
      filter: opacity(80%);
      min-width: 64px;
    }
  }
  .number {
    background-color: @primary;
    padding: 0 @spaceSm;
    border-radius: 5px;
    width: 60px;
    text-align: center;
  }
  .message {
    align-self: center;
    text-align: center;
    font-size: @fontSizeSm;
    margin: 0 @spaceXl;
  }
  .status-tag {
    min-width: 270px;
    padding: @spaceMd @spaceXl;
    font-weight: 500;
    color: #000;
    text-align: center;
    border-radius: 15px;
    &.upcoming {
      background-color: lightGreen;
    }
    &.running {
      background-color: @dangerText;
      color: @backgroundColor;
    }
    &.expired {
      background-color: silver;
    }
  }
}
</style>
