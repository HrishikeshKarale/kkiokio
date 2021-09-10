// https://usabilitygeek.com/ux-case-study-google-maps-vs-waze-mobile-apps/
<template>
  <!-- {{ article }} -->
  <article>
    <template v-for="entry in Object.entries(article)" :key="entry">
      <header v-if="entry[0] === 'header'">
        <h1 v-text="entry[1]" />
      </header>
      <vue-img
        v-else-if="entry[0] === 'img'"
        :src="entry[1].src"
        :alt="entry[1].alt"
        :caption="entry[1].caption"
      />
      <template
        v-for="ent in entry[1]"
        v-else-if="entry[0] === 'content'"
        :key="ent + '-' + entry[0]"
      >
        <template v-for="e in Object.entries(ent)" :key="e">
          <p v-if="e[0] === 'text'" v-text="e[1]" />
          <p v-else-if="e[0] === 'altText'" v-html="e[1]" />
          <b v-else-if="e[0] === 'bold'" v-text="e[1]" />
          <vue-img
            v-else-if="e[0] === 'img'"
            :src="e[1].src"
            :alt="e[1].alt"
            :caption="e[1].caption"
          />
        </template>
      </template>
      <template v-else-if="entry[0] === 'section'">
        <section
          v-for="ent in entry[1]"
          id="section"
          :key="ent + '-' + entry[0]"
        >
          <template v-for="e in Object.entries(ent)" :key="e + '-' + ent[0]">
            <h3 v-if="e[0] === 'header'" v-text="e[1]" />
            <template
              v-for="e1 in e[1]"
              v-else-if="e[0] === 'content'"
              :key="e1 + '-' + e[0]"
            >
              <template
                v-for="e2 in Object.entries(e1)"
                :key="e2 + '-' + e1[0]"
              >
                <!-- {{ e2[0] }}-{{ e2[1] }} -->
                <p v-if="e2[0] === 'text'" v-text="e2[1]" />
                <p v-else-if="e2[0] === 'altText'" v-html="e2[1]" />
                <b v-else-if="e2[0] === 'bold'" v-text="e2[1]" />
                <vue-img
                  v-else-if="e2[0] === 'img'"
                  :src="e2[1].src"
                  :alt="e2[1].alt"
                  :caption="e2[1].caption"
                />
              </template>
            </template>
          </template>
        </section>
      </template>
    </template>
  </article>
</template>
<script>
import vueImg from "@/components/vueImg.vue";
export default {
  name: "PostTemplate",
  components: {
    vueImg
  },
  props: {
    post: {
      required: false,
      type: Object
    }, //props
    mounted() {
      this.emitter.emit("loadingScreen", false);
    },
    unmounted() {
      this.emitter.emit("loadingScreen", true);
    }
  }
};
</script>
