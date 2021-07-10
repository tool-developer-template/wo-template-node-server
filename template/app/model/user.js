/**
 * User Model
 */
module.exports = app => {
  const {
    STRING,
    DATE,
    NOW,
    /*INTEGER,GEOMETRY,FLOAT,*/
  } = app.Sequelize;
  //
  const User = app.model.define('user',{
    id:{type:STRING(32),primaryKey:true},// 主键ID
    create_at:{type:DATE,defaultValue:NOW},// 创建日期
  });

  //
  return User;
}