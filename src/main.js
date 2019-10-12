// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/swiper.min.css'
import './assets/js/swiper.min.js'
import './assets/css/public.css'

import { Pagination } from 'element-ui';
import $ from 'jquery'
// import axios from 'axios';
// Vue.prototype.$axios = axios;
// import QS from 'qs'
// Vue.prototype.qs = QS;

import qs from "qs"
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
Vue.prototype.$qs = qs;
Vue.use(VueAxios, axios);

Vue.use(Pagination);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})