/* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
const Web3 = require('web3')

const { buildErrObject } = require('../../middleware/utils')
/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getBalance = async (data) => {
    return new Promise(async (resolve, reject) => {
        const web3 = new Web3(
            new Web3.providers.HttpProvider(data.provider)
        )
        try {
            const contractInstance = new web3.eth.Contract(
                data.contractABI,
                data.contractAddress
            );
            await contractInstance.methods.balanceOf(data.address).call((error, receipt) => {
                if (error) {
                    reject(buildErrObject(422, error.message))
                    return;
                }
                else {
                    resolve(web3.utils.fromWei(receipt, 'ether'))
                    // resolve(receipt)
                }
            })
        } catch (error) {
            reject(buildErrObject(422, error.message))
        }
    })
}
module.exports = { getBalance }
