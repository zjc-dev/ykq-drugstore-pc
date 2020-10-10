<template>
  <div class="wrap">
    <div class="box">
      {{ txt }}
      <button @click="modTxt('修改后的vuex数据')">点我改变vuex中数据</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import { examPostRequest, examGetRequest } from "@/api/exam";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("examStore", ["txt"])
  },
  methods: {
    ...mapMutations("examStore", ["modTxt"])
  },
  created() {
    examPostRequest();
    examGetRequest();
  }
};
</script>
<style scoped lang="scss">
.wrap {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    img {
      width: 520px;
      height: 268px;
    }
    p {
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      line-height: 25px;
      text-align: center;
    }
  }
}
</style>
