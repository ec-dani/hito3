'use strict'

const User = require('../models/user');

function createUser(req, res){
    console.log(req.body)
    const user = new User({
        email: req.body.email,
        displayName: req.body.displayName,
        avatar: req.body.avatar,
        password: req.body.password
    })
    user.save((err, user)=>{
        if(err) return res.status(500).send({message:`Error al creat el usuario: ${err}`})
        else return res.status(200).send({message: 'Usuario guardado', user})
    })
}

function getUsers(req, res) {
    User.find({}, (err, users) => {
        if (err) return res.status(500).send({ message: `Error ${err}`});
        if (!users) return res.status(404).send({ message: 'No hay usuarios' });

        return res.status(200).send(users);
    })
}

function getUser(req, res){
    User.findOne({email: req.params.email}, (err, user)=>{
        if(err) return res.status(500).send({ message: `Error ${err}`});
        if(!user) return res.status(404).send({ message: 'No existe usuario'})
        return res.status(200).send(user);
    })
}
//
function updateUser(req, res ){
    let update= req.body;

    User.findOneAndUpdate({email: req.params.email},update, (err, userUpdate)=>{
        if(err) return res.status(500).send({ message: `Error ${err}`});
        if(!user) return res.status(404).send({ message: 'No existe el usuario, no se puede actualizar'});

        return res.status(200).send({ message: 'Usario actualizado', userUpdate})
         
    })

}


function deleteUser(req, res){
    User.findOneAndDelete({email: req.params.email}, (err, user) => {
        if(err) return res.status(500).send({ message:`Error ${err}`});
        if(!user) return res.status(404).send({ message: 'Usuario no encontrado'})
        
        return res.status(200).send({ message: 'Usuario borrado', user});
    })
}

module.exports ={
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}