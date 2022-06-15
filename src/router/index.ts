import { createRouter, createWebHistory } from "vue-router";
import ShowOverview from "@/views/ShowOverview.vue";
import ShowDetails from "@/views/ShowDetails.vue";
import ShowSearchResult from "@/views/ShowSearchResult.vue";
import ShowSearchPage from "@/views/ShowSearchPage.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Show Overview",
    component: ShowOverview,
  },
  {
    path: "/show/:id",
    name: "ShowDetails",
    props: true,
    component: ShowDetails,
  },
  {
    path: "/search/:searchQuery",
    name: "search-details",
    props: true,
    component: ShowSearchResult,
  },
  {
    path: "/searchpage",
    name: "search-page",
    props: true,
    component: ShowSearchPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFound,
    props: true
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
