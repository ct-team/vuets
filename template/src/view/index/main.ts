import '@/assets/css/reset.css'; // 重置样式
import '@/assets/js/path'; //设置__webpack_public_path__
import '@/assets/js/import-vant'; // 导入需要的vant的组件
import 'ts-polyfill';
import Vue from 'vue';
import App from './App.vue';
import Component from 'vue-class-component';
import router from '@/router/index';
// import store from '@/store/index';
import Interfaces from '@/api/interfaces'; // api地址（包含不同环境固定变量值配置）
import GlobalData from '@/assets/js/global-data';
import EventBus from '@/assets/js/event-bus';
import Bridge from '@/assets/js/bridge';
import Toast from '@/assets/js/toast'; // 封装后的toast组件
import '@/assets/js/import-nat'; // 导入nat组件

Vue.config.productionTip = false;
Vue.prototype.$interfaces = Interfaces.interfaces;
Vue.prototype.$envdata = Interfaces.envdata;
Vue.prototype.$gData = GlobalData;
Vue.prototype.$eventbus = EventBus;
Vue.prototype.$bridge = Bridge;
Vue.prototype.$Toast = Toast;

Component.registerHooks([
  'beforeRouteEnter', //进入路由之前
  'beforeRouteLeave', //离开路由之前
  'beforeRouteUpdate'
]);

new Vue({
  router,
  // store,
  render: (h: any) => h(App)
}).$mount('#app');
