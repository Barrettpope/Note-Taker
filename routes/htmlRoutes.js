// Including the path package to get the correct file path for our HTML
const path = require("path");

// Routing
module.exports = function (app) {

    // HTML GET Request directing user to the notes page
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // If no matching route is found, default to index.html
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};