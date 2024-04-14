/**
 * todo API Controller
 */

import Device from "../../models/Device.js";
import { v4 as uuidv4 } from 'uuid';
import { home } from "../pageController.js";

/**
 * Get a single device
 */
export const getDevice = async (req, res, next) => {
    const id = req.params.id;
    const devices = await Device.query().findById(id).withGraphFetched('category');
    if (!devices) {
        return res.status(404).json({ message: "Device not found" });
    }
    console.log(devices);
    res.json(devices);
}

/**
 * Get all devices
 */
export const getDevices = async (req, res, next) => {
    const devices = await Device.query().withGraphFetched('category');
    console.log(devices);

    res.json(devices);
}

/**
 * Create a new device
 */
export const createDevice = async (req, res, next) => {
    const devices = req.body.todo;
    const completed = req.body.bio;
    const uuid = uuidv4();;
    const device = await Device.query().insert({
        devices,
        completed,
        category_id,
        uuid
    });

    res.status(201).json(device);
}

/**
 * Update an device
 * 
 */
export const updateDevice = async (req, res, next) => {
    const deviceId = req.body.id;
    const device = await Device.query().patchAndFetchById(todoId, {
        todo: req.body.name,

    });
}

/**
 * Delete an device
 */
export const deleteDevice = async (req, res, next) => {
    const id = req.params.id;
    const device = await Device.query().deleteById(id);
}