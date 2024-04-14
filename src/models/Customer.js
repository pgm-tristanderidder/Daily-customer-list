import knex from "../lib/Knex.js";
import { Model } from "objection";

// instantiate the model
Model.knex(knex);

import Device from "./Device.js";

class Category extends Model {
    static get tableName() {
        return "customers";
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
                customer: { type: "string", minLength: 1, maxLength: 255 },
            },
        };
    }

    static get relationMappings() {
        return {
            devices: {
                relation: Model.BelongsToOneRelation,
                modelClass: Device,
                join: {
                    from: "categories.id",
                    to: "todos.category_id",
                },
            },
        };
    }
}

export default Category;