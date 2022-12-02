import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Overview from "@/views/subViews/Overview.vue"
const Todo = () => import('@/views/subViews/Todo.vue')
const Log = () => import('@/views/subViews/Log.vue')
const Step = () => import('@/views/subViews/Tables/Step.vue')
const NormalTable = () => import("@/views/subViews/Tables/NormalTable.vue")
const NotFound = () => import('@/views/error/404.vue')
const ServerError = () => import('@/views/error/500.vue')
const PersonalCenter = () => import('@/views/subViews/personal/PersonalCenter.vue')
const Clip = () => import('@/views/subViews/components/Clip/index.vue')
const Qrcode = () => import('@/views/subViews/components/Qrcode/index.vue')
const Magnifier = () => import('@/views/subViews/components/Magnifier/index.vue')
const Player = () => import('@/views/subViews/components/videoPlayer/index.vue')
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      path: '/error',
      redirect: "/error/404",
      children: [
        {
          path: '404',
          component: NotFound
        },
        {
          path: '500',
          component: ServerError,
        }
      ]
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
          component: NormalTable
        },
        {
          path: 'personal',
          component: PersonalCenter
        },
        {
          path: "components",
          redirect: "/components/clip",
          children: [
            {
              path: "clip",
              component: Clip
            },
            {
              path: "qrcode",
              component: Qrcode
            },
            {
              path: "magnifier",
              component: Magnifier
            },
            {
              path: "player",
              component: Player
            }
          ]
        }
      ]
    },
  ],
});

export default router;
