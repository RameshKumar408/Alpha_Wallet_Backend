const assets = require('../../models/assets')
const address = require('../../models/address')
const { getBalance } = require('../../middleware/web3')

const { handleError } = require('../../middleware/utils')
const { getItems, checkQueryString } = require('../../middleware/db')

/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getAssets = async (req, res) => {
    try {
        const data = await assets.find({})
        const add = await address.findOne({ Daddress: req.user.wadress, isdefaultacc: "true" })

        if (add) {
            const dt = []
            for (let i = 0; i < data.length; i++) {
                const datas = {
                    provider: process.env.WEB3PROVIDER,
                    contractABI: data[i].abiarray,
                    contractAddress: data[i].contractaddress,
                    address: add.address
                }
                const response = await getBalance(datas)
                const temp = {
                    _id: data[i]._id,
                    contractaddress: data[i].contractaddress,
                    decimalvalue: data[i].decimalvalue,
                    image: data[i].image,
                    coinname: data[i].coinname,
                    symbol: data[i].symbol,
                    balance: response
                }
                dt.push(temp)
            }
            res.status(200).json({
                success: true,
                result: dt,
                message: 'Success'
            })
        } else {
            res.status(400).json({
                success: false,
                result: null,
                message: 'No Wallet Found'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getAssets }
