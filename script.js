let notes = [
    { id: 1, title: 'Note 1', content: 'Content for note 1' },
    { id: 2, title: 'Note 2', content: 'Content for note 2' },
    { id: 3, title: 'Note 3', content: 'Content for note 3' }
];

// Function to display notes
function displayNotes() {
    const notesContainer = document.getElementById('notesContainer');
    notesContainer.innerHTML = '';
    notes.forEach(note => {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button onclick="deleteNote(${note.id})">Delete</button>
        `;
        notesContainer.appendChild(noteDiv);
    });
}

// Function to add a new note
function addNote() {
    const title = document.getElementById('noteTitle').value;
    const content = document.getElementById('noteContent').value;
    if (title && content) {
        const newNote = {
            id: notes.length + 1,
            title,
            content
        };
        notes.push(newNote);
        displayNotes();
        closeModal();
    }
}

// Function to delete a note
function deleteNote(id) {
    notes = notes.filter(note => note.id !== id);
    displayNotes();
}

// Function to open the add note modal
function openModal() {
    document.getElementById('addNoteModal').style.display = 'block';
}

// Function to close the add note modal
function closeModal() {
    document.getElementById('addNoteModal').style.display = 'none';
}

// Event listeners
document.getElementById('addNoteBtn').addEventListener('click', openModal);
document.querySelector('.close').addEventListener('click', closeModal);
document.getElementById('addNoteForm').addEventListener('submit', function(e) {
    e.preventDefault();
    addNote();
});
