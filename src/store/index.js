import { createStore } from "vuex";
import axios from "axios";
import { useGetIcon } from "../composables/weatherIcon.js";
import { useToast } from "vue-toast-notification";
import "../.././node_modules/vue-toast-notification/dist/theme-sugar.css";

const store = createStore({
  state: {
    apiKey: "35a118740e49bd6a50544377cff56a4e",
    cityName: "",
    weather: [],
    error: "",
    imageURL: "",
    getDate: Date().split("(")[0],
  },

  mutations: {
    getApiData(state,data) {
      state.weather = data;
      state.imageURL  = useGetIcon(state.weather.weather[0].main);
    }
  },

  actions: {
    async getData({commit, state }) {
      try {
        const response = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${state.cityName}&appid=${state.apiKey}&units=metric`
        );
        commit('getApiData',response.data);
        const toast = useToast();
        toast.success("Api Fetched Successfully", {
          duration: 2000, // Specify the duration to show the toast
        });
      } catch (err) {
        state.error = err;
        const toast = useToast();
        toast.error(err, {
          duration: 2000, // Specify the duration to show the toast
        });
      }

      state.cityName = "";
      state.error = "";
    },
  },

  getters: {},
  modules: {},
});

export default store;
