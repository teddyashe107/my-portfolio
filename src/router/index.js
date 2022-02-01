import { createRouter, createWebHistory } from "vue-router";

import Home from "../view/Home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        children: [
            {
                path: "",
                name: "Project",
                component: () => import("../view/Project.vue"),
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { left: 0, top: 0 };
    },
});

export default router;
