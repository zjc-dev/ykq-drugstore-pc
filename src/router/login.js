import loginRouter from "@/views/login.vue"

export default
    [
        {
            path: "/login",
            name: "login",
            component: loginRouter,
            meta: {
                title: "登陆页面"
            }
        }
    ]
