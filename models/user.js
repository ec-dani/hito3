const mongoose = require('mongoose');

const { Schema } = mongoose;

// const bcrypt = require('bcrypt-nodejs');

const UserSchema = Schema({
  name: String,
  apellido: String,
  email: {
    type: String, unique: true, lowercase: true, required: true,
  },
  displayName: String,
  avatar: String,
  password: { type: String, select: false, required: true },
  phone: { type: String, minlenght: 9, maxlenght: 9 },
  singipDate: { type: Date, default: Date.now() },
});


/* UserSchema.pre('save', (next)=> {
    let user= this;
    if(user.isModified('password')) return next;
    else
    bcrypt.genSalt(10, ())
}) */
module.exports = mongoose.model('user', UserSchema);
