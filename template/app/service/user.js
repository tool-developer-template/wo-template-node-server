const Service = require('../core/base.service');

class UserService extends Service {
  constructor(options){
    super(options);
    //
    this.model = this.ctx.model.User;
  }
  async find(uid) {
    const {ctx} = this;
    // const user = await this.ctx.db.query('select * from user where uid = ?', uid);
    // this.add();
    //
    return {};
  }
}

module.exports = UserService;