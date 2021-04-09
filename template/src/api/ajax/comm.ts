function get(vm: any, apiUrl: string, params: any) {
  return new Promise((resolve, reject) => {
    vm.$nat.http
      .ajax({
        method: 'get',
        url: apiUrl,
        data: {
          ...params
        },
        beforeSend: () => {
          vm.$Toast.loading();
        },
        complete: () => {
          vm.$Toast.clear();
        }
      })
      .then((res: any) => {
        resolve(res);
      })
      .catch((e: any) => {
        console.log('😈:e->apiUrl:' + apiUrl, e);
        reject(e);
      });
  });
}

function post(vm: any, apiUrl: string, params: any) {
  return new Promise((resolve, reject) => {
    vm.$nat.http
      .ajax({
        method: 'post',
        url: apiUrl,
        data: {
          ...params
        },
        isQs: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        beforeSend: () => {
          vm.$Toast.loading();
        },
        complete: () => {
          vm.$Toast.clear();
        }
      })
      .then((res: any) => {
        resolve(res);
      })
      .catch((e: any) => {
        console.log('😈:e->apiUrl:' + apiUrl, e);
        reject(e);
      });
  });
}

export default {
  get,
  post
};
