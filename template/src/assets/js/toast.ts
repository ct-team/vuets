import { Toast } from 'vant';

/**
 * 全屏loading弹框
 */
function loading(str: string, isOverlay: boolean) {
  //   const iconLoding = require('@/assets/img/icon-loading.gif');

  Toast.loading({
    message: str,
    forbidClick: true,
    duration: 0,
    overlay: isOverlay || false
    // icon: iconLoding
  });
}

function clear() {
  Toast.clear();
}

function text(str: string) {
  Toast({
    type: 'html',
    message: `<span style="background-color: rgba(50, 50, 51, 0.88);padding: 8px 12px;border-radius:8px;color:#fff;font-size:14px;">${str}</span>`
  });
}

// function confirm(obj: any) {
//   Dialog.confirm({
//     title: obj.title,
//     message: obj.message
//   });
// }

export default {
  loading,
  clear,
  text
  // confirm
};
