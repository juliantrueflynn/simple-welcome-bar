exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('shops').del()
    .then(() => (
      // Inserts seed entries
      knex('shops').insert([
        {
          id: 1,
          shopify_domain: 'jiffywelcomebar.myshopify.com',
          shopify_token: 'token',
        },
      ])
    ));
};
