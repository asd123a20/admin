import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/frame"
  },
  {
    path: "/login",
    component: () => import("../views/frame/Login.vue")
  },
  {
    path: "/frame",
    component: () => import("../views/frame/frame.vue"),
    children: [
      {
        path: "/frame",
        component: () => import("../views/frame/Home.vue")
      },
      {
        path: "/frame/:module/:app/:path(.*)",
        component: () => import("../views/frame/router-frame.vue")
      },
      {
        path: "/frame/:module/:app",
        component: () => import("../views/frame/router-frame.vue")
      },
      {
        path: "/frame/:module",
        component: () => import("../views/frame/router-frame.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
