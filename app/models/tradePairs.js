const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const TradePairSchema = new mongoose.Schema(
  {
    Symbol: {
      type: String,
      required: true
    },
    Address: {
      type: String,
      required: true
    },
    Token_Decimal: {
      type: String,
      required: true
    },
    Network_id: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
)
TradePairSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('TradePairs', TradePairSchema)
