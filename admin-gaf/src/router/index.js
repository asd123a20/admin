import { createRouter, createWebHistory } from "vue-router";
import user from "../views/user.vue";
import role from "../views/role.vue";
import menus from "../views/menus.vue";
const routes = [
  {
    path: "/user",
    name: "user",
    component: user
  },
  {
    path: "/role",
    name: "role",
    component: role
  },
  {
    path: "/menu",
    name: "menus",
    component: menus
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
