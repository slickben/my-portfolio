import { createWebHistory, createRouter} from "vue-router";
import Home from "./views/Home.vue";




const history = createWebHistory();

const routes = [
    {
        path: "/",
        name: "portfolio",
        component: Home,
    },
];

const router = createRouter({
    history, routes
});


export default router;