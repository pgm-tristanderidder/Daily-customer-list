const tableName = "customers"; // Replace TABLENAME with the name of the table!!

// Create the table (this is for creation the migration)
export function up(knex) {
    return knex.schema.createTable(tableName, function (table) {
        table.increments("id").primary();
        table.string("customer").notNullable();
        table.string("email", 255);
        table.string("number", 255);
        table.timestamps(true, true);
    });
}

// Drop the table (this is for in case of reverting the migration)
export function down(knex) {
    return knex.schema.dropTable(tableName);
}
