<template>
  <div
    id="app"
    :style="{
      backgroundImage: 'url(https://wallpaperaccess.com/full/5466409.jpg)',
    }"
  >
    <div class="search-box">
      <input
        type="text"
        placeholder="Search Weather ..."
        class="search-bar"
        v-model.trim="cityName"
      />
      <button
        v-bind:disabled="cityName.length === 0"
        @click="getData()"
        class="btn1"
      >
        Search
      </button>
    </div>

    <div v-if="error">
      <h1>{{ error }}</h1>
    </div>
    <div class="weather-box" v-else-if="weather.length !== 0">
      <div class="location-box">
        <div class="location">{{ weather.name }}</div>
      </div>

      <div class="date-box">
        <div class="date">Thursday 1 June 2023</div>
      </div>

      <div class="temperature-box">
        <div class="temperature">{{ weather.main.temp }}°C</div>
        <div class="weather">{{ weather.weather[0].main }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const apiKey = ref("35a118740e49bd6a50544377cff56a4e");
const cityName = ref("");
const weather = ref([]);
const error = ref("");

const getData = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey.value}&units=metric`
    );
    weather.value = await response.json();
  } catch (err) {
    error.value = err;
  }

  cityName.value = "";
};
</script>

<style scoped>
#app {
  height: 100vh;
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover;
  text-align: center;
}

* {
  margin: 0;
  padding: 0;
}

.bg-image {
  filter: blur(2px);
  -webkit-filter: blur(8px);
}
.search-bar {
  margin: 50px;
  padding: 10px;
  width: 80%;
  font-size: 20px;
  color: dimgrey;
  font-family: sans-serif;
  box-shadow: 10px 10px 5px rgb(73, 77, 78);
  border-radius: 6px;
  font-weight: bold;
}

.btn1 {
  font-size: 20px;
  padding: 10px;
  box-shadow: 10px 10px 5px rgb(73, 77, 78);
  border-radius: 6px;
  text-shadow: 0px 0px 1px #494848;
}

.location-box {
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 40px;
  text-align: center;
  font-weight: 900;
  text-shadow: 5px 5px 5px #000000;
}

.date-box {
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 25px;
  text-align: center;
  padding-top: 16px;
  font-style: oblique;
  text-shadow: 5px 5px 5px #000000;
}

.temperature {
  display: inline-block;
  color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 85px;
  text-align: right;
  font-weight: 900;
  text-shadow: 5px 5px 5px #000000;
  padding: 10px 15px;
  margin-top: 45px;
  background-color: rgba(253, 236, 236, 0.432);
  border-radius: 25px 6px 25px 6px;
}

.weather {
  color: white;
  text-align: center;
  font-size: 35px;
  padding-top: 16px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-shadow: 5px 5px 5px #000000;
}
</style>
