const express = require('express');
const router = express.Router();

const heroeController = require('../controllers/heroe');

router.get('/', heroeController.listaHeroes);
router.post('/', heroeController.crearHeroe);
router.put('/:id', heroeController.modificarHEroe);
router.delete('/:id', heroeController.eliminarHeroe);


module.exports = router;