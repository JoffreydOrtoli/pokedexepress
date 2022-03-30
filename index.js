require("dotenv").config();
const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const cors = require("cors");
const multer = require("multer");
const router = require("./app/routers/router");

const bodyParser = multer();
const deckMiddleware = require("./app/middlewares/deckMiddleware");

const PORT = process.env.PORT || 3000;

app.locals.deck = [];

app.use(express.static(path.join(__dirname, "build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.none());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
  },
}));

// app.use(deckMiddleware);
app.use(router);
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
