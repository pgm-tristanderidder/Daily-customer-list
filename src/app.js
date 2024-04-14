import { create } from "express-handlebars";
import express from "express";
import bodyParser from "body-parser";


import dotenv from "dotenv";
dotenv.config();

import { home } from "./controllers/PageController.js";

import * as path from "path";
export const SOURCE_PATH = path.resolve("src");

const app = express();
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const hbs = create({
    extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(SOURCE_PATH, "views"));

app.get('/', home);

app.listen(process.env.PORT, () => {
    console.log(`Application is listening to port ${process.env.PORT}.`);
});