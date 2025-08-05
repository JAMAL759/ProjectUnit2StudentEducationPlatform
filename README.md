
# StudentEducation Project 

 This is a project that takes the essenece of the student management needs that he can do and find in his university career.

## Langauges that are used

  This  project uses three different languages:

  1. HTML5
  2. CSS3
  3. JavaScript

 _________________________________________________________________________________________________________________________________________________________________________________________________________________

  Two of the languages are frontend langauges, which are CSS3 and HTML5.

  HTML5 is an abbreviation for the Hyper text markup langauge where it provided the very essence of it's structure and the main skeleton.

  CSS3 is an abbreviation for cascading style sheet where it gives the skeleton an escalation of style and provides it with the ability to be responsive in multiple different screen sizes.
 _________________________________________________________________________________________________________________________________________________________________________________________________________________


 ## technologies that are used
  1. node.js
  2. express
  3. ejs
  4. morgan
  5. 5.mongodb
_________________________________________________________________________________________________________________________________________________________________________________________________________________

  the node.js is an important role for running the code as it's framework that helps the code to be executed. Furthermore, the express is another important fundemental framework that let us use the database called mongodb where
  it's a place that allows us to store information in a protected environemnt with the ability to load even after closing the website.

  Morgan is another technology that was used that allows us to interpert the middleware with ease. It was heavily used during this project.


  ## Getting Started

 The website site is a very simple platform

Your essentially starting with a login page and a sign up page , where the user can choose his role upon siginig up and upon doing so he has the ability to add courses depending on it's perspectivce collages that are 
shown during the selection. Fruthermore , when he finished sign or finished loging in he can go to the main page where it provides a general overview of the collagse and the students that are enrolled , furthermore , their does exist 
a collage making page that posts the information and updates the available data. The user could also delete what is appropriate in terms of users.
  _________________________________________________________________________________________________________________________________________________________________________________________________________________
  ## platform logic

  ###Collage route  

const express = require("express").Router();
const  Student = require("../model/Student");
const Instructor = require("../model/Instructor");
const course = require("../model/Courses")
const collage = require("../model/Collage");



express.get("/" , async(req ,res) => {

    const allInstructor = await Instructor.find();
    const allStudent = await Student.find();
    const allCollages = await collage.find();
    allCourses = await course.find();
    res.render("Collage/create.ejs" , {allInstructor : allInstructor , allStudent: allStudent , allCollages: allCollages ,  allCourses: allCourses});

});

express.post("/" , async (req ,res) => {
    console.log("This is the req.params " , req.params.id)
    console.log("This is the req.body in Student " , req.body)

try{
 
    await collage.create(req.body);
    console.log("Sucessfully posted in Courses")
}catch(error){console.log("Their is an error posting Courses " , error)};

})




module.exports = express;



In this route we fetch what is necessary for the  collages we also provide all the information he needs for the ejs where he has access to all the instructor, student , courses , and collages.
It has two main functionalities , one is the get and the post , see in the get we simply render the page , howevever, the post is essentially for fetching the information processing it in the database 


### course route (main route)


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
      //  console.log("course route jamal ",req.params.course)
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


router.get("/find/collegee/" ,async (req , res) =>{

    try{
        console.log("course route jamal ",req.params.course)
        const Elementm =  await collage.find()
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
      //  console.log("course route jamal ",req.params.course)
 
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
      //  console.log("course route jamal ",req.params.course)
 
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
       // console.log("course route jamal ",req.params.course)
        const Elementm =  await course.findById(req.params.course)
        console.log(Elementm)
        res.send( Elementm)
    
    }
    catch(error){
        console.log(error)
    }


})

router.get("/find/courses" ,async (req , res) =>{

    try{
        console.log("course route jamal ",req.params.course)
        const Elementm =  await course.findById()
        console.log(Elementm)
        res.send( Elementm)
    
    }
    catch(error){
        console.log("error in fetching ",error)
    }


})


module.exports = router;



This function is the most queried route , where it provides all the necessary filtering of the database and for the ajax prupose 



### course ejs file 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    

    <form action="/course" method="post">
        <label for="name"> name  </label>
        <input name="name" id="name" type="text">

        <label for="CourseCode"> course Code </label>
        <input name="CourseCode" id="CourseCode" type="text" >

        <label for="collage"> choose your collage </label>
        <select  multiple="multiple"  name="collage" id="collage" >
            <option value= "null"> </option>
            <% allCollages.forEach( (obj)=> { %>

                <option value="<%= obj.id %>"> <%= obj.name %></option>
              
              
                    <% }) %>
        </select>

        <label for="Instructor"> choose the instructor: </label>
        <select  multiple="multiple" name="Instructor" id="Instructor"> 
         
        </select>

       
        <input name="user" id="user" type="text" hidden >


        <label for="Student"> Choose your Students: </label>
        <select  multiple="multiple" name="Student" id="Student"> 
       
        </select>

        <button> Submit</button>
    </form>
    
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.2.1/axios.min.js"></script>


    <script>
        console.log("I'm right here ")
        const optionCollege = document.querySelector("#collage")
        const optionInstructor = document.querySelector("#Instructor")
        const optionStudent = document.querySelector("#Student")
        let InstructorArray = []
        let isAppear = false

        optionCollege.addEventListener("change",async(event)=>{

            try{
            optionInstructor.childNodes.forEach((event)=>{
                
                optionInstructor.removeChild(event);
            })
        } catch(error) {
            console.log("Their is an error in removing " , error)
        }


        try{
            optionStudent.childNodes.forEach((event)=>{
                    console.log(event)
                optionStudent.removeChild(event);
            })
        } catch(error) {
            console.log("Their is an error in removing " , error)
        }


            try{
                const returnedValue = await axios.get("/course/find/college/" + event.target.value)
                const returnedValue2 = await axios.get("/course/find/Instructor/" + event.target.value)
                const returnedValue3 =  await axios.get("/course/find/Student/" + event.target.value)
            console.log("this is the returnedValue = ", returnedValue)
            console.log("this is the returnedValue2 = ", returnedValue2)
         console.log(returnedValue.data)
                
        


                

                returnedValue2.data.forEach((obj) => {
                 //   if(isAppear == true ){
                      const Instructorr =  document.createElement("option");
                      Instructorr.value = obj._id
                      Instructorr.textContent = obj.name
                           optionInstructor.appendChild(Instructorr)
                        
                        console.log("This is the isAppear in the false condition = ", isAppear)
             
                 
                })


                returnedValue3.data.forEach((obj) => {
                 //   if(isAppear == true ){
                      const Instructorr =  document.createElement("option");
                      Instructorr.value = obj._id
                      Instructorr.textContent = obj.name
                           optionStudent.appendChild(Instructorr)
           
                 
                })


                
           
          //    isAppear = !isAppear
                console.log(" This is the is appear  = " , isAppear);
            }catch(error) {
                console.log("Their is an error in ajax " , error)
            }
           
        })


        const StudentSelect = document.querySelector("#course")


    </script>

</body>
</html>

This files is to send information to the database using the form , however, it uses axis that sends information to the other side of the page where it takes the information and quries the database , this than goes back to the ejs file for another query.












## How to use ?

  Simply install the code on your computer by tapping the code button , this will give you on option on either 
  you want a zip file or to clone it, in your computer.





## Conclusion 
This platform is a simple implementation of CRUD functionality that embodies the necessary action to be taken, it also utilizes the axis tech.
