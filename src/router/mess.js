// 导入baidu.vue
import messRouter from "@/views/mess.vue";

export default [
    {
        path: "/mess",
        name: "mess",
        component: messRouter,
        meta: {
            title: "百度搜索结果"
        }
    }
]