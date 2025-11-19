<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted } from "vue";
import RippleButton from "./components/RippleButton.vue";
</script>

<template>
  <div class="containter-fluid app">
    
        <RouterView />
        <!-- Your routed pages appear here -->
  </div>
  

</template>

<style >

.app{



  width: 100%;
}
</style>
