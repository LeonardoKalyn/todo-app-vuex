import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

import '@fortawesome/fontawesome-free/css/all.css';

//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
  modules: {
    todos
  }
});
