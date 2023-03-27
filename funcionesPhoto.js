const mongoose = require ("mongoose");
let photo = require("./photosSchema");


mongoose.connect('mongodb+srv://rebecarello:RbkFullStack9@cluster0.tg30lxp.mongodb.net/codenotch',

                  {useNewUrlParser:false, useUnifiedTopology:false})

// Subida de fotos:
// Dado un usuario, url de foto, titulo y descripción se debe guardar en la colección ‘photos’

// function subirFoto(photo) {
//     let photoDocument = new photo ({
//       nombre:"Merida",
//       url:"Jarenaguer",
//       titulo:"Pelusas bajo la cama",
//       descripción:"Un suelo lleno de pelusas"
//     });
  
//     photoDocument.save()
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
  
//   subirFoto(photo);
  
// Obtener fotos:
// Dado un usuario obtener todas sus fotos.

// function buscarUsuario(nombre) {
//     photo.find({nombre: nombre})
//       .then((fotos) => {
//         console.log(fotos);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
  
//   buscarUsuario("Lorenzo");
 

// Modificar fotos:
// Dado el titulo de una foto y una descripción modificar su descripcion


// function actualizarDescripcion(titulo, descripcion, nuevaDescripcion) {
//     photo.updateOne(
//         {titulo: titulo, descripción: descripcion},
//         {$set: {descripción: nuevaDescripcion}}
//     )
//     .then((dato) => {
//         console.log("Descripción actualizada correctamente");
//         console.log(dato);
//     })
//     .catch((error) => {
//         console.log("Error al actualizar la descripción");
//         console.log(error);
//     });
// }
// actualizarDescripcion("Pelusas bajo la cama", "Un suelo lleno de pelusas", "Nueva descripción ");



// Eliminar Foto:
// Dado un usuario y un titulo de foto eliminar su foto

// function eliminarFoto(nombre, titulo) {
//     photo.deleteOne({"$and": [{nombre: nombre}, {titulo: titulo}]})
//     .then(function(resp) {
//       console.log("Foto correctamente eliminada");
//       console.log(resp);
//     })
//     .catch(function() {
//       console.log("Error al eliminar la foto");
//     });
//   }

//   eliminarFoto("Merida", "Pelusas bajo la cama");



// Eliminar todas las Fotos:
// Dado un usuario eliminar todas sus fotos.

// function eliminarFotosPorNombre(nombre) {
//     photo.deleteMany({nombre: nombre})
//     .then(function(resp) {
//       console.log("Fotos correctamente eliminadas");
//       console.log(resp);
//     })
//     .catch(function() {
//       console.log("Error al eliminar las fotos");
//     });
//   }
//   eliminarFotosPorNombre("Lorenzo");
  
