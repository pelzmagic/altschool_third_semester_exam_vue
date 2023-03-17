import { createRouter, createWebHistory } from "vue-router";
import MyRepository from "@/components/MyRepository.vue";
import RepositoryDetails from "@/views/RepositoryDetails.vue";
import NotFound from "@/views/NotFound.vue";
const routes = [
    {
        path: "/",
        name: 'MyRepository',
        component: MyRepository
    },
    {
        path: "/repository-details/:name",
        name: 'RepositoryDetails',
        component: RepositoryDetails,
    },

    //This is the wildcard to catch all path errors//

    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;