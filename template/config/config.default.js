// Cookie安全字符串
exports.keys = "<%= cookieKeys %>"

<% if (jwt) { -%>
// jwt
exports.jwt = {
  secret:'<%= jwtSecret %>',
  enableMiddleware:true,
  /*signPageRoutePath: '/user/sign',
  authOptions:{
    passthrough:(ctx)=>{
      const url = ctx.request.url;
      // 接口请求返回数据
      if(/^\/api/.test(url)){
        //
        return true;
      }
      // 页面视图，进入登录
      return '/user/sign';
    }
  },
  ignore:['/api/wxuser/token']*/
};
<% } -%>

<% if (grpc) { -%>
// grpc
exports.grpc = {
  endpoint:'<%= grpcEndpoint %>',
  // dir: 'app/proto', // proto files dir, relative path
  // property: 'grpc', // default attach to `ctx.grpc.**`
  // loadOpts: { convertFieldsToCamelCase: true, }, // message field case: `string user_name` -> `userName`
}
<% } -%>

<% if (nunjucks) { -%>
// view  
exports.view = {
  mapping: {
    '.tpl': 'nunjucks',
    '.nj': 'nunjucks',
  },
}
// static
exports.static = {
  prefix: '/static',
  dirs: [
    path.join(__dirname, '../app/public')
  ],
  dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
  preload: false,
  maxAge: 0, // in prod env, 0 in other envs
  buffer: false, // in prod env, false in other envs
}
<% } -%>