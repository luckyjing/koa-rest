"use strict";
/**
 * 项目配置信息，如数据库配置，第三方服务密钥
 */
const path = require("path");
const _ = require("lodash");

let env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

let base = {
  app: {
    root: path.normalize(path.join(__dirname, "/..")),
    env: env
  },
  coding: {
    clientId: 'eb1f4fffdad9ebae384f83e1de7ba4d7',
    clientSecret: '4a67850a25c1e4c36b757da8de73fe6f420435aa'
  }
};

let specific = {
  development: {
    app: {
      port: 5000,
      name: "pure-ci",
      excluded: "excluded_path"
    },
    mysql: {
      host: 'localhost',
      port: 3306,
      user: 'test',
      password: 'test',
      database: 'test'
    },
    mongodb: {
      host: 'mongodb://localhost/pureCI'
    }
  },
  production: {
    app: {
      port: process.env.PORT || 5000,
      name: "pure-ci",
      excluded: "excluded_path"
    },
    mysql: {
      host: 'localhost',
      port: 3306,
      user: 'test',
      password: 'test',
      database: 'test'
    }
  },
};

module.exports = _.merge(base, specific[env]);
