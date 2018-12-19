
exports.up = async function(knex) {
  await knex.schema.createTable('todo', (table) => {
    table.increments('id')
    table.string('text')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('todo');
};
