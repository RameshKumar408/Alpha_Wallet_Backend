const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates create new item request
 */
const validateCreateCity = [
  check('name')
    .exists()
    .withMessage('Name Missing')
    .not()
    .isEmpty()
    .withMessage('Please Enter Name')
    .trim(),
  check('image')
    .exists()
    .withMessage('image Missing')
    .not()
    .isEmpty()
    .withMessage('Please Add Image')
    .trim(),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateCreateCity }
