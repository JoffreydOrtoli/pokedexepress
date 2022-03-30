const express = require("express");

const routerAdmin = express.Router();

const adminController = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

// Routes admin

routerAdmin.get("/admin/dashboard", adminMiddleware, adminController.dashboard);
routerAdmin.post("/admin/pokemon", adminMiddleware, adminController.createPokemon);
routerAdmin
  .route("/admin/pokemon/:pokemon_id")
  .patch(adminMiddleware, adminController.updatePokemon)
  .delete(adminMiddleware, adminController.deletePokemon);

routerAdmin.post("/admin/type", adminMiddleware, adminController.createType);
routerAdmin
  .route("/admin/type/:type_id")
  .patch(adminMiddleware, adminController.updateType)
  .delete(adminMiddleware, adminController.deleteType);

routerAdmin.get("/admin/user", adminMiddleware, adminController.getAllUser);
routerAdmin
  .route("/admin/user/:user_id")
  .get(adminMiddleware, adminController.getOnUser)
  .post(adminMiddleware, adminController.userRoleChange);

module.exports = routerAdmin;
