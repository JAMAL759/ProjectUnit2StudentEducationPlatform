const router = require("express").Router();
const  Student = require("../model/Student");
const Instructor = require("../model/Instructor");
const coursee = require("../model/Courses")
const collagee = require("../model/Collage")
const Users = require("..//model/User");
const Collage = require("../model/Collage");
const isSignedIn = require("../middleware/isSignedIn");





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

router.get("/Profile" , async(req ,res) => {


    const allInstructor = await Instructor.find();
    const allCourses = await coursee.find();
    const allCollages = await collagee.find();
    const allUsers = await Users.find()
    const allStudent = await Student.find({user:req.session.user._id})

    const allStudentAvailable = await Student.find();
    console.log(allStudent)


    res.render("../views/Profile.ejs" , {allInstructor : allInstructor , allCourses: allCourses , allCollages: allCollages , allStudent: allStudent , allUsers : allUsers , allStudentAvailable:allStudentAvailable})




   
})

router.get("/Profile/:id" , async(req, res) => {

        try{ 

            const deletion = await Student.findByIdAndDelete(req.params.id)
            
        }catch(error){console.log("Their is an error in deleting , " ,error)}

})


// router.get("/Profile/update/:id" , async(req, res) => {

//     try{ 
    
//         const deletion = await Student.findByIdAndUpdate(req.params.id , {
                
//         })
        
//     }catch(error){console.log("Their is an error in deleting , " ,error)}

// })


router.get("/:id" ,isSignedIn, async(req ,res) => { 

    const allInstructor = await Instructor.find();
    const allCourses = await coursee.find();
    const allCollages = await collagee.find();
    const allUsers = await Users.find()
   // console.log("it)
   console.log("Hey their")
    res.render("Student/create.ejs" , {allInstructor : allInstructor , allCourses: allCourses , allCollages: allCollages , id: req.params.id , allUsers : allUsers});

});





router.get("/" ,isSignedIn, async(req ,res) => {

    const allInstructor = await Instructor.find();
    const allCourses = await coursee.find();
    const allCollages = await collagee.find();
    const allUsers = await Users.find()
   // console.log("it)
   console.log("Hey their")
    res.render("Student/create.ejs" , {allInstructor : allInstructor , allCourses: allCourses , allCollages: allCollages , id: req.params.id , allUsers : allUsers});

});




module.exports = router;
