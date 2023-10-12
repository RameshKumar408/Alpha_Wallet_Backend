/* eslint-disable max-statements */
const { matchedData } = require('express-validator')

const { handleError } = require('../../middleware/utils')
const { createItem } = require('../../middleware/db')
const profiles = require('../../models/profile')

/**
 * Login function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const kycVerify = async (req, res) => {
  try {
    const id = req.body.userid
    const remark = req.body.remark ? req.body.remark : null
    const status = req.body.status
    const user_ = await profiles.findById(id)
    if (user_) {
      if (user_.is_Verified === '0') {
        await profiles.findByIdAndUpdate(id, {
          is_Verified: status,
          Remark: remark
        })
        if (status === '2') {
          res.status(200).json({
            success: true,
            result: null,
            message: 'KYC UPDATED SUCCESSFULLY'
          })
        } else {
          res.status(200).json({
            success: true,
            result: null,
            message: 'KYC UPDATED SUCCESSFULLY'
          })
        }
      } else {
        res.status(404).json({
          success: false,
          result: null,
          message: 'USER ALREADY VERIFY OR CANCELLED'
        })
      }
    } else {
      res.status(404).json({
        success: false,
        result: null,
        message: 'User Not Found'
      })
    }
  } catch (error) {
    handleError(res, error)
  }
}
module.exports = { kycVerify }
