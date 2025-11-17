<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import RippleButton from "./components/RippleButton.vue";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <main class="d-flex flex-column">
    <RouterView />
    <!-- Your routed pages appear here -->
  </main>
</template>

<style scoped></style>
