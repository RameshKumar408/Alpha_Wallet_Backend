const { validateResult } = require('../../../middleware/utils')
const { checkIf, check } = require('express-validator')

const propertyValidator = [
    check('Address')
        .exists()
        .withMessage('Address MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Address'),
    check('title')
        .exists()
        .withMessage('title MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter title'),

    check('City')
        .exists()
        .withMessage('City MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter City'),

    check('State')
        .exists()
        .withMessage('State MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter State'),

    check('Zip')
        .exists()
        .withMessage('zip MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Zip')
        .isNumeric()
        .withMessage('Numbers Only Allowed in ZIP Code'),

    check('Property_type')
        .exists()
        .withMessage('Property_type MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Property Type'),

    check('Bedroom')
        .exists()
        .withMessage('Bedroom MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Bedroom'),

    check('Bathroom')
        .exists()
        .withMessage('Bathroom MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Bathroom'),

    check('Year_Build')
        .exists()
        .withMessage('Year_Build MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Year Build '),

    check('Square_Footage')
        .exists()
        .withMessage('Square_Footage MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Square Footage'),
    check('No_of_Garages')
        .exists()
        .withMessage('No_of_Garages MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter No of Garages')
        .isNumeric()
        .withMessage('Numbers Only Allowed For No of Garages'),

    check('Describe')
        .exists()
        .withMessage('Describe MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Describe'),

    check('Sales_Price')
        .exists()
        .withMessage('Sales_Price MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Sales Price'),

    check('Earnest_Money')
        .exists()
        .withMessage('Earnest_Money MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Earnest Money'),

    check('Closing_Date')
        .exists()
        .withMessage(' Closing_Date MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Add Closing Date')
        .isISO8601('yyyy-mm-dd')
        .withMessage('Please Enter Closing_Date Correct Format'),

    check('Property_Image')
        .exists()
        .withMessage('Property_Image MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Add Property Image'),

    check('Current_Occupant')
        .exists()
        .withMessage('Current_Occupant MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Add Current Occupant'),

    check('Occupied_Since')
        .exists()
        .withMessage('Occupied_Since MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Add Occupied Since')
        .isISO8601('yyyy-mm-dd')
        .withMessage('Please Enter Occupied Since Correct Format'),

    check('Lease_expiration_date')
        .exists()
        .withMessage('Lease_expiration_date MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Add Lease expiration date')
        .isISO8601('yyyy-mm-dd')
        .withMessage('Please Enter Lease_expiration_date Correct Format'),

    check('Projected_rent_year')
        .exists()
        .withMessage('Projected_rent_year MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Add Projected Rent Year'),

    check('Total_rent_last_year')
        .exists()
        .withMessage('Total_rent_last_year MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Add Total Rent Last Year'),

    check('Survey_Document')
        .exists()
        .withMessage('Survey_Document MISSING')
        .not(),

    check('Owners_Detail')
        .exists()
        .withMessage('Owners_Detail MISSING')
        .not(),

    // check('Legal_Name')
    //     .exists()
    //     .withMessage('Legal_Name MISSING')
    //     .not()
    //     .isEmpty()
    //     .withMessage('Please Add Legal_Name'),
    // check('Active_Email')
    //     .exists()
    //     .withMessage('Active_Email MISSING')
    //     .not()
    //     .isEmpty()
    //     .withMessage('Please Enter Active_Email')
    //     .isEmail()
    //     .withMessage('Invalid Email'),
    check('List_on_MLS')
        .exists()
        .withMessage('List_on_MLS MISSING')
        .not(),
    check('Plan_Image')
        .exists()
        .withMessage('List_on_MLS MISSING')
        .not(),
    check('Virtual_Tour')
        .exists()
        .withMessage('Virtual_Tour MISSING')
        .not(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { propertyValidator }
