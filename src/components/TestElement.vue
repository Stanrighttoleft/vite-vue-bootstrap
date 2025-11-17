<template>
  <el-button type="primary" @click="clickMe">Click Me</el-button>
</template>

<script setup>
const clickMe = () => {
  alert("Element Plus button works!");
};
</script>
