import { Router } from "express";

import { createCelulares, deleteCelulares, renderCelulares, renderEditCelulares, statusCelulares, updateCelulares } from "../controllers/celularController";

const router = Router();

router.get("/agregarCelular", renderCelulares );

router.post("/celular/agregar", createCelulares );

router.get("/updateCelulares/:id", renderEditCelulares );

router.post("/updateCelulares/:id", updateCelulares );

router.get("/deleteCelulares/:id", deleteCelulares );

router.get("/statusCelulares/:id", statusCelulares );

export default router;