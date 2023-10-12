const { handleError } = require('../../middleware/utils')
const { sendTransaction } = require('../../middleware/web3')
const process = require('process')
const { matchedData } = require('express-validator')
const address = require('../../models/address')
const { decrypt } = require('../../middleware/auth')

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const amountTransfer = async (req, res) => {
  try {
    const data = await matchedData(req)
    console.log(req.user.wadress)
    const add = await address.findOne({
      Daddress: req.user.wadress,
      isdefaultacc: 'true'
    })
    const datas = {
      from_address: add.address,
      to_address: data.to_address,
      privatekey: decrypt(add.seckey),
      amount: data.amount,
      provider: process.env.PRIMAL_RPC,
      gas: data.gasamount
    }
    const response = await sendTransaction(datas)
    res.status(200).json({
      success: true,
      result: response,
      message: 'Amount Transferred Successfully'
    })
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { amountTransfer }
