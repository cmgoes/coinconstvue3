import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../view/Dashboard.vue";
import Supply from "../view/Supply.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/supply",
    name: "Supply",
    component: Supply,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;