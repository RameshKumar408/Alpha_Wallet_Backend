const wallet = require('../../models/wallet')
const address = require('../../models/address')
const { isIDGood, handleError } = require('../../middleware/utils')
const { ObjectId } = require('mongodb')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const changeWallet = async (req, res) => {
  try {
    const request = req.body
    if (request._id && (request._id.length == 12 || request._id.length == 24)) {
      const wallet_id = await wallet.findOne({ userid: { $in: req.user._id } })
      const Valid_id = await address.findOne({ _id: ObjectId(request._id) })
      if (wallet_id && Valid_id) {
        const address1 = await address.find(
          { Daddress: wallet_id._id },
          'address Label isdefaultacc _id'
        )
        if (address1[0]) {
          if (Valid_id) {
            let Wallets = address1
            let old_id
            let new_id
            for (let i = 0; i < Wallets.length; i++) {
              if (Wallets[i]._id == request._id) {
                Wallets[i].isdefaultacc = true
                new_id = Wallets[i]._id
              } else if (Wallets[i].isdefaultacc) {
                Wallets[i].isdefaultacc = false
                old_id = Wallets[i]._id
              }
            }
            const updateOld = await address.updateOne(
              { _id: old_id },
              {
                $set: {
                  isdefaultacc: false
                }
              }
            )
            const updateNew = await address.updateOne(
              { _id: new_id },
              {
                $set: {
                  isdefaultacc: true
                }
              }
            )
            
            if (updateNew.nModified) {
              res.status(200).json({
                success: true,
                result: Wallets,
                message: 'Current wallet changed Successfully'
              })
            } else {
              res.status(200).json({
                success: false,
                result: Wallets,
                message: 'Current wallet Not updated'
              })
            }
          } else {
            res.status(422).json({
              success: false,
              message: 'Invalid _id'
            })
          }
        } else {
          res.status(200).json({
            success: true,
            message: 'No Wallets Found'
          })
        }
      } else {
        let message = ''
        if (!Valid_id) {
          message = 'Invalid _id'
        } else {
          message = 'No wallets found'
        }
        res.status(422).json({
          success: false,
          message: message
        })
      }
    } else {
      res.status(422).json({
        success: false,
        message: '_id field is required'
      })
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { changeWallet }
