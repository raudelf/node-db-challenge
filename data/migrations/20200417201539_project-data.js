
exports.up = function(knex) {
    return (
        knex.schema.createTable('projects', tbl => {
            tbl.increments('id');
            tbl.text('project_name')
                .notNullable();
            tbl.text('project_desc');
            tbl.boolean('completed')
                .notNullable()
                .defaultTo(false);
        })
        .createTable('resources', tbl => {
            tbl.increments('id');
            tbl.text('resource_name')
                .notNullable();
            tbl.text('resource_description')
        })
        .createTable('tasks', tbl => {
            tbl.increments('id');
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.text('task_description')
                .notNullable();
            tbl.text('task_notes');
            tbl.boolean('completed')
                .notNullable()
                .defaultTo(false);
        })
        .createTable('project_resources', tbl => {
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
    )
};

exports.down = function(knex) {
    return (
        knex.schema.dropTableIfExists('projects')
        .dropTableIfExists('tasks')
        .dropTableIfExists('project_resources')
        .dropTableIfExists('resources')
    )
};
