import express from 'express';
import { getNotes, getNoteById, addNote, deleteNote } from './database.js'; // Correct import

const app = express();

app.set("view engine", "ejs");

// Route for the home page
app.get('/', (req, res) => {
    res.render("index.ejs", {
        numberOfItteration: 50
    });
});

// Route to display all notes
app.get('/notes', (req, res) => {
    const notes = getNotes(); // Directly use getNotes
    res.render("notes.ejs", {
        notes,
    });
});

// Route to display a single note by ID
app.get('/notes/:id', (req, res) => {
    const id = +req.params.id;
    const note = getNoteById(id); // Directly use getNoteById
    if (!note) {
        res.status(404).render("note404.ejs");
        return;
    }
    res.render("singleNote.ejs", {
        note
    });
});

// Serving static files from the 'public' folder
app.use(express.static('public'));

// Start the server
const port = 8080;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
