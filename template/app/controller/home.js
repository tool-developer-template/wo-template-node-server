const Controller = require('../core/base.controller');
//
class HomeController extends Controller{
  async index(){

    // service.*,// 首字母小写
    // await this.service.user.find()

    this.ctx.body = "Hello"
  }
}

module.exports = HomeController;