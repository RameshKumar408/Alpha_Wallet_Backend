const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateAddNetwork = [
    check('Network_name')
        .exists()
        .withMessage('Network_name MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateAddNetwork }
