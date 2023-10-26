// const User = require('../../models/user')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const Network = require('../../models/networks')
const Web3 = require('web3')
const erc20 = require('../../middleware/web3/Abi/erc20.json')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getTokenDetails = async (req, res) => {
    try {
        // req = matchedData(req)
        if (req.body.NetworkId) {
            if (req.body.Address) {
                const already = await Network.findById({ _id: req.body.NetworkId })
                if (already) {
                    const web3 = new Web3(new Web3.providers.HttpProvider(already.Rpc_url))
                    // console.log(web3, "web3")
                    const contractInstance = new web3.eth.Contract(
                        erc20,
                        req.body.Address
                    );
                    const symbol = await contractInstance.methods.symbol().call()
                    const decimal = await contractInstance.methods.decimals().call({})
                    console.log(symbol, "decimal")
                    res.status(200).json({
                        success: true,
                        result: {
                            symbol: symbol,
                            decimal: decimal
                        },
                        message: 'Networks List'
                    })
                } else {
                    res.status(400).json({
                        success: false,
                        result: [],
                        message: 'Network Not Available'
                    })
                }
            } else {
                res.status(400).json({
                    success: false,
                    result: null,
                    message: 'Please Enter Address'
                })
            }

        } else {
            res.status(400).json({
                success: false,
                result: null,
                message: 'Please Enter NetworkId'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getTokenDetails }