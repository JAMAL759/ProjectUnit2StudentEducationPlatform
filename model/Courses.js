const {model , Schema} = require("mongoose");


const CoursesSchema = new Schema({
    
    name: {
        type: String,
        requird: [true , "Please give me your name"]
    },
    CourseCode:{
        type: String,
        required: [true , "Please give a username"]
    },
     collage: {
         type: Schema.Types.ObjectId ,
        ref:"Collage"
     },
     Instructor: [{
        type: Schema.Types.ObjectId ,
        ref:"Instructor"
     }],
     Student: [{
      type: Schema.Types.ObjectId ,
      ref:"Student"
   }]

});


const Course = model("Course" , CoursesSchema);

module.exports = Course;

