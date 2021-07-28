import Vue from 'vue';
import App from './App.vue';
import router from './router/index';

import 'lib-flexible';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),

  router, //所有组件可以看到$router和$route <router-link>和<router-view />
}).$mount('#app')
