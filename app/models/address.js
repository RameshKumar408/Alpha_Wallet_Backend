const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const AddressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true
  },
  seckey: {
    type: String,
    required: true
  },
  pubkey: {
    type: String,
    required: true
  },
  Label: {
    type: String,
    required: true
  },
  Daddress: {
    type: mongoose.Schema.Types.ObjectId,
    require: true
  },
  isdefaultacc: {
    type: Boolean,
    enum: [true, false],
    default: false,
    required: true
  }
})
AddressSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Address', AddressSchema)
