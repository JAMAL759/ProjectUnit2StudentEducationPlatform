const db = require("mongoose");
           require("dotenv")

async function connectDataBase() {

    try{
        await db.connect(process.env.DB_Connection)
        console.log("Connected to Database");

    } catch(error) {
        console.log("error connecting to database " , error)
    }
}


module.exports = connectDataBase;