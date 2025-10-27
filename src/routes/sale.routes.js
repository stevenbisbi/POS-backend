import { Router } from "express";
import {
  getSales,
  getSale,
  createSale,
} from "../controllers/sale.controller.js";
import { authRequired } from "../middlewares/validationToken.middleware.js";
import {
  handleValidationErrors,
  validateStock,
} from "../middlewares/validator.middleware.js";

const router = Router();

// Todos requieren autenticación
router.get("/", authRequired, handleValidationErrors, getSales);
router.get("/:id", authRequired, handleValidationErrors, getSale);

// Crear venta (controlador valida rol cajero/admin)
router.post(
  "/",
  authRequired,
  handleValidationErrors,
  validateStock,
  createSale
);

export default router;
