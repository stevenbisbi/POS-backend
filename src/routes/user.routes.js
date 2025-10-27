import { Router } from "express";
import { validateRoleAdmin } from "../middlewares/validateRole.middleware.js";
import { handleValidationErrors } from "../middlewares/validator.middleware.js";
import {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", handleValidationErrors, validateRoleAdmin, getUsers);
router.get("/:id", handleValidationErrors, validateRoleAdmin, getUser);
router.delete("/:id", handleValidationErrors, validateRoleAdmin, deleteUser);
router.put("/:id", handleValidationErrors, validateRoleAdmin, updateUser);

export default router;
