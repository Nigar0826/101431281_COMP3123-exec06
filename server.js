const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/NoteRoutes');
// const noteModel = require('./models/NotesModel.js');

const DB_URL = "mongodb+srv://nigarahmadova:6CTjwYAzWIg91VPo@101431281comp3123-exec0.oz4es.mongodb.net/101431281comp3123-exec06?retryWrites=true&w=majority";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL)
.then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

// Import routes without router
noteRoutes(app); 

app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});