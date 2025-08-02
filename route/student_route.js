const router = require("express").Router();
const  Student = require("../model/Student");
const Instructor = require("../model/Instructor");
const coursee = require("../model/Courses")
const collagee = require("../model/Collage")
const Users = require("..//model/User");
const Collage = require("../model/Collage");

router.get("/:id" , async(req ,res) => {

    const allInstructor = await Instructor.find();
    const allCourses = await coursee.find();
    const allCollages = await collagee.find();
    const allUsers = await Users.find()
   // console.log("it)
   console.log("Hey their")
    res.render("Student/create.ejs" , {allInstructor : allInstructor , allCourses: allCourses , allCollages: allCollages , id: req.params.id , allUsers : allUsers});

});

router.post("/" , async (req ,res) => {

    console.log("This is the req.body in Student " , req.body)
    const{name, username , collage , Instructor , user , course} = req.body;

try{

  
   const info =  await Student.create(req.body);
   let StudentID = info._id;
   //let InstructorID = Instructor._id;
   let cours = course



   try{
   await collagee.findByIdAndUpdate(collage,{ 
       
         $push: {   Student: StudentID }
   })
   }
   catch(error) {
console.log("Their is an error updating in collage , ", error)
   }


   try{
   await coursee.findByIdAndUpdate(cours,{ 
    $push: {   Student: StudentID }
})} catch(error){console.log("Their is an error updating courses ," , error)}



    console.log("Sucessfully posted in Student")
}catch(error){console.log("Their is an error posting Student " , error)};

})

router.get("/find/college/:collageId" ,async (req , res) =>{

    try{
        console.log("course route jamal ",req.params.course)
        const Elementm =  await coursee.find({collage:req.params.collageId})
        // const ElementInstructor  = await Instructor.find({collage: req.params.collageId});
       
        // console.log(ElementInstructor)

        console.log(Elementm)
        res.send( Elementm)
    
    }
    catch(error){
        console.log(error)
    }


})


router.get("/find/Instructor/:collageId" ,async (req , res) =>{

    try{
        console.log("course route jamal ",req.params.course)
 
        const ElementInstructor  = await Instructor.find({collage: req.params.collageId});
       
        console.log(ElementInstructor)


        res.send( ElementInstructor)
    
    }
    catch(error){
        console.log(error)
    }


})


router.get("/find/Student/:collageId" ,async (req , res) =>{

    try{
        console.log("course route jamal ",req.params.course)
 
        const ElementStudent  = await Student.find({collage: req.params.collageId});
       
        console.log(ElementStudent)


        res.send( ElementStudent)
    
    }
    catch(error){
        console.log(error)
    }


})


module.exports = router;

/*


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
     Instructor: {
        type: Schema.Types.ObjectId ,
        ref:"Instructor"
     },
     user : {
        type: Schema.Types.ObjectId ,
        ref:"User"
     },
     course:[{
        type: Schema.Types.ObjectId ,
        ref:"Course"
     }]








*/