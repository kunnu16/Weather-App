<template>
  <div class="modal">
    <form class="modal-content">
      <div class="container">
        <label><b>Email :</b></label>
        <input
          type="text"
          placeholder="Enter Your Email"
          v-model.trim="email"
          required
        />
        <label><b>Password :</b></label>
        <input
          type="password"
          placeholder="Enter Your password"
          v-model.trim="password"
          autocomplete="on"
          required
        />
        <button @click="handleLogin">Login</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

const handleLogin = async () => {
  const credential = {
    email: email.value,
    password: password.value,
  };

  if (!localStorage.getItem("data")) {
    alert("Please register yourself");
  } else {
    const registeredUser = JSON.parse(localStorage.getItem("data"));
    console.log(registeredUser.email);

    if (
      registeredUser.email === credential.email &&
      registeredUser.password === credential.password
    ) {
      const token = "kfdslflkdslkf";
      localStorage.setItem("token", token);
      router.push("/weather");
    } else {
      alert("Invalid email or Password!");
      email.value = "";
      password.value = "";
    }
  }
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
  min-height: 100vh; 
  overflow: hidden; 
  background-color: #61646d;
  background-size: cover;
  padding-top: 50px;
}


.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; 
  border: 1px solid #888;
  width: 40%; 
}

hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}

@media screen and (max-width: 300px) {
  .cancelbtn,
  .signupbtn {
    width: 50%;
  }
}
</style>