const Service = require('egg').Service;

class <%= contextName %>Service extends Service {
  async find(uid) {
    // const user = await this.ctx.db.query('select * from user where uid = ?', uid);
    //
    return {};
  }
}

module.exports = <%= contextName %>Service;