const Controller = require('../core/base.controller');

class <%= contextName %>Controller extends Controller{
  async index(){

    // service.*,// 首字母小写
    // await this.service.<%= (contextName.charAt(0).toLowerCase() + contextName.slice(1)) %>.find()

    this.ctx.body = "Hello"
  }
}

module.exports = <%= contextName %>Controller;