const mongoose = require("mongoose");

const empreendedoraSchema = new mongoose.Schema(
    {
        id: { type: String },
        nomeDaEmpreendedora: { type:String, require:true},
        nomeDoEmpreendimento: { type:String ,require:true},
        cpf: { type: String ,require:true},
        cnpj: { type: String ,require:true},
        redeSocial: { type:Array },
        site: { type:String  },
        whatsapp: { type: String,require:true },
        email: { type: String,require:true },
        nicho: { type: String ,require:true},
        categoria: { type:String,require:true  },
        endereco: { type: Object,require:true },
        descricao: { type: String ,require:true},
        youLiked: {type:Boolean}
    }
)

const empreendedoras = mongoose.model('empreendedoras',empreendedoraSchema);

module.exports = empreendedoras ;