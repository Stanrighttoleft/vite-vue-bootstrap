<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";

</script>

<template>
  <div class="app">
    
        <RouterView />
        <!-- Your routed pages appear here -->
  </div>
  

</template>

<style >
.app{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background-color: black;
}

</style>
