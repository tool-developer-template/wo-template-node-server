// sequelize
exports.sequelize = {
  enable:<%= sequelizeEnable %>,
  package:'egg-sequelize'
}

<% if (grpc) { -%>
// grpc
exports.grpc = {
  enable:true,
  package:'egg-grpc'
}
<% } -%>