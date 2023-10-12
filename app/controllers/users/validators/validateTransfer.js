const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateTransfer = [
    check('to_address')
        .exists()
        .withMessage('to_address MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter To Address'),
    check('amount')
        .exists()
        .withMessage('amount MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Amount'),
    check('gasamount')
        .exists()
        .withMessage('gasamount MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Gas Amount'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateTransfer }