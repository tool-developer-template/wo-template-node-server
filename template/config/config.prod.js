const path = require('path');
const {production} = require('./config.db.json');
//
exports.sequelize = production;

// 日志输出配置
exports.logger = {
  level: 'ERROR',
};


<% if (nunjucks) { -%>
  // static
  exports.static = {
    prefix: '/static',
    dirs: [
      path.join(__dirname, '../app/public')
    ],
    dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
    preload: false,
    maxAge: 31536000, // in prod env, 0 in other envs
    buffer: true, // in prod env, false in other envs
  }
  <% } -%>