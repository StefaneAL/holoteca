const mongoose = require('mongoose')

const autorSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    nome_do_autor: {
        type: String,
        require: true
    },
    pais:{
        type: String,
        require: true
    },
    data_de_nascimento:{
        type: Date,
        require: true,
        default: new Date
    },    
    pais:{
        type: Number,
        require: true
    }, 
    criadoEm: {
        type: Date,
        require: true,
        default: new Date
    }
},{
    versionKey: false
})


module.exports = mongoose.model('autor', autorSchema)