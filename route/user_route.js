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








module.exports = express;