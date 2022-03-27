const { Router } = require('express');
const router = new Router();
const cervezasController = require("../controllers/cervezas");

// GET requests
router.get('/cervezas', cervezasController.getAll);
router.get('/cervezas/:id', cervezasController.getById);

module.exports = router;