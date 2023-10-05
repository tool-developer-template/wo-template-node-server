// 项目创建完成后输出信息
exports.run = {
  "yarn": "Start to install dependencies for the project",
  "yarn dev": "Start development",
  "yarn test": "Start test",
  "yarn debug": "Start debug",
  "yarn start": "Start production",
  "yarn stop": "Stop production",
  "yarn db:migrate:init": "npx sequelize migration:generate",
  "yarn db:migrate": "npx sequelize db:migrate",
  "yarn db:migrate:undo": "npx sequelize db:migrate:undo",
  "yarn db:migrate:undo:all": "npx sequelize db:migrate:undo:all",
};

// 必填
const validateRequired = (input) => {
  if (!input.trim()) {

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
  "port": {
    "name": "port",
    "message": "Input server host port,like 7001",
    "default": 7001
  },
  "cookie.keys": {
    "name": "cookieKeys",
    "message": "Input cookie keys",
    "default": function (prompts) {
      //
      return 'cookie-key:' + prompts.name;
    }
  },
  "jwt": {
    "message": "Do you want to use jwt?",
    "type": "confirm",
    "default": true
  },
  "jwt.enable": {
    "name": "jwtEnable",
    "message": "jwt is enable?",
    "type": "confirm",
    "when": function (prompts) {
      if (prompts.jwt) {
        //
        return true;
      }
      //
      return false;
    },
    "default": true
  },
  "jwt.secret": {
    "name": "jwtSecret",
    "message": "Input jwt secret,like jwt:",
    "type": "confirm",
    "default": function (prompts) {
      //
      return 'jwt:' + prompts.name;
    },
    "when": function (prompts) {
      if (prompts.jwt) {
        //
        return true;
      }
      //
      return false;
    },
  },
  "nunjucks": {
    "message": "Do you want to use nunjucks?",
    "type": "confirm",
    "default": false
  },
  "useragent": {
    "message": "Do you want to use useragent?",
    "type": "confirm",
    "default": function (prompts) {
      if (prompts.nunjucks) {
        //
        return true;
      }
      //
      return false;
    },
  },
  "grpc": {
    "message": "Do you want to use grpc?",
    "type": "confirm",
    "default": true
  },
  "grpc.endpoint": {
    "name": "grpcEndpoint",
    "message": "Input grpc endpoint, like localhost:50051",
    "when": function (prompts) {
      if (prompts.grpc) {
        //
        return true;
      }
      //
      return false;
    },
    "default": "localhost:50051"
  },
  "sequelize.enable": {
    "name": "sequelizeEnable",
    "message": "Sequelize db is enable?",
    "type": "confirm",
    "default": true
  },
  "db.dialect": {
    "name": "dialect",
    "message": "To select db config dialect",
    "type": "list",
    "choices": ["postgres", "mysql"],
    "default": "postgres"
  },
  "db.database": {
    "name": "database",
    "message": "Input db config database,like xxxx_db",
    "validate": validateRequired
  },
  "db.username": {
    "name": "username",
    "message": "Input db config username",
    "validate": validateRequired
  },
  "db.password": {
    "name": "password",
    "type": "password",
    "message": "Input db config password",
    "validate": validateRequired
  },
  "db.host": {
    "name": "dbHost",
    "message": "Input db config host",
    "default": "127.0.0.1"
  },
  "db.test.host": {
    "name": "dbTestHost",
    "message": "Input test db config host",
    "default": "127.0.0.1"
  },
  "db.dev.host": {
    "name": "dbDevHost",
    "message": "Input development db config host",
    "default": "127.0.0.1"
  },
  "db.pro.host": {
    "name": "dbProHost",
    "message": "Input production db config host",
    "default": "127.0.0.1"
  },
  "db.port": {
    "name": "dbPort",
    "message": "Input db config port",
    "default": function (prompts) {
      if (prompts.dialect) {
        //
        return 5432;
      }
      //
      return 3306;
    }
  }
} 