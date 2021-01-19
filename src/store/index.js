import Vue from 'vue'
import Vuex from 'vuex'
// import empt from "./modules/empt"
import auth from "./modules/auth"
import marker from "./modules/marker"
import calendar_todo from "./modules/calendar_todo"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // empt,
    auth,
    marker,
    calendar_todo
  }
})
