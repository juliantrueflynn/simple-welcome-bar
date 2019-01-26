const express = require('express');
// const session = require('express-session');
const next = require('next');
const shops = require('./db/queries/shops');

require('dotenv').config();

const dev = process.env.NODE_ENV !== 'production';

const port = process.env.PORT || 8000;
const ROOT_URL = dev ? `http://localhost:${port}` : process.env.API_URL;

// const sessionSecret = process.env.SESSION_SECRET;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // server.use(session(sess));

  server.get('/api/shops', (req, res) =>
    shops.getAllShops().then((json) => res.status(200).json(json)),
  );

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on ${ROOT_URL}`); // eslint-disable-line no-console
  });
});
