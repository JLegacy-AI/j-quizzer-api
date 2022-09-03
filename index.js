const express = require('express');
const bodyParse = require('body-parser')
const cors = require('cors')
const userRoute = require('./Routes/User');
const app = express();
const {connectToDB, getDB} = require('./mongodb/db')
const PORT = 3001

//This is for Parsing or Allowing API to work in JSON String
app.use(bodyParse.json())
app.use(cors())

connectToDB( (error => {
  //If there is no error Start API to Listen on Corrospinding Port
  if(!error){
    app.listen(PORT, ()=>{
      console.log(`Database Connection Established\nNow, Server Start Listening on port: ${PORT}`)  
    })
    global.databaseInstance = getDB()
  } else 
    console.error(error);
}))

// USER Routes
app.use('/user',userRoute);