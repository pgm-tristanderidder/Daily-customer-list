import { body } from 'express-validator';

export default [
    body("device")
        .isLength({ min: 2 })
        .withMessage("Een device is verplicht")
        .bail()
]