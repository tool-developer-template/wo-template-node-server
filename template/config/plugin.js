// sequelize
exports.sequelize = {
  enable:true,
  package:'egg-sequelize'
}

<% if (grpc) { -%>
// grpc
exports.grpc = {
  enable:true,
  package:'egg-grpc'
}
<% } -%>