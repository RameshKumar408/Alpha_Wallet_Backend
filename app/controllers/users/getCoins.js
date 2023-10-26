const User = require('../../models/user')
const { matchedData } = require('express-validator')
const { isIDGood, handleError } = require('../../middleware/utils')
const Network = require('../../models/networks')
const ERC20 = require('../../middleware/web3/Abi/erc20.json')

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getCoins = async (req, res) => {
    try {
        // req = matchedData(req)
        if (req.body.network_id) {
            const already = await User.aggregate([
                { $match: { _id: req.user._id } },
                {
                    $lookup: {
                        from: 'tradepairs',
                        localField: 'Coins',
                        foreignField: '_id',
                        as: 'CoinsList'
                    }
                },
                {
                    $unwind: '$CoinsList'
                },
                {
                    $match: { 'CoinsList.Network_id': req.body.network_id }
                },
                {
                    $project: {
                        '_id': 0,
                        '_id': '$CoinsList._id',
                        'Symbol': '$CoinsList.Symbol',
                        'Address': '$CoinsList.Address',
                        'Token_Decimal': '$CoinsList.Token_Decimal',
                    }
                },
            ])
            if (already) {
                for (let i = 0; i < already.length; i++) {
                    const element = already[i];

                }
                res.status(200).json({
                    success: true,
                    result: already,
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
                message: 'Please Enter network_id'
            })
        }

    } catch (error) {
        handleError(res, error)
    }
}

module.exports = { getCoins }