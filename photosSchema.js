const mongoose = require ("mongoose");




const photosSchema = new mongoose.Schema({

    nombre:String,
    url:String,
    titulo:String,
    descripción:String
})



module.exports = mongoose.model ("Photo", photosSchema, "photos");