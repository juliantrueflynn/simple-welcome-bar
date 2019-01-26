const path = require('path');
require('dotenv').config();

const BASE_PATH = path.join(__dirname, 'server', 'db');

module.exports = {
  test: {
    client: 'pg',
    connection: process.env.PG_TEST_URL,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    },
  },
  development: {
    client: 'pg',
    connection: process.env.PG_DEVELOPMENT_URL,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations'),
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds'),
    },
  },
};
