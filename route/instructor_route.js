const express = require("express").Router();
const  Student = require("../model/Student");
const Instructor = require("../model/Instructor");
const coursee = require("../model/Courses");
const collagee = require("../model/Collage");


express.get("/:id" , async(req ,res) => {

    const allStudent = await Student.find();
    const allCourses = await coursee.find();
    const allCollage = await collagee.find();
    res.render("Instructor/create.ejs" , {allStudent : allStudent , allCourses: allCourses ,allCollage: allCollage });

});

express.post("/:idzz" , async (req ,res) => {
    console.log("This is the req.params " , req.params.id)
    console.log("This is the req.body in Student " , req.body)

        const{name , userName , collage  , Student , user , course  } = req.body
try{
    req.body.user = req.params.id
 
    const ref = await Instructor.create(req.body);
    const InstructorId  = ref._id

    try{
        await collagee.findByIdAndUpdate(collage,{ 
            
              $push: {   Instructor: InstructorId }
        })
        }
        catch(error) {
     console.log("Their is an error updating in collage , ", error)
        }
     
     
        try{
        await coursee.findByIdAndUpdate(course,{ 
         $push: {   Instructor: InstructorId }
     })} catch(error){console.log("Their is an error updating courses ," , error)}
     

    console.log("Sucessfully posted in Instructor")
}catch(error){console.log("Their is an error posting Instructor " , error)};

})

module.exports = express;


/*

  
    name: {
        type: String,
        requird: [true , "Please give me your name"]
    },
    userName:{
        type: String,
        required: [true , "Please give a username"]
    },
     collage: [{
         type: Schema.Types.ObjectId ,
        ref:"Collage"
     }],
     Student: [{
        type: Schema.Types.ObjectId ,
        ref:"Student"
     }],
     user : {
        type: Schema.Types.ObjectId ,
        ref:"User"
     },
     course:[{
        type: Schema.Types.ObjectId ,
        ref:"Course"
     }]


const CollageScheme = new Schema({
    
    name: {
        type: String,
        requird: [true , "Please give me your name"]
    },

     Student: {
        type: Schema.Types.ObjectId ,
        ref:"Student"
     },
     Instructor: {
        type: Schema.Types.ObjectId ,
        ref:"Instructor"
     },
     course:[{
        type: Schema.Types.ObjectId ,
        ref:"Course"
     }]

});

*/