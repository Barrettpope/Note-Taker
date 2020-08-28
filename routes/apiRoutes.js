// // Including the Path and FS packages & creating an empty array for the user inputs to be stored
// const fs = require("fs");
// const path = require("path");


// // Routing
// module.exports = function (app) {
//     // API GET Request
//     app.get("/api/notes", function (req, res) {
//         const notes = JSON.parse(fs.readFile(path.join(__dirname, "../db/db.json", "utf8")));
//         res.json(notes);
//     });

//     // API POST Request
//     app.post("/api/notes", function (req, res) {
//         const notes = JSON.parse(fs.readFile(path.join(__dirname, "../db/db.json", "utf8")));
//         const newNote = req.body;
//         notes.push(newNote);

//         fs.writeFile(path.join(__dirname, "../db/db.json", JSON.stringify(notes)));
//         res.sendStatus(200);
//     });

//     // API DELETE Request 
//     app.delete("/api/notes/:id", function (req, res) {
//         console.log(req.params.id)
//     });
// };

const fs = require('fs')
const path = require('path')
const DB_PATH = path.join(__dirname, '../db/db.json')

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        const notesData = JSON.parse(fs.readFileSync(DB_PATH, 'utf8'))
        console.log(notesData)
        res.json(notesData);
    });


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

    app.delete("/api/notes/:id", function (req, res) {
        const notes = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
        const savedNotes = notes.filter((note) => {
            return note.id !== req.params.id
        })
        const newNote = fs.writeFileSync(DB_PATH, JSON.stringify(savedNotes))
        res.send(newNote);
    });

};