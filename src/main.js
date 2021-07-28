import Vue from 'vue';
import 'lib-flexible';

import App from './App.vue';
import router from './router/index';
import Herder from '@/components/Herder/Herder.vue';
Vue.config.productionTip = false;

// 注册全局组件
Vue.component('Herder', Herder)

new Vue({
  render: h => h(App),

  router, //所有组件可以看到$router和$route <router-link>和<router-view />
}).$mount('#app')
