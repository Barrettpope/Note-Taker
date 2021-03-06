// Inclduing the express package
const express = require("express");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port
const PORT = process.env.PORT || 7777;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

// Points our server to a series of "route" files
// These routes give our server a "map" of how to respond when users visit or request data from various URLs
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes.js")(app);

// Effectively starting our server
app.listen(PORT, function () {
    console.log("App listening on PORT: http://localhost:" + PORT);
});