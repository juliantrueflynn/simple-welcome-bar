const Router = require('koa-router');
const queries = require('../db/queries/shops');

const router = new Router();
const BASE_URL = '/api/shops';

router.get(BASE_URL, async (ctx) => {
  try {
    const shops = await queries.getAllShops();

    ctx.body = { status: 200, data: shops };
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
  }
});

module.exports = router;
