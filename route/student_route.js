const express = require("express").Router();
const  Student = require("../model/Student");
const Instructor = require("../model/Instructor");
const course = require("../model/Courses")
const collage = require("../model/Collage")


express.get("/:id" , async(req ,res) => {

    const allInstructor = await Instructor.find();
    const allCourses = await course.find();
    const allCollages = await collage.find();
    res.render("Student/create.ejs" , {allInstructor : allInstructor , allCourses: allCourses , allCollages: allCollages});

});

express.post("/:id" , async (req ,res) => {
    console.log("This is the req.params " , req.params.id)
    console.log("This is the req.body in Student " , req.body)

try{
    req.body.user = req.params.id
 
    await Student.create(req.body);
    console.log("Sucessfully posted in Student")
}catch(error){console.log("Their is an error posting Student " , error)};

})

module.exports = express;