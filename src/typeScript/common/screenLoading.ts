import { onUnmounted, onMounted, inject } from "vue";

export default function loading() {
  const EMITTER: any = inject("$emitter");
  onMounted(() => {
    // console.log('login');
    EMITTER.emit("loadingScreen", false);
  });
  onUnmounted(() => {
    // console.log('logout');
    EMITTER.emit("loadingScreen", true);
  });
};
