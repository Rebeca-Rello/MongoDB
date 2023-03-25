const mongoose = require ("mongoose");
let photo = require("./photosSchema");


mongoose.connect('mongodb+srv://rebecarello:RbkFullStack9@cluster0.tg30lxp.mongodb.net/codenotch',

                  {useNewUrlParser:false, useUnifiedTopology:false})


//Subida de fotos:
// Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos

// let photoDocument = new photo ({

    
//     nombre:"Lorenzo",
//     url:"dfdewfewew",
//     titulo:"Gatito Kawaii",
//     descripción:"Pequeño gatito de origen japones"

// })

// photoDocument.save()
// .then((data) =>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


// let photoDocument2 = new photo ({

    
//     nombre:"Lorenzo",
//     url:"dfdsfasd",
//     titulo:"Danza de gaviotas",
//     descripción:"Foto de la Bahia"

// })

// photoDocument2.save()
// .then((data) =>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })


// Obtener fotos:
// Dado un usuario obtener todas sus fotos.


// photo.find({nombre:"Lorenzo"})
// .then((user) =>
//     {
//         console.log(user);
//         })
//     .catch((error)=>
//     {
//         console.log(error);
//     });




// Modificar fotos:
// Dado el titulo de una foto y una descripción modificar su descripcion


// photo.updateOne({"$and":[{nombre:"Lorenzo"},{descripción:"Foto de la Bahia"}]},
//                         {descripción:"Gaviotas alegres"} )
// .then((dato) =>
//     {
//         console.log(dato);
//         })
//     .catch((error)=>
//     {
//         console.log(error);
//     });


// Eliminar Foto:
// Dado un usuario y un titulo de foto eliminar su foto


// photo.deleteOne({"$and":[{nombre:"Lorenzo"},{titulo:"Danza de gaviotas"}]})
// .then(function(items) 
//     {
//         console.log("Foto correctamente eliminada");
//         console.log(items);
//         })
//     .catch(function()
//     {
//         console.log(error);
//     });

// Eliminar todas las Fotos:
// Dado un usuario eliminar todas sus fotos.

// / photo.deleteMany({nombre:"Lorenzo"})
// .then(function(items) 
//     {
//         console.log("Fotos correctamente eliminadas");
//         console.log(items);
//         })
//     .catch(function()
//     {
//         console.log(error);
//     });