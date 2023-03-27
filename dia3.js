const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://rebecarello:RbkFullStack9@cluster0.tg30lxp.mongodb.net/mongodia3',
                         {useNewUrlParser:false, useUnifiedTopology:false})

const TeachersSchema = new mongoose.Schema({

    teacher_first_Name: String,
    teacher_last_Name: String,
    

  });
 
  
  const marksSchema = new mongoose.Schema({

    date:Date,
    mark:Number,
    student_first_name: String,
    student_last_name: String,
    group_name:String,
    subject_name:String,
    teachers:[TeachersSchema]
  
  });
  

let Teachers = mongoose.model('Teachers', TeachersSchema);
let Marks = mongoose.model('Marks', marksSchema)

//   Teachers

    
      const teacher1 = { teacher_first_Name: 'Juan', 
                        teacher_last_Name: 'Pérez' };

      const teacher2 = { teacher_first_Name: 'María', 
                         teacher_last_Name: 'García' };

      const teacher3 = { teacher_first_Name: 'Pedro', 
                         teacher_last_Name:'Rodríguez' };

      const teacher4 = { teacher_first_Name: 'Ana',
                          teacher_last_Name: 'López' };
      

  //INSERTMANY TEACHERS

Teachers.insertMany([teacher1, teacher2, teacher3, teacher4])
  .then(function(docs) {
    console.log("Teachers insertados:", docs.length);
  })

  .catch((err)=>
  {
    console.log(err);
  })

////MARKS/////

let marks1 =  new Marks({

  date:2020-08-12,
  mark:7,
  student_first_name: "Rocio",
  student_last_name: "Ramirez",
  group_name:"a",
  subject_name:"Matematicas",
  teachers:[teacher1, teacher2]
 
})

let marks2 =  new Marks({

  date:2022-08-05,
  mark:9,
  student_first_name: "Lorenzo",
  student_last_name: "Acosta",
  group_name:"b",
  subject_name:"Lengua",
  teachers:[teacher3, teacher4]
 
})

let marks3 =  new Marks({

  date:2020-10-04,
  mark:7,
  student_first_name: "Rocio",
  student_last_name: "Ramirez",
  group_name:"c",
  subject_name:"Historia",
  teachers:[teacher1, teacher2]
 
})

let marks4 =  new Marks({

  date:2022-02-03,
  mark:9,
  student_first_name: "Lorenzo",
  student_last_name: "Acosta",
  group_name:"c",
  subject_name:"Tecnologia",
  teachers:[teacher3, teacher4]
 
})


let marks5 =  new Marks({

  date:2023-02-01,
  mark:6,
  student_first_name: "Pedro",
  student_last_name: "Pascal",
  group_name:"a",
  subject_name:"Ingles",
  teachers:[teacher1, teacher2]
 
})

let marks6 =  new Marks({

  date:2023-02-02,
  mark:5,
  student_first_name: "Ruben",
  student_last_name: "Pascual",
  group_name:"b",
  subject_name:"Frances",
  teachers:[teacher3, teacher4]
 
})

let marks7 =  new Marks({

  date:2020-10-04,
  mark:7,
  student_first_name: "Patricia",
  student_last_name: "Suarez",
  group_name:"a",
  subject_name:"Biologia",
  teachers:[teacher1, teacher2]
 
})

let marks8 =  new Marks({

  date:2023-02-03,
  mark:9,
  student_first_name: "Nadya",
  student_last_name: "Moreno",
  group_name:"b",
  subject_name:"Quimica",
  teachers:[teacher3, teacher4]
 
})
let marks9 =  new Marks({

  date:2020-10-04,
  mark:7,
  student_first_name: "Africa",
  student_last_name: "Mendez",
  group_name:"a",
  subject_name:"Filosofia",
  teachers:[teacher1, teacher2]
 
})

let marks10 =  new Marks({

  date:2022-11-08,
  mark:8,
  student_first_name: "Diego",
  student_last_name: "Maldonado",
  group_name:"c",
  subject_name:"Informatica",
  teachers:[teacher3, teacher4]
 
})

Marks.insertMany([marks1, marks2, marks3, marks4, marks5, marks6, marks7, marks8,  marks9, marks10])
  .then(function(docs) {
    console.log("Marks insertadas:", docs.length);
  })
  .catch(function(err) {
    console.error(err);
  });

