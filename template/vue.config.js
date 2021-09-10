const buildConfig = require('./build-user/config');
const buildTool = require('./build-user/tool');
const buildCopy = require('./build-user/copy');
const IS_PROD = process.env.NODE_ENV === 'production';
// const autoprefixer = require('autoprefixer');
const tsImportPluginFactory = require('ts-import-plugin');
const merge = require('webpack-merge');

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
      sass: {
        // 向全局sass样式传入共享的全局变量 （新版本sass-loader的参数改变）
        prependData: `@import "~@/assets/scss/index.scss";`
      }
      // postcss: {
      //   plugins: [
      //     autoprefixer({
      //       overrideBrowserslist: ['iOS >= 8', 'Android >= 4.0']
      //     }),
      //     require('postcss-pxtorem')(buildConfig.px2rem)
      //   ]
      // }
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
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap(options => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        });
        return options;
      });
  }
};
