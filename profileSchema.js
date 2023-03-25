const mongoose = require ("mongoose");


const profileSchema = new mongoose.Schema({
 
    nombre:{
            type:String,
            enum:["Rodrigo", "Sofia", "Adolfo", "Africa"]},
    surname:{
            type:String},
    dateOfBirth:{
                type:Date},
    comments:{
            type:String,
            validate:[
                function(comments){
                    
                    return comments.length >=10;
                },
                'El comentario debe ser mas largo'],
                
                select:false
            },
    rol:{
        type:String
        }
});




module.exports = mongoose.model("Profile", profileSchema);