// Calcular la nota media de los alumnos de una asignatura concreta.

// Marks.aggregate([{ $match: {subject_name: "Historia"}}, 
//                   {$group: {_id: null, avgNotas: { $avg: "$mark"}}}])
//   .then(result => {
//     const avgNota = result[0].avgNotas; 
//     console.log(`La nota media es: ${avgNota}`);
//   })
//   .catch(error => {
//     console.error(error);
//   });

  // Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.

  
// Marks.aggregate([{$group: { _id: null, count: {$sum: 1}}}])

//   .then(result => {
//     console.log("Alumnos totales: " + result[0].count); 
//   })
//   .catch(err => {
//     console.log(err);
//   });

  // Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.

// Marks.find({}, 'student_first_name student_last_name')
//   .then((students) => {
//     console.log(students);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

  //Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.

//  Marks.find({})
//   .then((marks) => {
//     marks.forEach((mark) => {
//       mark.teachers.forEach((teacher) => {
//         console.log(teacher.teacher_first_Name, teacher.teacher_last_Name);
//       });
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.

// Marks.aggregate([
 
//   {$group: {
//       _id: "$group_name",
//       totalStudents: {$sum: 1}
//     }
//   },
//   {$sort: {_id: -1}}
// ])
// .then((results) => {
//   results.forEach((result) => {
//     console.log(result._id, result.totalStudents);
//   });
// })
// .catch((error) => {
//   console.log(error);
// });


//Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.

// Marks.aggregate([
//   {
//     $group: {
//       _id: "$subject_name",
//       avgMark: { $avg: "$mark" }
//     }},
//   {$match: {avgMark: {$gt: 5}}},
  
//   {$sort: {avgMark: -1}},{$limit: 5}
// ])
// .then((results) => {
//   results.forEach((result) => {
//     console.log(result._id, result.avgMark);
//   });
// })
// .catch((error) => {
//   console.log(error);
// });


//Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.


// Marks.aggregate([
  
//   {$unwind: "$teachers"},
//   {$group: {
//       _id: "$subject_name",
//       num_teachers: { $sum: 1 }
//     }}
// ])
// .then((result) => {
//   console.log(result);
// })
// .catch((error) => {
//   console.log(error);
// });


//Obtén el nombre, apellido y la nota de los alumnos que tengan una nota mayor de 8 o la nota
//tenga fecha del año pasado o anterior


// const year = new Date();
// year.setFullYear(year.getFullYear() - 1);

// Marks.find({
//   $or: [
//     { mark: { $gt: 8 } },
//     { date: { $lt: year } }
//   ]
// }, 'student_first_name student_last_name mark')
// .then((result) => {
//   console.log(result);
// })
// .catch((error) => {
//   console.log(error);
// });


//Obtén la media de las notas que se han dado en el último año por asignatura.

// const lastYear = new Date(2020-12-01);
// lastYear.setFullYear(lastYear.getFullYear() - 1);

// Marks.aggregate([
//   {
//     $match: {
//       date: { $gte: lastYear }
//     }
//   },
//   {
//     $group: {
//       _id: "$subject_name",
//       avgMark: { $avg: "$mark" }
//     }
//   }
// ]).then(result => {
//   result.forEach(subject => {
//     console.log(subject._id + ': ' + subject.avgMark);
//   });
// }).catch(error => {
//   console.error(error);
// });


//Obtén la media aritmética de las notas que se han dado en el último año por nombre de alumno.

// const year = new Date(2023-01-01);
// year.setFullYear(year.getFullYear() - 1); 

// Marks.aggregate([
//   { $match: { date: { $gte: year } } },
//   { $group: { _id: { first_name: "$student_first_name", last_name: "$student_last_name" }, avg_mark: { $avg: "$mark" } } }
// ])
//   .then(result => {
//     result.forEach(obj => console.log(obj));
//   })
//   .catch(err => {
//     console.log(err);
//   });


//Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno cuyo profesor
//sea uno que elijáis

const teacher = "Juan";

const aggregation = Marks.aggregate([
  { $match: { "teachers.teacher_first_Name": teacher} },
  {
    $group: {
      _id: { student_first_name: "$student_first_name", student_last_name: "$student_last_name" },
      num_subjects: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      student_first_name: "$_id.student_first_name",
      student_last_name: "$_id.student_last_name",
      num_subjects: 1
    }
  }
]);

aggregation.exec()
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.log(err);
  });



