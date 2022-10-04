import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Overview from "@/views/subViews/Overview.vue"
const Todo = () => import('@/views/subViews/Todo.vue')
const Log = () => import('@/views/subViews/Log.vue')
const Step = () => import('@/views/subViews/module/Step.vue')
const Table = () => import("@/views/subViews/module/Table.vue")
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/home",
      component: Home,
      redirect: "/home/overview",
      children: [
        {
          path: 'overview',
          component: Overview
        },
        {
          path: 'todo',
          component: Todo
        },
        {
          path: 'log',
          component: Log
        },
        {
          path: 'step',
          component: Step
        },
        {
          path: 'table',
          component: Table
        }
      ]
    },
  ],
});

export default router;
