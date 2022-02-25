const bcrypt = require('bcrypt');
const { User } = require("../models");

const userController = {
    
    async registerPage(req, res) {
        res.render('register');
    },

    async createUser(req, res) {

        try {
            const { lastname, firstname, email, password } = req.body;

            if(req.body.password !== req.body.passwordConfirm) {
                return res.redirect('/register?error=passwordNotMatch');
            };
            const cryptedPassword = bcrypt.hashSync(password, 10);
            const user = await User.findOne( { where : {email: req.body.email}} );
            if (user === null) {
                const userCreated = await User.create({ firstname, lastname, email, password: cryptedPassword });
            }
            else {
                return res.redirect('/register?error=userExist');
            }
            res.redirect('login');
        }
        catch (error) {
            res.status(500).send({ error: "Une erreur interne est survenue" });
        }
    },

    async loginPage (req, res) {
        res.render('login');
    },

    async userLogin (req, res) {

        const user = await User.findOne( { where : {email: req.body.email}});
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                user.password = null;
                req.session.user = user;
                res.redirect('/');
            }
            else {
                console.log('nop');
            }
        }
        else {
            console.log('nop');
        }
    },

    async userLogOut (req, res) {
        delete req.session.user;
        res.redirect('/');
    },

    profilPage: (req, res) => {
        if (!req.session.user) {
          return res.redirect('/login');
        }
        res.render('profil', {
          user: req.session.user
        });
      }

};

module.exports = userController;