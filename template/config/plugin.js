// sequelize
exports.sequelize = {
  enable:<%= sequelizeEnable %>,
  package:'egg-sequelize'
}

<% if (jwt) { -%>
// jwt
exports.jwt = {
  enable:<%= jwtEnable %>,
  package:'@tool-developer/egg-jwt'
}
<% } -%>

<% if (grpc) { -%>
// grpc
exports.grpc = {
  enable:true,
  package:'egg-grpc'
}
<% } -%>

<% if (nunjucks) { -%>
// static
exports.static = true;
// view
exports.view = {
  enable: true,
  cache:true,
  package: 'egg-view',
}  
// nunjucks
exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
}
<% } -%>

<% if (useragent) { -%>
// useragent
exports.useragent = {
  enable: true,
  package: '@tool-developer/egg-useragent',
};
<% } -%>
