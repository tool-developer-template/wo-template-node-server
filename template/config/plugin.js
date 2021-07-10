// sequelize
exports.sequelize = {
  enable:true,
  package:'egg-sequelize'
}

<% if (mobile) { -%>
// grpc
exports.grpc = {
  enable:true,
  package:'egg-grpc'
}
<% } -%>