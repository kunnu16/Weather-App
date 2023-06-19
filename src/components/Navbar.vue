<template>
  <div>
    <div class="topnav">
      <router-link class="active" id="nav" to="/">Home</router-link>
      <router-link id="nav" to="/weather">WeatherApp</router-link>
      <router-link id="nav" to="/signUp" style="float:right">SignUp</router-link>
      <router-link id="nav" to="/login" style="float:right">Login</router-link>
      <Button id="nav" style="float:right" @click="handleLogout" >Logout</Button>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter();
const handleLogout = () => {
  localStorage.clear();
  router.push('/login');
}
</script>


<style scoped>
.topnav {
  background-color: #313d3f;
  overflow: hidden;
}

#nav {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 20px 30px;
  text-decoration: none;
  font-size: 17px;
}

button {
  background-color: rgb(168, 118, 53);
}

.topnav #nav:hover {
  background-color: #ddd;
  color: rgb(212, 129, 129);
}

.topnav #nav.active {
  color: white;
}


</style>