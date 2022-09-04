const express = require('express')
const userRoute =  express.Router();
const crypto = require('crypto')


userRoute.post('/',(req,res) => {

    global.databaseInstance.collection("users").insertOne({ ...req.body, verification: false, verification_hash: crypto.createHash('sha256', req.body.username).update('JLegacy-AI').digest('hex')})
    .then((result) => {
        res.send({status: true, result});
    }).catch((err) => {
        res.send({status: false, error: err});
    });
});

userRoute.post('/login',(req,res) => {
    global.databaseInstance.collection("users").findOne({ ...req.body }, (err, result) => {
        if(!err){
            res.send({ ...result , login:true})
            return
        }
        res.send({...err, login:false})
    });
});

userRoute.get('/:username/:verificationhash',(req, res) => {
    console.log(req.params)
    global.databaseInstance.collection('users').updateOne({ username: req.params.username, verification: false, verification_hash: req.params.verificationhash}, {'$set':{verification: true}}, (err, result) => {
        if(!err){
            res.send(result)
            return
        }
        res.send(result)
        return
    })
})

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