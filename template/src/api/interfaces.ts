import envConfig from '@/assets/js/env-option';

const CTPrefConfig: any = window.CTPrefConfig;
const key: any = CTPrefConfig ? `is${CTPrefConfig.env}` : 'isLocalhost';
const envConfigData: any = envConfig;
const envdata = envConfigData[key];

const interfaces = {
  /**
   * @domain exchangemall.tcy365.com
   */
  getLeftNum: `${envdata.exchangemall}/UserTickets/GetLeftNum`, // 我的兑换券数量
  getExpireNum: `${envdata.exchangemall}/UserTickets/GetExpireNum` // 查询指定日期用户会过期兑换券数量
};

export default {
  interfaces,
  envdata
};
