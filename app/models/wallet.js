const mongoose = require('mongoose')

const WalletSchema = new mongoose.Schema({
  phrase: {
    type: Array,
    required: true
  },
  userid: {
    type: Array,
    required: true
  },
  isverified: {
    type: Boolean,
    default: false
  }
})
module.exports = mongoose.model('Wallet', WalletSchema)
