import Vue from 'vue';
import '@/assets/js/common'; //设置__webpack_public_path__
import App from './App.vue';
import router from '@/router/index';
import store from '@/store/index';

new Vue({
  router,
  store,
  render: (h: any) => h(App)
}).$mount('#app');
