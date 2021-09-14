const mongoose = require('mongoose')

const obraSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    nome_da_obra: {
        type: String,
        require: true
    },
    descricao:{
        type: String,
        require: true
    },
    data_de_publicacao:{
        type: Date,
        require: true,
        default: new Date
    },
    autores:[{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "autor"
    }],
    categoria:{
        type: String,
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


module.exports = mongoose.model('obra', obraSchema)