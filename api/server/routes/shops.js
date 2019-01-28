const Router = require('koa-router');
const queries = require('../db/queries/shops');

const router = new Router();
const BASE_URL = '/api/v1/shops';

router.get(BASE_URL, async (ctx) => {
  try {
    const shops = await queries.getAllShops();

    console.log('SHOPS', shops)

    ctx.body = {
      status: 'success',
      data: shops,
    };
  } catch (err) {
    console.log(err)
  }
})

module.exports = router;
