// Importet
const mongoose = require('mongoose')

// Skema e prefixe
const skemarepos = new mongoose.Schema(
    {
        id_repo:{
            type: Number,
            required: true
        },
        name:{
            type: String,
        },
        visibility:{
            type: String,
        },
        description:{
            type: String,
        },
        stargazers_count:{
            type: Number,
        }
    },
    {
        timestamps: true
    }
)

// Modeli
const repos = mongoose.model(
    'Repos',
    skemarepos
)

// Exportet
module.exports = repos