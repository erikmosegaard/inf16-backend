
exports.up = async function(knex) {
  await knex.schema.table('todo', (table) => {
    table.boolean('done').defaultTo(false)
  })

};

exports.down = async function(knex) {
  await knex.schema.table('todo', (table) => {
    table.dropColumn('done');
  })
};
