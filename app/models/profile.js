const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const profile = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true
    },
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    email: {
      type: String,
      lowercase: true,
      default: null
    },
    phone: {
      type: Number
    },
    address: {
      type: String
    },
    Account_type: {
      type: String,
      enum: ['individual', 'business'],
      required: true
    },
    suite_number: {
      type: Number
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    zip: {
      type: String
    },
    DOB: {
      type: String
    },
    Social_Security_num: {
      type: String
    },
    ID_Number: {
      type: String,
      require: true
    },
    ID_Type: {
      type: String,
      require: true
    },
    ID_Image: {
      type: String,
      require: true
    },
    Address_Image: {
      type: String,
      require: true
    },
    Entity_Address: {
      type: String
    },
    Date_incorporation: {
      type: String
    },
    State_of_incorporation: {
      type: String
    },
    EIN: {
      type: String
    },
    Num_of_owners: {
      type: String
    },
    Articles_of_Incorporation: {
      type: String
    },
    Entity_name: {
      type: String
    },
    Other_Documents: {
      type: String
    },
    Tax_Returns: {
      type: String
    },
    is_Verified: {
      type: String,
      enum: ["0", "1", "2"],
      default: "0"
    },
    is_Active: {
      type: Boolean,
      default: true
    },
    Remark: {
      type: String,
    }
  },

  {
    versionKey: false,
    timestamps: true
  }
)
profile.plugin(mongoosePaginate)
module.exports = mongoose.model('profile', profile)
