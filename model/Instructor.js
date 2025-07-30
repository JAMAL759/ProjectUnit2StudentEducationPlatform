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
     Student: {
        type: Schema.Types.ObjectId ,
        ref:"Student"
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


const Instructor = model("Instructor" , InstructorSchema);

module.exports = Instructor;

