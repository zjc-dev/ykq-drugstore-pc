import accountfundsRouter from "@/views/accountfunds.vue"

export default [
    {
        path: "/accountfunds",
        name: "accountfunds",
        component: accountfundsRouter,
        meta: {
            title: "账户资金",
            keepAlive: true
        }
    },
]