/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
/* eslint-disable max-statements */
const { isIDGood, handleError } = require('../../middleware/utils')
const Wallet = require('../../models/wallet')
const Address = require('../../models/address')
const User = require('../../models/user')
// const axios = require('axios')
const { encrypt } = require('../../middleware/auth')
const Web3 = require('web3')
/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 *
 *
 */

const createaddress = async (req, res) => {
  try {
    const _id = await isIDGood(req.user._id)
    const web3 = new Web3(process.env.PRIMAL_RPC)

    const account = web3.eth.accounts.create()
    const privateKey = account.privateKey
    const addr = account.address
    const obj = {
      address: addr.toString(),
      privateKey: privateKey.toString()
    }
    const userdata = await User.findById({ _id })
    const ad = await Address.find({ Daddress: userdata.wadress })
    if (ad.length === 0) {
      const wall = await Wallet.find({
        userid: { $in: _id }
      })
      const add = await Address.create({
        address: obj.address,
        seckey: encrypt(obj.privateKey),
        pubkey: encrypt(obj.address),
        Label: req.body.label,
        Daddress: wall[0]._id,
        isdefaultacc: true
      })
      res.status(200).json({
        success: true,
        result: add.address,
        message: 'WALLET CREATED SUCCESSFULLY'
      })
    } else {
      const wall = await Wallet.find({
        userid: { $in: _id }
      })
      const add = await Address.create({
        address: obj.address,
        seckey: encrypt(obj.privateKey),
        pubkey: encrypt(obj.address),
        Label: req.body.label,
        Daddress: wall[0]._id,
        isdefaultacc: false
      })
      res.status(200).json({
        success: true,
        result: add.address,
        message: 'WALLET CREATED SUCCESSFULLY'
      })
    }
  } catch (error) {
    handleError(res, error)
  }
}
module.exports = { createaddress }
