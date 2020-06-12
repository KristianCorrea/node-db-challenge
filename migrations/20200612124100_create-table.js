
exports.up = function(knex) {
    return knex.schema
    .createTable("resources", (tbl) => {
      tbl.increments();

      tbl.string("name", 255).notNullable();
      tbl.string("description", 255);
    })
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("name", 255).notNullable();
      tbl.string("description", 255);
      tbl.boolean("completed").notNullable().defaultTo(false);
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("description", 255).notNullable();
      tbl.string("notes", 255);
      tbl.boolean("completed").notNullable().defaultTo(false);
      tbl
        .integer("projectID")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE") //restrict, do nothing, set null, cascade
        .onDelete("RESTRICT");
    })
    .createTable("projects_and_resources", (tbl) => {
      //tbl.increments();
      tbl
        .integer("projectID")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE") //restrict, do nothing, set null, cascade
        .onDelete("RESTRICT");

      tbl
        .integer("resourceID")
        .unsigned()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE") //restrict, do nothing, set null, cascade
        .onDelete("RESTRICT");
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("projects_and_resources")
        .dropTableIfExists("projects")
        .dropTableIfExists("resources")
        .dropTableIfExists("tasks");
};
