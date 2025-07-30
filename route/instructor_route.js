const express = require("express").Router();
const  Student = require("../model/Student");
const Instructor = require("../model/Instructor");
const course = require("../model/Courses");
const collage = require("../model/Collage");


express.get("/:id" , async(req ,res) => {

    const allStudent = await Student.find();
    const allCourses = await course.find();
    const allCollage = await collage.find();
    res.render("Instructor/create.ejs" , {allStudent : allStudent , allCourses: allCourses ,allCollage: allCollage });

});

express.post("/:id" , async (req ,res) => {
    console.log("This is the req.params " , req.params.id)
    console.log("This is the req.body in Student " , req.body)

try{
    req.body.user = req.params.id
 
    await Instructor.create(req.body);
    console.log("Sucessfully posted in Instructor")
}catch(error){console.log("Their is an error posting Instructor " , error)};

})

module.exports = express;