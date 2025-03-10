const { clean } = require('knex-cleaner');

exports.seed = function(knex) {
  return clean(knex, {
    mode: 'truncate', // resets id
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
  });
};