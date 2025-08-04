const router = require("express").Router();
const  Student = require("../model/Student");
const Instructor = require("../model/Instructor");
const course = require("../model/Courses")
const collage = require("../model/Collage");




router.get("/" , async(request , response) => {

    const allInstructor = await Instructor.find();
    const allCourses = await course.find();
    const allCollages = await collage.find();
   // const allUsers = await Users.find();
   const allStudent = await Student.find();
    response.render("homeScreen/overall.ejs"  , {allInstructor : allInstructor , allCourses: allCourses , allCollages: allCollages ,allStudent: allStudent} )
})



router.get("/find/collegee" ,async (req , res) =>{

    try{
        console.log("college route jamal ",req.params.course)
        const Elementm =  await collage.find()
        // const ElementInstructor  = await Instructor.find({collage: req.params.collageId});
       
        // console.log(ElementInstructor)

        console.log(Elementm)
        res.json(Elementm)
    
    }
    catch(error){
        console.log('error in college route')
        console.log(error)
    }


})





router.get("/find/courses" ,async (req , res) =>{

    try{
        console.log("course route jamal ",req.params.course)
        const Elementm =  await course.find()
        console.log(Elementm)
        res.json(Elementm)
    
    }
    catch(error){
        console.log("error in fetching ",error)
    }


})


router.get("/find/Instructors" ,async (req , res) =>{

    try{
      
        const Elementm =  await Instructor.find()
        console.log(Elementm)
        res.json(Elementm)
    
    }
    catch(error){
        console.log("error in fetching ",error)
    }


})



router.get("/find/FindStudent" ,async (req , res) =>{

    try{
      
        const Elementm =  await Student.find()
        console.log(Elementm)
        res.json(Elementm)
    
    }
    catch(error){
        console.log("error in fetching ",error)
    }


})



module.exports = router;

/*


   try{
                const returnedValue = await axios.get("/find/collegee")
        //         const returnedValue2 = await axios.get("/course/find/Instructor/" + event.target.value)
        //         const returnedValue3 =  await axios.get("/course/find/Student/" + event.target.value)
             console.log("this is the returnedValue = ", returnedValue.data)
        //     console.log("this is the returnedValue2 = ", returnedValue2)
        //  console.log(returnedValue.data)
                
        


                

                returnedValue.data.forEach((obj) => {
                 //   if(isAppear == true ){

                 CoursesArray.push(obj._id)
                      const Instructorr =  document.createElement("div");
                      Instructorr.setAttribute("id" , "centerGridCard")
                      const headLine = document.createElement("h3")
                      headLine.textContent = obj.name;
                      headLine.setAttribute("id" , "headline")
                      Instructorr.appendChild(headLine)
                      const showcase = document.createElement("div")
                      showcase.setAttribute("id" , "buttonSection")
                     

                     // Instructorr.value = obj._id
                     // Instructorr.textContent = obj.name
                           optionInstructor.appendChild(Instructorr)
                           optionInstructor.appendChild(showcase)

                        //    optionCover.appendChild(Instructorr);
                        //    optionCover.appendChild(showcase);
                        
                        console.log("This is the isAppear in the false condition = ", isAppear)
             
                 
                })


                const returnedValue2 = await axios.get("/find/collagee")

                console.log("This is the returnedValue2 = " , returnedValue2.data)

                



            }catch(error) {
                console.log("Their is an error in ajax " , error)
            }

       

*/