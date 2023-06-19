<template>
  <div class="modal">
    <form class="modal-content">
      <div class="container">
        <label><b>FirstName :</b></label>
        <input
          type="text"
          placeholder="Enter Your FirstName"
          v-model.trim="data.firstName"
          required
        />
        <label><b>LastName :</b></label>
        <input
          type="text"
          placeholder="Enter Your LastName"
          v-model.trim="data.lastName"
          required
        />
        <label><b>Email :</b></label>
        <input
          type="text"
          placeholder="Enter Your email"
          v-model.trim="data.email"
          required
        />
        <label><b>Password :</b></label>
        <input
          type="password"
          placeholder="Enter Your password"
          v-model.trim="data.password"
          autocomplete="on"
          required
        />
        <button @click="signUp">SignUp</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();

const data = reactive({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
});

const signUp = () => {
  localStorage.setItem("data",JSON.stringify(data));
  router.push("/login");
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}

input[type="text"]:focus,
input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
}

button:hover {
  opacity: 1;
}

.cancelbtn {
  padding: 14px 20px;
  background-color: #f44336;
}

.cancelbtn,
.signupbtn {
  float: left;
  width: 50%;
}

.container {
  padding: 16px;
}

.modal {
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;
  background-color: #61646d;
  padding-top: 50px;
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; 
  border: 1px solid #888;
  width: 45%; 
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

@media screen and (max-width: 300px) {
  .signupbtn {
    width: 50%;
  }
}
</style>