export const loading = {
  mounted() {
    this.emitter.emit("loadingScreen", false);
  },
  unmounted() {
    this.emitter.emit("loadingScreen", true);
  },
};
