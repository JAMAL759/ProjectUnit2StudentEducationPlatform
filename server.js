const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const methodOverride = require("method-override");
const connectDataBase = require("./config/db");
const userDatabase =   require("./route/user_route");
const studentDatabase = require("./route/student_route");
const instructorDatabase = require("./route/instructor_route");
const coursesDatabase = require("./route/courses_route");
const collageDatabase = require("./route/Collage_route");
const Home = require("./route/Home_route");
const cors = require("cors");
const session = require("express-session");
const isSignedIn = require("./middleware/isSignedIn");
const passUserToView = require("./middleware/passUsertoView");


connectDataBase();


app.use(express.static('public')); //all static files are in the public folder
app.use(express.urlencoded({ extended: false })); // this will allow us to see the data being sent in the POST or PUT
app.use(methodOverride("_method")); // Changes the method based on the ?_method
app.use(morgan("dev")) // logs the requests as they are sent to our sever in the terminal

app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
    })
  );

  app.use(passUserToView)

  app.use("/" , Home);

  app.use("/signUp" , userDatabase )
  
  app.use("/student" , studentDatabase )
  app.use("/instructor" , instructorDatabase)
  app.use("/course" , coursesDatabase)
  app.use("/collage" , collageDatabase);
  app.use(cors())

const port = process.env.PORT || 3000

app.listen(port , () => {
    console.log("I'm Listening")
})