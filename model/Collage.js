const {model , Schema} = require("mongoose");
const { Col } = require("react-bootstrap");


const CollageScheme = new Schema({
    
    name: {
        type: String,
        requird: [true , "Please give me your name"]
    },

     Student: [{
        type: Schema.Types.ObjectId ,
        ref:"Student"
     }],
     Instructor: [{
        type: Schema.Types.ObjectId ,
        ref:"Instructor"
     }],
     course:[{
        type: Schema.Types.ObjectId ,
        ref:"Course"
     }]

});


const Collage = model("Collage" , CollageScheme);

module.exports = Collage;

