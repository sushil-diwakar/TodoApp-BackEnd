const express = require('express');
const router = express();
const notesController = require('../controllers/notes');

router.post('/add', notesController.createNote);
router.get('/getAllNotes', notesController.getAllNotes);
router.get('/:id', notesController.getOneNote);
router.patch('/:id', notesController.updateNote);
router.delete('/:id', notesController.deleteNote);

exports.router = router;
