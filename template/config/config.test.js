const {test} = require('./config.db.json');
//
exports.sequelize = test;

// 日志输出配置
exports.logger = {
  level: 'INFO',
};