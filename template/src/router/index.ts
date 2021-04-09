import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/index/Home.vue';
import Constant from './constant';

Vue.use(VueRouter);

const routes = [
  {
    path: `/`,
    name: Constant.HOME, // 首页
    component: Home,
    meta: {
      status: 0,
      title: '兑换商城'
    }
  },
  {
    path: `/${Constant.RECORDLIST}`,
    name: Constant.RECORDLIST, // 规则页
    component: () =>
      import(
        /* webpackChunkName: "recordlist" */ '@/pages/index/RecordList.vue'
      ),
    meta: {
      status: 1,
      title: '规则说明'
    }
  },
  {
    path: `/${Constant.RULE}`,
    name: Constant.RULE, // 规则页
    component: () =>
      import(/* webpackChunkName: "rule" */ '@/pages/index/Rule.vue'),
    meta: {
      status: 1,
      title: '规则说明'
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
