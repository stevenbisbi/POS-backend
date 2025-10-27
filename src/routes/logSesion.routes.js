import { Router } from "express";
import { authRequired } from "../middlewares/validationToken.middleware.js";
import { handleValidationErrors } from "../middlewares/validator.middleware.js";

const router = Router();

// Solo autenticados, controlador valida rol admin
router.get("/", authRequired, handleValidationErrors);

export default router;
