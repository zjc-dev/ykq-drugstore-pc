// 导入baidu.vue
import registerRouter from "@/views/register.vue";

export default [
    {
        path: "/register",
        name: "register",
        component: registerRouter,
        meta: {
            title: "注册页面"
        }
    }
]