import urlHandle from './url-handle';

// 来自url
function paramsFromUrl() {
  const data: any = {
    activityGuid: '',
    gameId: '' // 游戏ID，该值为空值
  };

  for (const key in data) {
    data[key] = urlHandle.getParam(key) || '';
  }
  return data;
}

// 来自App
function paramsFromApp(vm: any) {
  // ----- 用于便捷测试使用的 start ------
  const a = urlHandle.getParam('a');
  if (a === '1') {
    return {
      userId: urlHandle.getParam('userId'),
      accessToken: urlHandle.getParam('accessToken')
    };
  }
  // ----- 用于便捷测试使用的 end ------
  const headerInfo = vm.$bridge.getHeaderInfo();
  return {
    userId: headerInfo.userid, // 切记这里是 userid
    accessToken: headerInfo.AccessToken // 切记这里是 AccessToken
  };
}

export default function(vm: any) {
  return {
    ...paramsFromUrl(),
    ...paramsFromApp(vm)
  };
}

/*
// window.HtmlInterface.getHeaderInfo() 测试环境得到的数据如下：
const testData = {
      AccessToken:
        '3SI-2EkO2dx8XAqJLp7XfWrnB98vF2JJnuHxDDmZvvsJwSzj77jPVfeJc5xnNISA2s2wB41s1Mqbo9kywDlrtSXBMe3kOiFAvGKYIo2KDrjyge8C3ClrQtPW2G974nCO-FKMjSd4qpHk5M7ipdSMGw',
      City: '%E6%9D%AD%E5%B7%9E%E5%B8%82',
      District: '%E6%BB%A8%E6%B1%9F%E5%8C%BA',
      IMEI: '866013035683354',
      Province: '%E6%B5%99%E6%B1%9F%E7%9C%81',
      checkcode: '5aea236905bb23d52939a63f92029dfc',
      network: '3',
      nickName: 'tcy01',
      soVersion: '1.5.20190131',
      system: '1',
      tcyCode: '90',
      tcyPackage: 'com.uc108.mobile.gamecenter',
      tcyPromoter: '310200',
      tcyVersion: '5.6.9',
      timestamp: '1603176051427',
      userName: 'tcy01',
      userid: '389838'
  };*/
