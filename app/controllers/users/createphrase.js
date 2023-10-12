/* eslint-disable max-statements */
const { isIDGood, handleError } = require('../../middleware/utils')
const { encrypt } = require('../../middleware/auth')
const { decrypt } = require('../../middleware/auth')
const Wallet = require('../../models/wallet')
const User = require('../../models/user')
/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const createphrase = async (req, res) => {
  try {
    const _id = await isIDGood(req.user._id)
    const randomWords = require('random-words')
    const seedphrase = randomWords(12)
    const dt = []
    for (let i = 0; i < seedphrase.length; i++) {
      dt.push(encrypt(seedphrase[i]))
    }
    const US = await User.findById({ _id })
    if (US?.wadress !== undefined) {
      const wid = US.wadress
      const phr = await Wallet.findOne({ _id: wid })
      if (phr.isverified === false) {
        const wdt = []
        for (let i = 0; i < phr.phrase.length; i++) {
          wdt.push(decrypt(phr.phrase[i]))
        }
        res.status(200).json({
          success: true,
          result: wdt,
          message: 'USER PHRASE'
        })
      } else {
        res.status(404).json({
          success: false,
          result: null,
          message: 'USER PHRASE ALREADY CREATED'
        })
      }
    } else {
      const wallet = await Wallet.create({ phrase: dt, userid: _id })
      await User.findByIdAndUpdate(_id, {
        wadress: wallet._id
      })
      res.status(200).json({
        success: true,
        result: seedphrase,
        message: 'PHRASE CREATED SUCCESSFULLY'
      })
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { createphrase }
