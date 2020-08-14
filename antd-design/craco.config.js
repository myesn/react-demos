const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      // 修改 less 变量的值，比如这里就是全局更换 primary-color
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
