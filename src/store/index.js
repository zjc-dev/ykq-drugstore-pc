import Vue from "vue";
import Vuex from "vuex";

import examStore from "./exam";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { examStore }
});

export default store;
