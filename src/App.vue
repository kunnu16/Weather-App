<template>
  <div>
    <!-- <SignUp /> -->
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script setup>
import Weather from "./components/Weather.vue";
import SignUp from "./components/SignUp.vue"
import Login from "./components/Login.vue" 
import Navbar from "./components/Navbar.vue";
</script>
