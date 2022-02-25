const userMiddleware = (req, res, next) => {

        if (req.session.user) {
            res.locals.user = req.session.user;
        }
        else {
            res.locals.user = false;
        }
        
        if (req.session.deck) {
            res.locals.deck = req.session.deck;
        }
        else {
            res.locals.deck = false;
        }
        next();
        
};

module.exports = userMiddleware;