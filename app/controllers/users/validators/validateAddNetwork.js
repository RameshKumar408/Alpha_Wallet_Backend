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
        .withMessage('Please Enter Network Name'),
    check('Rpc_url')
        .exists()
        .withMessage('Rpc_url MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Rpc Url'),
    check('Chain_id')
        .exists()
        .withMessage('Chain_id MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Chain Id'),
    check('Currency_Symbol')
        .exists()
        .withMessage('Currency_Symbol MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Currency Symbol'),
    check('Block_Explore'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateAddNetwork }
