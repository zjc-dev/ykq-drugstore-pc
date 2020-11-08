<template>
  <div id="app">
    <!-- 页头 -->
    <div class="header">
      <div class="tl">
        <ul>
          <li>
            <a href="javascript:;">新闻</a>
          </li>
          <li>
            <a href="javascript:;">hao123</a>
          </li>
          <li>
            <a href="javascript:;">地图</a>
          </li>
          <li>
            <a href="javascript:;">视频</a>
          </li>
          <li>
            <a href="javascript:;">贴吧</a>
          </li>
          <li>
            <a href="javascript:;">学术</a>
          </li>
          <li>
            <!-- <p v-bind:style="display:code">你还</p> -->
            <a
              href="javascript:;"
              @mouseenter="mouseOver"
              @mouseleave="mouseLeave"
              >更多{{ seen }}</a
            >
          </li>
        </ul>
      </div>
      <div class="tr">
        <ul>
          <li>
            <a href="#">北京</a>
            <img src="../assets/a0.png" alt />
          </li>
          <li>
            <a href>设置</a>
          </li>
          <li>
            <a href>张三</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="tab clearfix"> -->
    <div class="div-ul">
      <ul class="tab clearfix" v-show="seen">
        <li v-for="(item, idx) in items" :key="idx">
          <img :src="item.src" />
          <p>{{ item.mess }}</p>
        </li>
      </ul>
    </div>

    <!-- </div> -->
    <!-- 主体 -->
    <div class="main">
      <div class="logo">
        <img src="../assets/baidu.gif" alt />
      </div>
      <div class="search">
        <form action>
          <input
            type="text"
            v-model="wd"
            placeholder="请输入"
            @keyup="submit"
            @keydown="keydown($event)"
          />
          <button type="submit">百度一下</button>
        </form>
      </div>
    </div>

    <!-- footer -->
    <div class="footer">
      <div class="fl">
        <ul>
          <li>
            <a href="#">设为首页</a>
          </li>
          <li>
            <a href="#">关于百度1</a>
          </li>
          <li>
            <a href="#">About Baidu</a>
          </li>
          <li>
            <a href="#">百度营销</a>
          </li>
          <li>
            <a href="#">使用百度前必读</a>
          </li>
          <li>
            <a href="#">意见反馈</a>
          </li>
          <li>
            <a href="#">帮助中心</a>
          </li>
        </ul>
      </div>
      <div class="fr">
        <ul>
          <li>©2020 Baidu</li>
          <li>(京)-经营性-2017-0020</li>
          <li>京公网安备11000002000001号</li>
          <li>京ICP证</li>
          <li>030173号</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import wangpanIcon from "../assets/wangpan.png";
import zhidaoIcon from "../assets/zhidao.png";
import zhidao1from from "../assets/zhidao1.png";

export default {
  name: "App",
  data() {
    return {
      items: [
        { mess: "网盘", src: wangpanIcon },
        { mess: "知道", src: zhidaoIcon },
        { mess: "百科", src: zhidao1from },
        { mess: "图片", src: wangpanIcon },
        { mess: "宝宝知道", src: wangpanIcon },
        { mess: "网盘", src: wangpanIcon },
        { mess: "知道", src: zhidaoIcon },
        { mess: "百科", src: zhidao1from },
        { mess: "图片", src: wangpanIcon },
        { mess: "宝宝知道", src: wangpanIcon },
      ],
      seen: true,
      wd: "",
    };
  },
  components: {},
  methods: {
    mouseOver: function () {
      this.seen = true;
    },
    mouseLeave: function () {
      this.seen = false;
    },
    submit: function () {
      this.$router.push({ name: "mess", params: { wd: this.wd } });
    },
  },
};
</script>


<style scoped>
/* 设置链接的下划线去掉 */

/* 清除浮动 */
.clearfix:after {
  content: "";

  display: block;

  height: 0;

  clear: both;

  visibility: hidden;
}

.clearfix {
  /* IE6、7 专有 */

  *zoom: 1;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
.header {
  width: 100%;
  height: 60px;
}
.tl {
  float: left;
  margin-left: 35px;
}
/* 实现 li的左浮动*/
.header .tl ul {
  height: 60px;
}

.tab {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: start;
  position: absolute;
  top: 40px;
  left: 140px;
  /* height: 200px; */
  width: 320px;
  border-radius: 10px;
  border: 1px solid #f0e8e8;
}

.tab li {
  /* flex: 1; */
  height: 60px;
  width: 25%;
  cursor: pointer;
}
.tab li p {
  height: 20px;
  font-size: 12px;
  text-align: center;
  color: #222222;
}
.tab li p:hover {
  color: pink;
}
.tab li img {
  width: 80px;
  height: 40px;
  padding: 0 19px;
}

.header .tl li {
  float: left;
  /* 设置li居中对齐 */
  line-height: 60px;
  margin-right: 35px;
}
.header li a {
  font: 13px Arial, Sanf serif;
  color: #222222;
}
.tr {
  float: right;
  margin-right: 35px;
}
.tr li {
  float: left;
  line-height: 60px;
  margin-left: 25px;
}
/* 设置图片大小 */
.tr img {
  vertical-align: middle;
  width: 23px;
  height: 23px;
}
.main {
  width: 600px;
  margin: 0 auto;
}
/* 设置图片大小 */
.main img {
  width: 270px;
  height: 130px;
  vertical-align: middle;
  margin: 30px 165px 20px 165px;
}
.search {
  width: 600px;
  height: 42px;
  display: flex;
}
.search input {
  float: left;
  height: 42px;
  width: 486px;
  border: 2px solid #c4c7ce;
  border-right: 0;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding-left: 15px;
}
.search button {
  flex: 1;
  float: right;
  height: 42px;
  width: 96px;
  color: #fff;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: #4e6ef2;
  cursor: pointer;
}
.footer {
  height: 50px;
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}
.fl {
  float: left;
  margin-left: 15px;
}
.fr {
  float: right;
  margin-right: 15px;
}
.footer .fl li {
  float: left;
  line-height: 50px;
  margin-right: 15px;
}
.footer .fl a {
  font: 10px sans-serif;
  color: #9195a3;
}
.footer .fr li {
  float: left;
  margin-right: 15px;
  line-height: 50px;
  font-size: 9px;
  color: #bbb;
}

.example {
  position: fixed;
  bottom: 200px;
}
</style>