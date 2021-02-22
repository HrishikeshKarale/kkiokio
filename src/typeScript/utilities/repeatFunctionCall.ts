import { ref, onMounted, onUnmounted } from "vue";

export default function repeatFunctionCall(func: Function, delay = 2000): void {
  const timer = ref(0);
  const interval = delay;

  onMounted(() => {
    timer.value = setInterval(() => {
      func();
    }, interval);
  });

  onUnmounted(() => {
    clearInterval(timer.value);
  });
}
