import { onUnmounted, onMounted, inject } from "vue";

export default function loading() {
  const emitter: any = inject("$emitter");
  onMounted(() => {
    console.log('login');
    emitter.emit("loadingScreen", false);
  });
  onUnmounted(() => {
    console.log('logout');
    emitter.emit("loadingScreen", true);
  });
};
