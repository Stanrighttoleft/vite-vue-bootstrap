<template>
  <motion.div
    class="box"
    :animate="{ x: scrollProgress * 300, opacity: scrollProgress }"
  >
    Move & Fade on Scroll
  </motion.div>
</template>

<script setup>
import { motion, useScroll } from "motion-v";

const { scrollProgress } = useScroll();
</script>

<style>
.box {
  width: 150px;
  height: 100px;
  background-color: lightcoral;
  margin: 500px auto; /* add scroll space */
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
}
</style>
