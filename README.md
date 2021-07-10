# wo-template-node-server
node server端快速构建模板

基于[egg](https://eggjs.org/zh-cn/index.html)，引入grpc和sequelize配置，生成后可手动调整。


prompts过程中，会选择是否启动数据库连接
```
Sequelize db is enable?
```
对应config/plugin.js中sequelize.enable配置
```
exports.sequelize = {
  enable:false,// 此处调整为true，开启数据库连接
  package:'egg-sequelize'
}
```
默认为false，仅仅表示不会开启数据库连接而已，相关依赖依然会安装。

配置好数据库连接的情况，可设置为true，否则会提示数据库连接失败。


