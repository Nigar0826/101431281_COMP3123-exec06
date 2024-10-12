const express = require('express');
const noteModel = require('../models/NotesModel.js');
const app = express();
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
module.exports = (app) => {
    // Create a new Note
    app.post('/notes', (req, res) => {
        if (!req.body.noteDescription) {
            return res.status(400).send({
                message: "Note content cannot be empty"
            });
        }
    //TODO - Write your code here to save the note
     // Create a new note object
     const note = new noteModel({
        noteTitle: req.body.noteTitle || "Untitled Note",  
        noteDescription: req.body.noteDescription,
        priority: req.body.priority || "MEDIUM"
    });

    // Save the note to the database
    note.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the note."
            });
        });
    });


//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', (req, res) => {
    noteModel.find()
        .then(notes => {
            res.send(notes);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
});


//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', (req, res) => {
    
    //TODO - Write your code here to return onlt one note using noteid
    noteModel.findById(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send(note);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.noteId
            });
        });
});


//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', (req, res) => {
    // Validate request
    if (!req.body.noteDescription) {
        return res.status(400).send({
            message: "Note description cannot be empty"
        });
    }

    //TODO - Write your code here to update the note using noteid
    noteModel.findByIdAndUpdate(req.params.noteId, {
        noteTitle: req.body.noteTitle || "Untitled Note",
        noteDescription: req.body.noteDescription,
        priority: req.body.priority || "MEDIUM"
    }, { new: true }) 
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send(note);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.noteId
            });
        });
});


//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndDelete
app.delete('/notes/:noteId', (req, res) => {
    noteModel.findByIdAndDelete(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send({ message: "Note deleted successfully!" });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Could not delete note with id " + req.params.noteId
            });
        });
});
}
