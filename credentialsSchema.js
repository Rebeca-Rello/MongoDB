const mongoose = require ("mongoose");

const credentialsSchema = new mongoose.Schema({
 
    address:{
        type:mongoose.Schema.Types.Mixed
        },
    phone:{
        type:Number
        },
    email:{
        type:String}
});

credentialsSchema.pre('save', function(next){
    
    console.log('Middleware de entrada');
if(this.address.length > 20){

    console.log("Se ha añadido la direccion");
    next();
}
else{
    console.log("Debes añadir mas datos a la dirección");
}
})


module.exports = mongoose.model("Credentials", credentialsSchema);