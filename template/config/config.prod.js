const {production} = require('./config.db.json');
//
exports.sequelize = production;

// 日志输出配置
exports.logger = {
  level: 'ERROR',
};