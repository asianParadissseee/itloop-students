import {createRouter, createWebHistory} from "vue-router";

export const router  = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("@/pages/home/ui/home-page.vue"),
        },
        {
            path: "/game",
            name: "Game",
            component: () => import("@/pages/game/ui/game-page.vue"),
        },
    ]
})