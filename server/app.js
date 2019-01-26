const Koa = require('koa');
const next = require('next');
const session = require('koa-session');
const Router = require('koa-router');
const shops = require('./db/queries/shops');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('/api/shops', async (ctx) => {
    const data = await shops.getAllShops();

    ctx.body = {
      status: 'success',
      data,
    };
  });

  router.get('*', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, nextCtx) => {
    ctx.res.statusCode = 200;
    await nextCtx();
  });

  router.use(session(server));
  server.use(router.routes());

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }

    console.log(`> Ready on ${process.env.API_URL}`); // eslint-disable-line no-console
  });
});
