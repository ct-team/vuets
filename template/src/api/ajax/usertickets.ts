import comm from './comm';

// 我的兑换券数量
const getLeftNum = (vm: any, params: any) => {
  return comm.get(vm, vm.$interfaces.getLeftNum, params);
};

// 查询指定日期用户会过期兑换券数量
const getExpireNum = (vm: any, params: any) => {
  return comm.get(vm, vm.$interfaces.getExpireNum, params);
};

export default {
  getLeftNum,
  getExpireNum
};
