const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const passport = require("passport");

// API Routes
const api = require("./server/routes/api");

const app = express();

require("dotenv").config();

// Parser for the post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Cors
app.use(require("cors")());

// Passport
app.use(passport.initialize());
app.use(passport.session());

require("./server/config/passport")(passport);

//Point static path to dist
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1", api);
app.use("/api/**", (request, response) => response.status(404).send('Not Found'));

app.get("**", (req, response) => {
	response.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3001;

app.set("port", PORT);

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server is running at ${PORT}`));
