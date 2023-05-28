const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema(
    {
        id: { type: String },
        nome: { type:String, require:true},
        cpf: { type: String ,require:true},
        telefone1: { type: String,require:true },
        telefone2: { type: String,require:true },
        email: { type: String,require:true },
        endereco: { type: Object,require:true },
        dataNascimento: { type: String ,require:true},
        genero: { type: String ,require:true},
        youLiked: {type:Boolean}
    }
)

const cliente = mongoose.model('cliente',clienteSchema);

module.exports = cliente ;