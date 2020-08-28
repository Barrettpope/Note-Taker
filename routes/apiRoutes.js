const fs = require("fs");
const path = require("path");
const notes = []

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data) => {
            if (err) throw err;
            notes = JSON.parse(data);
            res.json(JSON.parse(data));
        });
    });

    app.post("/api/notes", function (req, res) {
        let newNote = req.body;
        newNode.id = notes.length;
        notes.push(newNote);
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), (err) => {
            if (err) throw err;
            res.json(notes);
        });
    });

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