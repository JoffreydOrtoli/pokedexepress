require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();
const router = require('./app/router');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({
    extended: true
  }));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.use((req, res, next) => {
    if (req.session.user) {
        res.locals.user = req.session.user;
    }
    else {
        res.locals.user = false;
    }
    next();
});

app.use((req, res, next) => {
    if (!req.session.deck) {
        req.session.deck = []
    }
    next();
});

app.use(router);

app.listen(PORT, (req, res) => {
    console.log(`listening on port http://localhost:${PORT}`);
});