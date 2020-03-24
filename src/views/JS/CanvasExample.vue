<template>
  <div class="canvasExample">
    <router-link to="/Project">
      <span class="fas fa-angle-double-left fa-2x"> Go Back</span>
    </router-link>
    <div class="canvas">
      <canvas ref="draw" />
    </div>
  </div>
</template>
<script>
export default {
  name: "canvasExample",
  data() {
    const isDrawing = false;
    const canvas = null;
    const ctx = null;
    const lastX = 0;
    const lastY = 0;
    return {
      canvas,
      ctx,
      isDrawing,
      lastX,
      lastY
    };
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
      console.log(this.lastX, this.lastY);
    }
  },
  mounted() {
    this.canvas = this.$refs["draw"];
    this.ctx = this.canvas.getContext("2d");
    this.ctx.strokeStyle = "#BADA55";
    this.ctx.lineJoin = "round";
    this.ctx.lineCap = "round";
    this.canvas.addEventListener("mouseup", () => {
      this.isDrawing = false;
    });
    this.canvas.addEventListener("mousedown", event => {
      this.isDrawing = true;
      this.lastX = event.offsetX;
      this.lastY = event.offsetY;
    });
    this.canvas.addEventListener("mouseout", () => {
      this.isDrawing = false;
    });
    this.canvas.addEventListener("mousemove", event => {
      this.draw(event);
    });
  }
};
</script>
<style lang="less" scoped>
@import (reference) "./../../Less/customMixins.less";
@import (reference) "./../../Less/customVariables.less";
@size: 320px;
.canvasExample {
  & > div {
    display: flex;
    flex-direction: row;
    &.canvas {
      & > canvas {
        background-color: #fafbfc;
        .boxShadow(@one);
      }
    }
  }
}
</style>
