const { validateCreateUser } = require('./validateCreateUser')
const { validateDeleteUser } = require('./validateDeleteUser')
const { validateGetUser } = require('./validateGetUser')
const { validateUpdateUser } = require('./validateUpdateUser')
const { validateCreateAddress } = require('./validateCreateAddress')
const { validateTransfer } = require('./validateTransfer')
const { validateGetGasAmount } = require('./validateGetGasAmount')

module.exports = {
  validateCreateUser,
  validateDeleteUser,
  validateGetUser,
  validateUpdateUser,
  validateCreateAddress,
  validateTransfer,
  validateGetGasAmount
}