'use strict'

const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const bcrypt= require('bcrypt-nodejs')

const UserSchema= Schema({
    email:{ type: String, unique: true , lowercase: true},
    displayName: String,
    avatar: String,
    password:{type: String, select: false },
    singipDate:{type: Date, default: Date.now()},
})

/*UserSchema.pre('save', (next)=> {
    let user= this;
    if(user.isModified('password')) return next;
    else
    bcrypt.genSalt(10, ())
})*/
module.exports= mongoose.model('user', UserSchema);