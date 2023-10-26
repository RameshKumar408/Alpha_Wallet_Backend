const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateAddCoins = [
    check('Symbol')
        .exists()
        .withMessage('Symbol MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Symbol'),
    check('Address')
        .exists()
        .withMessage('Address MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Address'),
    check('Token_Decimal')
        .exists()
        .withMessage('Token_Decimal MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Token Decimal'),
    check('Network_id')
        .exists()
        .withMessage('Network_id MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Network Id'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateAddCoins }
