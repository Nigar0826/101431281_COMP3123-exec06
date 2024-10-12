const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

// Create Note Schema here having fields
const NoteSchema = mongoose.Schema({
    // - noteTitl
    noteTitle: {
        type: String,          
        required: true         
    },
    
    // - noteDescription
    noteDescription: {
        type: String,          
        required: true         
    },
    
    // - priority (Value can be HIGH, LOW or MEDIUM)
    priority: {
        type: String,
        enum: ['HIGH', 'LOW', 'MEDIUM'],
        required: true,
        uppercase: true 
    },
    
    // - dateAdded
    dateAdded: {
        type: Date,            
        default: Date.now      
    },
    
    // - dateUpdated
    dateUpdated: {
        type: Date,            
        default: Date.now      
    }
}, {
    // Automatically adds `createdAt` and `updatedAt` fields
    timestamps: true  
});

// Export the Note model
module.exports = mongoose.model('Note', NoteSchema);