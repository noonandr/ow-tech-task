import { createRouter, createWebHistory } from "vue-router";
import TitleListView from "../views/TitleListView.vue";
import TitleDetailsView from "../views/TitleDetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "title-list",
      component: TitleListView,
    },
    {
      path: "/titles/:id",
      name: "title-details",
      component: TitleDetailsView,
    },
  ],
});

export default router;
