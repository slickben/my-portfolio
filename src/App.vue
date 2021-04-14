<template>
  <div class="">
    <!-- nav -->
      <div class="h-screen relative ">
        <NavBar/>
      </div>
    
      <router-view></router-view>
    
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue';
export default {
  name: "App",
  components: {
    NavBar,
  }
}


// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
</style>