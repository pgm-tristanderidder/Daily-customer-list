import knex from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knex);

import Customer from "./Customer.js";

class Category extends Model {
    static get tableName() {
        return "devices";
    }

    static get idColumn() {
        return "id";
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["category"],
            properties: {
                id: { type: "integer" },
                device: { type: "string", minLength: 1, maxLength: 255 },
            },
        };
    }

    static get relationMappings() {
        return {
            customers: {
                relation: Model.HasManyRelation,
                modelClass: Customer,
                join: {
                    from: "categories.id",
                    to: "todos.category_id",
                },
            },
        };
    }
}

export default Category;