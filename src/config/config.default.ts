import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1662141022745_1535',
  koa: {
    port: 7001,
  },
  // 添加orm配置
  orm: {
    type: 'mysql',
    host: '127.0.0.1', // 改成你的mysql数据库IP
    port: 3306, // 改成你的mysql数据库端口
    username: 'root', // 改成你的mysql数据库用户名（需要有创建表结构权限）
    password: 'a144005', // 改成你的mysql数据库密码
    database: 'node', // 改成你的mysql数据库IP
    synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: true,
  },
} as MidwayConfig;
