<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref} from 'vue';

const name=ref('john');
const status=ref('active');
const tasks=ref(['task one','task two', 'task three']);

const toggleStatus=()=>{
  if(status.value==='active'){
    status.value='pending';
  }else if(status.value==='pending'){
    status.value='inactive';
  }else{
    status.value='active';
  }
}

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    <div class="container mt-5">
      <h1 class="text-primary">Hello, Bootstrap + Vue + Vite!</h1>
      <button class="btn btn-success col-lg-5">Click me</button>
    </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      
    </div>
  </header>
  <div>
  <br>

      <h1>{{ name }}</h1>
      <p v-if="status==='active'">user is active</p>
      <p v-else-if="status==='pending'">user is pending</p>
      <p v-else>User is inactive</p>
      <br>

      <h3>Task:</h3>
      <br>
      <ul>
        <li v-for="task in tasks" :key="task">{{ task }}</li>
      </ul>
      <br>
      <button @click="toggleStatus">Change Status</button>
  </div>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
