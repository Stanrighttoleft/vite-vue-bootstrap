<template>
  <div ref="box" class="box">Animate me!</div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const box = ref(null);

onMounted(() => {
  // Simple GSAP animation
  gsap.to(box.value, { x: 300, rotation: 360, duration: 2 });
});
</script>

<style>
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>
