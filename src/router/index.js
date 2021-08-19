import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../view/Dashboard.vue"

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;