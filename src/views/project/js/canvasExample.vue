<template>
  <div class="canvasExample">
    <input v-model="color" type="color" />
    <canvas ref="draw" />
  </div>
</template>
<script>
export default {
  name: "CanvasExample",
  data() {
    const isDrawing = false;
    const canvas = null;
    const ctx = null;
    const color = null;
    const lastX = new Number(0);
    const lastY = new Number(0);
    return {
      canvas,
      ctx,
      color,
      isDrawing,
      lastX,
      lastY
    };
  },

  watch: {
    color: function(newValue, oldValue) {
      if (oldValue != newValue) {
        this.ctx.strokeStyle = newValue;
      }
    }
  },
  mounted() {
    this.canvas = this.$refs["draw"];
    this.ctx = this.canvas.getContext("2d");
    this.ctx.strokeStyle = "#BADA55";
    this.ctx.lineJoin = "round";
    this.ctx.lineCap = "round";
    this.canvas.addEventListener(
      "mouseup",
      () => {
        this.isDrawing = false;
        event.stopPropogation(); //stop event bubbling
      },
      {
        capture: false, // top to bottom bubbling/propogation
        once: false //should work only once
      }
    );
    this.canvas.addEventListener(
      "mousedown",
      event => {
        this.isDrawing = true;
        this.lastX = event.offsetX;
        this.lastY = event.offsetY;
        event.stopPropogation(); //stop event bubbling
      },
      {
        capture: false, // top to bottom bubbling/propogation
        once: false //should work only once
      }
    );
    this.canvas.addEventListener(
      "mouseout",
      () => {
        this.isDrawing = false;
        event.stopPropogation(); //stop event bubbling
      },
      {
        capture: false, // top to bottom bubbling/propogation
        once: false //should work only once
      }
    );
    this.canvas.addEventListener(
      "mousemove",
      event => {
        this.draw(event);
        event.stopPropogation(); //stop event bubbling
      },
      {
        capture: false, // top to bottom bubbling/propogation
        once: false //should work only once
      }
    );
  },

  methods: {
    draw: function(event) {
      if (!this.isDrawing) return;
      this.ctx.beginPath();
      this.ctx.moveTo(this.lastX, this.lastY);
      this.lastX = event.offsetX;
      this.lastY = event.offsetY;
      this.ctx.lineTo(this.lastX, this.lastY);
      this.ctx.stroke();
    }
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../../Less/customMixins.less";
@import (reference) "./../../../Less/customVariables.less";

.canvasExample {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  & > canvas {
    background-color: #fafbfc;
    border-radius: @borderRadius;
    .boxShadow(@two);
  }
}
</style>
