// vue
import { inject } from "vue";

export const loading = {
  data() {
    // global property
    const emitter = inject("$emitter");
    return {
      emitter
    }
  },
  mounted() {
    this.emitter.emit("loadingScreen", false);
  },
  unmounted() {
    this.emitter.emit("loadingScreen", true);
  },
};
