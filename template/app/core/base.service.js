const Service = require('egg').Service;

class BaseService extends Service {
  // 增
  async add(values,options) {
    //
    return this.model.create(values,options);
  }
  // 删
  async delete(where,options){
    //
    return this.model.destroy({
      where,
      ...options
    });
  }
  // 改
  async update(values,where,options){
    //
    return this.model.update(values,{
      where,
      //
      returning:true,
      ...options
    });
  }
  // 查
  async queryOne(where,options){
    //
    return this.model.findOne({
      where,
      ...options
    })
  }
  // 查-列表
  async queryAll(where,order = [['createAt','DESC']],options){
    //
    return this.model.findAll({
      where,
      order,
      ...options
    })
  }
}

module.exports = BaseService;