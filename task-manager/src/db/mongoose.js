const mongoose= require("mongoose")
mongoose.connect(process.env.mongodb_url,{
     useNewUrlParser: true , 
     useUnifiedTopology: true ,
     useCreateIndex:true
})
//creating a model
// const User=mongoose.model('',{   //takes a string and properties as field
//          name:{
//               type: String
//          },
//          age:{
//              type:Number
//          }
// })

// const me= new User({
//     name:"Amit Shah",
//     age:53
// })

// me.save().then(()=>{
//     console.log(me)

// }).catch((error)=>{
//     console.log("error",error)
// })// retutn nothing but retyens a promise




// const me= new NewUser({
//     name:"mahesh",
//     email: "ndnd@mail.vom",
//     task_higlight:true,
//     password:"passwor0d"
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('error',error)
// })
