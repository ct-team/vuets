const buildConfig = require('./build-user/config');
const buildTool = require('./build-user/tool');
const buildCopy = require('./build-user/copy');
const IS_PROD = process.env.NODE_ENV === 'production';
const autoprefixer = require('autoprefixer');

module.exports = {
  //lintOnSave: true,
  pages: buildTool.getPages(),
  outputDir: 'dist',
  assetsDir: 'assets',
  productionSourceMap: false,
  css: {
    extract: IS_PROD, // 允许生成 CSS source maps?
    sourceMap: false, // pass custom options to pre-processor loaders. e.g. to pass options to // sass-loader, use { sass: { ... } }
    //requireModuleExtension: false,
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['iOS >= 8', 'Android >= 4.0']
          }),
          require('postcss-pxtorem')(buildConfig.px2rem)
        ]
      }
    }
  },
  // 所有 webpack-dev-server 的选项都支持。
  devServer: buildConfig.devServer,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push({
        apply: compilation => {
          compilation.hooks.done.tap('succeedModule', () => {
            buildCopy.init();
          });
        }
      });
    }
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      analyzerMode: 'static',
      openAnalyzer: false
    }
  },
  chainWebpack: config => {
    config.plugin('define').tap(args => {
      args[0]['process.env'].BUCheckAppId = `"${buildConfig.checkAppId}"`;
      return args;
    });
  }
};
