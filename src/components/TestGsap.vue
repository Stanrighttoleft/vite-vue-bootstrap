<template>
  <div class="wrapper">
    <section class="section1">Section 1</section>
    <section class="section2">Section 2</section>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(".section2", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".section2",
      start: "top 80%",
      end: "top 50%",
      scrub: true,
    },
  });
});
</script>

<style>
.wrapper {
  width: 100%;
}

.section1,
.section2 {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
}

.section1 {
  background: lightblue;
}

.section2 {
  background: lightgreen;
  opacity: 0;
}
</style>
