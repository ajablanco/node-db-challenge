
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('id')
        tbl.string('name').notNullable()
        tbl.text('description')
        tbl.boolean('completed').defaultTo(false)
    })
    .createTable('resources', tbl => {
        tbl.increments('id')
        tbl.string('name').notNullable()
        tbl.text('description')
    })
    .createTable('project_resources', tbl => {
        tbl.increments('id')
        tbl.integer('project_id')
            .notNullable()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('resource_id')
            .notNullable()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('resource_amount').notNullable()
    })
    .createTable('tasks', tbl => {
        tbl.increments('id')
        tbl.string('description').notNullable()
        tbl.string('notes')
        tbl.boolean('completed').defaultTo(false)
        tbl.integer('project_id').notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
