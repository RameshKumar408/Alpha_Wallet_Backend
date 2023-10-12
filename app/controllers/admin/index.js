const { kycVerify } = require('./kycverify')
const { listItems } = require('./listItems')
const { getUsers } = require('./getUsers')
const { kycLists } = require('./kycList')
const { userAddress } = require('./userAddress')
const { propertiesList } = require('./propertiesList')
const { blockUser } = require('./blockUser')
const { individualKyc } = require('./individualKyc')
const { adminForgotPassword } = require('./adminForgotPassword')

module.exports = {
  kycVerify,
  listItems,
  getUsers,
  kycLists,
  userAddress,
  propertiesList,
  blockUser,
  individualKyc,
  adminForgotPassword
}
