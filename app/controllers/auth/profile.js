/* eslint-disable max-statements */
const { matchedData } = require('express-validator')

const { handleError } = require('../../middleware/utils')
const { createItem } = require('../../middleware/db')
const profiles = require('../../models/profile')
const wallet = require('../../models/wallet')
const { files } = require('../../middleware/upload/uploadLocal')
/**
 * Login function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const profile = async (req, res) => {
  try {
    const data = matchedData(req)
    data.userid = req.user._id
    data.is_Verified = "2"
    const already = await profiles.find({ userid: req.user._id })
    if (already[0]) {
      res.status(404).json({
        success: false,
        result: null,
        message: 'These documents were already submitted for another account'
      })
    } else {
      const datas = await createItem(data, profiles)
      res.status(200).json({
        success: true,
        result: datas,
        message: 'KYC Submitted Successfully'
      })
    }
  } catch (error) {
    handleError(res, error)
  }
}
module.exports = { profile }
