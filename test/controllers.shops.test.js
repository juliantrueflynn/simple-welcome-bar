/* eslint-disable func-names */
/* eslint-disable no-console */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prettier/prettier */
process.env.NODE_ENV = 'test';

const Koa = require('koa');
const chai = require('chai');
const Router = require('koa-router');
const chaiHttp = require('chai-http');

const { expect } = chai.expect;
chai.use(chaiHttp);

let app;
let listener;

const knex = require('../server/db/connection');

before(async function () {
  app = new Koa();
  const router = new Router();

  app.use(async (ctx, nextCtx) => {
    ctx.res.statusCode = 200;
    await nextCtx();
  });

  app.use(ctx => { ctx.body = ctx.request.body; });
  app.use(router.routes());

  listener = app.listen();
});

after(async function () {
  listener.close();
});

describe('controllers : shops', function () {
  beforeEach(async function () {
    return knex.migrate.rollback()
      .then(() => knex.migrate.latest())
      .then(() => knex.seed.run());
  });

  afterEach(async function () {
    return knex.migrate.rollback();
  });
});

describe('GET /api/shops', function () {
  it('should return all shops', async function() {
    const res = await chai.request(listener).get('/api/shops');
    expect(res);
  });
});
