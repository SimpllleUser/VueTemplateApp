import Vue from 'vue';
import axios from './axios';
import  local_storage from "./local_storage"

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

export default function (app) {
    let inject = (name, plugin) => {
        let key = `$${name}`;
        app[key] = plugin;
        app.store[key] = plugin;

        Vue.use(() => {
            if (Vue.prototype.hasOwnProperty(key)) {
                return;
            }
            Object.defineProperty(Vue.prototype, key, {
                get () {
                    return this.$root.$options[key];
                }
            });
        });
    };

    axios(app, inject);
    local_storage(app, inject)

}
