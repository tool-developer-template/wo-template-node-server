// 项目创建完成后输出信息
exports.run ={
  "yarn":"Start to install dependencies for the project"
};

// 必填
const validateRequired = (input)=>{
  if(!input.trim()){

    return false;
  }
  //
  return true;
}

// 项目创建过程中的prompts
// 参考:https://github.com/SBoudrias/Inquirer.js/blob/master/README.md
exports.prompts = {
  "name": {
      "message": "What's the project name?",
      "default": "`${this.name}`"
  },
  "description": {
      "name": "description",
      "message": "What's your project description?"
  },
  "port":{
    "name":"port",
    "message":"Input server host port,like 7001",
    "default":7001,
  "grpc":{
    "message":"Do you want to use grpc?",
    "type":"confirm",
    "default":true
  },
  "grpc.keys":{
    "name":"grpcKeys",
    "message":"Input grpc cookie keys",
    "when":function(prompts){
      if(prompts.grpc){
          //
          return true;
      }
      //
      return false;
    },
    "default":""
  },
  "grpc.endpoint":{
    "name":"grpcEndpoint",
    "message":"Input grpc endpoint, like localhost:50051",
    "when":function(prompts){
      if(prompts.grpc){
          //
          return true;
      }
      //
      return false;
    },
    "default":"localhost:50051"
  },
  "db.dialect":{
    "name":"dialect",
    "message":"To select db config dialect",
    "type":"list",
    "choices":["postgres","mysql"],
    "default":"postgres"
  },
  "db.database":{
    "name":"database",
    "message":"Input db config database",
    "default":""
  },
  "db.username":{
    "name":"username",
    "message":"Input db config username",
    "validate":validateRequired,
    "default":""
  },
  "db.password":{
    "name":"password",
    "type":"password",
    "message":"Input db config password",
    "validate":validateRequired,
    "default":""
  },
  "db.host":{
    "name":"dbHost",
    "message":"Input db config host",
    "default":"127.0.0.1"
  },
  "db.test.host":{
    "name":"dbTestHost",
    "message":"Input test db config host",
    "default":"127.0.0.1"
  },
  "db.dev.host":{
    "name":"dbDevHost",
    "message":"Input development db config host",
    "default":"127.0.0.1"
  },
  "db.pro.host":{
    "name":"dbProHost",
    "message":"Input production db config host",
    "default":"127.0.0.1"
  },
  "db.port":{
    "name":"dbPort",
    "message":"Input db config port",
    "default":function(prompts){
      if(prompts.dialect){
          //
          return 5432;
      }
      //
      return 3306;
    }
  },
}