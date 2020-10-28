<template>
  <div id="app">
    <header-router
      v-if="$route.meta.keepAlive"
      :msg="msg"
      @func="giveatt"
    ></header-router>
    <aside-left v-if="$route.meta.keepAlive"></aside-left>
    <router-view />
  </div>
</template>

<script>
import headerRouter from "@/components/header";
import asideLeft from "@/components/asideLeft";
export default {
  name: "App",
  data() {
    return {
      msg: "父亲的msg",
      val: "",
    };
  },
  methods: {
    giveatt(data) {
      console.log("调用了复函数" + data);
      this.val = data;
      console.log(this.val);
    },
  },
  components: {
    headerRouter,
    asideLeft,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
body {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
}
.main_box {
  overflow: auto;
  height: calc(100vh - 60px);
  width: calc(100vw - 200px);
  position: absolute;
  left: 200px;
  top: 60px;
  padding: 0 20px;
}
</style>
