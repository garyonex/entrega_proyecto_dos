import { Router } from 'express';

import * as articuloCtrl from '../controllers/articuloscontrollers.js';

const router = Router();
router.post('/', articuloCtrl.crearArt);
router.get('/', articuloCtrl.mostrarTodos);
router.get('/stock',articuloCtrl.mostrarAlgunos)
router.get('/:id', articuloCtrl.buscar);
router.delete('/:id',articuloCtrl.eliminarUno)
router.put('/:id', articuloCtrl.actualizar)

export default router;
