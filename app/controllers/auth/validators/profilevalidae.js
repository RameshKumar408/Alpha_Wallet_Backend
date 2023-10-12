const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

const validateprofile = [
  check('first_name')
    .exists()
    .withMessage('first_name MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter First Name'),

  check('last_name')
    .exists()
    .withMessage('Last Name MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Last Name'),
  check('email')
    .exists()
    .withMessage('email MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Email')
    .isEmail()
    .withMessage('Invalid Email'),
  check('Account_type')
    .exists()
    .withMessage('Account_type MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Account Type'),
  check('phone')
    .exists()
    .withMessage('phone MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Phone No')
    .isNumeric()
    .withMessage('Numbers Only Allowed For Phone NO')
    .isLength({
      min: 4
    })
    .withMessage('Phone Number Length is too short')
    .isLength({
      max: 15
    })
    .withMessage('Phone Number Length is too long'),
  check('address')
    .exists()
    .withMessage('address MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Address'),
  check('suite_number')
    .exists()
    .withMessage('suite_number MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Suite Number'),
  check('city')
    .exists()
    .withMessage('city MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter City '),
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
    .withMessage('Please Enter Zip')
    .isNumeric()
    .withMessage('Numbers Only Allowed in ZIP Code'),
  check('DOB')
    .exists()
    .withMessage('DOB MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter DOB')
    .isISO8601('yyyy-mm-dd')
    .withMessage('Please Enter DOB Correct Format'),
  check('Social_Security_num')
    .exists()
    .withMessage('Social_Security_num MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter Social Security Num'),
  check('ID_Number')
    .exists()
    .withMessage('ID_Number MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter ID Number'),
  check('ID_Type')
    .exists()
    .withMessage('ID_Type MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Enter ID Type'),
  check('Address_Image')
    .exists()
    .withMessage(' Address_Image MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Add Address Image'),
  check('ID_Image')
    .exists()
    .withMessage('ID_Image MISSING')
    .not()
    .isEmpty()
    .withMessage('Please Add ID Image'),

  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateprofile }
