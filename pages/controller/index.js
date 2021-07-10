const Controller = require('egg').Controller;

class <%= contextName %>Controller extends Controller{
  async index(){

    this.ctx.body = "Hello"
  }
}

module.exports = <%= contextName %>;