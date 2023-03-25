let mongoose = require("mongoose");
let User = require("./userSchema");
let Profile =  require("./profileSchema");
let Credentials = require ("./credentialsSchema");

mongoose.connect('mongodb+srv://rebecarello:RbkFullStack9@cluster0.tg30lxp.mongodb.net/codenotch',

                  {useNewUrlParser:false, useUnifiedTopology:false})

// let userDocument = new User ({

//     login: "roberto123",
//     password: "12345678",           

// })


// userDocument.save()
// .then((data)=>
// {
//   console.log(data);
// })
// .catch((err)=>
// {
//     console.log(err);
// })


// let userProf = new Profile ({

//     nombre:"Adolfo",
//     surname:"Dominguez",
//     dateOfBirth:"2015-02-05",
//     comments:"Ya es primavera en ECI",
//     rol:"admin"
// })

// userProf.save()
// .then((data)=>
// {
//   console.log(data);
// })
// .catch((err)=>
// {
//     console.log(err);
// })

let userCred = new Credentials ({

    
    address:"Calle Real 20, Madrid 28050",
    phone:"635297456",
    email:"adolfo@gmail.com"

})

userCred.save()
.then((data) =>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})