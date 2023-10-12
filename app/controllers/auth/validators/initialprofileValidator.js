const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

const initailProfileValidator = [
    check('First_Name')
        .exists()
        .withMessage('First_Name MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter First_Name'),

    check('Last_Name')
        .exists()
        .withMessage('Last_Name MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Last_Name'),
    check('Email_Address')
        .exists()
        .withMessage('Email_Address MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Email')
        .isEmail()
        .withMessage('Invalid Email'),
    check('Profile_Image')
        .exists()
        .withMessage('Profile_Image MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Add Profile Image'),
    check('Phone_NO')
        .exists()
        .withMessage('Phone_NO MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Phone_NO')
        .isNumeric()
        .withMessage('Numbers Only Allowed For Phone_NO')
        .isLength({
            min: 4
        })
        .withMessage('Phone Number Length is too short')
        .isLength({
            max: 15
        })
        .withMessage('Phone Number Length is too long'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { initailProfileValidator }
