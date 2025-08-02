const router = require("express").Router();
const  Student = require("../model/Student");
const Instructor = require("../model/Instructor");
const course = require("../model/Courses")
const collage = require("../model/Collage");



router.get("/" , async(req ,res) => {

    const allInstructor = await Instructor.find();
    const allStudent = await Student.find();
    const allCollages = await collage.find()
    res.render("Courses/create.ejs" , {allInstructor : allInstructor , allStudent: allStudent , allCollages: allCollages});

});

router.post("/" , async (req ,res) => {
    console.log("This is the req.params " , req.params.id)
    console.log("This is the req.body in Student " , req.body)

try{
 
    await course.create(req.body);
    console.log("Sucessfully posted in Courses")
}catch(error){console.log("Their is an error posting Courses " , error)};

})


// this route returs all the courses that have the college id in the params
router.get("/find/college/:collageId" ,async (req , res) =>{

    try{
        console.log("course route jamal ",req.params.course)
        const Elementm =  await course.find({collage:req.params.collageId})
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


// all the instructors for a courseId that is provided
router.get("/find/course/:courseId" ,async (req , res) =>{

    try{
        console.log("course route jamal ",req.params.courseId)
        const Elementm =  await Instructor.find({couraw:req.params.courseId})
        console.log(Elementm)
        res.send( Elementm)
    
    }
    catch(error){
        console.log(error)
    }


})


router.get("/find/:course" ,async (req , res) =>{

    try{
        console.log("course route jamal ",req.params.course)
        const Elementm =  await course.findById(req.params.course)
        console.log(Elementm)
        res.send( Elementm)
    
    }
    catch(error){
        console.log(error)
    }


})

module.exports = router;