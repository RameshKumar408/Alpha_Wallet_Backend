/* eslint-disable max-statements */
const { handleError } = require('../../middleware/utils')
const { findavailablephrase, getAddress } = require('../auth/helpers')
const Wallet = require('../../models/wallet')
const User = require('../../models/user')

const { saveUserAccessAndReturnToken, registerUser } = require('./helpers')
/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const importwallet = async (req, res) => {
  try {
    const userreq = req.body
    const data1 = {}
    data1.deviceid = req.body.deviceid
    data1.password = req.body.password
    let dat = []
    dat = userreq.phrase.split(',')
    const phrase = await findavailablephrase(dat)
    if (phrase[0]) {
      const item = await registerUser(data1)
      const response = await saveUserAccessAndReturnToken(req, item)
      const avauser = await Wallet.find({ userid: item._id })
      if (avauser.length === 0) {
        await Wallet.findOneAndUpdate(
          { _id: phrase[0]._id },
          {
            $push: { userid: item._id }
          }
        )
      }
      await User.findOneAndUpdate(
        { _id: item._id },
        { verified: true, wadress: phrase[0]._id }
      )
      const data = await getAddress(phrase[0]._id)
      if (data[0]) {
        res.status(200).json({
          success: true,
          result: data,
          token: response,
          message: 'WALLET FETCHED SUCCESSFULLY'
        })
      } else {
        res.status(200).json({
          success: true,
          result: null,
          message: 'WALLET NOT FOUND'
        })
      }
    } else {
      res.status(404).json({
        success: false,
        result: null,
        message: 'INVALID PHRASE, TRY AGAIN'
      })
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { importwallet }
