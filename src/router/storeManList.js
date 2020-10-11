import storeManListRouter from "@/views/storeManList.vue"

export default [{
    path: "/storeManagementList",
    name: "adminManList",
    component: storeManListRouter,
    meta: {
        title: "门店管理列表",
        keepAlive: true
    }
}]