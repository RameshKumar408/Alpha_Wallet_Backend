const wallet = require('../../models/wallet')
const address = require('../../models/address')
const { ObjectId } = require('mongodb')
const { isIDGood, handleError } = require('../../middleware/utils')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const deleteWallet = async (req, res) => {
  try {
    const request = req.params
    if (request.id && (request.id.length === 12 || request.id.length === 24)) {
        const walletData = await address.findOne({ _id: ObjectId(request.id) })
        if (walletData) {
            if (walletData.isdefaultacc) {
                res.status(200).json({
                    success: false,
                    message: 'Default account cannot be deleted'
                  })
            }else{
            const delete_wallet = await address.deleteOne({
                address: walletData.address,
              });  
              console.log('delete_wallet', delete_wallet.deletedCount)
              if (delete_wallet.deletedCount) {
                res.status(200).json({
                    success: true,
                    message: 'Wallet deleted successfully'
                  })
              }else{
                res.status(200).json({
                    success: false,
                    message: 'Wallet not deleted'
                  })
              }
            }
        }else{
        res.status(422).json({
          success: false,
          message: 'Invalid _id'
        })
        }
    }else {
      res.status(422).json({
        success: false,
        message: '_id field is required'
      })
    }
  } catch (error) {
    handleError(res, error)
  }
}

module.exports = { deleteWallet }
