// vue
import { inject } from "vue";

export const loading = {
  data() {
    // global property
    const EMITTER = inject("$emitter");
    return {
      emitter
    }
  },
  mounted() {
    this.EMITTER.emit("loadingScreen", false);
  },
  unmounted() {
    this.EMITTER.emit("loadingScreen", true);
  },
};
