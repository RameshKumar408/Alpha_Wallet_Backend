/* eslint-disable max-statements */
const { isIDGood, handleError } = require('../../middleware/utils')
const { findavailablephrase, getAddress } = require('../auth/helpers')
const Wallet = require('../../models/wallet')
const User = require('../../models/user')
/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const walletimport = async (req, res) => {
  try {
    const userreq = req.body
    const id = await isIDGood(req.user._id)
    console.log(id, "id")
    if (userreq?.phrase === undefined) {
      res.status(400).json({
        success: false,
        result: null,
        message: 'Phrase Enter Phrase Key'
      })
    } else {
      let dat = []
      dat = userreq?.phrase?.split(' ')
      if (dat?.length < 12 || dat?.length > 12) {
        res.status(400).json({
          success: false,
          result: null,
          message: 'Please Enter 12 Digit Phrase Key'
        })
      } else {
        const phrase = await findavailablephrase(dat)
        console.log(phrase[0]._id, "phrase")
        if (phrase[0]) {
          const avauser = await Wallet.find({ userid: id })
          console.log(avauser, "avauser")
          // if (avauser.length === 0) {
          await Wallet.findOneAndUpdate(
            { _id: avauser },
            { $pull: { userid: id } }
          )
          await Wallet.findOneAndUpdate(
            { _id: phrase[0]._id },
            {
              $push: { userid: id }
            }
          )
          await User.findOneAndUpdate(
            { _id: id },
            { verified: true, wadress: phrase[0]._id }
          )
          // }
          const data = await getAddress(phrase[0]._id)
          if (data[0]) {
            res.status(200).json({
              success: true,
              result: data,
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
          res.status(400).json({
            success: false,
            result: null,
            message: 'INVALID PHRASE, TRY AGAIN'
          })
        }
      }
    }


  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { walletimport }
