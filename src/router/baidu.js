// 导入baidu.vue
import baiduRouter from "@/views/baidu.vue";

export default [
    {
        path: "/sear",
        name: "baidu",
        component: baiduRouter,
        meta: {
            title: "baidu页面"
        }
    }
]