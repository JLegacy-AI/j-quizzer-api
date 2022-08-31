const express = require('express')
const userRoute =  express.Router();


userRoute.post('/',(req,res) => {
    global.databaseInstance.collection("users").insertOne({ ...req.body })
    res.send("User Post Connection Established");
});

userRoute.get('/',(req,res) => {
    res.send("User GET");
});

userRoute.put('/',(req,res) => {
    res.send("User PUT");
});

userRoute.delete('/',(req,res) => {
    res.send("User DELETE");
});

module.exports = userRoute;