const model = require('../models/notes');
const Notes = model.Notes;

exports.createNote = async (req,res)=>{
    const note = new Notes(req.body);
    note.save().then(()=>res.status(201).json(req.body)).catch((err)=>res.status(400).json(err))
}

exports.getAllNotes = async (req,res)=>{
    const notes = await Notes.find();
    res.json(notes);
}
exports.getOneNote = async (req,res)=>{
    const id = req.params.id;
    const note = await Notes.find({_id:id});
    res.json(note[0]);
}
exports.updateNote = async (req,res)=>{
    const id = req.params.id;
    const note = await Notes.findOneAndUpdate({_id:id},req.body,{new:true});
    res.status(201).json(note);
}
exports.deleteNote = async (req,res)=>{
    const id = req.params.id;
    const note = await Notes.findOneAndDelete({_id:id});
    res.status(201).json(note);
}
