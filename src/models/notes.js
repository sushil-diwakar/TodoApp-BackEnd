const mongoose = require('mongoose');
const {Schema} = require('mongoose');

//Notes Schema

const notesSchema = new Schema({
    id: {type: Number},
    title: {type:String, required:true},
    description: {type:String, required:true}
}, { versionKey: false });

const Notes = mongoose.model('Notes', notesSchema);
exports.Notes = Notes;