/**
 * <%= contextName %> Service
 */
const Service = require('../core/base.service');
//
class <%= contextName %>Service extends Service {
  constructor(options){
    super(options);
    //
    this.model = this.ctx.model.<%= contextName %>;// 首字母大写
  }
  async find(uid) {
    // const user = await this.ctx.db.query('select * from user where uid = ?', uid);
    //
    return {};
  }
}

module.exports = <%= contextName %>Service;