const tableName = "devices"; // Replace TABLENAME with the name of the table!!

// Create the table (this is for creation the migration)
export function up(knex) {
    return knex.schema.createTable(tableName, function (table) {
        table.increments("id").primary();
        table.string("model").notNullable();
        table.string("brand").notNullable();
        table.string("part").notNullable();
        table.string("price").notNullable();
        table.boolean("completed").notNullable().defaultTo(false);
        table.boolean("picked_up").notNullable().defaultTo(false);
        table.integer("customer_id").notNullable();
        table.timestamps(true, true);

        table.foreign("customer_id").references("customers.id");

    });
}

// Drop the table (this is for in case of reverting the migration)
export function down(knex) {
    return knex.schema.dropTable(tableName);
}
