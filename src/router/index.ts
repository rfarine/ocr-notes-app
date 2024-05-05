import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
import Camera from "@/views/Camera.vue";
import Home from "@/views/Home.vue";
import Inbox from "@/views/Inbox.vue";
import Layout from "@/views/Layout.vue";
import Saved from "@/views/Saved.vue";
import Search from "@/views/Search.vue";
import Settings from "@/views/Settings.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "inbox",
        name: "Inbox",
        component: Inbox,
      },
      {
        path: "camera",
        name: "Camera",
        component: Camera,
      },
      {
        path: "saved",
        name: "Saved",
        component: Saved,
      },
      {
        path: "search",
        name: "Search",
        component: Search,
      },
      {
        path: "settings",
        name: "Settings",
        component: Settings,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
