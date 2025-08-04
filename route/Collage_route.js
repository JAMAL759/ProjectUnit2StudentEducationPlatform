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