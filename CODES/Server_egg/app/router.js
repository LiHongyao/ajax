/*
 * @Author: Lee
 * @Date: 2021-12-20 16:24:00
 * @LastEditors: Lee
 * @LastEditTime: 2021-12-20 17:00:22
 */
module.exports = (app) => {
  const { router, controller } = app;

  router.get('/info', controller.home.info);


  router.post('/login', controller.home.login);
};
