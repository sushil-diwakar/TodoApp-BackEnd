const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const DB_URI = process.env.DB_URI;

//Mongoose db connection 
const connection=()=>{
    const uri= DB_URI;
    mongoose.connect(`mongodb+srv://sushildiwakar:Hello9453@cluster0.a9mglw0.mongodb.net/NotesApp?retryWrites=true&w=majority`,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(()=>console.log('connection done')).catch('error')
}

exports.connection=connection;