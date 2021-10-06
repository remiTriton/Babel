const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    firstName: {
    type: String,
    required: true,
    unique: true
  },
  lastName: {
    type: String,
    required: true
  },
  wineName: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  quantité: {
    type: Number,
    required: true
  }

},
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  })

module.exports = model('wine', UserSchema)