<template>
  <div class="analogClock">
    <div class="digital">
      <div>{{ hours }}</div>
      <div>{{ minutes }}</div>
      <div>{{ seconds }}</div>
    </div>
    <div class="date">
      <div>{{ month }}</div>
      <div>{{ date }}</div>
      <div>{{ year }}</div>
    </div>
    <div class="analog">
      <div ref="hour" class="hourHand" />
      <div ref="minute" class="minuteHand" />
      <div ref="second" class="secondHand" />
      <div class="center" />
      <section class="indicator"></section>
      <section class="indicator"></section>
      <section class="indicator"></section>
      <section class="indicator"></section>
    </div>
  </div>
</template>
<script>
export default {
  name: "analogClock",
  data() {
    const hours = null;
    const minutes = null;
    const seconds = null;
    const date = null;
    const month = null;
    const year = null;
    return {
      hours,
      minutes,
      seconds,
      date,
      month,
      year
    };
  },
  methods: {
    setTime: function() {
      //do something
      const time = new Date();
      //date
      this.date = time.getDate() >= 10 ? time.getDate() : "0" + time.getDate();
      this.month =
        time.getMonth() >= 10 ? time.getMonth() : "0" + time.getMonth();
      this.year = time.getFullYear();
      //time
      this.hours =
        time.getHours() >= 10 ? time.getHours() : "0" + time.getHours();
      this.minutes =
        time.getMinutes() >= 10 ? time.getMinutes() : "0" + time.getMinutes();
      this.seconds =
        time.getSeconds() >= 10 ? time.getSeconds() : "0" + time.getSeconds();
      //clock hand manipulation
      const hourAngle = 90 + (this.hours / 12) * 360;
      const minuteAngle = 90 + (this.minutes / 60) * 360;
      const secondAngle = 90 + (this.seconds / 60) * 360;
      const hourHand = this.$refs["hour"];
      const minuteHand = this.$refs["minute"];
      const secondHand = this.$refs["second"];
      hourHand.style.transform = "rotate(" + hourAngle + "deg)";
      minuteHand.style.transform = "rotate(" + minuteAngle + "deg)";
      secondHand.style.transform = "rotate(" + secondAngle + "deg)";
    }
  },
  mounted() {
    setInterval(this.setTime, 1000);
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";
@size: 320px;
.analogClock {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: fit-content;
  height: fit-content;
  position: relative;
  & > div {
    &.date {
      display: flex;
      position: absolute;
      bottom: @size / 4;
      right: @size / 3;
      div {
        border-radius: 4px;
        margin: @spaceSm;
        padding: @spaceSm;
        .boxShadow(inset @two);
        min-width: 32px;
        max-width: fit-conent;
      }
    }
    &.digital {
      display: flex;
      position: absolute;
      top: @size / 4;
      right: @size / 3;
      div {
        border-radius: 4px;
        margin: @spaceSm;
        padding: @spaceSm;
        .boxShadow(inset @two);
        width: 32px;
      }
    }
    &.analog {
      position: relative;
      border: 8px solid @secondaryColor;
      border-radius: 50%;
      height: @size+ 32;
      width: @size+ 32;
      .boxShadow(inset @three);
      & > div {
        position: absolute;
        right: @size / 2;
        top: @size / 2;
        transform: rotate(90deg);
        transform-origin: 100%;
        .boxShadow(@four);
        &.hourHand {
          height: 8px;
          background-color: black;
          border: 1px solid black;
          width: 36%;
        }
        &.minuteHand {
          height: 6px;
          background-color: BLACK;
          width: 45%;
        }
        &.secondHand {
          height: 2px;
          background-color: red;
          border-color: red;
          transform-origin: 100%;
          width: 45%;
        }
        &.center {
          background-color: @secondaryColor;
          height: 32px;
          width: 32px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
