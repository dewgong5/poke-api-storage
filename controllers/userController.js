const User = require("../models/userModel.js");
const mongoose = require('mongoose')

const getUser = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "invalid id"})
    }

    const user = await User.findById(id)

    if(!user) {
        return res.status(404).json({error: "no user exists"});
    }

    res.status(200).json(user);
}

const getUserPokemon = async(req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "invalid id"})
    }

    const user = await User.findById(id)

    if(!user) {
        return res.status(404).json({error: "no user exists"});
    }

    const inventory = user.pokemons;

    res.status(200).json(inventory);
}



const getUsers = async(req, res) => {
    const users = await User.find({}).sort({createdAt: -1})

    res.status(200).json(users);
}
const createUser = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.create({username, password});
        res.status(200).json(user);
        console.log("successfully added user")
    } catch(error) {
        res.status(400).json({error: error});
    }
    
}

const deleteUser = async(req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "invalid id"})
    }

    const user = await User.findOneAndDelete({_id: id})

    if(!user) {
        return res.status(404).json({error: "no user exists"});
    }

    res.status(200).json({message: "user is deleted"});

}

const updateUser = async(req, res) => {
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "invalid id"})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!user) {
        return res.status(404).json({error: "no user exists"});
    }

    res.status(200).json(user);


}

module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser,
    updateUser,
    getUserPokemon
}