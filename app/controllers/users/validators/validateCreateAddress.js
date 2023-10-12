const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateCreateAddress = [
    check('label')
        .exists()
        .withMessage('label MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Provide Account Name'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreateAddress }
