const express = require('express');
const routerAdmin = express.Router();

const adminController = require('../controllers/adminController');


// Routes admin

routerAdmin.post('/admin/pokemon', adminController.createPokemon);
routerAdmin.route('/admin/pokemon/:pokemon_id')
    .patch(adminController.updatePokemon)
    .delete(adminController.deletePokemon);

routerAdmin.post('/admin/type', adminController.createType);
routerAdmin.route('/admin/type/:type_id')
    .patch(adminController.updateType)
    .delete(adminController.deleteType);

routerAdmin.get('/admin/user', adminController.getAllUser);
routerAdmin.route('/admin/user/:user_id')
    .get(adminController.getOnUser)
    .post(adminController.userRoleChange);

    
module.exports = routerAdmin;