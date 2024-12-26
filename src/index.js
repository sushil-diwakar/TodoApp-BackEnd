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
server.use((req, res, next) => {
    const err = new Error('Endpoint not found');
    err.status = 404;
    next(err);
});

// Error handling middleware
server.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
        status: err.status || 500
    });
});

server.listen(PORT,()=>{
    console.log(`Server is listening port ${PORT}`);
})
