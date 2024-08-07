const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pokecoins: {
        type: Number,
        default: 0
    },
    pokemons:  {
        type: [mongoose.Schema.Types.Mixed],
        default: []
    }
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);



