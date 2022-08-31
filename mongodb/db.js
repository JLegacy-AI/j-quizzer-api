//Mongoose Import
const mongoose = require('mongoose')

//Database Connection Variable
let dbConnection

//DB file Export one Connection Function and Other one is Get Function
module.exports = {
    //Database Connection Established Function
    connectToDB: (callBack) => {
                        mongoose.connect('mongodb+srv://m001-student:Mr_Jamal123@sandbox.7z1kdhb.mongodb.net/j-quizzer?retryWrites=true&w=majority')
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