<template>
  <enterprise-app-layout>
    <template #header>
      <vue-header :logo-link="logoLink" :nav="navigation" />
    </template>
  </enterprise-app-layout>
</template>

<script>
// @ is an alias to /src
import vueHeader from "@/components/vueHeader";
import enterpriseAppLayout from "@/components/enterpriseAppLayout";
import { nav } from "@/store/navigation";

export default {
  name: "App",

  components: {
    vueHeader,
    enterpriseAppLayout
  },

  data() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const logoLink = require("@/assets/logo.svg");
    const navigation = nav;
    return {
      navigation,
      logoLink
    };
  }
};
</script>
