const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://rebecarello:RbkFullStack9@cluster0.tg30lxp.mongodb.net/codenotch',
                         {useNewUrlParser:false, useUnifiedTopology:false})

////ADD SCHEMAS/////

////TEACHERS/////
const teachersSchema = new mongoose.Schema({

    firstName: String,
    lastName: String,
    groups: [String],

  });
  let Teachers = mongoose.model('Teachers', teachersSchema, "Teachers");

////SUBJECTS/////
const subjectsSchema = new mongoose.Schema({
 
    title:String,
    teachers: [teachersSchema],
    

});
let Subjects = mongoose.model('Subjects', subjectsSchema, "Subjects");

////MARKS/////

const marksSchema= new mongoose.Schema({
 
    date:Date,
    mark:Number,
    subjects:subjectsSchema,
});
let Marks = mongoose.model('Marks', marksSchema, "Marks");

////STUDENTS/////

const studentsSchema = new mongoose.Schema({
 
    firstName:String,
    lastName:String,
    marks:[marksSchema],

});

let Students = mongoose.model('Students', studentsSchema, "Students");



////ADD TEACHERS/////

let teacher1 = new Teachers ({
   
    firstName: "Maria",
    lastName: "Landa",
    groups: ["a", "b"],
})

let teacher2 = new Teachers({
    
    firstName: "Andres",
    lastName: "Rubio",
    groups: ["c", "d"],
})

let teacher3 = new Teachers({
    
    firstName: "Laura",
    lastName: "Gonzalez",
    groups: ["e", "f"],
})

let teachert4 = new Teachers({
    
    firstName: "Pepa",
    lastName: "Rodriguez",
    groups: ["c", "e"],
    
})


teacher1.save()
.then((result)=>
{
    console.log("Teacher1 guardado");
    return teacher2.save()
})
.then((result)=>
{
    console.log("Teacher2 guardado");
    return teacher3.save()
})
.then((result)=>
{
    console.log("Teacher3 guardado");
    return teachert4.save()
})
.then((result)=>
{
    console.log("Teachert4 guardado");
})
.catch((error)=>
{
    console.log(error);
})


// ////ADD SUBJECTS/////

let subjects1 = new Subjects({ 

    title: "Lengua",
    teachers: [teacher3, teachert4] 
})

let subjects2 = new Subjects({ 

    title: "Ingles",
    teachers: [teacher2, teacher1]
 })

let subjects3 = new Subjects({ 

    title: "Matematicas", 
    teachers: [teacher3, teacher1] 
})


let subjects4 = new Subjects({ 

    title: "Tecnologia", 
    teachers: [teacher2, teachert4] 
})



subjects1.save()
.then((result)=>
{
    console.log("Subjects1 guardado");
    return subjects2.save()
})
.then((result)=>
{
    console.log("Subjects2 guardado");
    return subjects3.save()
})
.then((result)=>
{
    console.log("Subjects3 guardado");
    return subjects4.save()
})
.then((result)=>
{
    console.log("Subjects4 guardado");
})
.catch((error)=>
{
    console.log(error);
})

// ////ADD MARKS/////

let marks1 = new Marks({ 

    date: "2023-04-01", 
    mark: 9, 
    subjects: subjects3 })

let marks2 = new Marks({ 

    date: "2022-8-5", 
    mark: 6, 
    subjects: subjects2 })

let marks3 = new Marks({ 

    date: "2021-12-12", 
    mark: 7, 
    subjects: subjects1 })

let marks4 = new Marks({ 

    date: "2022-01-08", 
    mark: 10, 
    subjects: subjects4 })

    marks1.save()
    .then((result)=>
    {
        console.log("Marks1 guardado");
        return marks2.save()
    })
    .then((result)=>
    {
        console.log("Marks2 guardado");
        return marks3.save()
    })
    .then((result)=>
    {
        console.log("Marks3 guardado");
        return marks4.save()
    })
    .then((result)=>
    {
        console.log("Marks4 guardado");
    })
    .catch((error)=>
    {
        console.log(error);
    }) 
    
    
//     ////ADD STUDENTS/////

    let Students1 = new Students ({
   
        firstName: "Maria",
        lastName: "Landa",
        marks:[marks1, marks2],
    });
    
    let Students2 = new Students({
        
        firstName: "Andres",
        lastName: "Rubio",
        marks:[marks3, marks4],
    });
    
    let Students3 = new Students({
        
        firstName: "Laura",
        lastName: "Gonzalez",
        marks:[marks1, marks3],
    })
    
    let Students4 = new Students({
        
        firstName: "Pepa",
        lastName: "Rodriguez",
        marks:[marks2, marks4],
        
    })
    
    
    Students1.save()
    .then((result)=>
    {
        console.log("Students1 guardado");
        return Students2.save()
    })
    .then((result)=>
    {
        console.log("Students2 guardado");
        return Students3.save()
    })
    .then((result)=>
    {
        console.log("Students3 guardado");
        return Students4.save()
    })
    .then((result)=>
    {
        console.log("Students4 guardado");
    })
    .catch((error)=>
    {
        console.log(error);
    })
    

    ////////////

    // Mostrar por consola: Todas las notas de un alumno.

    // Students.find({firstName:"Laura"})
    // .then((estudiante)=>{
       
    //    return (estudiante);
    // })
    // .then((notas)=>{

    //     console.log(notas.marks);
    // })
    

    ////Todas las notas de un alumno////
    Students.findOne({ firstName: "Laura" })
  .then((student) => {
    student.marks.forEach((mark) => { 
        console.log(mark.mark);
    })});

    // Todos las asignaturas de un alumno
    Students.findOne({ firstName: "Laura" })
    .then((student) => {
      student.marks.forEach((mark) => { 
          console.log(mark.subjects.title);
      })});

    //   Todos los profesores de un alumno
    Students.findOne({ firstName: "Laura" })
    .then((student) => {
      student.marks.forEach((mark) => { 
        console.log(mark.subjects); 
      });
      return student;
    })
    .then((student) => {
      const teachers = student.m
      console.log(teachers);
    })
  