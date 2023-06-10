const express = require('express');
const Connection = require('../Database/db.js');
const notesRouter = require('./routes/notes');

const server = express();
const PORT = 8000;

const cors = require('cors');
server.use(cors({
    origin: "https://todo-frontend-4g5m.onrender.com/"
}));

//calling db connection function
Connection.connection();


//Body Parser
server.use(express.json());

//Middleware for attaching Router
server.use('/',notesRouter.router);

server.listen(PORT,()=>{
    console.log(`Server is listening port ${PORT}`);
})