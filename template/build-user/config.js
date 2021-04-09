module.exports = {
    checkAppId: '',
    appVersion: '1.0.0', // 项目版本
    appUrl: '/static/tcy365-exchangemall/h5/', // 项目路径  如   /static/mobile/test/
    list: [
        { title: '1505-stable', url: '//innerstatic.tcy365.com', env: 1505 },
        { title: '1507-test', url: '//teststatic.tcy365.com', env: 1507 },
        { title: '1506-develop', url: '//devstatic.tcy365.com', env: 1506 },
        { title: '2505-pre', url: '//prestatic.tcy365.com', env: 2505 },
        { title: '80-static', url: '//static.tcy365.com', env: 'production' }
    ],
    px2rem: {
        rootValue: 100, // 换算的基数
        selectorBlackList: ['van-'], // 忽略转换正则匹配项 ['van-']
        propList: ['*']
    },
    isFile: false, //是否使用文件夹
    showPage: [], //["weixin", "sdw"]
    devServer: {
        //history server 模式
        // historyApiFallback: {
        //     rewrites: [
        //         {
        //             from: /.*/g,
        //             to: '/dest/game/index.html'
        //         }
        //     ]
        // },
        //host: 'localhost',
        disableHostCheck: true,
        port: 1506, // 端口号
        https: false,
        open: true, // 配置自动启动浏览器
        openPage: 'index.html',
        // 配置多个代理
        proxy: {
            '/api': {
                target: 'http://yapi.tcy365.org:3000/mock/18/', // 本地模拟数据服务器
                changeOrigin: true,
                logLevel: 'debug' //是否输出请求log
            }
        }
    }
};