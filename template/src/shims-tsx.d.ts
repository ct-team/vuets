import Vue, { VNode } from 'vue';
import VueRouter, { Route } from 'vue-router';

declare global {
  namespace JSX {
    type Element = VNode;
    type ElementClass = Vue;
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
  interface Window {
    CTPrefConfig: string;
    HtmlInterface: any;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $route: Route;
    $router: VueRouter;
    $http: any;
    $eventbus: any;
    $envdata: any;
    $gData: any;
    $bridge: any;
    $Toast: any;
  }
}
