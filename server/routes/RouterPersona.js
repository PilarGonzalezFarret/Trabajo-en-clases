import express from "express";
import * as PersonControler from '../controllers/ContrPersona.js';

const router = express.Router();

router.post("/api/persona/create", PersonControler.createPersona);
router.get("/api/persona/get", PersonControler.getPersona);
router.get("/api/persona/:id", PersonControler.getOnePersona);
router.put("/api/persona/:id", PersonControler.deletePersona);

export {router}