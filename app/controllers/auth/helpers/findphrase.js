const Wallet = require('../../../models/wallet')
const { itemNotFound } = require('../../../middleware/utils')

/**
 * Finds user by email
 * @param {string} email - user´s email
 */
const findphrase = (_id = '') => {
  return new Promise((resolve, reject) => {
    Wallet.find(
      {
        userid: { $in: _id }
      },
      async (err, item) => {
        try {
          await itemNotFound(err, item, 'USER_DOES_NOT_EXIST')
          resolve(item)
        } catch (error) {
          reject(error)
        }
      }
    )
  })
}

module.exports = { findphrase }
