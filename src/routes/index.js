'use strict';

import compose from 'koa-compose';
import Router from 'koa-router';
import Response from '../services/response';

import RouterMain from './main';


const router = new Router(); // 根路由
const apiRouter = new Router(); // API路由

apiRouter.use('/main', RouterMain.routes(), RouterMain.allowedMethods());

/**
 * 根路径返回首页
 */
router.get('/', async(ctx, next) => {
  // ctx.type = 'html'
  // ctx.body = require('fs').createReadStream(__dirname + '/../public/main.html')
  await ctx.render('./main')
});

router.use('/api', apiRouter.routes(), apiRouter.allowedMethods())

/**
 * 未匹配路由，返回404
 */
router.get('*', async(ctx, next) => {
  ctx.body = new Response(404, 'Not Found');
});

export default function routes() {
  return compose(
    [
      router.routes(),
      router.allowedMethods()
    ]
  )
}
