<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {ref, onMounted} from 'vue';
import RippleButton from './components/RippleButton.vue';

const name=ref('john');
const status=ref('active');
const tasks=ref(['task one','task two', 'task three']);
const newTask=ref();

const toggleStatus=()=>{
  if(status.value==='active'){
    status.value='pending';
  }else if(status.value==='pending'){
    status.value='inactive';
  }else{
    status.value='active';
  }
};

const addTask=()=>{
  if(newTask.value.trim() !==''){
    tasks.value.push(newTask.value);
    newTask.value='';
  }
};

const deleteTask=(index)=>{
  tasks.value.splice(index,1);
};

onMounted(async ()=>{
  try{
    const response =await fetch('https://jsonplaceholder.typicode.com/todos');
    const data=await response.json();
    tasks.value=data.map((task)=>task.title)
    
  }catch (error){
    console.log('error fetching tasks')

  }
})

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
      <div class="container">
        <RippleButton />
      </div>

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

      <form @submit.prevent="addTask">
        <label for="newTask">Add Task</label>
        <input type="text" id="newTask" name="newTask" v-model="newTask">
        <button type="submit">Submit</button>
      </form>

      <h3>Task:</h3>
      <br>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <span>
            {{ task }}

          </span>
          <button @click="deleteTask(index)">x</button>
          
          </li>
      </ul>
      <br>
      <button @click="toggleStatus">Change Status</button>
  </div>

  <RouterView />
</template>

<style scoped>
body {
  margin: 0;
  font-family: sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: aliceblue;
}
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
