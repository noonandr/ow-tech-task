import { createRouter, createWebHistory } from "vue-router";
import TitleListView from "../views/TitleListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "title-list",
      component: TitleListView,
    },
  ],
});

export default router;
