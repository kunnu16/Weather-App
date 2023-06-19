import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Weather from "../components/Weather.vue";
import SignUp from "../components/SignUp.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/signUp", name: "signUp", component: SignUp },
  { path: "/login", name: "login", component: Login },
  { path: "/weather", name: "weather", component: Weather, meta: { requiresAuth: true }},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to,from,next) => {
  const token = localStorage.getItem('token');
  
  if(to.meta.requiresAuth && !token) {
    next('/login');
  } else {
    next();
  }
})

export default router;
