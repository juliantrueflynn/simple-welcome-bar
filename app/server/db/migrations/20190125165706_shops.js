exports.up = (knex, Promise) => {
  return knex.schema.createTable('shops', (table) => {
    table.increments();
    table.string('shopify_domain').notNullable().unique();
    table.string('shopify_token').notNullable().unique();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('shops');
};
