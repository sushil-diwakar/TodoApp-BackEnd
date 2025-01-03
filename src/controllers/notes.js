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
    try{
        const id = req.params.id;
        const note = await Notes.find({_id:id});
        if (!note) return res.status(404).json({ error: 'Note not found' });
        res.status(200).json(note[0]);
    } catch (err){
        res.status(500).json({ error: 'Error retrieving the code' });
    }
    
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
