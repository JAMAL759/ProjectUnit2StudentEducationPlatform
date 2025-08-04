const express = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");



express.get("/create" , (req , res) => {
    res.render("User/create.ejs" , {error : null});
});


express.post("/create" ,async(req , res) => {
   
 
    try{
        
        const{username , password} = req.body;

        if(!username || !password) {
            return res.render("../views/User/create.ejs", 
                {error : "All fields are required."});}

        
             const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(username)) {
               return res.render("../views/User/create.ejs", {
                    error: "Please enter a valid email address."
                                                });
                                     }
            

          if (password.length < 6) {
                   return res.render("../views/User/create.ejs", {
                   error: "Password must be at least 6 characters long."
                                                     });
                                   }

         const existingUser = await User.findOne({ username });
                if (existingUser) {
                     return res.render("../views/User/create.ejs", {
                     error: "Username is already taken."
                           
                                                      });
                                  }

        
         const hashedPassword = bcrypt.hashSync(password, 10);
                      const newUser = {
                               username,
                               password: hashedPassword,
                                      };
                          
        await User.create(newUser);
        console.log("done creating User");
        res.render("../views/ChooseRole/choose.ejs" , {user:username})


    }catch(error){console.log("Their is an error posting , " , error)}
});



express.get("/login" , (req, res) => {
    res.render("../views/User/login.ejs" , {error: null});
});




express.post("/login" , async (req, res) => {
 
    try{
        const foundUser = await User.findOne({username:req.body.username})
        console.log(req.body)
        const validPassword = bcrypt.compareSync(req.body.password,foundUser.password)
        console.log(validPassword)

        if(!validPassword){
            return res.send("Password is incorrect")
        }  
        // creates a session for our user once they are logged in
        req.session.user = {
            username: foundUser.username,
            _id: foundUser._id
        }

        res.redirect("/")

    }
    catch(error){

        console.log("Their is an error here , ", error)

    }



})









module.exports = express;