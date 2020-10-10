<template>
  <!--  搜索页头部  -->
  <div id="app">
    <div class="header1">
      <div class="hl-img">
        <a href="sear">
          <img src="../assets/result.png" alt="到百度首页" title="到百度首页" />
        </a>
      </div>
      <div class="hl-search">
        <form action>
          <input
            type="text"
            v-model="wd"
            @keyup="keyup($event)"
            @keydown="keydown($event)"
          />
          <button>百度一下</button>
        </form>
        <ul class="search-val-list" v-show="seen">
          <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="hr">
        <a href class="hr1">百度首页</a>
        <a href class="hr2">设置</a>
        <a href class="hr3">
          <img src alt />
          <span>无凡心的凡人</span>
        </a>
      </div>
    </div>
    <div class="nav">
      <ul>
        <li>
          <a href>网页</a>
        </li>
        <li>
          <a href>咨询</a>
        </li>
        <li>
          <a href>视频</a>
        </li>
        <li>
          <a href>图片</a>
        </li>
        <li>
          <a href>知道</a>
        </li>
        <li>
          <a href>文库</a>
        </li>
        <li>
          <a href>贴吧</a>
        </li>
        <li>
          <a href>地图</a>
        </li>
        <li>
          <a href>采购</a>
        </li>
        <li>
          <a href>更多</a>
        </li>
      </ul>
    </div>
    <!-- 搜索页主题部分 -->
    <div class="main w">
      <div class="res_left"></div>
      <div class="res_right"></div>
    </div>
  </div>
</template>
<script>
// import baiduIcon from "../assets/result.png";
export default {
  data() {
    return {
      seen: true,
      wd: "", // 搜索关键字
      arr: [], // 存储关键字搜索结果返回的的数组
      listIndex: -1, //设置初始索引，数组从0开始，因此初始成-1
    };
  },
  components: {},
  methods: {
    // 不断拼接关键字
    keyup(event) {
      //如果我按的是上下键，或者enter键  那么就不继续搜索
      if (event.keyCode == 38 || event.keyCode == 40 || event.keyCode == 13)
        return;
      var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
      this.$http
        .jsonp(url, {
          params: {
            wd: this.wd,
          },
          jsonp: "cb",
        })
        .then((res) => {
          console.log(res);
          this.arr = res.data.s;
        });
    },

    keydown(event) {
      console.log(event);
      //下键：40 上键：38
      if (event.keyCode == 38) {
        //按的上键
        this.listIndex--;
        if (this.listIndex < 0) {
          this.listIndex = this.arr.length - 1;
        }
        this.wd = this.arr[this.listIndex];
      } else if (event.keyCode == 40) {
        //说明你按的是下键
        this.listIndex++;
        if (this.listIndex > this.arr.length - 1) {
          this.listIndex = 0;
        }
        this.wd = this.arr[this.listIndex];
      } else if (event.keyCode == 13) {
        //如果你按的是enter，那么就跳转到百度搜索结果
        window.open("https://www.baidu.com/s?wd=" + this.wd);
      }
    },
  },
};
</script>

<style scoped>
.header1 {
  height: 70px;
}
.hl-img {
  float: left;
  margin: 20px 20px 20px 30px;
}
.hl-img a {
  display: block;
  width: 101px;
  height: 33px;
}
/* 设置图片大小 */
.hl-img a img {
  width: 101px;
  height: 33px;
}
.hl-search {
  float: left;
  width: 600px;
  height: 40px;
  margin: 20px 0px 100px 40px;
}
.hl-search input {
  float: left;
  width: calc(100% - 112px);
  height: 38px;
  border: 2px solid #c4c7ce;
  padding-left: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.hl-search button {
  width: 100px;
  height: 40px;
  color: #fff;
  background-color: #4e82f2;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}
.h1-search .search-val-list {
  background-color: blue;
  width: 558px;
  height: 411px;
  border: 1px solid #4e82f2;
}
.h1-search .search-val-list li {
  height: 36px;
}
.hr {
  float: right;
  height: 60px;
  width: 300px;
  margin: 10px 20px 0px 0px;
}
.hr a {
  float: left;
  font: 14px Arial, sans-serif;
  color: #222222;
  cursor: pointer;
  line-height: 60px;
  height: 60px;
  margin: 0 20px;
}
.nav {
  position: relative;
  top: -100px;
  left: 190px;
  float: left;
  width: 850px;
  height: 50px;
}
.nav ul li {
  float: left;
  height: 50px;
}
.nav li a {
  display: block;
  height: 50px;
  padding: 0 10px;
  font: 14px Arial, sans-serif;
  color: #626675;
  line-height: 50px;
}
.w {
  width: 1040px;
  height: 400px;
  background-color: pink;
  overflow-y: auto;
  margin-left: 190px;
}
</style>