const notes = [
    {
        id: 1,
        title: "My first note",
        timestamp: Date.now(),
        content: "lorem ipsum"
    },
    {
        id: 2,
        title: "My second note",
        timestamp: Date.now(),
        content: "lorem ipsum"
    },
    {
        id: 3,
        title: "My third note",
        timestamp: Date.now(),
        content: "lorem ipsum"
    }
]

function getNotes() {
    return notes;
}
const _getNotes = getNotes;
export { _getNotes as getNotes };

function getNoteById(id) {
    return notes.find(note => note.id == id);
}
const _getNoteById = getNoteById;
export { _getNoteById as getNoteById };  

function addNote(id) {
    
}
const _addNote = addNote;
export { _addNote as addNote };

function deleteNote(id) {
    
}
const _deleteNote = deleteNote;
export { _deleteNote as deleteNote };

