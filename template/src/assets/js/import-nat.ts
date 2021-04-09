import Vue from 'vue';
import { Http, AppBridge } from 'nat';

// 响应失败拦截器
const interceptError = function(res: any) {
  // 对响应失败数据做点什么
  // console.log(res, 'interceptError');
  Vue.prototype.$Toast.clear();
  if (res.Code === 555) {
    Vue.prototype.$dialog.alert({
      message: '服务器连接失败，请稍后再试(555)'
    });
  } else if (res.Code === 666) {
    Vue.prototype.$dialog.alert({
      message: '服务器连接超时，请稍后再试(666)'
    });
  }
};

// 响应成功拦截器 res: any
const interceptorSuccess = function() {
  // 对响应成功数据做点什么
  // console.log(res, 'interceptorSuccess');
};

// 请求拦截器 res: any
const requestInterceptor = function() {
  // 在发送请求之前做些什么
  // console.log(res, 'requestInterceptor');
};

// 方式一：组件注册时配置
Vue.use(Http, {
  interceptError: interceptError,
  interceptorSuccess: interceptorSuccess,
  requestInterceptor: requestInterceptor,
  timeout: 15000
});
Vue.use(AppBridge);
