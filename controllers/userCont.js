'use strict'

const User = require('../models/user');

function createUser(req, res){
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
        avatar: req.body.avatar,
    })
    user.save((err)=>{
        if(err) res.status(500).send({message:`Error al creat el usuario: ${err}`})
        else return res.status(200).send({message: 'Usuario guardado'})
    })
}



function singIn(req, res){
    User.find({email: req.body.email}, (err, user)=> {
        if(err) return res.status(500).send({message: `Error : ${err}`})
        if(!user) return res.status(404).send({message:'No existe el usuario'})
        else{
            req.user = user
            res.status(200).send({message:'Logeado correctamente'})
        }
    })
}



module.exports ={
    createUser,
    singIn
}