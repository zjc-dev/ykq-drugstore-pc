export default {
  namespaced: true,
  state: {
    txt: "测试vuex初始数据"
  },
  mutations: {
    modTxt: (state, status) => {
      console.log(`事件触发, 目标值为: "${status}"`);
      state.txt = status;
    }
  }
};
