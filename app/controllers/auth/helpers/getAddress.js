const address = require('../../../models/address')
const { itemNotFound } = require('../../../middleware/utils')

/**
 * Finds user by email
 * @param {string} email - user´s email
 */
const getAddress = (deviceid = '') => {
  return new Promise((resolve, reject) => {
    address.find(
      {
        Daddress: deviceid
      },
      'address Label',
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

module.exports = { getAddress }
