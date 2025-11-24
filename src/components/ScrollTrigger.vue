<template>
  <div ref="section" class="section">Scroll down to animate me!</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const section = ref(null);

onMounted(() => {
  // Register plugin
  gsap.registerPlugin(ScrollTrigger);

  gsap.to(section.value, {
    y: 200,
    scrollTrigger: {
      trigger: section.value,
      start: "top 80%",
      end: "top 20%",
      scrub: true,
      markers: true,
    },
  });
});
</script>

<style>
.section {
  height: 100vh;
  background: lightblue;
}
</style>
