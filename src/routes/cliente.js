const express = require("express");
const ClienteController = require("../controllers/clienteController");

const router = express.Router();

router
.get("/", ClienteController.getAllClientes)
.post("/", ClienteController.createClientes)
.put("/:id", ClienteController.updateClientes)
.delete("/:id", ClienteController.deleteClientes)
.get("/:id", ClienteController.getByIdClientes)

module.exports = router;
