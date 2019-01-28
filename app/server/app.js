const Koa = require('koa');
const Next = require('next');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const Router = require('koa-router');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8000;

const app = Next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('*', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  router.use(session(server));
  router.use(bodyParser);
  server.use(router.routes());

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }

    console.log(`> Ready on ${process.env.API_URL}`); // eslint-disable-line no-console
  });
});
