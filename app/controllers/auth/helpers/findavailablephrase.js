const Wallet = require('../../../models/wallet')
const { itemNotFound } = require('../../../middleware/utils')
const { encrypt } = require('../../../middleware/auth')

/**
 * Finds user by email
 * @param {string} email - user´s email
 */
const findavailablephrase = (secretphrase = '') => {
  const dt = []
  for (let i = 0; i < secretphrase.length; i++) {
    dt.push(encrypt(secretphrase[i]))
  }
  return new Promise((resolve, reject) => {
    Wallet.find(
      {
        phrase: dt
      },
      'phrase',
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

module.exports = { findavailablephrase }
