const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

const Bvalidateprofile = [
  check('Entity_name')
    .exists()
    .withMessage('Entity_name MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Entity Name'),

  check('Entity_Address')
    .exists()
    .withMessage(' Entity_Address MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Entity Address'),
  check('Account_type')
    .exists()
    .withMessage('Account_type MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Account Type'),
  check('city')
    .exists()
    .withMessage('city MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter City'),
  check('state')
    .exists()
    .withMessage('state MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter State'),
  check('zip')
    .exists()
    .withMessage('zip MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Zip Code ')
    .isNumeric()
    .withMessage('Only Numbers Allowed in ZIP Code'),
  check('Date_incorporation')
    .exists()
    .withMessage('Date_incorporation MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Date incorporation')
    .isISO8601('yyyy-mm-dd')
    .withMessage('Please Enter DOB Correct Format'),
  check('State_of_incorporation')
    .exists()
    .withMessage('State_of_incorporation MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter State of Incorporation'),
  check('EIN')
    .exists()
    .withMessage('EIN MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter EIN'),
  check('Num_of_owners')
    .exists()
    .withMessage('Num_of_owners MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Num of Owners'),
  check('Articles_of_Incorporation')
    .exists()
    .withMessage('Articles_of_Incorporation MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Articles of Incorporation'),
  check('Other_Documents')
    .exists()
    .withMessage('Other_Documents MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Other Documents'),
  check('Tax_Returns')
    .exists()
    .withMessage('Please Enter Tax_Returns MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Tax Returns'),

  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { Bvalidateprofile }
