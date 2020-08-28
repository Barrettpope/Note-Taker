// Including the Path and FS packages & creating an empty array for the user inputs to be stored
const fs = require('fs')
const path = require('path')
const DB_PATH = path.join(__dirname, '../db/db.json')

// // Routing
module.exports = function (app) {

    // API GET Request
    app.get("/api/notes", function (req, res) {
        const notesData = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'))
        console.log(notesData)
        res.json(notesData);
    });

    // API POST Request
    app.post("/api/notes", function (req, res) {

        const notesData = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'))
        console.log(notesData)
        const newNote = req.body
        notesData.push(newNote)
        console.log(newNote)

        fs.writeFileSync(DB_PATH, JSON.stringify(notesData))
        console.log(fs.writeFileSync(DB_PATH, JSON.stringify(notesData)))
        res.sendStatus(200)
    });

    // API DELETE Request
    app.delete("/api/notes/:id", function (req, res) {
        const notes = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
        const savedNotes = notes.filter((note) => {
            return note.id !== req.params.id
        })
        const newNote = fs.writeFileSync(DB_PATH, JSON.stringify(savedNotes))
        res.send(newNote);
    });

};