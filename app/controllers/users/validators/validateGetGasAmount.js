const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateGetGasAmount = [
    check('toAddress')
        .not()
        .isEmpty()
        .withMessage('To Address Required'),
    check('amount')
        .not()
        .isEmpty()
        .withMessage('Amount Required'),
    check('type')
        .not()
        .isEmpty()
        .withMessage('type Required')
        .isIn(['low','medium','aggressive']).withMessage('Invalid Type'),
    
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateGetGasAmount }
