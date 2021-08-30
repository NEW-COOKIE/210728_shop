import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'

import 'lib-flexible'

import router from './router/index'
import Header from '@/components/Herder/Header.vue'
import Star from '@/components/Star/Star.vue'
import CartControl from '@/components/CartControl/CartControl.vue'
import store from '@/vuex/store.js'
import * as API from './api'
import './validate.js'
import i18n from './i18n'
import '@/mock/mock-server.js'
Vue.config.productionTip = false

// 注册全局组件
Vue.component('Header', Header);
Vue.component('Star', Star);
Vue.component('CartControl', CartControl);
Vue.component(Button.name, Button); //mt-button

Vue.prototype.$API = API;

new Vue({
  render: h => h(App),

  //所有组件可以看到$router和$route <router-link>和<router-view />
  router,

  i18n,

  // 所有组件都能看到store,
  store
}).$mount('#app')
