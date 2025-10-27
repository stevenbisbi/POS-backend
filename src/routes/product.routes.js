import { Router } from "express";
import {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller.js";
import { authRequired } from "../middlewares/validationToken.middleware.js";
import { handleValidationErrors } from "../middlewares/validator.middleware.js";

const router = Router();

// Todos necesitan estar autenticados
router.get("/", authRequired, getProducts);
router.get("/:id", authRequired, getProduct);

// Solo admin (el controlador valida rol)
router.post("/", authRequired, handleValidationErrors, createProduct);
router.put("/:id", authRequired, handleValidationErrors, updateProduct);
router.delete("/:id", authRequired, handleValidationErrors, deleteProduct);

export default router;
