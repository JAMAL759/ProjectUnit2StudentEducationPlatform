const {model , Schema} = require("mongoose");


const InstructorSchema = new Schema({
    
    name: {
        type: String,
        requird: [true , "Please give me your name"]
    },
    userName:{
        type: String,
        required: [true , "Please give a username"]
    },
     collage: {
         type: Schema.Types.ObjectId ,
        ref:"Collage"
     },
     Instructor: {
        type: Schema.Types.ObjectId ,
        ref:"Instructor"
     },
     user : {
        type: Schema.Types.ObjectId ,
        ref:"User"
     },
     course:{
        type: Schema.Types.ObjectId ,
        ref:"Course"
     }

});


const Student = model("Student" , InstructorSchema);

module.exports = Student;

