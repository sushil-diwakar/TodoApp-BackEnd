const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const DB_URI = process.env.DB_URI;

//Mongoose db connection 
const connection=()=>{
    const uri= DB_URI;
    mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(()=>console.log('connection done')).catch('error')
}

exports.connection=connection;