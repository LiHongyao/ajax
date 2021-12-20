/*
 * @Author: Lee
 * @Date: 2021-12-20 16:26:46
 * @LastEditors: Lee
 * @LastEditTime: 2021-12-20 16:49:21
 */
module.exports = (app) => {
  // # 【系统配置】
  const config = (exports = {});
  // 1. 配置cookie安全字符串
  config.keys = app.name + '_1634953317990_7396';
  // 2. 服务
  config.cluster = {
    listen: {
      path: '',
      port: 8888,
    },
  };
  // 3. 安全性配置
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [],
  };

  // 4. 处理跨域
  config.cors = {
    origin: '*',
    credentials: true,
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };
  // # 【用户配置】
  const userConfig = {};
  return {
    ...config,
    ...userConfig,
  };
};
