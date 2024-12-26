const express = require('express');
const Connection = require('../Database/db.js');
const notesRouter = require('./routes/notes');

const server = express();
const PORT = 8000;

const cors = require('cors');
server.use(cors({
    origin: ["https://todo-frontend-4g5m.onrender.com", "https://vssut.in", "http://vssut.in"]
}));

//calling db connection function
Connection.connection();


//Body Parser
server.use(express.json());

//Middleware for attaching Router
server.use('/',notesRouter.router);

// Catch-all route for undefined endpoints
server.use('*', (req, res) => {
    res.status(404).json({
        error: 'Endpoint not found'
    });
});

server.listen(PORT,()=>{
    console.log(`Server is listening port ${PORT}`);
})
