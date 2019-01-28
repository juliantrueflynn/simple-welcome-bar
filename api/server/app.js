const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const indexRoutes = require('./routes');
const shopRoutes = require('./routes/shops');

const app = new Koa();
const PORT = process.env.PORT;

app.use(bodyParser());
app.use(indexRoutes.routes());
app.use(shopRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
