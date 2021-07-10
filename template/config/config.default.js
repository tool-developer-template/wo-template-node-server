// Cookie安全字符串
exports.keys = "<%= cookieKeys %>"

<% if (grpc) { -%>
// grpc
exports.grpc = {
  endpoint:'<%= grpcEndpoint %>',
  // dir: 'app/proto', // proto files dir, relative path
  // property: 'grpc', // default attach to `ctx.grpc.**`
  // loadOpts: { convertFieldsToCamelCase: true, }, // message field case: `string user_name` -> `userName`
}
<% } -%>