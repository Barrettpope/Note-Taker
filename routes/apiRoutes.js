// Including the Path and FS packages & creating an empty array for the user inputs to be stored
const fs = require("fs");
const path = require("path");
const notes = [];

// Routing
module.exports = function (app) {
    // API GET Request
    app.get("/api/notes", function (req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data) => {
            if (err) throw err;
            notes = JSON.parse(data);
            res.json(JSON.parse(data));
        });
    });

    // API POST Request
    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        newNode.id = notes.length;
        notes.push(newNote);
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(notes);
        });
    });

    // API DELETE Request 
    app.delete("/api/notes/:id", function (req, res) {
        notes = notes.filter((note) => {
            return note.id != req.params.id;
        });
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(notes);
        });
    });
};