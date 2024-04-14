import Device from "../models/Device.js";
import { validationResult } from "express-validator";

export const index = async (req, res) => { };

export const createDevice = async (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        req.formErrorFields = req.formErrorFields || {};
        errors.array().forEach(error => {
            req.formErrorFields[error.path] = error.msg;
        });
        return next()
    }

    const device = await Device.query().insert({
        device: req.body.todo,
    });
    req.body = {};

    return next()
};

export const status = async (req, res) => {
    const deviceId = req.body.id;
    const updated = await Device.query().patchAndFetchById(deviceId, {
        completed: true
    });
    res.redirect("/");
};

export const update = async (req, res) => {
    const deviceId = req.body.id;
    const device = await Device.query().patchAndFetchById(deviceId, {
        todo: req.body.todo,
    });
    res.redirect("/");
};

export const destroy = async (req, res) => {
    const deviceId = req.body.id;
    const deleted = await Todo.query().deleteById(deviceId);
    res.redirect("/");
};

export const handlePost = async (req, res, next) => {
    const method = req.body.method;

    if (method == "CAT") {
        createCategory(req, res);
    }
    if (method == "POST") {
        createTodo(req, res, next);
    }
    if (method == "PUT") {
        update(req, res);
    }
    if (method == "Done") {
        status(req, res);
    }
    if (method == "DELETE") {
        destroy(req, res);
    }
}