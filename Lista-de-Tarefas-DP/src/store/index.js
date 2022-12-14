import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import { todo } from "./todo";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "todo-list",
});

const modules = {
  todo,
};

export default new Vuex.Store({
  modules,
  plugins: [vuexLocal.plugin],
});
