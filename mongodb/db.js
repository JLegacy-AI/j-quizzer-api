//Mongoose Import
const mongoose = require('mongoose')

//Database Connection Variable
let dbConnection

//DB file Export one Connection Function and Other one is Get Function
module.exports = {
    //Database Connection Established Function
    connectToDB: (callBack) => {
                        mongoose.connect('mongodb://127.0.0.1:27017/j-quizzer?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4')
                        .then( (db) => {
                            dbConnection = db.connection
                            return callBack()
                        })
                        .catch( err => {
                            return callBack(err)
                        })
                        
                    },
    //Get function return Database Connection Object
    getDB: () => dbConnection
}