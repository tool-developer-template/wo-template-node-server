const {development} = require('./config.db.json');
//
exports.sequelize = development;

// 日志输出配置
exports.logger = {
  level: 'DEBUG',
};

// 安全校验
exports.security = {
  // 运行跨域
  csrf:{
    enable:false
  }
};