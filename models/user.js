/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
  name: String,
  apellido: String,
  email: {
    type: String, unique: true, lowercase: true, required: true,
  },
  displayName: String,
  avatar: String,
  password: { type: String, required: true },
  phone: { type: String, minlenght: 9, maxlenght: 9 },
  singipDate: { type: Date, default: Date.now() },
});

UserSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return cb(err, null);
    return cb(null, isMatch);
  });
};

module.exports = mongoose.model('user', UserSchema);
