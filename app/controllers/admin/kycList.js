/* eslint-disable max-statements */
const { matchedData } = require('express-validator')

const { handleError } = require('../../middleware/utils')
const profile = require('../../models/profile')
const { getItems, checkQueryString } = require('../../middleware/db')
const { listInitOptions } = require('../../middleware/db/listInitOptions')

/**
 * Login function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const kycLists = async (req, res) => {
  try {
    // const query = await checkQueryString(req.query)
    const options = await listInitOptions(req)

    const query = {}
    let query1
    if (req?.query?.status === "2") {
      query.is_Verified = '2'
    } else if (req?.query?.status === "1") {
      query.is_Verified = '1'
    } else if (req?.query?.status === "0") {
      query.is_Verified = '0'
    } else {
      query1 = await checkQueryString(req.query)
    }
    const querys = profile.find(query1 ? query1 : query).populate('userid', {
      _id: 1,
      Email_Address: 1,
      Phone_NO: 1,
      Last_Name: 1,
      First_Name: 1
    })

    const response = await profile.paginate(querys, options)
    // const response = await getItems(req, profile, )
    res.status(200).json({
      success: true,
      result: response,
      message: 'USERS KYC DETAILS FETCH SUCCESSFULLY'
    })
  } catch (error) {
    handleError(res, error)
  }
}
module.exports = { kycLists }
