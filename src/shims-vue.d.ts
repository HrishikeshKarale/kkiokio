// declare module "*.vue" {
//   import Vue from "vue";
//   export default Vue;
// }
declare module "*.vue" {
  import { defineComponent, toRef, toRefs, reactive, ref } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}
