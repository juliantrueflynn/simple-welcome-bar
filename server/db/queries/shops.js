const knex = require('../connection');

function getAllShops() {
  return knex('shops')
    .select('*');
}

module.exports = {
  getAllShops
};
