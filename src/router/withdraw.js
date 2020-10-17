import withdrawRouter from "@/views/withdraw.vue";

export default [
    {
        path: "/withdraw",
        name: "withdraw",
        component: withdrawRouter,
        meta: {
            keepAlive: true
        }
    }
]


